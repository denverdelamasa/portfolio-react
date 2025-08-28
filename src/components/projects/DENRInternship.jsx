import React from 'react';
import img1 from '../../assets/gallery/blowered.webp'; 
import img2 from '../../assets/gallery/ramdebug.webp'; 

const PawsNClaws = () => {
  return (
    <>
      <section id="DENRInternship" className="hero-content h-auto">
        <div className="flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-4xl font-bold my-2">Internship | Management Service Division - IT department</h1>
            <p className="mb-5 font-paragraph">
              During my On-the-Job Training (OJT), I was assigned as an IT intern at the Department 
              of Environment and Natural Resources – Provincial Environment and Natural Resources Office (DENR-PENRO) 
              Bulacan. My role was fairly dynamic, assisting with both technical and administrative IT tasks.
            </p>
            <p className="mb-5 font-paragraph">
              I was responsible for PMS documentation, computer maintenance (both software and hardware), and troubleshooting 
              technical issues across the office. Using tools like an air blower, I regularly cleaned and maintained PCs to 
              keep them running smoothly. I handled a wide range of IT concerns, from printer malfunctions and software problems 
              (including full system reformatting) to hardware-related issues such as faulty power supplies and, in one case, 
              a defective RAM module.
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[1000px] object-cover" />
                <img src={img2} alt="image 2" className="border-2 border-accent shadow-xl w-full max-h-[250px] transition-all hover:max-h-[1000px] object-cover" />
              </figure>
              <div className="text-xs mb-8 mt-1 items-center text-center text-accent">
                <p>Some pictures of the things I fixed/Maintained</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
              A notable part of my internship was stepping up when the office’s sole IT personnel had to transfer to another 
              branch for medical reasons. This left me as the primary IT support for the entire office for about a month, until 
              another intern was reassigned to assist. Managing the workload independently pushed me to become resourceful, 
              confident, and more technically adept.
            </p>
            <p className="mb-5 font-paragraph">
              By the end of my internship, I not only strengthened my technical skills but also gained valuable experience 
              in handling responsibilities under pressure. Before leaving, I also helped onboard and guide incoming interns 
              who would continue the IT support tasks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PawsNClaws;