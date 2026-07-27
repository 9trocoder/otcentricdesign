import { useEffect, useRef } from 'react';
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
      className="wishlist-modal-dialog"
      closedby="any"
      onClose={onClose}
      aria-labelledby="wishlist-dialog-title"
    >
      <div className="wishlist-modal-wrapper">
        {/* Header Lockup */}
        <div className="wishlist-modal-header">
          <div className="wishlist-modal-title-group">
            <div className="wishlist-badge-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A5F38" stroke="#0A5F38" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div>
              <h2 id="wishlist-dialog-title">Saved Favorites</h2>
              <span className="wishlist-subtitle-count">
                {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'curated piece' : 'curated pieces'}
              </span>
            </div>
          </div>
          <button className="wishlist-modal-close-btn" onClick={onClose} aria-label="Close wishlist">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        {wishlistedProducts.length === 0 ? (
          <div className="wishlist-empty-container">
            <div className="wishlist-empty-icon-box">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0A5F38" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3>Your Favorites List is Empty</h3>
            <p>Click the heart icon on any architectural furniture piece in our Vault to save it to your personal design collection.</p>
            <button className="wishlist-explore-btn" onClick={onClose}>
              Explore Furniture Vault
            </button>
          </div>
        ) : (
          <div className="wishlist-modal-scroll-area">
            {wishlistedProducts.map((item) => (
              <div key={item.id} className="wishlist-product-card-row">
                <div 
                  className="wishlist-card-thumb-wrap"
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                >
                  <img src={item.imageUrl} alt={item.name} className="wishlist-card-img" />
                  <span className="wishlist-card-category">{item.category}</span>
                </div>
                
                <div className="wishlist-card-content">
                  <div className="wishlist-card-top-row">
                    <h3 
                      onClick={() => {
                        onSelectProduct(item);
                        onClose();
                      }}
                      className="wishlist-card-name"
                    >
                      {item.name}
                    </h3>
                    <button 
                      className="wishlist-card-remove-btn" 
                      onClick={() => onRemoveFromWishlist(item.id)}
                      title="Remove from favorites"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="wishlist-card-price">₦{item.price.toLocaleString()}</p>

                  <div className="wishlist-card-button-group">
                    <button 
                      className="wishlist-add-cart-btn"
                      onClick={() => onAddToCart(item)}
                    >
                      + Add to Bag
                    </button>
                    <button 
                      className="wishlist-wa-inquire-btn"
                      onClick={() => sendSingleProductWhatsApp(item, 1)}
                    >
                      💬 Inquire on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </dialog>
  );
}
