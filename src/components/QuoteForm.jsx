import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SITE, CITIES } from '../data/site';

const FORM_ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY?.trim() || '';
const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT?.trim() ||
  (FORM_ACCESS_KEY ? 'https://api.web3forms.com/submit' : '');

export default function QuoteForm({ showWindowsField = false, heading = 'Request My Free Solar Screen Quote' }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!FORM_ENDPOINT) {
      setErrorMessage(
        `Online quote requests are not configured yet. Please call ${SITE.phoneDisplay} or email ${SITE.email}.`
      );
      return;
    }

    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    if (FORM_ACCESS_KEY) {
      formData.append('access_key', FORM_ACCESS_KEY);
      formData.append('subject', 'New Ball Bros Screens Quote Request');
      formData.append('from_name', SITE.name);
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) throw new Error('Request failed');
      navigate('/thank-you');
    } catch {
      setStatus('idle');
      setErrorMessage(
        `Something went wrong sending your request. Please call ${SITE.phoneDisplay} and we will help you directly.`
      );
    }
  };

  return (
    <div className="quote-form">
      <h3 id="form-heading" style={{ fontSize: '1.4rem', marginBottom: 6 }}>
        {heading}
      </h3>
      <p style={{ color: 'var(--gray)', fontSize: '.92rem', marginBottom: 28 }}>
        Fill out the form and we&apos;ll be in touch shortly. Ball Bros Screens is Arizona ROC{' '}
        {SITE.roc}, and we can discuss possible SRP solar screen rebate savings for qualifying
        customers.
      </p>

      <form id="quote-form" onSubmit={handleSubmit} aria-labelledby="form-heading">
        <input type="hidden" name="roc" value={SITE.roc} />
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span style={{ color: "var(--copper)" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span style={{ color: "var(--copper)" }}>*</span>
            </label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone number" required autoComplete="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">
              Your City <span style={{ color: "var(--copper)" }}>*</span>
            </label>
            <select id="city" name="city" required defaultValue="">
              <option value="" disabled>
                Select your city
              </option>
              {CITIES.map((city) => (
                <option key={city.slug} value={city.name}>{city.name}</option>
              ))}
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
        {errorMessage && (
          <p className="form-error" role="alert">
            {errorMessage}
          </p>
        )}
        <div className="form-submit">
          <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request My Free Solar Screen Quote'}
          </button>
        </div>
        <p
          style={{
            fontSize: ".8rem",
            color: "var(--gray-lt)",
            marginTop: 12,
            textAlign: "center",
          }}
        >
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
}
