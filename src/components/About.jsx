import React from 'react';
import './About.css';
import { FaLightbulb, FaDraftingCompass, FaHammer, FaPaintBrush, FaUsers, FaLeaf, FaCertificate, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
 {/* Welcome Card with Image */}
 <div className="welcome-section">
        <div className="welcome-video">
  <video
    src={`/image/logo/about.mp4`}
    autoPlay
    loop
    muted
    playsInline // ensures autoplay works on mobile browsers
    className="welcome-video-content"
  />
</div>

<div className="welcome-content">
        <div className="welcome-card" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
        <img src={`/image/logo/greenlogo.png`} alt="Kala Kendra Logo" className="about-logo" />
          {/* <h1>ABOUT KALA KENDRA</h1> */}
          <p>
            At Kala Kendra Interior Design Studio, we believe in crafting spaces that blend beauty, functionality, 
            and a touch of timeless artistry. Inspired by India’s rich heritage and diverse cultural aesthetics, we 
            design interiors that bring together traditional craftsmanship with modern sensibilities.
          </p>
          <p>
            Kala Kendra Interior Design Studio focuses on creating aesthetically pleasing and functional interior 
            spaces, often emphasizing traditional, cultural, and artisanal influences.
          </p>
          </div>

             {/* Process Section */}
        <h2>OUR PROCESS</h2>
        <div className="process-steps">
          <div className="process-step">
            <FaLightbulb className="process-icon" />
            <h3>Consultation & Conceptualization</h3>
            <p>Understanding your vision, preferences, and lifestyle.</p>
          </div>
          <div className="process-step">
            <FaDraftingCompass className="process-icon" />
            <h3>Design Development</h3>
            <p>Creating layouts, 3D renderings, and mood boards.</p>
          </div>
          <div className="process-step">
            <FaHammer className="process-icon" />
            <h3>Execution & Installation</h3>
            <p>Coordinating with craftsmen and vendors for precision.</p>
          </div>
          <div className="process-step">
            <FaPaintBrush className="process-icon" />
            <h3>Final Touches</h3>
            <p>Adding decor, accessories, and custom pieces.</p>
          </div>
        </div>
      
        </div>
      </div>
     

             {/* Philosophy, Vision, Mission Section */}
      <div className="pvm-section">
        {/* <h2 className="section-title">Our Philosophy, Vision, and Mission</h2> */}
        <div className="circles-container">
          <div className="circle" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <h3>OUR PHILOSOPHY</h3>
            <p>Our philosophy centers on creating spaces that tell a story, reflecting individuality and personality.</p>
          </div>
          <div className="circle" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <h3>OUR VISION</h3>
            <p>Kala Kendra Interior Design Studio envisions creating spaces that blend cultural richness with innovative design, fostering beauty, functionality, and sustainability in every project.</p>
          </div>
          <div className="circle" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <h3>OUR MISSION</h3>
            <p>To craft meaningful, functional spaces that reflect individuality and cultural essence, blending artistry with innovation for timeless interiors.</p>
          </div>
        </div>
      </div>

          {/* Why Choose Us Section */}
         
      <div className="why-choose-us">
      <div className="why-choose-us-text">
      <h2>WHY CHOOSE US</h2>
        <p>
          Transform your space with Kala Kendra Interior Design Studio – where tradition meets innovation, and every 
          design tells a story. Let us help you create a space that is both beautiful and deeply meaningful.
        </p>
        </div>
        <div className="why-cards" >
          <div className="why-card" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <FaUsers className="why-icon" />
            <div>
              <h3>Experienced Team</h3>
              <p>Our designers, architects, and craftsmen bring expertise to every project.</p>
            </div>
          </div>
          <div className="why-card" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <FaHandsHelping className="why-icon" />
            <div>
              <h3>Personalized Approach</h3>
              <p>We focus on understanding each client's unique needs and preferences.</p>
            </div>
          </div>
          <div className="why-card" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <FaCertificate className="why-icon" />
            <div>
              <h3>Quality Assurance</h3>
              <p>We use only high-quality materials and work with skilled artisans.</p>
            </div>
          </div>
          <div className="why-card" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
            <FaLeaf className="why-icon" />
            <div>
              <h3>Sustainable Practices</h3>
              <p>We consider the environmental impact of every project.</p>
            </div>
          </div>
        </div>
        </div>

       {/* Meet the Visionary Section */}
      <div className="visionary-section">
        <div className="about-image">
          <img src={`/image/logo/dp.jpg`} alt="Gunjan Choudhary" />
        </div>
        <div className="visionary-content">
          <h2>Meet the Visionary Behind Kala Kendra</h2>
          <p>
            With over three years of dedicated experience, our lead designer is passionate about transforming 
            spaces to reflect each client’s unique vision. Skilled in the latest design software and trends, 
            she delivers beautiful and functional spaces on time and within budget.
          </p>
        </div>
      </div>
      </div>
    
  );
};

export default About;
