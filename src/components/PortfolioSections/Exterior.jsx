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
    title: 'Contemporary Urban Villa',
    description: 'A striking blend of earthy brick textures and modern lines crowned with a pagoda-style roof.',
    images: [
      `/image/Exterior/Exterior01/EX1.jpeg`,
      `/image/Exterior/Exterior01/EX2.jpg`,
    ],
  },
  {
    id: 2,
    title: 'Minimalist Grey Elevation',
    description: 'A modern façade defined by clean lines, concrete finishes, and ambient lighting.',
    images: [
      `/image/Exterior/Exterior02/EX1.jpeg`,
      `/image/Exterior/Exterior02/EX2.jpeg`,
    ],
  },
   {
    id: 3,
    title: 'Geometric Harmony in Brick and Concrete',
    description: 'A play of curved and angular patterns with terracotta jalis and warm wooden tones.',
    images: [
      `/image/Exterior/Exterior03/EX1.png`,
      `/image/Exterior/Exterior03/EX2.png`,
      `/image/Exterior/Exterior03/EX3.png`,
      `/image/Exterior/Exterior03/EX4.png`,
    ],
  },
];

export const Exterior = () => {
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
      <h2 className="section-title">EXTERIORS</h2>
       <p className="section-description">
         Explore stunning exterior designs that blend architectural elegance with nature and curb appeal.
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

