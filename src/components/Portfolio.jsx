import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'; // Custom styles for cards and images

const Portfolio = () => {
  const sections = [
    
  { id: 1, title: 'BEDROOM', imgSrc: `/image/bedroom/Bedroom02/B1.jpg`, link: '/bedroom' },
  { id: 2, title: 'KIDS ROOM', imgSrc: `/image/kidsroom/Kids01/K1.jpg`, link: '/kids-room' },
  { id: 3, title: 'KITCHEN', imgSrc: `/image/kitchen/Kitchen01/KT1.jpeg`, link: '/kitchen' },
  { id: 4, title: 'LIVING AND DINING AREA', imgSrc: `/image/HallnDining/Living01/L1.jpg`, link: '/living-room' },
  { id: 5, title: 'PUJA ROOM', imgSrc: `/image/pujaroom/Puja03/P1.jpeg`, link: '/puja-room' },
  { id: 6, title: 'OFFICE', imgSrc: `/image/HallnDining/Living09/L2.jpeg`, link: '/office' },
  { id: 7, title: 'WASHROOM', imgSrc: `/image/washroom/Washroom01/W1.jpeg`, link: '/washroom' },
  { id: 8, title: 'ENTRANCE', imgSrc: `/image/entrance/Entrance02/E1.jpg`, link: '/entrance' },
  { id: 9, title: 'EXTERIOR', imgSrc: `/image/Exterior/Exterior02/EX2.jpeg`, link: '/exterior' }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 heading">OUR PROJECTS</h2>
      <div className="row">
        {sections.map((section) => (
          <div key={section.id} className="col-md-4 mb-4">
            <Link to={section.link} style={{ textDecoration: 'none' }}>
              <div className="card custom-card" >
                <img src={section.imgSrc} className="card-img-top custom-img" alt={section.title} />
                <div className="card-body" style={{ backgroundImage: `url(/image/logo/textureb.jpg)` }}>
                  <h5 className="card-title text-center">{section.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
