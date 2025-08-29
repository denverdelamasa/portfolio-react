import React, { useState, useEffect } from 'react';
import StarryNight from '../../assets/parallaxBG/starrynight.webp';

const MyQuote = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="relative w-full my-16 md:my-24 lg:my-32  overflow-hidden min-h-[500px] flex items-center justify-center group border-2 border-accent">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-700"
        style={{
          backgroundImage: `url(${StarryNight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900/90"></div>
      
      {/* Animated stars effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className={`relative z-10 p-8 text-center transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <figure className="max-w-3xl mx-auto">
          {/* Decorative elements */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-amber-400 rounded-full mb-3"></div>
          </div>
          
          <svg 
            className="w-12 h-12 mx-auto mb-6 text-amber-400 opacity-90" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          
          <blockquote className="mb-8">
            <a className="text-white text-3xl lg:text-4xl font-serif italic font-light leading-tight md:leading-snug">
              "I am always doing what I cannot do yet, in order to learn how to do it."
            </a>
          </blockquote>
          
          <figcaption className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-amber-400 mb-4 opacity-80"></div>
            <div className="text-center">
              <div className="font-medium text-lg tracking-wide text-amber-50">Vincent van Gogh</div>
              <div className="text-sm text-indigo-200 mt-1 italic font-light">
                The Letters of Vincent van Gogh
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default MyQuote;