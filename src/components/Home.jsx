import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="hero-page" style={{ backgroundImage: `url(/image/logo/background.jpg)` }}>
      <div className="content-container">
        <img src={`/image/logo/lockup color green.png`} alt="Kala Kendra Logo" className="home-logo" />      

        <p>
          Kala Kendra is an innovative interior design firm creating stylish, functional spaces that 
          reflect clients' unique tastes. We transform every project into a personalized masterpiece.
        </p>
        
        <div className="button-group">
          <a href="#portfolio" className="cta-button">Explore Our Work<span className="arrow">→</span></a>
          <a href="#contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

