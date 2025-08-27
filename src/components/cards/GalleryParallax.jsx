import React, { useState, useEffect } from 'react';
import Background from '../../assets/parallaxBG/GalleryParallaxBG.webp';

import GalleryAnimated from '../animations/GalleryAnimation';

const GalleryParallax = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="relative w-full my-4 md:my-8 lg:my-12  overflow-hidden min-h-[300px] flex items-center justify-center group">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-700"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900/90"></div>
      
      {/* Content */}
      <div className={`relative z-10 p-8 text-center text-white transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <figure className="max-w-3xl mx-auto">
          <blockquote className="mx-auto mb-6">
            <div className="flex flex-row gap-x-4 my-auto justify-center items-center">
              <GalleryAnimated />
              <h1 className="text-4xl md:text-6xl font-bold fade-up-scroll">My Gallery</h1>
            </div>
          </blockquote>
          
          <figcaption className="flex flex-col items-center">
            <p className="fade-up-scroll max-w-prose mt-0 text-xs md:text-sm">
              Here's a collection of photos that capture my work, hobbies, 
              and passions. No particular order, just moments that represent what I enjoy.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default GalleryParallax;