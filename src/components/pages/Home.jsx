import React from 'react';

import WorkedWithCards from '../cards/WorkedWithCards';
import CurrentlyWorkingCards from '../cards/CurrentlyWorkingCards';
import HomeAnimation from '../animations/HomeAnimation';
import BaybayinAnimation from '../animations/BaybayinAnimation';
import GitHubStats from '../GitHubStats';
import MyQuote from '../cards/MyQuote';
import SEO from "../SEO";

const Home = ({ themeName }) => {
  return (
    <>
        <SEO 
            title="Portfolio | Denver Dela Masa" 
            description="Welcome to my portfolio! I'm Denver Dela Masa, a graphic designer, illustrator, 
            and front-end web developer with a passion for creativity and technology. Explore my projects and experiences."
        />
        <section id="Home" className="hero mx-auto  min-h-screen flex flex-col gap-y-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8 mt-12">
                <div className="w-full max-w-[600px] md:max-w-xl mx-auto mb-6 lg:mb-0 order-1 lg:order-2">
                    <BaybayinAnimation />
                </div>

                <div className="w-full lg:max-w-3xl order-2 lg:order-1">
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-[1000] fade-up-scroll">
                        Illustrator. <br></br>
                        Web Dev. <br></br>
                        Tech Support.
                    </h1>
                    <p className="py-4 md:py-6 fade-up-scroll text-sm">
                        Hi, my name is <strong>Denver Dela Masa</strong>. I specialize in graphic design, art 
                        illustration, and front-end web development, with a strong foundation in computer hardware 
                        support and technical troubleshooting. I’m always eager to learn new skills and collaborate 
                        with people who share the same passion for creativity and technology.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <a 
                            href="https://instagram.com/wanedanvers" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-instagram mr-1"></i>
                            Instagram
                        </a>
                        <a 
                            href="https://linkedin.com/in/denverdelamasa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-linkedin mr-1"></i>
                            LinkedIn
                        </a>
                        <a 
                            href="mailto:denver.delamasa@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-envelope-at-fill mr-1"></i>
                            Email
                        </a>
                        <a 
                            href="https://uiverse.io/profile/denverdelamasa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-link-45deg"></i>
                            uiverse
                        </a>
                        <a 
                            href="https://dribbble.com/denver-dela-masa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-dribbble"></i>
                            Dribble
                        </a>
                        <a 
                            href="https://leetcode.com/u/denverdelamasa/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-link-45deg"></i>
                            Leetcode
                        </a>
                        <a 
                            href="https://github.com/denverdelamasa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-github mr-1"></i>
                            Github
                        </a>
                        <a 
                            href="https://www.duolingo.com/profile/Wyaneee" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fade-up-scroll badge badge-info hover:underline hover:scale-105 transition-transform duration-200"
                        >
                            <i className="bi bi-link-45deg"></i>
                            Duolingo
                        </a>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
                <div id="" className="hero-content h-auto w-full justify-start">
                    <div className='fade-up-scroll mx-auto'>
                        <h1 className="text-4xl font-bold mb-2">What I’ve Worked On:</h1>
                        <p className="text-base-content mb-7 text-md max-w-prose">
                            Here’s a showcase of the projects and experiences that shaped my journey. From solving 
                            technical problems to building creative solutions, these works highlight what I’ve learned 
                            and what I enjoy creating.
                        </p>
                        <div className="w-full h-auto flex-wrap flex gap-8">
                            <WorkedWithCards/>
                        </div>
                    </div>
                </div>
            <div className="divider"></div>
                <div className="w-full flex flex-wrap">
                    <GitHubStats themeName={themeName} />   
                </div>
            <div className="divider"></div>
                <div id="" className="hero-content h-auto w-full justify-start">
                    <div className='fade-up-scroll mx-auto'>
                        <h1 className="text-4xl font-bold mb-2">What I'm currently up to:</h1>
                        <p className="text-base-content mb-7 text-md max-w-prose">
                            What I’m currently up to: A peek at the projects and learning goals I’m focused on 
                            right now as I continue growing and leveling up my skills.
                        </p>
                        <div className="w-full h-auto flex-col flex gap-2 px-12">
                            <CurrentlyWorkingCards/>
                        </div>
                    </div>
                </div>
            <div className="divider"></div>
                <MyQuote/>
        </section>
    </>
  );
};

export default Home;