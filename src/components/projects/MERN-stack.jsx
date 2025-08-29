import React from 'react';
import img1 from '../../assets/gallery/mern-homepage.png';
import img2 from '../../assets/gallery/mern-github.png';

const PawsNClaws = () => {
  return (
    <>
      <section id="mern-stack" className="hero-content h-auto">
        <div className="flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <span className="flex flex-row space justify-between align-middle items-center">
              <h1 className="text-4xl font-bold my-2">MERN stack project | Open source template</h1>
              <a href="https://github.com/denverdelamasa/mern-stack" target="_blank" rel="noopener noreferrer" className="btn btn-neutral gap-2">
                <i class="bi bi-github"></i>
                GitHub Repository
              </a>
            </span>
            <p className="mb-5 font-paragraph">
              A simple MERN (MongoDB, Express, React, Node.js) starter project with authentication built in. It comes with 
              the basic login and signup features you need to get up and running fast, while leaving plenty of room to 
              customize and expand. Whether you’re just experimenting with the MERN stack or planning to scale into a full 
              application, this template gives you a clean and reliable starting point.
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[500px] object-cover" />
                <img src={img2} alt="image 2" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[500px] object-cover" />
              </figure>
              <div className="text-xs mb-8 mt-1 items-center text-center text-info">
                <p>Screenshots of my project</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
              The structure is divided into two parts: a backend built with Express and MongoDB, and a frontend created 
              with React and Vite. The backend handles API requests, user models, and authentication logic, while the 
              frontend communicates with it through Axios and provides the user interface. The project also includes example 
              routes, components, and configuration files that can be extended into dashboards, CRUD applications, or other 
              custom features.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PawsNClaws;