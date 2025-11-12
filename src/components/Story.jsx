import React from 'react';
import { motion } from 'framer-motion';
import './Story.css';

const Story = () => {
  
  const stories = [
    {
      id: 1,
      title: 'The Arrival',
      description: 'Step into a world where every detail whispers elegance. From the moment you arrive, our dedicated team ensures your journey begins with warmth and sophistication.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80'
    },
    {
      id: 2,
      title: 'Your Sanctuary',
      description: 'Each suite is a masterpiece of design and comfort, where luxury meets tranquility. Floor-to-ceiling windows frame breathtaking views, while plush furnishings invite you to unwind.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80'
    },
    {
      id: 3,
      title: 'Culinary Excellence',
      description: 'Embark on a gastronomic journey crafted by world-renowned chefs. Every dish tells a story, blending local flavors with international flair in an atmosphere of refined elegance.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'
    },
    {
      id: 4,
      title: 'Wellness & Serenity',
      description: 'Discover your inner peace at our world-class spa and wellness center. From rejuvenating treatments to meditation gardens, every moment is designed for your renewal.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80'
    },
    {
      id: 5,
      title: 'Unforgettable Moments',
      description: 'Create memories that last a lifetime. Whether celebrating special occasions or simply savoring the present, every experience at Glimmora is crafted to perfection.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80'
    }
  ];

  return (
    <section className="story">
      <motion.div 
        className="story-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="small-label text-accent">Our Story</p>
        <h2 className="section-title">A Journey of Luxury</h2>
        <p className="section-subtitle">
          Experience the art of hospitality through five chapters of excellence
        </p>
      </motion.div>

      <div className="story-chapters">
        {stories.map((chapter, index) => (
          <motion.div 
            key={chapter.id} 
            className="story-chapter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="chapter-content">
              <motion.div 
                className="chapter-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
              <motion.h3 
                className="chapter-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {chapter.title}
              </motion.h3>
              <motion.p 
                className="chapter-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {chapter.description}
              </motion.p>
            </div>
            <motion.div 
              className="chapter-image"
              style={{
                backgroundImage: `url(${chapter.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Story;
