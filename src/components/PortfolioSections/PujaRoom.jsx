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
    title: 'Royal Heritage Mandir',
    description: 'This majestic puja room exudes a regal charm with its intricately carved wooden frame, traditional brass bells, and an ornate floral jaali backdrop.',
    images: [
      `/image/pujaroom/Puja01/P1.jpeg`,
      `/image/pujaroom/Puja01/P2.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Modern Compact Sanctuary',
    description: 'Designed with space efficiency in mind, this sleek and minimalistic puja room features contemporary jaali doors, clean lines, and soft lighting.',
    images: [
      `/image/pujaroom/Puja02/P1.jpeg`,
    ],
  },
  {
    id: 3,
    title: 'Majestic Marble Temple',
    description: 'A grand and luxurious puja room highlighted by intricate marble inlay work, this design brings in a royal palace vibe.',
    images: [
     `/image/pujaroom/Puja03/P1.jpeg`,
      `/image/pujaroom/Puja03/P2.jpeg`,
    ],
  },
];

export const PujaRoom = () => {
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
      <h2 className="section-title">Puja Room</h2>
       <p className="section-description">
         Explore serene puja room interiors designed for spiritual connection and peaceful devotion.
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

export default PujaRoom;
