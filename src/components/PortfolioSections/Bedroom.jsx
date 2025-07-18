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
    title: 'Elegant Teal Accent Bedroom',
    description: 'This serene and sophisticated bedroom features a bold teal and gold panel headboard, modern pendant lighting, and a mix of textures.',
    images: [
      `/image/bedroom/Bedroom01/B1.jpeg`,
      `/image/bedroom/Bedroom01/B2.jpeg`,
      `/image/bedroom/Bedroom01/B3.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Contemporary Luxe with Geometric Drama',
    description: 'A modern and moody bedroom that blends textures and geometric patterns.',
    images: [
      `/image/bedroom/Bedroom02/B1.jpg`,
      `/image/bedroom/Bedroom02/B2.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Chevron Elegance with Soft Pastels',
    description: 'A chic bedroom boasting a dual-tone chevron padded wall, soft ambient lighting, and seamless integration of wood and pastel hues.',
    images: [
      `/image/bedroom/Bedroom03/B1.jpeg`,
      `/image/bedroom/Bedroom03/B2.jpeg`,
    ],
  },
  {
    id: 4,
    title: 'Luxury Suite with Sculptural Appeal',
    description: 'This grand bedroom emphasizes luxury with its high padded headboard, sweeping chandeliers, and warm, ambient lighting.',
    images: [
      `/image/bedroom/Bedroom04/B1.jpg`,
      `/image/bedroom/Bedroom04/B2.jpg`,
      `/image/bedroom/Bedroom04/B3.jpg`,
      `/image/bedroom/Bedroom04/B4.jpg`,
    ],
  },
  {
    id: 5,
    title: 'Minimal Modern Retreat',
    description: 'With its clean lines, soft tones, and vertical paneling, this bedroom is a perfect blend of minimalism and comfort.',
    images: [
      `/image/bedroom/Bedroom05/B1.jpg`,
      `/image/bedroom/Bedroom05/B2.jpg`,
      `/image/bedroom/Bedroom05/B3.jpg`,
      `/image/bedroom/Bedroom05/B4.jpg`,
    ],
  },
  {
    id: 6,
    title: 'Modern Luxe Elegance',
    description: 'A sophisticated bedroom with marble accents, pendant lighting, and a serene beige and gold palette.',
    images: [
      `/image/bedroom/Bedroom06/B1.jpg`,
      `/image/bedroom/Bedroom06/B2.jpg`,
      `/image/bedroom/Bedroom06/B3.jpg`,
      `/image/bedroom/Bedroom06/B4.jpg`,
      `/image/bedroom/Bedroom06/B5.jpg`,
    ],
  },
  {
    id: 7,
    title: 'Contemporary Wood Glam',
    description: 'A bold bedroom featuring rich wood paneling, deep hues, and a statement headboard with luxe textures.',
    images: [
      `/image/bedroom/Bedroom07/B1.jpeg`,
      
    ],
  },
  {
    id: 8,
    title: 'Neutral Chic Retreat',
    description: 'A soft-toned bedroom with layered textures, geometric wall art, and a calming, cozy atmosphere.',
    images: [
      `/image/bedroom/Bedroom08/B1.jpg`,
      `/image/bedroom/Bedroom08/B2.jpg`,
      `/image/bedroom/Bedroom08/B3.jpg`,
      `/image/bedroom/Bedroom08/B4.jpg`,
      `/image/bedroom/Bedroom08/B5.jpg`,
    ],
  },
  {
    id: 9,
    title: 'Functional Modern Comfort',
    description: 'A stylish yet practical bedroom with integrated study space and warm lighting details.',
    images: [
      `/image/bedroom/Bedroom09/B1.jpg`,
      `/image/bedroom/Bedroom09/B2.jpg`,
      `/image/bedroom/Bedroom09/B3.jpg`,
      `/image/bedroom/Bedroom09/B4.jpg`,
      `/image/bedroom/Bedroom09/B5.jpg`,
      `/image/bedroom/Bedroom09/B6.jpg`,
    ],
  },
  {
    id: 10,
    title: 'Minimalist Blue Serenity',
    description: 'A clean and modern bedroom with vertical panel detailing and a cool navy-and-lavender color scheme.',
    images: [
      `/image/bedroom/Bedroom10/B1.jpeg`,
    ],
  },
  {
    id: 11,
    title: 'Modern Luxe with Emerald Accents',
    description: 'This bedroom exudes a luxurious vibe with its emerald green and gold theme. The symmetrical wall art above the taupe upholstered bed, paired with statement lighting fixtures and sleek gold-accented nightstands, creates a refined and elegant aesthetic.',
    images: [
      `/image/bedroom/Bedroom11/B1.jpg`,
      `/image/bedroom/Bedroom11/B2.jpg`,
      `/image/bedroom/Bedroom11/B3.jpg`,
    ],
  },
  {
    id: 12,
    title: 'Contemporary Comfort with a Bold Blue Twist',
    description: 'Designed for modern living, this bedroom combines simplicity with a vibrant splash of royal blue. The plush velvet headboard adds depth and texture, while the neutral backdrop and wooden wardrobe introduce warmth.',
    images: [
      `/image/bedroom/Bedroom12/B1.jpeg`,
      `/image/bedroom/Bedroom12/B2.jpeg`,
      `/image/bedroom/Bedroom12/B3.jpeg`,
      `/image/bedroom/Bedroom12/B4.jpeg`,
    ],
  },
  {
    id: 13,
    title: 'Understated Elegance in Earthy Tones',
    description: 'A soothing palette of taupe, grey, and brown defines this serene space. The tufted headboard, paired with sophisticated wall paneling and ambient lighting, creates a calming atmosphere.',
    images: [
      `/image/bedroom/Bedroom13/B1.jpeg`,
      `/image/bedroom/Bedroom13/B2.jpeg`,
      `/image/bedroom/Bedroom13/B3.jpeg`,
      `/image/bedroom/Bedroom13/B4.jpeg`,
      `/image/bedroom/Bedroom13/B5.jpeg`,
    ],
  },
  {
    id: 14,
    title: 'Sleek Sophistication in Deep Blue',
    description: 'This bedroom features a striking blue accent wall with vertical panel detailing, lending a bold and contemporary character.',
    images: [
      `/image/bedroom/Bedroom14/B1.jpeg`,
      `/image/bedroom/Bedroom14/B2.jpeg`,
      `/image/bedroom/Bedroom14/B3.jpeg`,
    ],
  },
  {
    id: 15,
    title: 'Minimal Chic with a Warm Touch',
    description: 'Soft beige tones and wooden finishes set a cozy tone in this bedroom. The padded headboard, flanked by built-in shelving and clean wardrobe lines, offers a clutter-free and kid-friendly space.',
    images: [
      `/image/bedroom/Bedroom15/B1.jpeg`,
      `/image/bedroom/Bedroom15/B2.jpeg`,
      `/image/bedroom/Bedroom15/B3.jpeg`,
    ],
  },
  {
    id: 16,
    title: 'Classic Luxury Bedroom with Ornate Detailing',
    description: 'This room features a regal aesthetic with an intricately carved headboard and elegant wall mouldings.',
    images: [
      `/image/bedroom/Bedroom16/B1.jpeg`,
      `/image/bedroom/Bedroom16/B2.jpeg`,
      `/image/bedroom/Bedroom16/B3.jpeg`,
    ],
  },
  {
    id: 17,
    title: 'Minimalist Bedroom with Geometric Wall Accents',
    description: 'Showcasing a clean and simple look, this bedroom has a chevron-patterned accent wall with arch-shaped cutouts, adding subtle architectural interest.',
    images: [
      `/image/bedroom/Bedroom17/B1.jpeg`,
      `/image/bedroom/Bedroom17/B2.jpeg`,
      `/image/bedroom/Bedroom17/B3.jpeg`,
    ],
  },
  {
    id: 18,
    title: 'Modern Room with Soft Backlighting and Warm Tones',
    description: 'This bedroom highlights a serene and modern vibe with textured paneling and warm LED strip lighting.',
    images: [
      `/image/bedroom/Bedroom18/B1.jpeg`,
      `/image/bedroom/Bedroom18/B2.jpeg`,
    ],
  },
  {
    id: 19,
    title: 'Contemporary Zen-Inspired Bedroom',
    description: 'A calm, neutral-toned space with a soft beige headboard and abstract decor on a ribbed white accent wall.',
    images: [
      `/image/bedroom/Bedroom19/B1.png`,
      `/image/bedroom/Bedroom19/B2.png`,
      `/image/bedroom/Bedroom19/B3.png`,
      `/image/bedroom/Bedroom19/B4.png`,
    ],
  },
  {
    id: 20,
    title: 'Stylish Navy and Wood Bedroom',
    description: 'Bold navy blue contrasts with warm wood finishes in this modern bedroom. Features include custom wardrobe detailing, a cozy cushioned headboard, and an oversized fabric blind.',
    images: [
      `/image/bedroom/Bedroom20/B1.png`,
      `/image/bedroom/Bedroom20/B2.png`,
      `/image/bedroom/Bedroom20/B3.png`,
      `/image/bedroom/Bedroom20/B4.png`,
    ],
  },
  {
    id: 21,
    title: 'Minimalist Modern Bedroom',
    description: 'A warm and calming space designed with sleek wooden accents, neutral tones, and subtle lighting for a tranquil retreat.',
    images: [
      `/image/bedroom/Bedroom21/B1.png`,
      `/image/bedroom/Bedroom21/B2.png`,
      `/image/bedroom/Bedroom21/B3.png`,
      `/image/bedroom/Bedroom21/B4.png`,
    ],
  },
  {
    id: 22,
    title: 'Elegant Contemporary Bedroom',
    description: 'A refined blend of modern paneling, muted colors, and gold detailing creates a sophisticated and cozy ambiance.',
    images: [
      `/image/bedroom/Bedroom22/B1.png`,
      `/image/bedroom/Bedroom22/B2.png`,
      `/image/bedroom/Bedroom22/B3.png`,
      `/image/bedroom/Bedroom22/B4.png`,
    ],
  },
];

export const Bedroom = () => {
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
      <h2 className="section-title">BEDROOM</h2>
       <p className="section-description">
         Discover tranquil and luxurious bedroom interiors crafted for comfort, style, and relaxation.
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
