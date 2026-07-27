import { DEPARTMENTS } from '../data';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="category-department-section">
      <div className="department-header">
        <span className="section-mini-tag">DEPARTMENTS</span>
        <h2 className="department-main-title">Explore by Spatial Environment</h2>
      </div>

      <div className="department-grid">
        {DEPARTMENTS.map((dept) => (
          <div 
            key={dept.id} 
            className="department-card"
            onClick={() => onSelectCategory(dept.category)}
          >
            <div className="department-img-wrapper">
              <img src={dept.image} alt={dept.title} className="department-img" />
              <div className="department-overlay"></div>
            </div>
            
            <div className="department-content">
              <span className="department-count">{dept.itemCount}</span>
              <h3 className="department-title">{dept.title}</h3>
              <span className="department-link">Explore Collection →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
