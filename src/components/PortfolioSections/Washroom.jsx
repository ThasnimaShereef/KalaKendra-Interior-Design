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
    title: 'Luxe Nature Retreat',
    description: 'A luxurious washroom blending nature with opulence.',
    images: [
      `/image/washroom/Washroom01/W1.jpeg`,
      `/image/washroom/Washroom01/W2.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Monochrome Elegance',
    description: 'Bold black-and-white marble textures dominate this modern bathroom, contrasted by vertical gold trims and dark wood cabinetry.',
    images: [
      `/image/washroom/Washroom02/W1.jpeg`,
      `/image/washroom/Washroom02/W2.jpeg`,
    ],
  },
  {
    id: 3,
    title: 'Geometric Grace',
    description: 'This bathroom stands out with its bold chevron and zig-zag patterned flooring and wall design.',
    images: [
      `/image/washroom/Washroom03/W1.jpeg`,
      `/image/washroom/Washroom03/W2.jpeg`,
    ],
  },
  {
    id: 4,
    title: 'Golden Harmony',
    description: 'A balance of warmth and modernity, this space features golden backlit wall panels, elegant marble finishes, and a compact, highly functional layout.',
    images: [
      `/image/washroom/Washroom04/W1.jpeg`,
    ],
  },
  {
    id: 5,
    title: 'Rustic Tile Charm',
    description: 'This cozy bathroom boasts artisan-style patterned floor tiles and subtle geometric wall cladding.',
    images: [
     `/image/washroom/Washroom05/W1.jpeg`,
      `/image/washroom/Washroom05/W2.jpeg`,
    ],
  },
];

export const Washroom = () => {
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
      <h2 className="section-title">WashRoom</h2>
       <p className="section-description">
         Take a look at stylish and functional washroom designs combining luxury with practicality.
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

export default Washroom;
