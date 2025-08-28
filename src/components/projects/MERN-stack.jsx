import React from 'react';
import img1 from '../../assets/gallery/mern-homepage.png';
import img2 from '../../assets/gallery/mern-github.png';

const PawsNClaws = () => {
  return (
    <>
      <section id="mern-stack" className="hero-content h-auto">
        <div className="flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-4xl font-bold my-2">MERN stack project | Open source template</h1>
            <p className="mb-5 font-paragraph">
              A simple MERN (MongoDB, Express, React, Node.js) starter project with authentication. This template 
              provides the essential building blocks for a login/signup system so you can quickly build and expand 
              into a full application!
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[1000px] object-cover" />
                <img src={img2} alt="image 2" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[1000px] object-cover" />
              </figure>
              <div className="text-xs mb-8 mt-1 items-center text-center text-accent">
                <p>Screenshots of my project</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
              This project is a MERN (MongoDB, Express, React, Node.js) starter template designed to provide a simple 
              authentication system out of the box. It comes with user signup and login features, password hashing using 
              bcrypt, and secure session management powered by JWT tokens. The goal is to give developers a ready-to-use 
              foundation for building applications that require authentication, so they can focus on adding features instead 
              of setting up the basics.
            </p>
            <p className="mb-5 font-paragraph">
              The structure is divided into two parts: a backend built with Express and MongoDB, and a frontend created 
              with React and Vite. The backend handles API requests, user models, and authentication logic, while the 
              frontend communicates with it through Axios and provides the user interface. The project also includes example 
              routes, components, and configuration files that can be extended into dashboards, CRUD applications, or other 
              custom features.
            </p>
            <p className="mb-5 font-paragraph">
              To view the github repository, <a className="text-blue-500 hover:underline" href="https://github.com/denverdelamasa/mern-stack.git" target="_blank">click here</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PawsNClaws;