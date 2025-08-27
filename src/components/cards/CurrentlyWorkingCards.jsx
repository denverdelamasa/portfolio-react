import React from "react";

import freecodecamp from '../../assets/gallery/freecodecamp-first-activity.webp';
import kodekloud from '../../assets/gallery/KodeKloud-Docker.webp';
import Operating from '../../assets/gallery/operating.webp';
import mernproject from '../../assets/gallery/mern-skeleton-project.png';

const ProjectCards = () => {
    return(
        <>
            <div className="fade-up-scroll py-4 flex lg:flex-row flex-col-reverse gap-4">
                <figure className="md:block md:w-1/2 lg:w-2/5 flex items-center">
                    <img 
                        src={freecodecamp} 
                        alt="DENR PENRO" 
                        className=" w-full h-auto object-cover max-h-[200px]"
                    />
                </figure>
                <div className="flex flex-col gap-2 my-auto md:w-1/2 lg:w-3/5">
                    <h2 className="card-title text-2xl">freecodecamp.org | Responsive Web Design</h2>
                    <p className="text-sm mb-2 p-0">Started at July 2025</p>  
                    <p className="text-sm p-0">
                        Currently working on how to further improve my CSS knowledge by revisiting the fundamentals 
                        of creating classic HTML5 website     
                    </p>
                </div>
            </div>
            <div className="divider my-4"></div>
            <div className="fade-up-scroll py-4 flex lg:flex-row flex-col-reverse gap-4">
                    <figure className="md:w-1/2 lg:w-2/5 flex items-center">
                        <img 
                            src={kodekloud} 
                            alt="DENR PENRO" 
                            className=" my-auto w-full h-auto object-cover max-h-[200px]"
                        />
                    </figure>
                <div className="flex flex-col gap-2 my-auto md:w-1/2 lg:w-3/5">
                    <h2 className="card-title text-2xl">KodeKloud | Docker Training Course for the Absolute Beginner</h2>
                    <p className="text-sm mb-2 p-0">Started at July 2025</p>  
                    <p className="text-sm p-0">
                        Trying to learn more about DevOps and to understand it's principles out of curiosity starting with Docker. 
                        But I realized how it is important in modern software development and operations teams
                    </p>
                </div>
            </div>
            <div className="divider my-4"></div>
            <div className="fade-up-scroll py-4 flex lg:flex-row flex-col-reverse gap-4">
                    <figure className="md:w-1/2 lg:w-2/5 flex items-center">
                        <img 
                            src={Operating} 
                            alt="DENR PENRO" 
                            className=" my-auto w-full h-auto object-cover max-h-[200px]"
                        />
                    </figure>
                <div className="flex flex-col gap-2 my-auto md:w-1/2 lg:w-3/5">
                    <h2 className="card-title text-2xl">Technical Team | Bethany United Methodist Church</h2>
                    <p className="text-sm mb-2 p-0">Started at August 2024 - Present</p>  
                    <p className="text-sm p-0">
                        Currently working as a volunteer in the technical team of Bethany United Methodist Church,
                        where I help with the technical aspects of the church's services, including sound and video production.
                    </p>
                </div>
            </div>
            <div className="divider my-4"></div>
            <div className="fade-up-scroll py-4 flex lg:flex-row flex-col-reverse gap-4">
                    <figure className="md:w-1/2 lg:w-2/5 flex items-center">
                        <img 
                            src={mernproject} 
                            alt="mern skeleton project" 
                            className=" my-auto w-full h-auto object-cover max-h-[200px]"
                        />
                    </figure>
                <div className="flex flex-col gap-2 my-auto md:w-1/2 lg:w-3/5">
                    <h2 className="card-title text-2xl">MERN stack project| Open source template</h2>
                    <p className="text-sm mb-2 p-0">Started at August 2025</p>  
                    <p className="text-sm p-0">
                        I'm making a MERN stack skeleton project that can be used as a template for future projects.
                        This project is still in the early stages of development, but I plan to add more features and
                        functionality in the future.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectCards;