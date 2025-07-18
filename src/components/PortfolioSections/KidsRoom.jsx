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
    title: 'Playful Bunny-Themed',
    description: 'A charming kids bedroom with a whimsical bunny headboard, soft pink tones, and cozy seating for a delightful space.',
    images: [
      `/image/kidsroom/Kids01/K1.jpg`,
      `/image/kidsroom/Kids01/K2.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Elegant & Classic',
    description: ' A sophisticated kids room featuring a bold mustard arch headboard, intricate wall details, and luxurious accents.',
    images: [
      `/image/kidsroom/Kids02/K1.jpeg`,
      `/image/kidsroom/Kids02/K2.jpeg`,
    ],
  },
  {
    id: 3,
    title: 'Contemporary and Cozy',
    description: 'A modern kids bedroom with a plush blue headboard and warm wood tones.',
    images: [
      `/image/kidsroom/Kids03/K1.jpg`,
      `/image/kidsroom/Kids03/K2.jpg`,
      `/image/kidsroom/Kids03/K3.jpg`,
      `/image/kidsroom/Kids03/K4.jpg`,
    ],
  },
  {
    id: 4,
    title: 'Minimalist and Chic',
    description: 'A sleek and simple kids room with neutral colors and geometric wall art.',
    images: [
      `/image/kidsroom/Kids04/K1.jpg`,
      `/image/kidsroom/Kids04/K2.jpg`,
      `/image/kidsroom/Kids04/K3.jpg`,
    ],
  },
  {
    id: 5,
    title: 'Soft and Serene',
    description: 'A tranquil kids bedroom with muted tones, soft textures, and elegant lighting creating a peaceful retreat.',
    images: [
      `/image/kidsroom/Kids05/K1.jpg`,
      `/image/kidsroom/Kids05/K2.jpg`,
    ],
  },
  {
    id: 6,
    title: 'Bright and Airy',
    description: 'A fresh and inviting kids bedroom with light colors, ample natural light, and playful decorative elements.',
    images: [
      `/image/kidsroom/Kids06/K1.jpeg`,
      `/image/kidsroom/Kids06/K2.jpeg`,
    ],
  },
  {
    id: 7,
    title: 'Warm and Inviting',
    description: 'A cozy kids room featuring warm wood accents and soft bedding.',
    images: [
      `/image/kidsroom/Kids07/K1.jpeg`,
      `/image/kidsroom/Kids07/K2.jpeg`,
    ],
  },
   {
    id: 8,
    title: 'Modern & Artistic',
    description: 'A stylish kids bedroom with bold wall art and contemporary furniture.',
    images: [
      `/image/kidsroom/Kids08/K1.png`,
      `/image/kidsroom/Kids08/K2.png`,
      `/image/kidsroom/Kids08/K3.png`,
    ],
  },

];

export const KidsRoom = () => {
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
      <h2 className="section-title">KIDS ROOM</h2>
       <p className="section-description">
         Dive into playful and colorful kids room designs that blend creativity, functionality, and fun.
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
