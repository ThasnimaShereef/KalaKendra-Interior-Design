import React, { useEffect, useRef } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import './PortfolioSection.css';

 const galleries = [
  {
    id: 1,
    title: 'Luxe Lobby Elegance',
    description: 'A grand entryway featuring a gold chandelier, rich textures, and plush green seating for a lavish welcome.',
    images:
    [
      `/image/entrance/Entrance01/E1.jpg`,
      `/image/entrance/Entrance01/E2.jpg`,
      `/image/entrance/Entrance01/E3.jpg`,
    ],
  },
  {
    id: 2,
    title: 'Bold & Artistic Entrance',
    description: 'An eclectic entrance highlighted by zebra patterns, modern art, and dramatic lighting for a statement look.',
    images:
    [
      `/image/entrance/Entrance02/E1.jpg`,
      `/image/entrance/Entrance02/E2.jpg`,
      `/image/entrance/Entrance02/E3.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Earthy Modern Welcome',
    description: 'A nature-inspired entrance with wood textures, monochrome patterns, and cozy accents for a warm feel.',
    images:
    [
      `/image/entrance/Entrance03/E1.jpg`,
      `/image/entrance/Entrance03/E2.jpg`,
      `/image/entrance/Entrance03/E3.jpg`,
      `/image/entrance/Entrance03/E4.jpg`,
      `/image/entrance/Entrance03/E5.jpg`,
    ],
  },
  {
    id: 4,
    title: 'Crystal Stone Feature Entry',
    description: 'A contemporary entry highlighted by a striking blue agate stone wall and mirrored cabinetry for a chic vibe.',
    images:
    [
      `/image/entrance/Entrance04/E1.jpeg`,
      `/image/entrance/Entrance04/E2.jpeg`,
    ],
  },
  {
    id: 5,
    title: 'Luxurious Entrance with Statement Double Doors',
    description: ' A grand entrance featuring elegant wooden double doors with gold accents.',
    images:
    [
      `/image/entrance/Entrance05/E1.jpeg`,
    ]
  },
];
  

  export const Entrance = () => {
    useEffect(() => {
      const container = document.querySelector('.masonry-gallery-demo');
      if (container) {
        const msnry = new Masonry(container, {
          itemSelector: '.gallery-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
        });
  
        imagesLoaded(container).on('progress', () => {
          msnry.layout();
        });
      }
    }, []);
  
    const galleryRefs = useRef([]);
  
    return (
      <div className="project-container">
        <h2 className="section-title">ENTRANCE LAYOUT</h2>
        <p className="section-description">
         Discover beautifully designed entrances that make a striking first impression and set the tone for your home.
       </p>
  
        <div className="masonry-gallery-demo">
          <div className="grid-sizer"></div>
  
          {galleries.map((gallery, index) => (
            <div
              key={gallery.id}
              className="gallery-item"
              onClick={() => galleryRefs.current[index]?.openGallery(0)}
            >
              <div className="image-wrapper">
              <img
                className="img-responsive"
                src={gallery.images[0]}
                alt={`Gallery ${index + 1}`}
              />
             <div className="overlay">
               <h3 className="overlay-title">{gallery.title}</h3>
               <p className="overlay-description">{gallery.description}</p>
             </div>
            </div>
  
              <LightGallery
                onInit={(ref) => (galleryRefs.current[index] = ref.instance)}
                dynamic
                dynamicEl={gallery.images.map((img, i) => ({
                  src: img,
                  thumb: img,
                  subHtml: `<h4>${gallery.description}</h4>`,
                }))}
                plugins={[lgZoom, lgShare, lgHash]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };