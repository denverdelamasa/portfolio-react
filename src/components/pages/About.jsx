import React from 'react';
import { Link } from 'react-router-dom';

import ProfileCard from '../cards/ProfileCard';
import AboutHero from '../cards/AboutHero';

import sampleart from '../../assets/gallery/art/9.webp';

import AboutProgramList from '../cards/AboutProgramList';
import SEO from "../SEO";

// I actually Based this about page to Viktor Eke's so... I kinda wanna 
// change it now since I now have my own vision of this portfolio..
// TODO: About Overhaul - deviate from reference
// 1.) Add other bdazzles (literally just seach online for unique CSS's)
// 2.) just... be unique... 
// 3.) I haven't thought about no. 3 yet...

const About = ({ setActivePage }) => {
  return (
    <>
    <SEO 
      title="About Me | Denver Dela Masa" 
      description="Learn more about Denver Dela Masa, a creative professional with experience in graphic design, art illustration, IT support, and front-end web development. Discover my journey and skills." 
    />
    <section id="About" className="hero h-auto  pt-12">
      <div className="hero-content text-left flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-x-2"> 
          <div className="flex flex-col pr-0 lg:pr-16 gap-y-2 order-2 lg:order-1">
            <AboutHero />
            <div className="my-2">
              <h1 className="text-3xl font-bold fade-up-scroll">About Me</h1>
              <p className="mb-5 font-paragraph fade-up-scroll">
                My skills focus on hardware maintenance, PC repair, and troubleshooting. 
                I enjoy diagnosing issues and bringing systems back to life — it’s both challenging 
                and rewarding to restore something to full working order.
              </p>
              <div className="card card-body text-lg italic border-2 my-8 border-accent shadow-lg fade-up-scroll max-w-[600px]">
                "To me, learning is a privilege. It gives us the opportunity to grow, to adapt, 
                and to overcome the challenges that shapes our very being."
              </div>
              <p className="mb-5 font-paragraph fade-up-scroll">
                I also have a creative side — I do art and design, mainly digital illustration. On top of that, 
                I code too, focusing on front-end web development, which is why I built this portfolio.
              </p>
              <Link to="/gallery#Gallery">
                <button className="btn btn-primary fade-up-scroll">
                  <i className="bi bi-collection"></i>
                  My Gallery
                </button>
              </Link>
            </div>
            <div className="divider-default"></div>
            <div className="flex flex-col max-w-full">
                <div className="my-4">
                  <h1 className="text-3xl font-bold mt-12 mb-4 fade-up-scroll">What keeps me busy beyond coding?</h1>
                  <p className="mb-5 font-paragraph fade-up-scroll">
                    Outside of coding, I dive into creative and community activities. I love doing digital art, mostly character 
                    illustrations — sometimes just for fun, sometimes to study art theory. Music is also a big part of me: I play a 
                    bit of guitar and bass, but the drums are my main thing. I’m part of our church’s PAW team, where I get to serve 
                    as a drummer.
                  </p>
                  <div className="my-12 flex-wrap flex text-content">
                    <img src={sampleart} alt="sample art from my insta" className='border-2 border-accent w-full h-auto max-h-[400px] object-cover' />
                    <p className="text-xs text-accent"></p>
                  </div>
                  <p className="mb-5 font-paragraph fade-up-scroll">
                    I like playing video games too — mostly League of Legends, but I’ve also grown to enjoy indie games 
                    like Stardew Valley and Blasphemous. What I love most are games that challenge me with their mechanics 
                    while also pulling me in with great stories and lore.
                  </p>
                </div>

                <div className="my-4">
                  <h2 className="text-4xl font-bold mt-12 mb-4 fade-up-scroll">
                    My Soft Skills
                  </h2>
                  <p className="mb-6 text-base font-paragraph text-content fade-up-scroll">
                    A few skills I believe are worth highlighting:
                  </p>
                  <ul className="list-disc list-inside space-y-2 fade-up-scroll">
                    <li>
                      <strong>People & Communication – </strong> 
                      Skilled at building genuine connections, sharing ideas clearly, and collaborating with diverse teams while maintaining a positive and professional approach.
                    </li>
                    <li>
                      <strong>Calm, Patient & Quick Learner – </strong> 
                      Adaptable and steady under pressure, with the ability to learn quickly, think things through, and handle challenges without rushing.
                    </li>
                    <li>
                      <strong>Committed & Practical – </strong> 
                      Dedicated and responsible, with a focus on delivering results efficiently by keeping solutions grounded and practical.
                    </li>
                  </ul>
                </div>
                <div className="my-4 fade-up-scroll">
                  <AboutProgramList />
                </div>

            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ProfileCard/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;