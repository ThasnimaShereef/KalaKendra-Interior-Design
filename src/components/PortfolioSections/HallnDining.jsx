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
    title: 'Bold Glam Living Room',
    description: 'A daring design with a leopard mural, luxe velvet seating, and gold details. The dramatic chandelier and marble table add richness, while lighting and textures create visual interest.',
    images: [
      `/image/HallnDining/Living01/L1.jpg`,
      `/image/HallnDining/Living01/L2.jpg`,
      
    ],
  },
  {
    id: 2,
    title: 'Earthy Luxe Lounge',
    description: 'Floor-to-ceiling windows flood this space with light. Neutral tones, soft greens, and textured rugs build a cozy yet elegant atmosphere, enhanced by organic materials and layered furniture.',
    images: [
      `/image/HallnDining/Living02/L1.jpg`,
      `/image/HallnDining/Living02/L2.jpg`,
      `/image/HallnDining/Living02/L3.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Vibrant Contemporary Living',
    description: 'Playful yet refined, this room features geometric wall art, bold blue and yellow accents, and sleek wooden elements. Ample natural light enhances the vibrant and cozy layout.',
    images: [
      `/image/HallnDining/Living03/L1.jpeg`,
      `/image/HallnDining/Living03/L2.jpeg`,
    ],
  },
  {
    id: 4,
    title: 'Grand Ethnic-Modern Living Room',
    description: 'A large turquoise sectional takes center stage in this regal living area. Intricate wall panels and traditional jhoola seating add cultural charm, balanced with marble flooring and modern lighting.',
    images: [
      `/image/HallnDining/Living04/L1.jpeg`,
      `/image/HallnDining/Living04/L2.jpeg`,
    ],
  },
  {
    id: 5,
    title: 'Textured Modern Living Room',
    description: 'Understated tones, wood-paneled walls, and a striped statement chair blend to create a balanced and stylish space. The expansive window opens the room to nature.',
    images: [
      `/image/HallnDining/Living05/L1.jpg`,
      `/image/HallnDining/Living05/L2.jpg`,
      `/image/HallnDining/Living05/L3.jpg`,
      `/image/HallnDining/Living05/L4.jpg`,
      `/image/HallnDining/Living05/L5.jpg`,
      `/image/HallnDining/Living05/L6.jpg`,
    ],
  },
  {
    id: 6,
    title: 'Artistic Modern Dining & Lounge',
    description: 'A sophisticated space merging a cozy white sectional and emerald accents with an elegant dining area. Art pieces, layered textures, and wood tones elevate the contemporary design.',
    images: [
      `/image/HallnDining/Living06/L1.jpg`,
      `/image/HallnDining/Living06/L2.jpg`,
      `/image/HallnDining/Living06/L3.jpg`,
    ],
  },
  {
    id: 7,
    title: 'Contemporary Interior Lounge',
    description: ' A peek into a transitional space featuring floral carpets, mirrored shelving, and a raw staircase. The combination of traditional decor and evolving modern structure offers creative potential.',
    images: [
      `/image/HallnDining/Living07/L1.jpeg`,
      `/image/HallnDining/Living07/L2.jpeg`,
      `/image/HallnDining/Living07/L3.jpeg`,
      
    ],
  },
  {
    id: 8,
    title: 'Monochrome Jungle-Inspired Living Room',
    description: 'A bold black-and-white palette with jungle-themed wallpaper and a patterned rug. Sleek furniture and a striking wooden TV wall create a sharp, editorial vibe with natural undertones.',
    images: [
      `/image/HallnDining/Living08/L1.jpg`,
      `/image/HallnDining/Living08/L2.png`,
      `/image/HallnDining/Living08/L3.jpg`,
      `/image/HallnDining/Living08/L4.jpg`,
      `/image/HallnDining/Living08/L5.png`,
      `/image/HallnDining/Living08/L6.png`,
      `/image/HallnDining/Living08/L7.jpg`,
    ],
  },
  {
    id: 9,
    title: 'Elegant Contemporary Living Room',
    description: 'A chic blend of neutral tones and wooden accents highlighted with gold trims and modern geometric art. Plush seating and accent cushions elevate the comfort and style of this space.',
    images: [
      `/image/HallnDining/Living09/L1.jpeg`,
      `/image/HallnDining/Living09/L2.jpeg`,
    ],
  },
  {
    id: 10,
    title: 'Modern Minimalist Lounge',
    description: ' Clean lines, floating furniture units, and ambient lighting create a sleek and functional living area.',
    images: [
      `/image/HallnDining/Living10/L1.jpg`,
      `/image/HallnDining/Living10/L2.jpg`,
    ],
  },
  {
    id: 11,
    title: 'Dual-Purpose Living & Dining Space',
    description: 'A stylish space seamlessly combining a dining and lounge area. Muted colors with a pop of blue on the sofa and patterned rugs give the room a fresh and cozy appeal.',
    images: [
      `/image/HallnDining/Living11/L1.jpeg`,
      `/image/HallnDining/Living11/L2.jpeg`,
      `/image/HallnDining/Living11/L3.jpeg`,
    ],
  },
  {
    id: 12,
    title: 'Warm Neutrals Living Room',
    description: 'Subtle textures, marble panels, and earthy wooden elements create a grounded and serene atmosphere.',
    images: [
      `/image/HallnDining/Living12/L1.jpeg`,
      `/image/HallnDining/Living12/L2.jpeg`,
      `/image/HallnDining/Living12/L3.jpeg`,
    ],
  },
  {
    id: 13,
    title: 'Soft Blue Accents Living Room',
    description: 'A vibrant sectional in navy blue contrasts beautifully against a soft backdrop of greys and whites.',
    images: [
      `/image/HallnDining/Living13/L1.jpeg`,
      `/image/HallnDining/Living13/L2.jpeg`,
      `/image/HallnDining/Living13/L3.jpeg`,
      `/image/HallnDining/Living13/L4.jpeg`,
      `/image/HallnDining/Living13/L5.jpeg`,
      `/image/HallnDining/Living13/L6.jpeg`,
    ],
  },
  {
    id: 14,
    title: 'Futuristic Luxe Living Lounge',
    description: 'Curved seating, monochrome palette, and a dramatic bronze panel wall reflect a luxurious and avant-garde design.',
    images: [
      `/image/HallnDining/Living14/L1.png`,
      `/image/HallnDining/Living14/L2.png`,
      `/image/HallnDining/Living14/L3.png`,
      `/image/HallnDining/Living14/L4.png`,
    ],
  },
  {
    id: 15,
    title: 'Modern Zen Media Room',
    description: 'A tranquil yet tech-savvy space with clean-lined furniture, wall-mounted TV, and minimalist lighting.',
    images: [
      `/image/HallnDining/Living15/L1.png`,
      `/image/HallnDining/Living15/L2.png`,
      `/image/HallnDining/Living15/L3.png`,
    ],
  },
  {
    id: 16,
    title: 'Art Deco-Inspired Dining Nook',
    description: 'A modern dining setting under a floating staircase, featuring a white oval table, cane chairs, and sculptural mirrors.',
    images: [
      `/image/HallnDining/Living16/L1.png`,
      `/image/HallnDining/Living16/L2.png`,
    ],
  },
];

  export const HallnDining = () => {
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
        <h2 className="section-title">Living & Dining Area</h2>
        <p className="section-description">
           Browse through elegant living and dining spaces that combine comfort, sophistication, and social warmth.
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