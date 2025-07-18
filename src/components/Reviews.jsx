import React, { useState, useEffect, useRef } from 'react';
import './Reviews.css';

// Import star icon or use Font Awesome
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Sample testimonials data (replace with actual patient testimonials)
  const reviews = [
    {
      id: 1,
      name: "Manohar Pabda",
      treatment: "Office",
      quote: "I recently had my office designed by Kala Kendra Interior Design Studio, and I couldn\'t be more pleased with the outcome. Initially, I had some reservations about the design and execution, but the designer was incredibly prompt and attentive throughout the process. She was always on-site whenever there were any questions, ensuring that every detail was addressed.Her guidance in selecting materials and finishes was invaluable, and her commitment to quality was evident in the final inspection, where she meticulously checked every detail to ensure perfection. I’m thrilled with the results and highly recommend Kala Kendra Interior Design Studio to anyone looking for professional and dedicated service. Truly loved the work!",
      rating: 5,
      image: `/image/logo/review01.jpg`
    },
    {
      id: 2,
      name: "Anjali Malhotra",
      treatment: "Hair Restoration",
      quote: "I was skeptical about hair treatments, but Dr. Rishika's personalized approach and advanced techniques gave me back my confidence.",
      rating: 5,
      image: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66741.jpg?ga=GA1.1.1570413733.1731054163&semt=ais_hybrid"
    },
    {
      id: 3,
      name: "Kavita Singh",
      treatment: "Permanent Makeup",
      quote: "The precision and artistry of Dr. Rishika's permanent makeup is beyond impressive. I couldn't be happier with the results!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/woman_53876-71214.jpg?ga=GA1.1.1570413733.1731054163&semt=ais_hybrid"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} className="star-icon" />
    ));
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        (prev + 1) % reviews.length
      );
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div id="testimonials" className="testimonials-container">
      <div className="testimonials-content">
        <h2 className="section-title">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="section-subtitle">
          Hear what our clients say about their transformative experiences
        </p>

        <div className="testimonial-slider">
          {reviews.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-slide ${
                index === activeTestimonial ? 'active' : ''
              }`}
            >
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                </div>
                <div className="testimonial-content" style={{ backgroundImage: `url(/image/logo/texture_green-02.jpg)`}}>
                  <FaQuoteLeft className="quote-icon left" />
                  <p className="testimonial-quote">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="quote-icon right" />
                  
                  <div className="testimonial-details">
                    <h4>{testimonial.name}</h4>
                    <p className="treatment-type">
                      {testimonial.treatment}
                    </p>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                index === activeTestimonial ? 'active' : ''
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
