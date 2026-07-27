import { useState, useEffect } from 'react';

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('otcentric_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('otcentric_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('otcentric_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible && !showPrivacyPolicy) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {isVisible && (
        <div className="cookie-consent-banner" role="dialog" aria-label="Cookie and Privacy Consent">
          <div className="cookie-banner-content">
            <div className="cookie-text-group">
              <span className="cookie-icon">🍪</span>
              <div>
                <h4>Privacy & Cookie Preferences</h4>
                <p>
                  We use cookies and anonymous local session storage to remember your wishlist, cart items, and navigation preferences. We do not sell your personal data. Read our{' '}
                  <button className="privacy-link-btn" onClick={() => setShowPrivacyPolicy(true)}>
                    Privacy Policy
                  </button>.
                </p>
              </div>
            </div>

            <div className="cookie-buttons-group">
              <button className="cookie-essential-btn" onClick={handleAcceptEssential}>
                Essential Only
              </button>
              <button className="cookie-accept-btn" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="privacy-modal-overlay" onClick={() => setShowPrivacyPolicy(false)}>
          <div className="privacy-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="privacy-modal-header">
              <h2>OTCentric Studio — Privacy Policy</h2>
              <button className="privacy-close-btn" onClick={() => setShowPrivacyPolicy(false)} aria-label="Close Privacy Policy">✕</button>
            </div>

            <div className="privacy-modal-body">
              <p className="privacy-intro">
                Effective Date: January 1, 2026. OTCentric Design Studio ("we", "our", "us") respects your personal privacy and is committed to protecting your personal data across our web platform and studio locations in Lagos.
              </p>

              <h3>1. Data We Collect</h3>
              <p>
                When you browse our catalog, submit an architectural consultation request, or save items to your wishlist, we collect:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Name, phone number, and location details provided when contacting us via WhatsApp or consultation forms.</li>
                <li><strong>Session & Wishlist Data:</strong> Temporary browser storage (localStorage) used to retain your shopping bag and saved favorites.</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>
                Your information is used strictly to fulfill custom furniture orders, process design consultations, and send requested catalog vouchers. We never sell, rent, or lease your personal data to third parties.
              </p>

              <h3>3. WhatsApp Communications</h3>
              <p>
                Orders and product inquiries are processed directly via WhatsApp Business (+234 809 491 2640). Communications are protected by WhatsApp's end-to-end encryption standards.
              </p>

              <h3>4. Your Rights & Data Preferences</h3>
              <p>
                You have the right to request access to your data, request deletion, or clear your local browser storage at any time.
              </p>
            </div>

            <div className="privacy-modal-footer">
              <button className="privacy-agree-btn" onClick={() => setShowPrivacyPolicy(false)}>
                I Understand & Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
