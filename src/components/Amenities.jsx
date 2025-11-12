import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      id: 1,
      title: 'Fine Dining',
      description: 'Experience culinary excellence with our award-winning restaurants and world-class chefs.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8H19C20.1046 8 21 8.89543 21 10V21" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 8V3M5 3V2M5 3H4M5 3H6" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8V4M8 4V2M8 4H7M8 4H9" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 8V4M11 4V2M11 4H10M11 4H12" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8H13V10C13 11.1046 12.1046 12 11 12H5C3.89543 12 3 11.1046 3 10V8Z" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12V21" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Infinity Pool',
      description: 'Relax and unwind in our stunning rooftop infinity pool with panoramic views.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 15C3.5 15 3.5 16 5 16C6.5 16 6.5 15 8 15C9.5 15 9.5 16 11 16C12.5 16 12.5 15 14 15C15.5 15 15.5 16 17 16C18.5 16 18.5 15 20 15C21.5 15 21.5 16 23 16" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 19C3.5 19 3.5 20 5 20C6.5 20 6.5 19 8 19C9.5 19 9.5 20 11 20C12.5 20 12.5 19 14 19C15.5 19 15.5 20 17 20C18.5 20 18.5 19 20 19C21.5 19 21.5 20 23 20" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 8C19 5.23858 16.7614 3 14 3C11.2386 3 9 5.23858 9 8" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8V12" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Luxury Spa',
      description: 'Indulge in rejuvenating treatments and therapies at our world-class spa facility.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V8" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V22" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H8" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12H22" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Fitness Center',
      description: 'State-of-the-art fitness equipment and personal training services available 24/7.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6.5L17.5 17.5" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 17.5L17.5 6.5" stroke="#C17A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6.5" cy="6.5" r="2.5" stroke="#C17A54" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="2.5" stroke="#C17A54" strokeWidth="2"/>
          <circle cx="6.5" cy="17.5" r="2.5" stroke="#C17A54" strokeWidth="2"/>
          <circle cx="17.5" cy="17.5" r="2.5" stroke="#C17A54" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="amenities">
      <div className="amenities-container">
        <div className="section-header">
          <p className="small-label text-accent">Facilities</p>
          <h2 className="section-title">World-Class Amenities</h2>
          <p className="section-subtitle">
            Indulge in extraordinary experiences crafted for your comfort.
          </p>
        </div>

        <div className="amenities-content">
          <div className="amenities-image" style={{
            background: 'linear-gradient(135deg, #8B7355 0%, #A68A6F 50%, #C1A78F 100%)'
          }}></div>

          <div className="amenities-grid">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3 className="amenity-title">{amenity.title}</h3>
                <p className="amenity-description">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="amenities-link">
          <a href="#facilities" className="explore-link">
            Explore All Facilities →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
