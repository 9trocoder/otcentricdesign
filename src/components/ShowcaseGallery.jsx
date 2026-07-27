import { useState } from 'react';
import { PROJECTS } from '../data';

export default function ShowcaseGallery({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Track toggle states for before/after comparison per project card thumbnail
  const [beforeAfterToggle, setBeforeAfterToggle] = useState({});

  const categories = ['All', 'Living Rooms', 'Workspaces', 'Lounge'];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  const toggleBeforeAfter = (projectId, e) => {
    e.stopPropagation();
    setBeforeAfterToggle(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section className="showcase-section">
      <div className="showcase-header">
        <h2 className="showcase-title">Design Portfolios</h2>
        <p className="showcase-subtitle">
          Explore curated environments designed, styled, and furnished by the <strong>OTCentric Studio</strong> team. We combine vintage elegance with modern ergonomics.
        </p>

        {/* Category Filters */}
        <div className="showcase-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isBefore = beforeAfterToggle[project.id] === 'before';
          const activeImage = isBefore ? project.beforeImage : project.afterImage;

          return (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-image-wrapper">
                <img 
                  src={activeImage} 
                  alt={project.title} 
                  className={`project-image ${isBefore ? 'before-style' : 'after-style'}`} 
                />
                
                {/* Before/After Toggle Overlay Badge */}
                <button 
                  className={`comparison-toggle-btn ${isBefore ? 'before-active' : ''}`}
                  onClick={(e) => toggleBeforeAfter(project.id, e)}
                  title="Quick Toggle Before / After Photo"
                  aria-label={`Toggle Before/After for ${project.title}`}
                >
                  <span className="toggle-badge-lbl">{isBefore ? 'BEFORE' : 'AFTER'}</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path d="M17 1l4 4-4 4"></path>
                    <path d="M3 5h18"></path>
                    <path d="M7 23l-4-4 4-4"></path>
                    <path d="M21 19H3"></path>
                  </svg>
                </button>

                <div className="project-style-tag">{project.style}</div>
              </div>

              <div className="project-info">
                <span className="project-meta-top">{project.client} • {project.date}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary-desc">
                  {project.description.slice(0, 115)}...
                </p>
                <div className="project-card-footer">
                  <span className="view-project-link">View Dedicated Showcase →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
