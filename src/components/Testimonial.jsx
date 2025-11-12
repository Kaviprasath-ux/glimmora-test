import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      initials: 'VP',
      quote: 'An unforgettable experience from start to finish. The attention to detail and personalized service exceeded all expectations.',
      author: 'Victoria Parrish',
      role: 'Travel Enthusiast'
    },
    {
      id: 2,
      initials: 'JM',
      quote: 'The perfect blend of luxury and comfort. Every moment felt special, from the stunning rooms to the exceptional dining.',
      author: 'James Morrison',
      role: 'Business Executive'
    },
    {
      id: 3,
      initials: 'SC',
      quote: 'A truly remarkable stay. The staff went above and beyond to make our anniversary celebration memorable.',
      author: 'Sarah Chen',
      role: 'Architect'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial">
      <motion.div 
        className="testimonial-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <motion.div 
              className="avatar-circle"
              key={current.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {current.initials}
            </motion.div>
          </div>

          <div className="testimonial-content">
            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg 
                  key={star} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: star * 0.05, duration: 0.3 }}
                >
                  <path d="M10 1.25L12.5 6.5L18.125 7.375L14.0625 11.375L15.125 17L10 14.25L4.875 17L5.9375 11.375L1.875 7.375L7.5 6.5L10 1.25Z" fill="#F7C850" stroke="#F7C850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote 
                key={current.id}
                className="testimonial-quote"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                "{current.quote}"
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`author-${current.id}`}
                className="testimonial-author"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {current.author} · <span className="author-role">{current.role}</span>
              </motion.p>
            </AnimatePresence>

            <div className="testimonial-controls">
              <motion.button 
                className="control-btn"
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#6F6460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              <motion.button 
                className="control-btn control-btn-active"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
