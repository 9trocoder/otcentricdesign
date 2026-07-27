import React from 'react';

export default function StudioPhilosophy({ onNavigate }) {
  return (
    <section className="philosophy-section">
      <div className="philosophy-grid">
        
        {/* Left Column: Visual Media Box */}
        <div className="philosophy-media-box">
          <div className="philosophy-img-container">
            <img 
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000" 
              alt="OTCentric Design Studio Craftsmanship" 
              className="philosophy-img"
            />
            <div className="philosophy-stamp-badge">
              <span className="stamp-title">OTCENTRIC STUDIO</span>
              <span className="stamp-sub">PALM SPRINGS • MILAN</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Statistics */}
        <div className="philosophy-content">
          <span className="section-mini-tag">OUR PHILOSOPHY</span>
          <h2 className="philosophy-title">Crafting Spaces with Tactile Warmth & Quiet Luxury</h2>
          
          <p className="philosophy-lead">
            At OTCentric Design, we believe an interior should never feel like an impersonal showroom. It should reflect the authentic lifestyle and aesthetic story of those who inhabit it.
          </p>
          
          <p className="philosophy-body">
            Our studio harmonizes rare mid-century Scandinavian furniture, custom terracotta stonework, and ambient illumination to create environments that encourage slow, intentional living.
          </p>

          {/* Key Counter Metrics Grid */}
          <div className="counter-metrics-grid">
            <div className="metric-card">
              <span className="metric-number">150+</span>
              <span className="metric-label">Interior Spaces Designed</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">50+</span>
              <span className="metric-label">Restored Vintage Originals</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">12</span>
              <span className="metric-label">International Design Awards</span>
            </div>
          </div>

          <div className="philosophy-cta-row">
            <button 
              className="philosophy-btn"
              onClick={() => onNavigate('contact')}
            >
              Meet Our Design Team →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
