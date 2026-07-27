import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ value, onChange, options, placeholder = 'Select an option' }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Normalize options array to { value, label } objects
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return opt;
    }
    return { value: opt, label: opt };
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select-container ${isOpen ? 'is-open' : ''}`} ref={containerRef}>
      <button 
        type="button"
        className="custom-select-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="custom-select-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          className={`custom-select-chevron ${isOpen ? 'rotate' : ''}`} 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <ul className="custom-select-options-list" role="listbox">
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                className={`custom-select-option ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(opt.value)}
                role="option"
                aria-selected={isSelected}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg className="option-check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
