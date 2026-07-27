import { useState, useEffect } from 'react';
import { PROJECTS, PRODUCTS } from '../data';

export default function ShowcaseDetailPage({ project, onBack, onSelectProduct, onSelectProject }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'before-after'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project?.id]);

  if (!project) return null;

  const { 
    id, 
    title, 
    category, 
    style, 
    date, 
    client, 
    description, 
    story, 
    quote, 
    beforeImage, 
    afterImage, 
    galleryImages = [], 
    palette = [], 
    specs = {}, 
    itemsUsed = [] 
  } = project;

  // Filter other projects for "Explore More Projects" section
  const otherProjects = PROJECTS.filter(p => p.id !== id).slice(0, 2);

  return (
    <article className="vintage-showcase-detail-page">
      {/* Breadcrumb Header */}
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <button onClick={onBack} className="back-link-btn">
          ← Back to Interior Showcase
        </button>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">{category}</span>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">{title}</span>
      </nav>

      {/* Project Title Banner */}
      <header className="showcase-detail-hero">
        <div className="hero-meta-badges">
          <span className="retro-badge bold-badge">{style}</span>
          <span className="retro-badge accent-badge">{category}</span>
        </div>
        <h1 className="showcase-detail-title">{title}</h1>
        <p className="showcase-detail-subtitle">
          Designed for <strong>{client}</strong> • Completed <strong>{date}</strong>
        </p>
      </header>

      {/* Gallery & View Switcher Toolbar */}
      <div className="gallery-toolbar">
        <div className="toolbar-toggle-group">
          <button 
            className={`toolbar-toggle-btn ${viewMode === 'gallery' ? 'active' : ''}`}
            onClick={() => setViewMode('gallery')}
          >
            📸 Photo Gallery ({galleryImages.length})
          </button>
          <button 
            className={`toolbar-toggle-btn ${viewMode === 'before-after' ? 'active' : ''}`}
            onClick={() => setViewMode('before-after')}
          >
            ⚖️ Before vs After Comparison
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {viewMode === 'gallery' ? (
        <div className="showcase-gallery-container">
          <div className="showcase-main-image-box">
            <img 
              src={galleryImages[activeImageIndex] || afterImage} 
              alt={`${title} interior view ${activeImageIndex + 1}`} 
              className="showcase-main-image"
            />
            <div className="image-caption-overlay">
              <span>View {activeImageIndex + 1} of {galleryImages.length}</span>
              <span className="caption-tag">OTCentric Studio Photography</span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="showcase-thumbnails-strip">
            {galleryImages.map((imgUrl, index) => (
              <button
                key={index}
                className={`showcase-thumb-btn ${activeImageIndex === index ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(index)}
                onMouseEnter={() => setActiveImageIndex(index)}
                aria-label={`View photo ${index + 1}`}
              >
                <img src={imgUrl} alt="" className="showcase-thumb-img" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Side-by-side Before/After View */
        <div className="before-after-view-container">
          <div className="ba-column">
            <div className="ba-img-wrapper">
              <img src={beforeImage} alt="Before renovation" />
              <span className="ba-badge before">BEFORE DECORATION</span>
            </div>
            <p className="ba-caption">Original state — uninspired arrangement and flat lighting.</p>
          </div>

          <div className="ba-column">
            <div className="ba-img-wrapper">
              <img src={afterImage} alt="After OTCentric transformation" />
              <span className="ba-badge after">AFTER OTCENTRIC TRANSFORMATION</span>
            </div>
            <p className="ba-caption">Completed spatial revival with curated modern furnishings & ambient lighting.</p>
          </div>
        </div>
      )}

      {/* Project Narrative & Specs Section */}
      <div className="showcase-grid-layout">
        
        {/* Left Column: Story & Testimonial */}
        <div className="showcase-story-column">
          <div className="narrative-block">
            <h2>Project Design Narrative</h2>
            <p className="lead-paragraph">{description}</p>
            {story && <p className="body-paragraph">{story}</p>}
          </div>

          {/* Testimonial Quote */}
          {quote && (
            <blockquote className="retro-blockquote showcase-quote">
              <svg className="quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p>"{quote}"</p>
              <cite>— {client}</cite>
            </blockquote>
          )}

          {/* Material & Color Palette */}
          {palette.length > 0 && (
            <div className="color-palette-section">
              <h3>Material & Tone Palette</h3>
              <div className="swatches-grid">
                {palette.map((color, idx) => (
                  <div key={idx} className="swatch-card">
                    <div className="swatch-box" style={{ backgroundColor: color.hex }}></div>
                    <div className="swatch-info">
                      <span className="swatch-name">{color.name}</span>
                      <span className="swatch-hex">{color.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Specs & Featured Furniture */}
        <div className="showcase-sidebar-column">
          
          {/* Project Technical Specifications */}
          <div className="catalog-spec-sheet">
            <div className="spec-sheet-header">
              <h3>Project Metadata</h3>
            </div>
            <table className="spec-table">
              <tbody>
                {specs.area && (
                  <tr>
                    <td>FLOOR AREA</td>
                    <td>{specs.area}</td>
                  </tr>
                )}
                {specs.flooring && (
                  <tr>
                    <td>FLOORING</td>
                    <td>{specs.flooring}</td>
                  </tr>
                )}
                {specs.lighting && (
                  <tr>
                    <td>LIGHTING</td>
                    <td>{specs.lighting}</td>
                  </tr>
                )}
                {specs.timeline && (
                  <tr>
                    <td>TIMELINE</td>
                    <td>{specs.timeline}</td>
                  </tr>
                )}
                {specs.budget && (
                  <tr>
                    <td>EST. BUDGET</td>
                    <td>{specs.budget}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Featured Furniture Pieces */}
          <div className="featured-furniture-panel">
            <h3>Featured Furnishings</h3>
            <p className="panel-helper-text">
              Click any item below to view full specifications, multiple photos, and add to your bag:
            </p>

            <div className="featured-items-list">
              {itemsUsed.map((productId) => {
                const prod = PRODUCTS.find(p => p.id === productId);
                if (!prod) return null;
                return (
                  <div 
                    key={prod.id}
                    className="featured-item-card"
                    onClick={() => onSelectProduct(prod)}
                  >
                    <img src={prod.imageUrl} alt={prod.name} className="featured-item-img" />
                    <div className="featured-item-content">
                      <h4>{prod.name}</h4>
                      <span className="featured-item-category">{prod.category}</span>
                      <span className="featured-item-price">${prod.price.toLocaleString()}</span>
                    </div>
                    <span className="explore-arrow">→</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Explore More Projects Section */}
      <footer className="other-projects-section">
        <div className="suggestions-header">
          <div className="suggestions-line"></div>
          <h2 className="suggestions-title">Explore More Interior Spaces</h2>
          <div className="suggestions-line"></div>
        </div>

        <div className="projects-grid">
          {otherProjects.map((p) => (
            <div 
              key={p.id} 
              className="project-card"
              onClick={() => onSelectProject(p)}
            >
              <div className="project-image-wrapper">
                <img src={p.afterImage} alt={p.title} className="project-image" />
                <div className="project-style-tag">{p.style}</div>
              </div>
              <div className="project-info">
                <span className="project-meta-top">{p.client} • {p.date}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-summary-desc">{p.description.slice(0, 100)}...</p>
                <div className="project-card-footer">
                  <span className="view-project-link">View Dedicated Showcase →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </article>
  );
}
