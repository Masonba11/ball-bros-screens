import { useState } from 'react';
import { SITE } from '../data/site';

export default function QuoteForm({ showWindowsField = false, heading = 'Request My Free Solar Screen Quote' }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote-form" role="status">
        <h2 style={{ fontSize: '1.4rem', marginBottom: 8 }}>Thank you!</h2>
        <p style={{ color: 'var(--gray)' }}>
          We received your request and will respond within one business day.
          For immediate help, call{' '}
          <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="quote-form">
      <h2 id="form-heading" style={{ fontSize: '1.4rem', marginBottom: 6 }}>
        {heading}
      </h2>
      <p style={{ color: 'var(--gray)', fontSize: '.92rem', marginBottom: 28 }}>
        Fill out the form and we&apos;ll be in touch shortly.
      </p>

      <form id="quote-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span style={{ color: 'var(--copper)' }}>*</span>
            </label>
            <input type="text" id="name" name="name" placeholder="Your name" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span style={{ color: 'var(--copper)' }}>*</span>
            </label>
            <input type="tel" id="phone" name="phone" placeholder="(480) 555-0000" required autoComplete="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="city">
              Your City <span style={{ color: 'var(--copper)' }}>*</span>
            </label>
            <select id="city" name="city" required defaultValue="">
              <option value="" disabled>
                Select your city
              </option>
              <option value="Queen Creek">Queen Creek</option>
              <option value="San Tan Valley">San Tan Valley</option>
              <option value="Gilbert">Gilbert</option>
              <option value="Chandler">Chandler</option>
              <option value="Mesa">Mesa</option>
              <option value="Other">Other East Valley Area</option>
            </select>
          </div>
          {showWindowsField && (
            <div className="form-group full">
              <label htmlFor="windows">Approximate Number of Windows</label>
              <select id="windows" name="windows" defaultValue="">
                <option value="" disabled>
                  Select an estimate
                </option>
                <option value="1-5">1–5 windows</option>
                <option value="6-10">6–10 windows</option>
                <option value="11-15">11–15 windows</option>
                <option value="16+">16+ windows</option>
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>
          )}
          <div className="form-group full">
            <label htmlFor="message">Project Details or Questions</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us a bit about your home, which windows you're interested in screening, or any questions you have..."
            />
          </div>
        </div>
        <div className="form-submit">
          <button type="submit" className="btn btn-primary">
            Request My Free Solar Screen Quote
          </button>
        </div>
        <p style={{ fontSize: '.8rem', color: 'var(--gray-lt)', marginTop: 12, textAlign: 'center' }}>
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
}
