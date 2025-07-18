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
    title: 'Contemporary Office Nook',
    description: 'A compact, high-gloss workspace design that blends modern aesthetics with smart storage solutions.',
    images: [
      `/image/office/Office01/O1.jpg`,
      `/image/office/Office01/O2.jpg`,
      `/image/office/Office01/O3.jpg`,
      `/image/office/Office01/O4.jpg`,
      `/image/office/Office01/O5.jpg`,
    ],
  },
  {
    id: 2,
    title: 'Elegant Home Office Studio',
    description: 'A luxurious home office featuring soft tones, warm lighting, and a perfect balance of style and functionality.',
    images: [
      `/image/office/Office02/O1.png`,
      `/image/office/Office02/O2.png`,
      `/image/office/Office02/O3.png`,
    ],
  },
  {
    id: 3,
    title: 'Travel-Themed Executive Cabin',
    description: 'A sleek office space inspired by global exploration, highlighted by a world map mural and minimalist elegance.',
    images: [
      `/image/office/Office03/O1.png`,
      `/image/office/Office03/O2.png`,
      `/image/office/Office03/O3.png`,
    ],
  },
];

export const Office = ({ name }) => {
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
      <h2 className="section-title">OFFICE</h2>
       <p className="section-description">
         View modern office interiors tailored for productivity, focus, and professional aesthetics.
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

