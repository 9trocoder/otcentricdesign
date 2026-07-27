import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    id: 'slide-1',
    badge: 'CONTEMPORARY INTERIOR ARCHITECTURE',
    title: 'Designing Spaces with Quiet Luxury & Character',
    subtitle: 'Harmonizing warm tactile elegance, Scandinavian functionalism, and modern spatial clarity.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600',
    ctaText: 'Explore Interior Showcase',
    targetPage: 'showcase'
  },
  {
    id: 'slide-2',
    badge: 'CURATED FURNITURE COLLECTION',
    title: 'Signature Mid-Century & Modern Restorations',
    subtitle: 'Handcrafted teak sideboards, bouclé womb lounges, and Murano glass lighting.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1600',
    ctaText: 'Shop Furniture Vault',
    targetPage: 'shop'
  },
  {
    id: 'slide-3',
    badge: 'SPATIAL ARCHITECTURE & CONSULTATION',
    title: 'Custom Environments Tailored To Your Vision',
    subtitle: 'From Palm Springs sunlit residences to executive Danish teak studies.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600',
    ctaText: 'Book Design Consultation',
    targetPage: 'contact'
  }
];

export default function HomeHeroSlider({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="hiroshi-hero-slider">
      {/* Background Image */}
      <div className="slider-bg-wrapper">
        <img 
          src={slide.image} 
          alt={slide.title} 
          className="slider-bg-image" 
          key={slide.id}
        />
        <div className="slider-overlay-gradient"></div>
      </div>

      {/* Slide Content Box */}
      <div className="slider-content-container">
        <div className="slider-badge-row">
          <span className="slider-retro-badge">{slide.badge}</span>
        </div>
        <h1 className="slider-title">{slide.title}</h1>
        <p className="slider-subtitle">{slide.subtitle}</p>
        
        <div className="slider-actions">
          <button 
            className="slider-cta-btn"
            onClick={() => onNavigate(slide.targetPage)}
          >
            {slide.ctaText} →
          </button>
          <button 
            className="slider-secondary-btn"
            onClick={() => onNavigate('contact')}
          >
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Slide Controls & Indicators */}
      <div className="slider-controls-bar">
        <div className="slider-dots-group">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              className={`slider-dot-btn ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="dot-num">0{idx + 1}</span>
            </button>
          ))}
        </div>

        <div className="slider-nav-arrows">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
