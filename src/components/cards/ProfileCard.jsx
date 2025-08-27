import React from 'react';
import profileImg from '../../assets/gradpic.webp'; 

const ProfileCard = () => {
  return (
    <>
      <div className="fade-up-scroll card bg-base-100 max-w-md lg:w-md shadow-lg mx-auto lg:mx-2 p-6 border-2 border-accent">
          <figure>
              <img src={profileImg} alt="Graduation Pic" className="max-h-[400px] w-full object-cover rounded-xl" />
          </figure>
          <div className="card-body items-left text-left px-0 text-content w-full">
            <div className="card-actions flex w-full p-auto">
              <div className="tooltip w-full flex flex-col" data-tip="For security and convenience, my resume is available on LinkedIn.">
                <button className="btn btn-primary w-full gap-x-2 mx-auto">
                  <i className="bi bi-file-earmark-post"></i>
                  My Resume
                </button>
              </div>
            </div>
            <ul className="list list-col-wrap gap-y-2 mt-4 items-start align-middle">
              <li>
                <a href="mailto:denver.delamasa@gmail.com" target="_blank" className="link link-hover flex gap-x-2">
                  <i className="bi bi-envelope-at-fill"></i>
                  denver.delamasa@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/denverdelamasa" target="_blank" className="link link-hover flex gap-x-2">
                  <i className="bi bi-github"></i>
                  wyane(denverdelamasa)
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/denverdelamasa" target="_blank" rel="noopener noreferrer" className="link link-hover flex gap-x-2">
                  <i className="bi bi-linkedin"></i>
                  linkedin.com/in/denverdelamasa
                </a>
              </li>
              <li>
                <a href="https://instagram.com/wanedanvers"target="_blank" rel="noopener noreferrer" className="link link-hover flex gap-x-2">
                  <i className="bi bi-instagram"></i>
                  instagram.com/wanedanvers
                </a>
              </li>
              <li>
                <a href="https://uiverse.io/profile/denverdelamasa"target="_blank" rel="noopener noreferrer" className="link link-hover flex gap-x-2">
                  <i className="bi bi-link-45deg"></i>
                  uiverse.io/profile/denverdelamasa
                </a>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default ProfileCard;