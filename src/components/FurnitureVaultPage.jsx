import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data';
import ProductCard from './ProductCard';
import CustomSelect from './CustomSelect';

export default function FurnitureVaultPage({ wishlist, onToggleWishlist, onSelectProduct, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const sortOptions = [
    { value: 'featured', label: 'Sort: Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  // Filter and sort products
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="furniture-vault-page">
      {/* Page Header Banner */}
      <header className="vault-hero-banner">
        <span className="section-mini-tag">THE ARCHITECTURAL COLLECTION</span>
        <h1 className="vault-page-title">The Furniture Vault</h1>
        <p className="vault-page-subtitle">
          Explore our curated vault of mid-century and modern luxury furnishings — handcrafted in Italy, Denmark, and our Palm Springs atelier.
        </p>
      </header>

      {/* Vault Search & Filter Bar */}
      <div className="vault-controls-bar">
        <div className="vault-search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search vault items..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        <div className="vault-sort-box">
          <CustomSelect
            value={sortBy}
            onChange={(newSort) => setSortBy(newSort)}
            options={sortOptions}
          />
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="vault-category-strip">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`vault-category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Meta Info */}
      <div className="vault-results-meta">
        <span>Showing <strong>{filteredProducts.length}</strong> architectural pieces</span>
        {(selectedCategory !== 'All' || searchQuery) && (
          <button className="reset-filters-link" onClick={() => {
            setSelectedCategory('All');
            setSearchQuery('');
          }}>
            Reset Filters ↺
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="vault-empty-state">
          <h3>No items found matching your criteria</h3>
          <p>Try searching for another term or clearing your category filters.</p>
          <button className="vault-reset-btn" onClick={() => {
            setSelectedCategory('All');
            setSearchQuery('');
          }}>
            View All Vault Items
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={() => onToggleWishlist(product.id)}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
