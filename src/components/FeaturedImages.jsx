import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedImages.css';

const FeaturedImages = () => {
  const images = [
    { id: 1, alt: 'Luxury Suite', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80' },
    { id: 2, alt: 'Hotel Lobby', url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80' },
    { id: 3, alt: 'Dining Area', url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="featured-images">
      <motion.div 
        className="featured-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image) => (
          <motion.div 
            key={image.id} 
            className="featured-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div 
              className="featured-image" 
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedImages;
