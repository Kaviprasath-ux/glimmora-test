import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label small-label text-accent">Glimmora Hotel Collection</p>
          <h1 className="hero-title">Discover a new world of possibilities</h1>
          <p className="hero-subtitle">
            Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform.
          </p>
        </div>

        <div className="search-bar">
          <div className="search-segment">
            <label className="search-label">Check-in</label>
            <span className="search-value">Add dates</span>
          </div>
          <div className="search-divider"></div>

          <div className="search-segment">
            <label className="search-label">Check-out</label>
            <span className="search-value">Add dates</span>
          </div>
          <div className="search-divider"></div>

          <div className="search-segment">
            <label className="search-label">Who</label>
            <span className="search-value">Add guests</span>
          </div>

          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 19L14.65 14.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
