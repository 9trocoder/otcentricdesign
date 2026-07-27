import { useState, useEffect } from 'react';
import { PRODUCTS, PROJECTS } from './data';
import Navbar from './components/Navbar';
import ProductDetailPage from './components/ProductDetailPage';
import ShowcaseGallery from './components/ShowcaseGallery';
import ShowcaseDetailPage from './components/ShowcaseDetailPage';
import ConsultationForm from './components/ConsultationForm';
import HomeHeroSlider from './components/HomeHeroSlider';
import CategoryGrid from './components/CategoryGrid';
import StudioPhilosophy from './components/StudioPhilosophy';
import ServicesSection from './components/ServicesSection';
import StudioJournalPage from './components/StudioJournalPage';
import FurnitureVaultPage from './components/FurnitureVaultPage';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import NewsletterPopup from './components/NewsletterPopup';
import SearchModal from './components/SearchModal';
import WishlistModal from './components/WishlistModal';
import CookieConsentModal from './components/CookieConsentModal';
import logoImg from './assets/otlogo.png';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'vault' | 'showcase' | 'journal' | 'contact' | 'product-detail' | 'showcase-detail'
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('otcentric_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('otcentric_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore write errors
    }
  }, [wishlist]);

  // Comprehensive Dynamic SEO & Meta Tags Engine
  useEffect(() => {
    let title = 'OTCentric Design | Modern Luxury Furniture & Interior Architecture Studio in Lagos';
    let description = 'Discover OTCentric Design — Nigeria\'s premier modern luxury furniture studio & spatial interior architecture firm with design studios in Lekki, Ikoyi, VGC, Yaba, and Ikate. Explore handcrafted furniture in Naira (₦), interior showcases, and studio journals.';
    let ogImage = 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200';
    let canonicalUrl = `https://otcentricdesign.com${window.location.pathname}`;

    if (activePage === 'vault') {
      title = 'The Furniture Vault | Handcrafted Luxury Furniture | OTCentric Design';
      description = 'Browse our complete catalog of 16 handcrafted architectural furniture pieces in Naira (₦) spanning chairs, tables, lighting, storage, and decor across Lagos.';
    } else if (activePage === 'showcase') {
      title = 'Interior Showcase Portfolio | OTCentric Design Lagos';
      description = 'Explore our portfolio of completed residential and commercial interior architecture projects in Lekki, Ikoyi, and VGC.';
    } else if (activePage === 'journal') {
      title = 'Studio Journal & Architectural Essays | OTCentric Design';
      description = 'Read design essays on Japandi minimalism, Italian post-modernism, and spatial lighting from OTCentric Design Studio.';
    } else if (activePage === 'contact') {
      title = 'Book an Interior Consultation | OTCentric Design Studios Lagos';
      description = 'Schedule a private consultation with our principal interior architects in Lekki Phase 1, Ikoyi, VGC, Yaba, or Ikate.';
    } else if (activePage === 'product-detail' && selectedProduct) {
      title = `${selectedProduct.name} (₦${selectedProduct.price.toLocaleString()}) | OTCentric Design`;
      description = `${selectedProduct.name} — ${selectedProduct.description}. Material: ${selectedProduct.specs.material}. Available at OTCentric Design Lagos.`;
      ogImage = selectedProduct.imageUrl;
    } else if (activePage === 'showcase-detail' && selectedProject) {
      title = `${selectedProject.title} | Interior Showcase | OTCentric Design`;
      description = `${selectedProject.title} — ${selectedProject.description} Designed for ${selectedProject.client}.`;
      ogImage = selectedProject.afterImage;
    }

    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // 3. Update Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    // 5. Dynamic Product Schema Injection (for Product Detail View)
    let productSchemaScript = document.getElementById('dynamic-product-schema');
    if (activePage === 'product-detail' && selectedProduct) {
      const productSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': selectedProduct.name,
        'image': selectedProduct.imageUrl,
        'description': selectedProduct.description,
        'brand': {
          '@type': 'Brand',
          'name': 'OTCentric Design'
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'NGN',
          'price': selectedProduct.price,
          'availability': 'https://schema.org/InStock',
          'url': canonicalUrl
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': selectedProduct.rating,
          'reviewCount': '12'
        }
      };

      if (!productSchemaScript) {
        productSchemaScript = document.createElement('script');
        productSchemaScript.id = 'dynamic-product-schema';
        productSchemaScript.type = 'application/ld+json';
        document.head.appendChild(productSchemaScript);
      }
      productSchemaScript.textContent = JSON.stringify(productSchemaData);
    } else if (productSchemaScript) {
      productSchemaScript.remove();
    }
  }, [activePage, selectedProduct, selectedProject]);

  // Clean HTML5 History API route handler (no # symbols in URLs)
  useEffect(() => {
    const handleRouteChange = () => {
      // Convert legacy hash URLs if present to clean paths
      if (window.location.hash) {
        const legacyHash = window.location.hash.replace('#', '').replace('product-', 'product/').replace('showcase-', 'showcase/');
        window.history.replaceState(null, '', legacyHash ? `/${legacyHash}` : '/');
      }

      const path = window.location.pathname;
      if (!path || path === '/' || path === '/home') {
        setActivePage('home');
      } else if (path === '/vault' || path === '/shop') {
        setActivePage('vault');
      } else if (path === '/showcase') {
        setActivePage('showcase');
      } else if (path === '/journal') {
        setActivePage('journal');
      } else if (path === '/contact' || path === '/consultation') {
        setActivePage('contact');
      } else if (path.startsWith('/product/')) {
        const prodId = path.replace('/product/', '');
        const prod = PRODUCTS.find((p) => p.id === prodId);
        if (prod) {
          setSelectedProduct(prod);
          setActivePage('product-detail');
        }
      } else if (path.startsWith('/showcase/')) {
        const projId = path.replace('/showcase/', '');
        const proj = PROJECTS.find((p) => p.id === projId);
        if (proj) {
          setSelectedProject(proj);
          setActivePage('showcase-detail');
        }
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Update clean URL path when active page or selected items change
  const navigateToPage = (pageName, pathValue = null) => {
    setActivePage(pageName);
    let targetPath = '/';
    if (pathValue) {
      targetPath = pathValue;
    } else if (pageName === 'vault') {
      targetPath = '/vault';
    } else if (pageName === 'showcase') {
      targetPath = '/showcase';
    } else if (pageName === 'journal') {
      targetPath = '/journal';
    } else if (pageName === 'contact') {
      targetPath = '/contact';
    } else if (pageName === 'home') {
      targetPath = '/';
    }

    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
    }
  };

  // Delayed Newsletter popup on first visit
  useEffect(() => {
    const isDismissed = localStorage.getItem('otcentric_newsletter_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsNewsletterOpen(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Cart & Wishlist operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    navigateToPage('product-detail', `/product/${product.id}`);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    navigateToPage('showcase-detail', `/showcase/${project.id}`);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <Navbar 
        activePage={activePage} 
        setActivePage={(p) => navigateToPage(p)} 
        cartCount={cartCount} 
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      <main className="main-content-area" id="main-content">
        {activePage === 'home' && (
          <section className="home-landing-section">
            {/* Hiroshi Flagship Interactive Hero Slideshow */}
            <HomeHeroSlider onNavigate={(p) => navigateToPage(p)} />

            {/* Department Category Cards */}
            <CategoryGrid onSelectCategory={() => navigateToPage('vault')} />

            {/* Studio Philosophy & Counter Metrics */}
            <StudioPhilosophy onNavigate={(p) => navigateToPage(p)} />

            {/* Interior Services Grid */}
            <ServicesSection onNavigate={(p) => navigateToPage(p)} />

            {/* Studio Journal Preview */}
            <div className="homepage-journal-preview-banner">
              <div className="preview-header">
                <h2>Studio Journal & Insights</h2>
                <button className="view-all-journal-btn" onClick={() => navigateToPage('journal')}>
                  Read All Essays →
                </button>
              </div>
            </div>
          </section>
        )}

        {activePage === 'vault' && (
          <FurnitureVaultPage
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailPage
            key={selectedProduct?.id || 'product-detail'}
            product={selectedProduct}
            isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
            onToggleWishlist={() => selectedProduct && handleToggleWishlist(selectedProduct.id)}
            onBack={() => navigateToPage('vault')}
            onAddToCart={handleAddToCart}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {activePage === 'showcase' && (
          <ShowcaseGallery 
            onSelectProject={handleSelectProject}
          />
        )}

        {activePage === 'showcase-detail' && (
          <ShowcaseDetailPage
            key={selectedProject?.id || 'showcase-detail'}
            project={selectedProject}
            onBack={() => navigateToPage('showcase')}
            onSelectProduct={handleSelectProduct}
            onSelectProject={handleSelectProject}
          />
        )}

        {activePage === 'journal' && (
          <StudioJournalPage />
        )}

        {activePage === 'contact' && (
          <ConsultationForm />
        )}
      </main>

      {/* Footer */}
      <footer className="retro-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoImg} alt="OTCentric Design Logo" className="footer-logo" />
            <div>
              <h3>OTCentric Design</h3>
              <p>Timeless environments for modern living.</p>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><button onClick={() => navigateToPage('home')}>Home</button></li>
                <li><button onClick={() => navigateToPage('vault')}>Furniture Vault</button></li>
                <li><button onClick={() => navigateToPage('showcase')}>Showcase Portfolio</button></li>
                <li><button onClick={() => navigateToPage('journal')}>Studio Journal</button></li>
                <li><button onClick={() => navigateToPage('contact')}>Design Consultation</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Collector's Club</h4>
              <ul>
                <li><button onClick={() => setIsNewsletterOpen(true)}>Join Newsletter (15% OFF)</button></li>
                <li><button onClick={() => navigateToPage('contact')}>Request Studio Catalog</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Our Studios & Contact</h4>
              <p>Lekki • Orchid • Yaba • Ikoyi • VGC • Ikate</p>
              <p>WhatsApp: +234 809 491 2640</p>
              <p>hello@otcentricdesign.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 OTCentric Design Studio. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals & Popups */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      <NewsletterPopup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
        onSelectProject={handleSelectProject}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
      />

      <CookieConsentModal />
    </>
  );
}

export default App;
