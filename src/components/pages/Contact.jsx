import React from 'react';
import EmailJS from '../../utils/EmailJS';
import SEO from "../SEO";

// TODO: rehaul
// 1.) Maybe add something like a hyperlink through my instagrampage?
// 2.) Improve email.js form, it looks wonky
// 3.) maybe add a little bdazzle animations like the goated portfolios from this: https://victoreke.com/blog/portfolio-ideas-an-open-source-repository-for-inspiration
// 4.) bro tbh these people are goated af, I just graduated bru wdym there are projects out there that look like a website from an alien mothership?!?!? xDD

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact | Denver Dela Masa" 
        description="Get in touch with Denver Dela Masa for collaborations, freelance projects, or professional opportunities. Reach out via email, social media, or the contact form." 
      />
      <section id="Contact" className="hero mx-auto flex items-center justify-center px-4 pb-4">
        <div className="hero-content h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coffee art */}
          <div className="fade-up-scroll grid place-items-center w-full h-full">
            <div className="coffee-container my-auto w-full max-w-[400px] h-[280px] scale-60 sm:scale-75 lg:scale-100 shadow-xl">
              <div className="coffee-header">
                <div className="coffee-header__buttons coffee-header__button-one"></div>
                <div className="coffee-header__buttons coffee-header__button-two"></div>
                <div className="coffee-header__display"></div>
                <div className="coffee-header__details"></div>
              </div>
              <div className="coffee-medium">
                <div className="coffe-medium__exit"></div>
                <div className="coffee-medium__arm"></div>
                <div className="coffee-medium__liquid"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
                <div className="coffee-medium__cup"></div>
              </div>
              <div className="coffee-footer"></div>
            </div>
            <div className="space-y-2 w-auto max-w-[400px] mt-4">
              <span className="text-sm my-auto flex md:flex-row flex-col mx-auto text-start">
                <p className="font-semibold text-base-content my-auto text-xs">
                  Your message will be sent to:
                </p>
                <p className="font-semibold text-base-content my-auto text-xs ml-1">
                <i className="bi bi-send-fill my-auto mx-2 ml-2"></i>
                  denver.delamasa@gmail.com
                </p>
              </span>
            </div>
          </div>
          {/*the labels & form */}
          
          <div className="w-full fade-up-scroll">
            <h1 className="text-5xl md:text-6xl font-extrabold mt-4 text-base-content">
              Let's Connect!
            </h1>
            <p className="text-lg mt-2 mb-4 text-base-content/70">
              Got a question or idea? Drop me a message below...
            </p>
            <EmailJS/>
          </div>
          <style>
            {`
              .coffee-container {
                position: relative;
              }

              .coffee-header {
                width: 100%;
                height: 80px;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #ddcfcc;
                border-radius: 10px;
              }

              .coffee-header__buttons {
                width: 25px;
                height: 25px;
                position: absolute;
                top: 25px;
                background-color: #282323;
                border-radius: 50%;
              }

              .coffee-header__buttons::after {
                content: "";
                width: 8px;
                height: 8px;
                position: absolute;
                bottom: -8px;
                left: calc(50% - 4px);
                background-color: #615e5e;
              }

              .coffee-header__button-one {
                left: 15px;
              }

              .coffee-header__button-two {
                left: 50px;
              }

              .coffee-header__display {
                width: 50px;
                height: 50px;
                position: absolute;
                top: calc(50% - 25px);
                left: calc(50% - 25px);
                border-radius: 50%;
                background-color: #9acfc5;
                border: 5px solid #43beae;
                box-sizing: border-box;
              }

              .coffee-header__details {
                width: 8px;
                height: 20px;
                position: absolute;
                top: 10px;
                right: 10px;
                background-color: #9b9091;
                box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
              }

              .coffee-medium {
                width: 90%;
                height: 160px;
                position: absolute;
                top: 80px;
                left: calc(50% - 45%);
                background-color: #bcb0af;
              }

              .coffee-medium:before {
                content: "";
                width: 90%;
                height: 100px;
                background-color: #776f6e;
                position: absolute;
                bottom: 0;
                left: calc(50% - 45%);
                border-radius: 20px 20px 0 0;
              }

              .coffe-medium__exit {
                width: 60px;
                height: 20px;
                position: absolute;
                top: 0;
                left: calc(50% - 30px);
                background-color: #231f20;
              }

              .coffe-medium__exit::before {
                content: "";
                width: 50px;
                height: 20px;
                border-radius: 0 0 50% 50%;
                position: absolute;
                bottom: -20px;
                left: calc(50% - 25px);
                background-color: #231f20;
              }

              .coffe-medium__exit::after {
                content: "";
                width: 10px;
                height: 10px;
                position: absolute;
                bottom: -30px;
                left: calc(50% - 5px);
                background-color: #231f20;
              }

              .coffee-medium__arm {
                width: 70px;
                height: 20px;
                position: absolute;
                top: 15px;
                right: 25px;
                background-color: #231f20;
              }

              .coffee-medium__arm::before {
                content: "";
                width: 15px;
                height: 5px;
                position: absolute;
                top: 7px;
                left: -15px;
                background-color: #9e9495;
              }

              .coffee-medium__cup {
                width: 80px;
                height: 47px;
                position: absolute;
                bottom: 0;
                left: calc(50% - 40px);
                background-color: #FFF;
                border-radius: 0 0 70px 70px / 0 0 110px 110px;
              }

              .coffee-medium__cup::after {
                content: "";
                width: 20px;
                height: 20px;
                position: absolute;
                top: 6px;
                right: -13px;
                border: 5px solid #FFF;
                border-radius: 50%;
              }

              @keyframes liquid {
                0% {
                  height: 0px;
                  opacity: 1;
                }

                5% {
                  height: 0px;
                  opacity: 1;
                }

                20% {
                  height: 62px;
                  opacity: 1;
                }

                95% {
                  height: 62px;
                  opacity: 1;
                }

                100% {
                  height: 62px;
                  opacity: 0;
                }
              }

              .coffee-medium__liquid {
                width: 6px;
                height: 63px;
                opacity: 0;
                position: absolute;
                top: 50px;
                left: calc(50% - 3px);
                background-color: #74372b;
                animation: liquid 4s 4s linear infinite;
              }

              .coffee-medium__smoke {
                width: 8px;
                height: 20px;
                position: absolute;
                border-radius: 5px;
                background-color: #b3aeae;
              }

              @keyframes smokeOne {
                0% {
                  bottom: 20px;
                  opacity: 0;
                }

                40% {
                  bottom: 50px;
                  opacity: .5;
                }

                80% {
                  bottom: 80px;
                  opacity: .3;
                }

                100% {
                  bottom: 80px;
                  opacity: 0;
                }
              }

              @keyframes smokeTwo {
                0% {
                  bottom: 40px;
                  opacity: 0;
                }

                40% {
                  bottom: 70px;
                  opacity: .5;
                }

                80% {
                  bottom: 80px;
                  opacity: .3;
                }

                100% {
                  bottom: 80px;
                  opacity: 0;
                }
              }

              .coffee-medium__smoke-one {
                opacity: 0;
                bottom: 50px;
                left: 102px;
                animation: smokeOne 3s 4s linear infinite;
              }

              .coffee-medium__smoke-two {
                opacity: 0;
                bottom: 70px;
                left: 118px;
                animation: smokeTwo 3s 5s linear infinite;
              }

              .coffee-medium__smoke-three {
                opacity: 0;
                bottom: 65px;
                right: 118px;
                animation: smokeTwo 3s 6s linear infinite;
              }

              .coffee-medium__smoke-for {
                opacity: 0;
                bottom: 50px;
                right: 102px;
                animation: smokeOne 3s 5s linear infinite;
              }

              .coffee-footer {
                width: 95%;
                height: 15px;
                position: absolute;
                bottom: 25px;
                left: calc(50% - 47.5%);
                background-color: #41bdad;
                border-radius: 10px;
              }

              .coffee-footer::after {
                content: "";
                width: 106%;
                height: 26px;
                position: absolute;
                bottom: -25px;
                left: -8px;
                background-color: #000;
              }
            `}
          </style>
        </div>
      </section>
    </>
  );
};

export default Contact;