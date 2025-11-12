import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <motion.div 
          className="footer-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="logo-icon">G</div>
            <span className="logo-text">Glimmora</span>
          </motion.div>

          <motion.nav 
            className="footer-nav"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a href="#home" className="footer-link">Home</a>
            <a href="#rooms" className="footer-link">Rooms & Suites</a>
            <a href="#facilities" className="footer-link">Facilities</a>
            <a href="#pre-checkin" className="footer-link">Pre-Check-in</a>
            <a href="#contact" className="footer-link">Contact</a>
          </motion.nav>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a 
              href="#twitter" 
              className="social-icon" 
              aria-label="Twitter"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.751 2.5H18.419L12.366 9.51L19.5 17.5H13.828L9.461 12.262L4.463 17.5H1.793L8.257 10.004L1.5 2.5H7.328L11.283 7.231L15.751 2.5ZM14.765 16.003H16.28L6.314 4.047H4.689L14.765 16.003Z" fill="#6F6460"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#instagram" 
              className="social-icon" 
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="16" height="16" rx="4" stroke="#6F6460" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="3" stroke="#6F6460" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="15" cy="5" r="0.5" fill="#6F6460"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#facebook" 
              className="social-icon" 
              aria-label="Facebook"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 13.9926 4.92547 17.2646 8.75 17.8892V12.5H7V10H8.75V8C8.75 6.34315 10.0931 5 11.75 5H14V7.5H12.25C11.5596 7.5 11 8.05964 11 8.75V10H14V12.5H11V17.9686C15.1414 17.6318 18 14.1643 18 10Z" fill="#6F6460"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="footer-container">
          <p className="footer-copyright">© 2024 Glimmora, Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#terms" className="footer-legal-link">Terms & Conditions</a>
            <span className="footer-divider">·</span>
            <a href="#cookies" className="footer-legal-link">Cookie Policy</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
