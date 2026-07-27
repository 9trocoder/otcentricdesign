import { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/otlogo.png';
import CustomSelect from './CustomSelect';
import { sendWhatsAppOrder } from '../utils/whatsapp';

const LOCATION_OPTIONS = [
  'Lekki Phase 1',
  'Orchid / Chevron',
  'Ikoyi',
  'Victoria Island (VI)',
  'VGC / Ajah',
  'Ikate / Elegushi',
  'Yaba / Mainland',
  'Ikeja GRA',
  'Other Location'
];

export default function CheckoutModal({ isOpen, onClose, cartItems, onOrderSuccess }) {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    location: 'Lekki Phase 1',
    notes: ''
  });

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

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppOrder(cartItems, formData);
    if (onOrderSuccess) {
      onOrderSuccess();
    }
    onClose();
  };

  return (
    <dialog 
      ref={dialogRef} 
      className="retro-checkout-dialog"
      aria-labelledby="checkout-dialog-title"
    >
      <div className="checkout-wrapper">
        <div className="checkout-header">
          <div className="checkout-brand-title">
            <img src={logoImg} alt="OTCentric Logo" className="checkout-logo" />
            <h2 id="checkout-dialog-title">Order via WhatsApp</h2>
          </div>
          <button className="checkout-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="whatsapp-notice-banner">
          <span className="wa-icon">💬</span>
          <p>You will be redirected directly to WhatsApp to confirm your items, delivery details, and payment with our studio representatives.</p>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-sections-grid">
            
            {/* Customer & Location Info */}
            <div className="form-section">
              <h3>Delivery & Contact Information</h3>
              
              <div className="form-group">
                <label htmlFor="checkout-name">Your Full Name (Optional)</label>
                <input 
                  type="text" 
                  id="checkout-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} 
                  placeholder="e.g. Adebayo Johnson"
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout-location">Delivery Area</label>
                <CustomSelect
                  options={LOCATION_OPTIONS}
                  value={formData.location}
                  onChange={(val) => setFormData(p => ({ ...p, location: val }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout-notes">Special Requests / Customization Notes</label>
                <textarea 
                  id="checkout-notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))}
                  placeholder="Mention color preferences, delivery timeline, or architectural specs..."
                  className="consultation-textarea"
                ></textarea>
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary-sidebar">
              <h3>Order Summary ({cartItems.length} items)</h3>
              <div className="summary-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img src={item.imageUrl} alt={item.name} className="summary-item-img" />
                    <div className="summary-item-info">
                      <h4>{item.name}</h4>
                      <p className="summary-item-qty">Qty: {item.quantity} × ₦{item.price.toLocaleString()}</p>
                    </div>
                    <span className="summary-item-price">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="total-row grand-total">
                  <span>Estimated Total:</span>
                  <strong>₦{totalAmount.toLocaleString()}</strong>
                </div>
              </div>

              <button type="submit" className="place-order-btn whatsapp-submit-btn">
                <span>💬 Launch WhatsApp Order</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}
