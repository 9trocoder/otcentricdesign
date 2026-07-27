export default function ProductCard({ product, isWishlisted, onToggleWishlist, onSelect, onAddToCart }) {
  const { name, category, price, rating, imageUrl } = product;

  return (
    <div className="retro-product-card">
      <div className="card-image-wrapper" onClick={() => onSelect(product)}>
        <img src={imageUrl} alt={name} className="product-image" loading="lazy" />
        <span className="category-tag">{category}</span>

        {/* Wishlist Heart Icon Toggle */}
        <button 
          className={`wishlist-heart-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist();
          }}
          aria-label="Add to wishlist"
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="product-title" onClick={() => onSelect(product)}>{name}</h3>
          <div className="rating-badge">
            <svg 
              width="13" 
              height="13" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        <p className="product-price">₦{price.toLocaleString()}</p>
        
        <div className="card-actions">
          <button 
            className="action-btn-view"
            onClick={() => onSelect(product)}
            aria-label={`View details of ${name}`}
          >
            Details
          </button>
          <button 
            className="action-btn-add"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            aria-label={`Add ${name} to cart`}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
