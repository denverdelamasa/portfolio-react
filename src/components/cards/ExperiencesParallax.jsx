import React, { useState, useEffect } from 'react';
import Background from '../../assets/parallaxBG/ExperienceParallaxBG.webp';

import ExperiencesAnimated from '../animations/ExperiencesAnimation';

const ExperiencesParallax = () => {
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
            <div className="flex flex-row gap-x-4 my-auto text-left justify-center items-center">
              <ExperiencesAnimated />
              <h1 className="text-3xl md:text-6xl font-bold fade-up-scroll">Relevant Experiences</h1>
            </div>
          
          <figcaption className="flex flex-col items-center">
            <p className="fade-up-scroll max-w-prose mt-0 text-xs md:text-sm">
              Here are some of my experiences, currently in the field of web development and hardware support.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ExperiencesParallax;