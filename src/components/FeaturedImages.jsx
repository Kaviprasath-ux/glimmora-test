import React from 'react';
import './FeaturedImages.css';

const FeaturedImages = () => {
  const images = [
    { id: 1, alt: 'Luxury Suite' },
    { id: 2, alt: 'Hotel Lobby' },
    { id: 3, alt: 'Dining Area' }
  ];

  return (
    <section className="featured-images">
      <div className="featured-container">
        {images.map((image) => (
          <div key={image.id} className="featured-card">
            <div className="featured-image" style={{
              background: `linear-gradient(135deg, ${
                image.id === 1 ? '#C17A54, #D9926B' :
                image.id === 2 ? '#8B7355, #A68A6F' :
                '#6F6460, #8A7B76'
              })`
            }}>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedImages;
