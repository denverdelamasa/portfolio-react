import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import DENR_PENRO from '../../assets/gallery/DENR-PENRO.webp';
import Capstone_Project from '../../assets/gallery/capscr1.webp'

const ProjectCards = () => {
    return(
        <>
            <div className="fade-up-scroll card bg-base-300 w-full md:w-md lg:w-lg max-w-lg shadow-xl">
                <figure className="p-2">
                    <img src={DENR_PENRO} alt="DENR PENRO" className="rounded-xl"/>
                </figure>
                <div className="card-body items-left text-left">
                <h2 className="card-title">DENR PENRO Management Service Division - IT department</h2>
                <p className="text-sm mb-2 p-0">Sept 2024 - Jan 2025</p>
                <p>
                    I was involved in Hardware Technical support, mainly PC and printer repairs. I also
                    Did some Inventory management, Documentation of Preventive Maintenance Schedule (PMS).
                </p>
                <div className="justify-center card-actions">
                    <Link className="btn btn-primary w-full" to="/experience#DENRInternship">
                        <i className="bi bi-box-arrow-in-up-right"></i>
                        Learn more
                    </Link>
                </div>
                </div>
            </div>
            <div className="fade-up-scroll card bg-base-300 w-full md:w-md lg:w-xl max-w-lg shadow-xl">
                <figure className="p-2">
                    <img src={Capstone_Project} alt="DENR PENRO" className="rounded-xl"/>
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">The Development of Paws'N Claws Community Hub</h2>
                    <p className="text-sm mb-2 p-0">Oct 2024 - April 2025</p>
                    <p>
                        My College thesis whom I've worked with four other people. My role mostly revolved around 
                        Front-End design and development, and technical writing.
                    </p>
                    <div className="justify-center card-actions">
                        <Link className="btn btn-primary w-full" to="/experience#PawsNClaws">
                            <i className="bi bi-box-arrow-in-up-right"></i>
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCards;