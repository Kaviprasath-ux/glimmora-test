import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <div className="avatar-circle">VP</div>
          </div>

          <div className="testimonial-content">
            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.25L12.5 6.5L18.125 7.375L14.0625 11.375L15.125 17L10 14.25L4.875 17L5.9375 11.375L1.875 7.375L7.5 6.5L10 1.25Z" fill="#F7C850" stroke="#F7C850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ))}
            </div>

            <blockquote className="testimonial-quote">
              "The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs."
            </blockquote>

            <p className="testimonial-author">
              Victoria Parrish · <span className="author-role">Project Manager</span>
            </p>

            <div className="testimonial-controls">
              <button className="control-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#6F6460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="control-btn control-btn-active">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
