import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { donieleAI, netflixbydonieleImg } from "@/public/assets";
import { BsGithub } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";
import { portfolioUniversityProject } from "@/public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="PROJECTS" titleNO="< >"/>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a 
            className="w-full xl:w-1/2 h-auto relative group" 
            href="https://netflixbydoniele.vercel.app/" 
            target="_blank"
          >
          <div>
            <Image className="w-full h-full object-contain"
            src={netflixbydonieleImg}
            alt="netflixbydonieleImg"
            />
          </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
          <p className="font-titleFont text-textCyan text-sm tracking-wide">
            Featured Projects
          </p>
          <h3 className="text-2xl font-bold">Netflix Clone by Doniele</h3>
          <p className="bg-[#080808] text-sm md:text-base p-2 md:p-6 rounded-md">
            A <span className="text-textCyan">full-stack website application</span> Netflix clone utilized by React, Tailwind CSS, NextJS, Prisma, Supabase, NextAuth, and deployed in Vercel.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>NextJS</li>
            <li>Prisma</li>
            <li>Supabase</li>
            <li>NextAuth</li>
            <li>Vercel</li>
          </ul>
          <div className="text-2xl flex gap-4 ">
            <a className="hover:text-textCyan duration-300" 
               href="https://github.com/donyelqt/netflix-clone-doniele" 
               target="_blank"
            >
              <BsGithub />
            </a>
            <a className="hover:text-textCyan duration-300" 
               href="https://netflixbydoniele.vercel.app/" 
               target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
       </div>
      </div>
      {/* Project two */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a 
            className="w-full xl:w-1/2 h-auto relative group" 
            href="https://doniele.pages.dev/" 
            target="_blank"
          >
          <div>
            <Image className="w-full h-full object-contain"
            src={portfolioUniversityProject}
            alt="portfolioUniversityProject"
            />
          </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
          <p className="font-titleFont text-textCyan text-sm tracking-wide">
            Featured Projects
          </p>
          <h3 className="text-2xl font-bold">Full - Stack Portfolio University Project</h3>
          <p className="bg-[#080808] text-sm md:text-base p-2 md:p-6 rounded-md">
            A <span className="text-textCyan">fully responsive</span> and <span className="text-textCyan">full-stack portfolio website</span> with <span className="text-textCyan">admin login authorization</span> allows you to see your Facebook Messenger messages, SMS messages, and Gmail messages for my university project purposes, utilized by HTML5, CSS3, JavaScript ES7+, Google API, Google Spreadsheet, SMS Forwarder, and Zapier AI.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES7+</li>
          </ul>
          <div className="text-2xl flex gap-4 ">
            <a className="hover:text-textCyan duration-300" 
               href="https://github.com/donyelqt/doniele" 
               target="_blank"
            >
              <BsGithub />
            </a>
            <a className="hover:text-textCyan duration-300" 
               href="https://doniele.pages.dev/" 
               target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
       </div>
      </div>
      {/* Project three */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a 
            className="w-full xl:w-1/2 h-auto relative group" 
            href="https://donieleai.pages.dev/" 
            target="_blank"
          >
          <div>
            <Image className="w-full h-full object-contain"
            src={donieleAI}
            alt="donieleAI"
            />
          </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
          <p className="font-titleFont text-textCyan text-sm tracking-wide">
            Featured Projects
          </p>
          <h3 className="text-2xl font-bold">DonieleAI Image Generator</h3>
          <p className="bg-[#080808] text-sm md:text-base p-2 md:p-6 rounded-md">
            A simple <span className="text-textCyan">AI image generator</span> is utilized by HTML5, CSS3, JavaScript ES7+, and the OpenAI API.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES7+</li>
          </ul>
          <div className="text-2xl flex gap-4 ">
            <a className="hover:text-textCyan duration-300" 
               href="https://github.com/donyelqt/DonieleAI" 
               target="_blank"
            >
              <BsGithub />
            </a>
            <a className="hover:text-textCyan duration-300" 
               href="https://donieleai.pages.dev/" 
               target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
       </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;