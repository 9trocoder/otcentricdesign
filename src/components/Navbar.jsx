import { useState } from 'react';
import { createPortal } from 'react-dom';
import logoImg from '../assets/otlogo.png';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist,
  onOpenSearch, 
  onOpenNewsletter 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (pageName) => {
    setActivePage(pageName);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="retro-navbar">
      <div className="navbar-container">
        {/* Brand Lockup */}
        <div className="brand" onClick={() => handleNavClick('home')}>
          <img src={logoImg} alt="OTCentric Design Logo" className="navbar-logo" />
          <div className="brand-text">
            <span className="brand-main">OTCENTRIC</span>
            <span className="brand-sub">STUDIO & STORE</span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="navbar-links desktop-nav" aria-label="Main Navigation">
          <button 
            className={`nav-btn ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${activePage === 'vault' || activePage === 'product-detail' ? 'active' : ''}`}
            onClick={() => handleNavClick('vault')}
          >
            Furniture Vault
          </button>
          <button 
            className={`nav-btn ${activePage === 'showcase' || activePage === 'showcase-detail' ? 'active' : ''}`}
            onClick={() => handleNavClick('showcase')}
          >
            Showcase Portfolio
          </button>
          <button 
            className={`nav-btn ${activePage === 'journal' ? 'active' : ''}`}
            onClick={() => handleNavClick('journal')}
          >
            Studio Journal
          </button>
          <button 
            className={`nav-btn ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Consultation
          </button>
        </nav>

        {/* Header Action Icons */}
        <div className="navbar-actions">
          {/* Search Modal Trigger */}
          <button 
            className="icon-action-btn" 
            onClick={onOpenSearch} 
            title="Search Products & Showcase"
            aria-label="Search Studio Catalog"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Newsletter Voucher Club Trigger (Desktop & Tablet) */}
          <button 
            className="newsletter-trigger-nav-btn desktop-only-action" 
            onClick={onOpenNewsletter} 
            title="Claim 15% OFF Voucher"
          >
            <span className="club-badge">15% OFF</span>
            <span className="club-text">Join Club</span>
          </button>

          {/* Wishlist Indicator Button */}
          <button 
            className="wishlist-action-badge" 
            onClick={onOpenWishlist}
            title="Saved Wishlist Favorites" 
            aria-label="View Saved Wishlist Favorites"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlistCount > 0 ? '#0A5F38' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="count-pill">{wishlistCount}</span>
          </button>

          {/* Shopping Bag Drawer */}
          <button className="cart-trigger-btn" onClick={onOpenCart} aria-label="Open Shopping Bag">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-label">Bag</span>
            <span className="cart-badge">{cartCount}</span>
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Drawer rendered via Portal directly into document.body */}
      {isMobileMenuOpen && createPortal(
        <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <span className="mobile-nav-brand">OTCENTRIC STUDIO</span>
              <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close navigation">✕</button>
            </div>

            <nav className="mobile-nav-links">
              <button 
                className={`mobile-nav-btn ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                <span>01</span> Home
              </button>
              <button 
                className={`mobile-nav-btn ${activePage === 'vault' || activePage === 'product-detail' ? 'active' : ''}`}
                onClick={() => handleNavClick('vault')}
              >
                <span>02</span> Furniture Vault
              </button>
              <button 
                className={`mobile-nav-btn ${activePage === 'showcase' || activePage === 'showcase-detail' ? 'active' : ''}`}
                onClick={() => handleNavClick('showcase')}
              >
                <span>03</span> Showcase Portfolio
              </button>
              <button 
                className={`mobile-nav-btn ${activePage === 'journal' ? 'active' : ''}`}
                onClick={() => handleNavClick('journal')}
              >
                <span>04</span> Studio Journal
              </button>
              <button 
                className={`mobile-nav-btn ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                <span>05</span> Consultation
              </button>
            </nav>

            <div className="mobile-nav-footer">
              <button 
                className="mobile-join-club-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenNewsletter();
                }}
              >
                🎁 Claim 15% OFF Voucher
              </button>
              <p className="mobile-footer-tag">Lekki • Orchid • Yaba • Ikoyi • VGC • Ikate  </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
