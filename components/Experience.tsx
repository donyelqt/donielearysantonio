import React, { use, useState } from "react";
import SectionTitle from "./SectionTitle";
import Freelance from "./works/Freelance";
import UniversityOfTheCordilleras from "./works/UniversityOfTheCordilleras";
import PhinmaUniversityOfPangasinan from "./works/PhinmaUniversityOfPangasinan";
import Hack4Gov from "./works/Hack4Gov";
import PeraPinoy from "./works/PeraPinoy";
import TrifectaSolutionsInc from "./works/TrifectaSolutionsInc";

const Experience = () => {
  const [workPeraPinoy, setWorkPeraPinoy] = useState(true);
  const [workFreelance, setWorkFreelance] = useState(false);
  const [workUniversityOfTheCordilleras, setWorkUniversityOfTheCordilleras] = useState(false);
  const [workPhinmaUniversityOfPangasinan, setWorkPhinmaUniversityOfPangasinan] = useState(false);
  const [workHack4Gov, setWorkHack4Gov] = useState(false);
  const [workTrifectaSolutionsInc, setWorkTrifectaSolutionsInc] = useState(false);

  

  const handlePeraPinoy = () => {
    setWorkPeraPinoy(true);
    setWorkFreelance(false);
    setWorkUniversityOfTheCordilleras(false);
    setWorkPhinmaUniversityOfPangasinan(false);
    setWorkHack4Gov(false);
    setWorkTrifectaSolutionsInc(false);
    
  }

  const handleFreelance = () => {
    setWorkPeraPinoy(false);
    setWorkFreelance(true);
    setWorkUniversityOfTheCordilleras(false);
    setWorkPhinmaUniversityOfPangasinan(false);
    setWorkHack4Gov(false);
    setWorkTrifectaSolutionsInc(false);
    
  };

  const handleUniversrityOfTheCordilleras = () => {
    setWorkPeraPinoy(false);
    setWorkFreelance(false);
    setWorkUniversityOfTheCordilleras(true);
    setWorkPhinmaUniversityOfPangasinan(false);
    setWorkHack4Gov(false);
    setWorkTrifectaSolutionsInc(false);
    
  };

  const handlePhinmaUniversityOfPangasinan = () => {
    setWorkPeraPinoy(false);
    setWorkFreelance(false);
    setWorkUniversityOfTheCordilleras(false);
    setWorkPhinmaUniversityOfPangasinan(true);
    setWorkHack4Gov(false);
    setWorkUNLADFoundation(false);
  };

  const handleHack4Gov = () => {
    setWorkPeraPinoy(false);
    setWorkFreelance(false);
    setWorkUniversityOfTheCordilleras(false);
    setWorkPhinmaUniversityOfPangasinan(false);
    setWorkHack4Gov(true);
    setWorkUNLADFoundation(false);
    
  };

  const handleUNLADFoundation = () => {
    setWorkPeraPinoy(false);
    setWorkFreelance(false);
    setWorkUniversityOfTheCordilleras(false);
    setWorkPhinmaUniversityOfPangasinan(false);
    setWorkHack4Gov(false);
    setWorkUNLADFoundation(true);
    
  };


  

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-100 lgl:py-40 px-4"
    >
      <SectionTitle title="EXPERIENCE" titleNO="< >" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-40 flex flex-col">
          <li
            onClick={handlePeraPinoy}
            className={`${workPeraPinoy ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-blue-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            PeraPinoy!
          </li>
          <li
            onClick={handleFreelance}
            className={`${workFreelance ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-blue-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Freelance
          </li>
          <li
            onClick={handleUniversrityOfTheCordilleras}
            className={`${workUniversityOfTheCordilleras ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-blue-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            University of the Cordilleras
          </li>
          <li
            onClick={handlePhinmaUniversityOfPangasinan}
            className={`${workPhinmaUniversityOfPangasinan ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-blue-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            PHINMA Upang
          </li>
          <li
            onClick={handleHack4Gov}
            className={`${workHack4Gov ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-blue-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            DICT Hack4Gov3 2024
          </li>
          <li
            onClick={handleUNLADFoundation}
            className={`${workUNLADFoundation ? "border-l-textCyan text-textCyan" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-blue-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`} // remove hover:bg-[#003153]
          >
            Trifecta Solutions Inc.
          </li>
        </ul>
        {workFreelance && <Freelance />}
        {workUniversityOfTheCordilleras && <UniversityOfTheCordilleras />}
        {workPhinmaUniversityOfPangasinan && <PhinmaUniversityOfPangasinan />}
        {workHack4Gov && <Hack4Gov />}
        {workPeraPinoy && <PeraPinoy />}
        {workUNLADFoundation && <UNLADFoundation />}
      </div>
    </section>
  );
};

export default Experience;