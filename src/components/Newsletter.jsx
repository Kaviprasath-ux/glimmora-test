import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-card">
          <h2 className="newsletter-title">Subscribe to our newsletter</h2>
          <p className="newsletter-subtitle">
            Join our community and never miss out on exciting opportunities. Sign up today to unlock a world of valuable content delivered right to your inbox.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary newsletter-btn">
              Subscribe
            </button>
          </form>

          <p className="newsletter-privacy">
            We care about your data. Read our{' '}
            <a href="#privacy" className="privacy-link">privacy policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
