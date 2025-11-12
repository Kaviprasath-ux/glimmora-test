import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">G</div>
          <span className="logo-text">Glimmora</span>
        </div>

        <nav className="header-nav">
          <a href="#rooms" className="nav-link">Rooms</a>
          <a href="#facilities" className="nav-link">Facilities</a>
          <a href="#pre-checkin" className="nav-link">Pre-Check-in</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">My Account</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
