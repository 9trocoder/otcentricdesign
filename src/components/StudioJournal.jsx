import React from 'react';

const JOURNAL_PHOTOS = [
  {
    id: 1,
    title: 'Handwoven Danish Paper Cord Workshop',
    tag: 'Craftsmanship',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Italian Mappa Burl Veneer Selection',
    tag: 'Materials',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Murano Glass & Spun Brass Studio',
    tag: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Terracotta Sunroom Botanical Staging',
    tag: 'Interiors',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  }
];

export default function StudioJournal() {
  return (
    <section className="journal-section">
      <div className="journal-header">
        <span className="section-mini-tag">STUDIO JOURNAL</span>
        <h2 className="journal-title">Behind the Scenes at OTCentric</h2>
        <p className="journal-subtitle">
          Moments of craftsmanship, rare material sourcing, and studio life across Palm Springs and Milan.
        </p>
      </div>

      <div className="journal-grid">
        {JOURNAL_PHOTOS.map((item) => (
          <div key={item.id} className="journal-card">
            <div className="journal-img-wrapper">
              <img src={item.image} alt={item.title} className="journal-img" />
              <span className="journal-tag">{item.tag}</span>
            </div>
            <div className="journal-card-content">
              <h3 className="journal-card-title">{item.title}</h3>
              <span className="journal-read-link">Explore Journal Entry →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
