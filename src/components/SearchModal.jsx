import { useState, useEffect, useRef } from 'react';
import { PRODUCTS, PROJECTS } from '../data';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSelectProject }) {
  const dialogRef = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const filteredProducts = query.trim() === '' ? [] : PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = query.trim() === '' ? [] : PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.style.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <dialog 
      ref={dialogRef} 
      className="hiroshi-search-dialog"
      onClose={onClose}
      aria-label="Search studio items and projects"
    >
      <div className="search-dialog-wrapper">
        <button className="dialog-close-btn" onClick={onClose} aria-label="Close search">
          ✕
        </button>

        <div className="search-input-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search furniture items, interior projects, styles..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        <div className="search-results-area">
          {query.trim() === '' ? (
            <div className="search-popular-tags">
              <span className="popular-label">POPULAR CATEGORIES:</span>
              <div className="tags-row">
                {['Chairs', 'Tables', 'Lighting', 'Storage', 'Living Rooms', 'Workspaces'].map(tag => (
                  <button key={tag} className="search-tag-btn" onClick={() => setQuery(tag)}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Products Results */}
              <div className="search-group">
                <h4 className="search-group-title">Furniture Vault Items ({filteredProducts.length})</h4>
                {filteredProducts.length === 0 ? (
                  <p className="no-results">No furniture pieces matched "{query}"</p>
                ) : (
                  <div className="search-items-list">
                    {filteredProducts.map(prod => (
                      <div 
                        key={prod.id} 
                        className="search-item-row"
                        onClick={() => {
                          onSelectProduct(prod);
                          onClose();
                        }}
                      >
                        <img src={prod.imageUrl} alt={prod.name} className="search-item-thumb" />
                        <div className="search-item-info">
                          <h5>{prod.name}</h5>
                          <span className="search-item-meta">{prod.category} • ₦{prod.price.toLocaleString()}</span>
                        </div>
                        <span className="search-item-arrow">→</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Showcase Projects Results */}
              <div className="search-group">
                <h4 className="search-group-title">Interior Showcase Projects ({filteredProjects.length})</h4>
                {filteredProjects.length === 0 ? (
                  <p className="no-results">No showcase projects matched "{query}"</p>
                ) : (
                  <div className="search-items-list">
                    {filteredProjects.map(proj => (
                      <div 
                        key={proj.id} 
                        className="search-item-row"
                        onClick={() => {
                          onSelectProject(proj);
                          onClose();
                        }}
                      >
                        <img src={proj.afterImage} alt={proj.title} className="search-item-thumb" />
                        <div className="search-item-info">
                          <h5>{proj.title}</h5>
                          <span className="search-item-meta">{proj.style} • {proj.client}</span>
                        </div>
                        <span className="search-item-arrow">→</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
