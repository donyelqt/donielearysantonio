import React, { use, useState } from "react";
import SectionTitle from "./SectionTitle";
import Freelance from "./works/Freelance";
import UniversityOfTheCordilleras from "./works/UniversityOfTheCordilleras";
import PhinmaUniversityOfPangasinan from "./works/PhinmaUniversityOfPangasinan";

const Experience = () => {
    const [workFreelance, setWorkFreelance] = useState(true);
    const [workUniversityOfTheCordilleras, setWorkUniversityOfTheCordilleras] = useState(false);
    const [workPhinmaUniversityOfPangasinan, setWorkPhinmaUniversityOfPangasinan] = useState(false);

    const handleFreelance = () => {
        setWorkFreelance(true);
        setWorkUniversityOfTheCordilleras(false);
        setWorkPhinmaUniversityOfPangasinan(false);
    };

    const handleUniversrityOfTheCordilleras = () => {
        setWorkFreelance(false);
        setWorkUniversityOfTheCordilleras(true);
        setWorkPhinmaUniversityOfPangasinan(false);
    };

    const handlePhinmaUniversityOfPangasinan = () => {
        setWorkFreelance(false);
        setWorkUniversityOfTheCordilleras(false);
        setWorkPhinmaUniversityOfPangasinan(true);
    };
  return (
    <section 
      id="experience" 
      className="max-w-containerxs mx-auto py-100 lgl:py-40 px-4"
    >
      <SectionTitle title="EXPERIENCE" titleNO="< >"/>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-40 flex flex-col">
            <li 
              onClick={handleFreelance} 
              className={`${workFreelance ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#003153] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              FREELANCE
            </li>
            <li 
              onClick={handleUniversrityOfTheCordilleras} 
              className={`${workUniversityOfTheCordilleras ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#003153] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              UNIVERSITY OF THE CORDILLERAS
            </li>
            <li 
              onClick={handlePhinmaUniversityOfPangasinan} 
              className={`${workPhinmaUniversityOfPangasinan ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#003153] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              PHINMA Upang
            </li>
            <li 
              
              className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#003153] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
            >
              in progress...
            </li>
            <li 
              
              className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#003153] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
            >
              in progress...
            </li>
        </ul>
        {workFreelance && <Freelance />}
        {workUniversityOfTheCordilleras && <UniversityOfTheCordilleras />}
        {workPhinmaUniversityOfPangasinan && <PhinmaUniversityOfPangasinan />}
      </div>
    </section>
  );
};

export default Experience;