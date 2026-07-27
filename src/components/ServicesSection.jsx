import React from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Full Spatial & Architectural Interior Design',
    subtitle: 'End-to-End Residential & Commercial Transformations',
    description: 'From initial floorplan schematics to custom cabinetry, lighting layouts, and hard surface material selection.',
    features: ['3D Spatial Renderings', 'Custom Wood Joinery', 'Acoustic & Lighting Control'],
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=800'
  },
  {
    num: '02',
    title: 'Custom Retro Furniture Sourcing & Restoration',
    subtitle: 'Authentic 1950s - 1980s Mid-Century Classics',
    description: 'We source, re-upholster, and restore rare vintage furniture pieces using period-accurate bouclé, Italian leather, and Burmese teak.',
    features: ['Certified Provenance', 'Custom Italian Bouclé & Velvet', 'Hand-rubbed Oils & Veneers'],
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    num: '03',
    title: 'Material Palette & Lighting Consultation',
    subtitle: 'Atmospheric Tone & Surface Curation',
    description: 'Curating harmonized palettes of Italian terracotta, brushed brass, smoked glass, and organic botanical accents.',
    features: ['Terracotta & Terrazzo Samples', 'Sculptural Lighting Design', 'Aesthetic Color Mapping'],
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ServicesSection({ onNavigate }) {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="section-mini-tag">OUR EXPERTISE</span>
        <h2 className="services-main-title">Curated Design Services</h2>
        <p className="services-subtitle">
          Comprehensive interior architecture and furniture styling tailored for discerning collectors and homeowners.
        </p>
      </div>

      <div className="services-cards-grid">
        {SERVICES.map((srv) => (
          <div key={srv.num} className="service-card">
            <div className="service-img-wrapper">
              <img src={srv.image} alt={srv.title} className="service-card-img" />
              <span className="service-num-badge">{srv.num}</span>
            </div>

            <div className="service-card-content">
              <span className="service-subtitle">{srv.subtitle}</span>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.description}</p>

              <ul className="service-features-list">
                {srv.features.map((feat, idx) => (
                  <li key={idx}>✓ {feat}</li>
                ))}
              </ul>

              <button 
                className="service-cta-btn"
                onClick={() => onNavigate('contact')}
              >
                Inquire About Service →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
