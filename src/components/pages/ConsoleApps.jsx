import React from 'react';
import ConsoleTerminal from '../console/ConsoleTerminal';
import SEO from "../SEO";

const ConsoleApps = () => {
  return (
    <>
      <SEO 
        title="Console Projects | Denver Dela Masa" 
        description="Showcasing my early console-based applications built with Python. Explore projects created using Pyoide and discover my programming journey from the basics to more advanced development." 
      />
      <section id="Console" className="hero flex flex-col h-auto w-[90vw] md:w-[70vw]">
        <div className='hero-content w-full flex flex-col h-auto py-4 my-6 mx-auto'>
            <div className="w-full justify-center text-center">
              <h1 className="text-5xl font-bold my-2 fade-up-scroll mx-auto">
                  <i className="bi bi-terminal-fill mr-2"></i>
                  Simulated Console
              </h1>
              <p className="fade-up-scroll max-w-prose mx-auto">
                  This dedicated page showcases my previous school projects originally developed in C and C#, 
                  which I have since recreated in Python.
              </p>
              <p className="fade-up-scroll text-xs italic text-warning mx-auto my-2">
                  "This page is optimized for desktop — please switch to a desktop for the best experience."
              </p>
            </div>
            <div className="w-full h-full py-4 fade-up-scroll overflow-x-auto">
                <ConsoleTerminal className="mx-auto"/>
            </div>
            <div className="w-full justify-center text-center">
              <p className="fade-up-scroll max-w-prose mx-auto">
                This console was created to emulate my early college programming projects.
                For more details about the original implementation, please refer to my GitHub repository: <br/>
                <a href="https://github.com/denverdelamasa/college-projects" target="_blank" className="ml-2 hover:underline text-blue-500">
                  https://github.com/denverdelamasa/college-projects
                </a>
              </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default ConsoleApps;