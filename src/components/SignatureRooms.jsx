import React from 'react';
import { motion } from 'framer-motion';
import './SignatureRooms.css';

const SignatureRooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe King Suite',
      description: 'A perfect balance of luxury and intelligence, designed to make every moment effortless.',
      price: 520,
      rating: 4.9,
      recommended: true
    },
    {
      id: 2,
      name: 'Presidential Suite',
      description: 'Ultimate luxury with panoramic views and exclusive amenities for discerning guests.',
      price: 890,
      rating: 5.0,
      recommended: true
    },
    {
      id: 3,
      name: 'Ocean View Suite',
      description: 'Wake up to breathtaking ocean vistas in this elegantly appointed suite.',
      price: 650,
      rating: 4.8,
      recommended: false
    },
    {
      id: 4,
      name: 'Garden Villa',
      description: 'Private sanctuary surrounded by lush gardens, perfect for a peaceful retreat.',
      price: 780,
      rating: 4.9,
      recommended: true
    },
    {
      id: 5,
      name: 'Skyline Penthouse',
      description: 'Extraordinary city views from this sophisticated penthouse experience.',
      price: 1200,
      rating: 5.0,
      recommended: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="signature-rooms">
      <div className="rooms-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="small-label text-accent">Highlights</p>
          <h2 className="section-title">Our Signature Rooms</h2>
          <p className="section-subtitle">
            Where comfort meets innovation, luxury lives in every detail.
          </p>
        </motion.div>

        <motion.div 
          className="rooms-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {rooms.map((room) => (
            <motion.div 
              key={room.id} 
              className="room-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="room-image" style={{
                background: `linear-gradient(135deg, ${
                  room.id % 3 === 0 ? '#C17A54, #D9926B' :
                  room.id % 3 === 1 ? '#A68A6F, #C1A78F' :
                  '#8B7355, #A68A6F'
                })`
              }}>
                {room.recommended && (
                  <span className="room-badge">Recommended</span>
                )}
              </div>

              <div className="room-content">
                <h3 className="room-title">{room.name}</h3>
                <p className="room-description">{room.description}</p>

                <div className="room-footer">
                  <div className="room-price">
                    <span className="price-amount">${room.price}</span>
                    <span className="price-period"> / night</span>
                  </div>
                  <div className="room-rating">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L10.163 5.38L15 6.1L11.5 9.5L12.326 14.3L8 12.038L3.674 14.3L4.5 9.5L1 6.1L5.837 5.38L8 1Z" fill="#F7C850" stroke="#F7C850" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="rating-value">{room.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureRooms;
