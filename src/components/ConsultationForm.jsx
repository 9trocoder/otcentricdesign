import { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studioLocation: 'Palm Springs Flagship Studio',
    consultationType: 'Virtual 3D Studio Session',
    stylePreference: 'Modern Contemporary Organic',
    rooms: [],
    timeline: '1-3 Months',
    budget: '₦10,000,000 - ₦25,000,000',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const styleOptions = [
    'Modern Contemporary Organic',
    'Scandinavian & Danish Minimalist',
    'Post-Modern Italian Elegance',
    'Japandi Architectural Zen',
    'Executive Industrial Modern'
  ];

  const studioLocations = [
    'Palm Springs Flagship Studio',
    'Milan Design Center',
    'Copenhagen Studio',
    'Tokyo Atelier',
    'Virtual Studio (Global)'
  ];

  const formatOptions = [
    'Virtual 3D Studio Session',
    'In-Person Studio Review',
    'On-Site Architectural Visit'
  ];

  const budgetOptions = [
    'Under ₦10,000,000',
    '₦10,000,000 - ₦25,000,000',
    '₦25,000,000 - ₦50,000,000',
    '₦50,000,000+'
  ];

  const timelineOptions = [
    'Immediate (< 1 Month)',
    '1-3 Months',
    '3-6 Months',
    'Flexible'
  ];

  const roomOptions = [
    'Living Room Sanctuary', 
    'Executive Home Office', 
    'Dining Gallery', 
    'Master Bedroom Suite', 
    'Architectural Storage & Foyer', 
    'Full Home Transformation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCustomSelectChange = (fieldName, newValue) => {
    setFormData(prev => ({ ...prev, [fieldName]: newValue }));
  };

  const handleCheckboxChange = (room) => {
    setFormData(prev => {
      const isSelected = prev.rooms.includes(room);
      const updatedRooms = isSelected 
        ? prev.rooms.filter(r => r !== room)
        : [...prev.rooms, room];
      return { ...prev, rooms: updatedRooms };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your contact phone number';
    if (formData.rooms.length === 0) newErrors.rooms = 'Please select at least one space to design';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="consultation-section">
      {/* Editorial Header */}
      <div className="consultation-header">
        <span className="section-mini-tag">SPATIAL & INTERIOR ARCHITECTURE</span>
        <h1 className="consultation-title">Book an Interior Design Consultation</h1>
        <p className="consultation-subtitle">
          Collaborate directly with senior interior architects from our Palm Springs, Milan, and Copenhagen studios to co-create bespoke environments tailored to your lifestyle.
        </p>
      </div>

      <div className="consultation-grid">
        {/* Left Side: Studio Methodology & Architect Profile */}
        <div className="consultation-info-box">
          <div className="info-card">
            <h3>Our Design Process</h3>
            <ol className="step-list">
              <li>
                <span className="step-num">01</span>
                <div>
                  <h4>Spatial & Light Analysis</h4>
                  <p>Share your floorplans, architectural photography, and lifestyle requirements for an in-depth review.</p>
                </div>
              </li>
              <li>
                <span className="step-num">02</span>
                <div>
                  <h4>1-on-1 Studio Session</h4>
                  <p>Meet directly with our senior interior architect via virtual 3D walkthrough or in-person studio review.</p>
                </div>
              </li>
              <li>
                <span className="step-num">03</span>
                <div>
                  <h4>Curated Moodboard & 3D Renderings</h4>
                  <p>Receive custom material swatches, 3D architectural renders, and curated furniture lists from our collection.</p>
                </div>
              </li>
            </ol>

            {/* Designer Spotlight */}
            <div className="architect-spotlight-card">
              <div className="architect-header">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" 
                  alt="Elena Vance, Principal Designer" 
                  className="architect-avatar"
                />
                <div>
                  <h4 className="architect-name">Elena Vance</h4>
                  <span className="architect-title">Principal Spatial Architect</span>
                </div>
              </div>
              <p className="architect-quote">
                "We view every space as living sculpture — balancing daylight, tactile natural fibers, and timeless furniture pieces."
              </p>
            </div>

            <div className="info-badge">
              <span className="badge-highlight">Studio Assurance</span>
              <p>Consultation fees are 100% credited toward any furniture or custom joinery orders placed with OTCentric Studio.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="consultation-form-box">
          {submitted ? (
            <div className="consultation-success-card">
              <div className="success-icon">
                <svg 
                  width="56" 
                  height="56" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Consultation Request Received</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. A senior designer from our <strong>{formData.studioLocation}</strong> will review your request and contact you within 24 hours to schedule your <strong>{formData.consultationType}</strong>.
              </p>

              <div className="confirmation-summary-box">
                <p><strong>Selected Spaces:</strong> {formData.rooms.join(', ')}</p>
                <p><strong>Style Preference:</strong> {formData.stylePreference}</p>
                <p><strong>Timeline:</strong> {formData.timeline}</p>
              </div>

              <button 
                className="reset-form-btn"
                onClick={() => {
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    studioLocation: 'Palm Springs Flagship Studio',
                    consultationType: 'Virtual 3D Studio Session',
                    stylePreference: 'Modern Contemporary Organic',
                    rooms: [],
                    timeline: '1-3 Months',
                    budget: '$15,000 - $30,000',
                    notes: ''
                  });
                  setSubmitted(false);
                }}
              >
                Book Another Consultation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="retro-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  placeholder="e.g. Sarah Jenkins"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    placeholder="sarah@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange}
                    placeholder="(555) 234-5678"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Studio Location</label>
                  <CustomSelect
                    value={formData.studioLocation}
                    onChange={(val) => handleCustomSelectChange('studioLocation', val)}
                    options={studioLocations}
                  />
                </div>

                <div className="form-group">
                  <label>Format</label>
                  <CustomSelect
                    value={formData.consultationType}
                    onChange={(val) => handleCustomSelectChange('consultationType', val)}
                    options={formatOptions}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Aesthetic & Style Vision</label>
                <CustomSelect
                  value={formData.stylePreference}
                  onChange={(val) => handleCustomSelectChange('stylePreference', val)}
                  options={styleOptions}
                />
              </div>

              <div className="form-group">
                <label>Spaces to Style *</label>
                <div className="checkbox-grid">
                  {roomOptions.map((room) => (
                    <label key={room} className="custom-checkbox">
                      <input 
                        type="checkbox" 
                        checked={formData.rooms.includes(room)}
                        onChange={() => handleCheckboxChange(room)}
                      />
                      <span className="checkbox-tile">{room}</span>
                    </label>
                  ))}
                </div>
                {errors.rooms && <span className="error-message">{errors.rooms}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Project Budget Range</label>
                  <CustomSelect
                    value={formData.budget}
                    onChange={(val) => handleCustomSelectChange('budget', val)}
                    options={budgetOptions}
                  />
                </div>

                <div className="form-group">
                  <label>Desired Timeline</label>
                  <CustomSelect
                    value={formData.timeline}
                    onChange={(val) => handleCustomSelectChange('timeline', val)}
                    options={timelineOptions}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="consult-notes">Tell us about your spatial & design goals</label>
                <textarea 
                  id="consult-notes" 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleInputChange}
                  placeholder="Share details about daylight, ceiling heights, pet considerations, or specific furniture pieces you wish to integrate..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Submit Consultation Request →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
