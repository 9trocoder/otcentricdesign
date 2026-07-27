import { useState, useEffect } from 'react';
import { JOURNAL_POSTS } from '../data';

export default function StudioJournalPage() {
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePost]);

  return (
    <div className="studio-journal-page-container">
      {activePost ? (
        /* Full Article Detail View */
        <article className="journal-article-detail">
          <nav className="detail-breadcrumb">
            <button onClick={() => setActivePost(null)} className="back-link-btn">
              ← Back to Studio Journal
            </button>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">{activePost.category}</span>
          </nav>

          <header className="article-header">
            <div className="article-meta-row">
              <span className="article-category-badge">{activePost.category}</span>
              <span className="article-date">{activePost.date} • {activePost.readTime}</span>
            </div>
            <h1 className="article-title">{activePost.title}</h1>
            <p className="article-author">By <strong>{activePost.author}</strong></p>
          </header>

          <div className="article-hero-img-box">
            <img src={activePost.image} alt={activePost.title} className="article-hero-img" />
          </div>

          <div className="article-body-content">
            <p className="article-summary-lead">{activePost.summary}</p>
            <div className="article-text-paragraphs">
              <p>{activePost.content}</p>
              <p>
                Every piece crafted in our Palm Springs and Milan studios is grounded in material honesty. We collaborate directly with second-generation European woodworkers and glassblowers to ensure timeless durability.
              </p>
            </div>
          </div>
        </article>
      ) : (
        /* Journal Index List */
        <section className="journal-index-section">
          <div className="journal-header">
            <span className="section-mini-tag">STUDIO JOURNAL</span>
            <h2 className="journal-title">Architectural & Material Insights</h2>
            <p className="journal-subtitle">
              Essays on craftsmanship, rare timber joinery, and spatial illumination from our design team.
            </p>
          </div>

          <div className="journal-articles-grid">
            {JOURNAL_POSTS.map((post) => (
              <div 
                key={post.id} 
                className="journal-post-card"
                onClick={() => setActivePost(post)}
              >
                <div className="journal-post-img-wrapper">
                  <img src={post.image} alt={post.title} className="journal-post-img" />
                  <span className="journal-post-cat">{post.category}</span>
                </div>
                
                <div className="journal-post-content">
                  <span className="journal-post-date">{post.date} • {post.readTime}</span>
                  <h3 className="journal-post-title">{post.title}</h3>
                  <p className="journal-post-summary">{post.summary}</p>
                  <span className="journal-post-link">Read Full Essay →</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
