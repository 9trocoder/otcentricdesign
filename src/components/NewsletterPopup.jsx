import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/otlogo.png';

export default function NewsletterPopup({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);

    if (dontShowAgain) {
      localStorage.setItem('otcentric_newsletter_dismissed', 'true');
    }
  };

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('otcentric_newsletter_dismissed', 'true');
    }
    onClose();
  };

  return (
    <dialog 
      ref={dialogRef} 
      className="retro-newsletter-dialog"
      onClose={handleClose}
      aria-labelledby="newsletter-title"
    >
      <div className="newsletter-wrapper">
        <button className="dialog-close-btn" onClick={handleClose} aria-label="Close newsletter offer">
          ✕
        </button>

        <div className="newsletter-content-grid">
          
          {/* Left Decorative Banner / Graphic */}
          <div className="newsletter-banner-box">
            <div className="newsletter-logo-wrap">
              <img src={logoImg} alt="OTCentric Design Logo" className="newsletter-logo" />
            </div>
            <div className="newsletter-badge">EST. 1974 CATALOG</div>
            <h3 className="newsletter-banner-title">THE OT DESIGN CLUB</h3>
            <p className="newsletter-banner-sub">Exclusive Access to Rare Furniture Restorations & Private Interior Showcases.</p>
          </div>

          {/* Right Form / Success Area */}
          <div className="newsletter-form-area">
            {!submitted ? (
              <>
                <div className="offer-header-tag">15% OFF YOUR FIRST ORDER</div>
                <h2 id="newsletter-title" className="newsletter-heading">Join the OTCentric Collector's Dispatch</h2>
                <p className="newsletter-subtext">
                  Subscribe to our monthly print & digital newsletter for vintage drop alerts, mid-century interior guides, and subscriber-only discount codes.
                </p>

                <form onSubmit={handleSubmit} className="newsletter-form">
                  <div className="form-group">
                    <label htmlFor="newsletter-email">ENTER YOUR EMAIL</label>
                    <input 
                      type="email"
                      id="newsletter-email"
                      placeholder="your.email@domain.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className={error ? 'error' : ''}
                      autoFocus
                    />
                    {error && <span className="error-message">{error}</span>}
                  </div>

                  <button type="submit" className="newsletter-submit-btn">
                    CLAIM 15% VOUCHER CODE →
                  </button>

                  <label className="dont-show-checkbox">
                    <input 
                      type="checkbox" 
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                    />
                    <span>Don't show this notification again</span>
                  </label>
                </form>
              </>
            ) : (
              /* Success Voucher Display */
              <div className="newsletter-success-box">
                <div className="voucher-stamp">DISCOUNT CERTIFICATE</div>
                <h2>WELCOME TO THE CLUB!</h2>
                <p>Your 15% discount code is now active for your shopping bag:</p>
                
                <div className="coupon-code-box">
                  <span className="code-label">PROMO CODE:</span>
                  <span className="code-value">RETRO15</span>
                  <button 
                    className="copy-code-btn"
                    onClick={() => {
                      navigator.clipboard?.writeText('RETRO15');
                      alert('Discount code RETRO15 copied to clipboard!');
                    }}
                  >
                    COPY
                  </button>
                </div>

                <p className="voucher-note">Use code RETRO15 at checkout to claim 15% off your order.</p>

                <button className="continue-shopping-btn" onClick={handleClose}>
                  Start Exploring Furnitures →
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </dialog>
  );
}
