import { useEffect, useRef } from 'react';
import { sendWhatsAppOrder } from '../utils/whatsapp';

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle Backdrop click fallback for Safari/older browsers
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;

    const handleBackdropClick = (event) => {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInside) {
        onClose();
      }
    };

    dialog.addEventListener('click', handleBackdropClick);
    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleDirectWhatsAppCheckout = () => {
    sendWhatsAppOrder(cartItems);
  };

  return (
    <dialog 
      ref={dialogRef} 
      className="retro-cart-dialog"
      closedby="any"
      onClose={onClose}
      aria-labelledby="cart-dialog-title"
    >
      <div className="cart-wrapper">
        <div className="cart-header">
          <h2 id="cart-dialog-title">Your Shopping Bag</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart-state">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="empty-icon"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <p>Your bag is currently empty.</p>
            <button className="continue-shopping-btn" onClick={onClose}>
              Explore Furnitures
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                  
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h3>{item.name}</h3>
                      <button 
                        className="cart-remove-btn" 
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="cart-item-meta">{item.category}</p>
                    
                    <div className="cart-item-price-quantity">
                      <div className="quantity-controller">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-total-price">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary-footer">
              <div className="summary-row">
                <span>Total Estimate</span>
                <strong>₦{totalAmount.toLocaleString()}</strong>
              </div>
              <p className="tax-notice">💬 No online card payment required. Orders & inquiries are processed via WhatsApp.</p>
              
              <div className="cart-actions-group">
                <button className="checkout-trigger-btn whatsapp-checkout-btn" onClick={onCheckout}>
                  <span>💬 Complete Order on WhatsApp</span>
                </button>
                <button className="direct-wa-btn" onClick={handleDirectWhatsAppCheckout}>
                  Quick Send to WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
