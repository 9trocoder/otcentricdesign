import React, { useEffect, useRef } from 'react';
import { PRODUCTS } from '../data';
import { sendSingleProductWhatsApp } from '../utils/whatsapp';

export default function WishlistModal({ 
  isOpen, 
  onClose, 
  wishlistIds, 
  onRemoveFromWishlist, 
  onAddToCart, 
  onSelectProduct 
}) {
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

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <dialog 
      ref={dialogRef} 
      className="retro-cart-dialog wishlist-dialog"
      closedby="any"
      onClose={onClose}
      aria-labelledby="wishlist-dialog-title"
    >
      <div className="cart-wrapper">
        <div className="cart-header">
          <div className="wishlist-title-lockup">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A5F38" stroke="#0A5F38" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <h2 id="wishlist-dialog-title">Your Saved Favorites</h2>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close wishlist">
            ✕
          </button>
        </div>

        {wishlistedProducts.length === 0 ? (
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
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <p>Your wishlist is currently empty.</p>
            <p className="empty-sub-text">Click the heart icon on any furniture piece to save it for your luxury interior project.</p>
            <button className="continue-shopping-btn" onClick={onClose}>
              Explore Furniture Vault
            </button>
          </div>
        ) : (
          <div className="wishlist-items-container">
            <div className="cart-items-list">
              {wishlistedProducts.map((item) => (
                <div key={item.id} className="cart-item-row wishlist-item-row">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="cart-item-img" 
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                  />
                  
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h3 
                        onClick={() => {
                          onSelectProduct(item);
                          onClose();
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {item.name}
                      </h3>
                      <button 
                        className="cart-remove-btn" 
                        onClick={() => onRemoveFromWishlist(item.id)}
                        aria-label={`Remove ${item.name} from wishlist`}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="cart-item-meta">{item.category}</p>
                    <p className="wishlist-item-price">₦{item.price.toLocaleString()}</p>

                    <div className="wishlist-actions-row">
                      <button 
                        className="wishlist-add-bag-btn"
                        onClick={() => onAddToCart(item)}
                      >
                        Add to Bag
                      </button>
                      <button 
                        className="wishlist-wa-btn"
                        onClick={() => sendSingleProductWhatsApp(item, 1)}
                      >
                        💬 WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
