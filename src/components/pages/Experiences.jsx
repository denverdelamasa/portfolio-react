import React from 'react';
import { useEffect } from 'react';

import PawsNClaws from '../projects/PawsNClaws';
import DENRInternship from '../projects/DENRInternship';
import MernProject from '../projects/MERN-stack';

import ExperiencesParallax from '../cards/ExperiencesParallax';
import SEO from "../SEO";

const Experience = () => {
  useEffect(() => {
    const lines = document.querySelectorAll('.type-line');
    const totalDuration = 23000; // total time in ms

    const loopAnimation = () => {
      lines.forEach((line) => {
        line.style.animation = 'none';
        void line.offsetWidth; // trigger reflow
        line.style.animation = '';
      });
    };

    const interval = setInterval(loopAnimation, totalDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <SEO 
      title="Experiences | Denver Dela Masa" 
      description="Explore my professional experiences in IT support, web development, and creative design. Learn how my skills and background can contribute to future projects." 
    />
      <section id="Experiences" className="hero flex flex-col m-0 transition-all duration-300">
        <ExperiencesParallax/>
        <div className="px-0 sm:px-4 md:px-18 lg:px-34">
          <PawsNClaws />
            <div className="divider"></div>
          <DENRInternship />
            <div className="divider"></div>
          <MernProject/>
        </div>
      </section>
    </>
  ); 
};

export default Experience;