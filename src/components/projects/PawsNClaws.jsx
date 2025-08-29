import React from 'react';

import img1 from '../../assets/gallery/capscr1.webp'; 
import img2 from '../../assets/gallery/capscr2.webp'; 

const PawsNClaws = () => {
  return (
    <>
      <section id="PawsNClaws" className="hero-content h-auto">
        <div className="flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <span className="flex flex-row space justify-between align-middle items-center">
              <h1 className="text-4xl font-bold my-2">Capstone Project - Paws'N Claws | (Archived)</h1>
              <a href="https://github.com/denverdelamasa/PawsNClaws-archive" target="_blank" rel="noopener noreferrer" className="btn btn-neutral gap-2">
                <i class="bi bi-github"></i>
                GitHub Repository
              </a>
            </span>
            <p className="mb-5 font-paragraph">
               During my college thesis project, I've worked with a website called "Paws'N Claws" 
               along with my four colleagues. My role mostly revolved on front-end design, development and UI functionality, 
               and a little bit of researching here and there...
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[500px] object-cover" />
                <img src={img2} alt="image 2" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[500px] object-cover" />
              </figure>
              <div className="text-xs mb-8 mt-1 items-center text-center text-info">
                <p>Some screenshots of the site's HomePage</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
              <p className="mb-3 font-paragraph">
                For this project, I worked with the following web technologies:
              </p>
              <ul className="mb-5 list-disc list-inside font-paragraph space-y-2">
                <li>
                  <strong>Laravel</strong> (backend) with <strong>Vite</strong> for fast and efficient builds.
                </li>
                <li>
                  <strong>Vue 3 + Vue Router</strong> for building a dynamic Single Page Application.
                </li>
                <li>
                  <strong>TailwindCSS</strong> with <strong>DaisyUI</strong> and <strong>Flowbite</strong> for responsive, modern UI design.
                </li>
                <li>
                  <strong>Axios</strong> for seamless API communication between frontend and backend.
                </li>
              </ul>
            </p>
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