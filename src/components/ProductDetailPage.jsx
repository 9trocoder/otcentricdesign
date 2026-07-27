import { useState, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { sendSingleProductWhatsApp } from '../utils/whatsapp';

export default function ProductDetailPage({ 
  product, 
  isWishlisted, 
  onToggleWishlist, 
  onBack, 
  onAddToCart, 
  onSelectProduct 
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product?.id]);

  if (!product) return null;

  const { id, name, price, rating, description, specs, images, category } = product;

  const handleDirectWhatsAppOrder = () => {
    sendSingleProductWhatsApp(product, quantity);
  };

  const suggestions = PRODUCTS
    .filter(p => p.id !== id)
    .sort((a, b) => (b.category === category ? 1 : 0) - (a.category === category ? 1 : 0))
    .slice(0, 3);

  return (
    <article className="vintage-detail-page">
      {/* Breadcrumb Navigation */}
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <button onClick={onBack} className="back-link-btn">
          ← Back to Furniture Collection
        </button>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">{category}</span>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">{name}</span>
      </nav>

      {/* Main Grid */}
      <div className="detail-grid-container">
        
        {/* Left Column: Interactive Image Gallery */}
        <div className="detail-media-gallery">
          <div className="detail-main-image-container">
            <img 
              src={images[activeImageIndex]} 
              alt={`${name} view ${activeImageIndex + 1}`} 
              className="detail-main-image"
            />
          </div>
          
          {/* Thumbnails list */}
          <div className="detail-thumbnails-row">
            {images.map((imgUrl, index) => (
              <button
                key={index}
                className={`thumbnail-item-btn ${activeImageIndex === index ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(index)}
                onMouseEnter={() => setActiveImageIndex(index)}
                aria-label={`View picture angle ${index + 1}`}
              >
                <img src={imgUrl} alt="" className="thumbnail-img" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Catalog Specs & Shopping Controls */}
        <div className="detail-product-info">
          
          <div className="info-badge-vintage">
            <span className="catalog-ref-no">ITEM NO: #{id.toUpperCase()}</span>
            <span className="style-tag-vintage">OTCentric Studio Original</span>
          </div>

          <div className="detail-title-wishlist-row">
            <h1 className="detail-product-title">{name}</h1>
            <button 
              className={`detail-heart-toggle-btn ${isWishlisted ? 'active' : ''}`}
              onClick={onToggleWishlist}
              title={isWishlisted ? 'Remove from Favorites' : 'Save to Favorites'}
              aria-label="Toggle Wishlist"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill={isWishlisted ? '#0A5F38' : 'none'} stroke={isWishlisted ? '#0A5F38' : 'currentColor'} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div className="detail-rating-price-row">
            <div className="detail-rating-stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill={i < Math.floor(rating) ? 'currentColor' : 'none'} 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  className="star-svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
              <span className="rating-text-num">({rating} / 5.0)</span>
            </div>
            
            <p className="detail-product-price">₦{price.toLocaleString()}</p>
          </div>

          <div className="vintage-double-divider"></div>

          <p className="detail-description-long">{description}</p>

          {/* Technical Specs Document */}
          <div className="catalog-spec-sheet">
            <div className="spec-sheet-header">
              <h3>Technical Specifications</h3>
            </div>
            <table className="spec-table">
              <tbody>
                <tr>
                  <td>DIMENSIONS</td>
                  <td>{specs.dimensions}</td>
                </tr>
                <tr>
                  <td>MATERIALS</td>
                  <td>{specs.material}</td>
                </tr>
                <tr>
                  <td>DESIGNER</td>
                  <td>{specs.designer}</td>
                </tr>
                <tr>
                  <td>COUNTRY OF ORIGIN</td>
                  <td>{specs.origin}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Checkout Controls */}
          <div className="detail-purchasing-controls">
            <div className="purchasing-quantity-row">
              <label htmlFor="purchase-qty" className="qty-label">Quantity:</label>
              <div className="qty-selector-group">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-action-buttons-group">
              <button 
                className="detail-add-bag-btn"
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product);
                  }
                }}
              >
                Add to Bag — ₦{(price * quantity).toLocaleString()}
              </button>

              <button 
                className="detail-whatsapp-btn"
                onClick={handleDirectWhatsAppOrder}
              >
                💬 Order via WhatsApp
              </button>
            </div>
          </div>

          <div className="vintage-catalog-seal">
            <div className="seal-border">
              <span className="seal-text">STUDIO GUARANTEE • AUTHENTIC CRAFT</span>
            </div>
          </div>

        </div>
      </div>

      {/* Suggested Pieces Section */}
      <section className="suggested-pieces-section">
        <div className="suggestions-header">
          <div className="suggestions-line"></div>
          <h2 className="suggestions-title">Suggested Pairings</h2>
          <div className="suggestions-line"></div>
        </div>

        <div className="suggestions-list-row">
          {suggestions.map((sug) => (
            <div 
              key={sug.id} 
              className="suggestion-mini-card"
              onClick={() => onSelectProduct(sug)}
            >
              <img src={sug.imageUrl} alt={sug.name} className="sug-mini-img" />
              <div className="sug-mini-content">
                <h4>{sug.name}</h4>
                <div className="sug-mini-bottom">
                  <span className="sug-mini-category">{sug.category}</span>
                  <span className="sug-mini-price">₦{sug.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
