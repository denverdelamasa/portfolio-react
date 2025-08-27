import React from 'react';

import img1 from '../../assets/gallery/capscr1.webp'; 
import img2 from '../../assets/gallery/capscr2.webp'; 

const PawsNClaws = () => {
  return (
    <>
      <section id="PawsNClaws" className="hero-content h-auto">
        <div className="flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-4xl font-bold my-2">Capstone Project - Paws'N Claws</h1>
            <p className="mb-5 font-paragraph">
               During my college thesis project, I've worked with a website called "Paws'N Claws" 
               along with my four colleagues. My role mostly revolved on front-end design, development and UI functionality, 
               and a little bit of researching here and there...
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className=" shadow-xl w-full max-h-[250px] transition-all hover:max-h-[1000px] object-cover" />
                <img src={img2} alt="image 2" className=" shadow-xl w-full max-h-[250px] transition-all hover:max-h-[1000px] object-cover" />
              </figure>
              <div className="text-xs mb-8 mt-1 items-center text-center text-accent">
                <p>Some screenshots of the site's HomePage</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
               This project helped me apply everything I understand on how websites are made, it also helped me 
               apply real world scenario like: how to work as a team, solve technical issues, and meet deadlines I am required to.
               <br/>
               <br/>
               Although the site is no longer hosted, it was a major learning experience that increased my understanding in 
               web development and team collaboration.   
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PawsNClaws;