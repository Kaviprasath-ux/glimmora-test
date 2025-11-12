import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <motion.div 
          className="newsletter-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="newsletter-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Subscribe to our newsletter
          </motion.h2>
          <motion.p 
            className="newsletter-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join our community and never miss out on exciting opportunities. Sign up today to unlock a world of valuable content delivered right to your inbox.
          </motion.p>

          <motion.form 
            className="newsletter-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              animate={{ 
                scale: focused ? 1.02 : 1,
                borderColor: focused ? '#C17A54' : '#E3DDD6'
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.button 
              type="submit" 
              className="btn-primary newsletter-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>

          <motion.p 
            className="newsletter-privacy"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We care about your data. Read our{' '}
            <a href="#privacy" className="privacy-link">privacy policy</a>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
