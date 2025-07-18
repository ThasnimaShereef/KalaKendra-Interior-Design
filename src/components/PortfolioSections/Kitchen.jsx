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
    title: 'Modern Matte Grey Modular Kitchen',
    description: 'A sleek and spacious U-shaped modular kitchen featuring glossy matte grey cabinets, built-in appliances, and seamless handleless drawers.',
    images: [
      `/image/kitchen/Kitchen01/KT1.jpeg`,
      `/image/kitchen/Kitchen01/KT2.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Elegant Open Kitchen ',
    description: 'An elegant kitchen space blending luxury and tradition, showcasing a marble-textured counter and mirrored cabinetry with ambient lighting.',
    images: [
      `/image/kitchen/Kitchen02/KT1.jpeg`,
      `/image/kitchen/Kitchen02/KT2.jpeg`,
      `/image/kitchen/Kitchen02/KT3.jpeg`,
    ],
  },
];

export const Kitchen = () => {
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
      <h2 className="section-title">KITCHEN</h2>
       <p className="section-description">
         Explore our beautifully designed kitchen interiors showcasing modern layouts, smart storage, and elegant finishes.
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

