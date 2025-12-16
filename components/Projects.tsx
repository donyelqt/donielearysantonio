import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { comparativeanalysis, donieleAI, edengreenhouse, edensoft, netflixbydonieleImg, parapoproj, perapinoyweb } from "@/public/assets";
import { BsGithub, BsImage } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";
import { portfolioUniversityProject, ucgastrobaguiomockup, ucgastroconsultmockup, netflixbydonielemockup, donieleaimockup, donielemockup } from "@/public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="FEATURED PROJECTS" titleNO="< >" />
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
                <Image className="w-full h-[375px] object-contain"
                  src={netflixbydonielemockup}
                  alt="netflixbydonielemockup"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold text-left"><span className="text-xl md:text-2xl text-textCyan">01.</span> Netflix Clone</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
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
                <Image className="w-full h-[375px] object-contain"
                  src={donielemockup}
                  alt="donielemockup"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">02.</span> Full - Stack Portfolio Univ Project</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                A <span className="text-textCyan">fully responsive</span> and <span className="text-textCyan">full-stack portfolio website</span> with <span className="text-textCyan">admin login authorization</span> allows you to see your Facebook Messenger messages, SMS messages, and Gmail messages for my university project purposes.
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
                  src={donieleaimockup}
                  alt="donieleaimockup"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">03.</span> DonieleAI Image Generator</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
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
        {/* Project four */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ucgastrobaguio.vercel.app/"
              target="_blank"
            >
              <div>
                <Image className="w-full h-[400px] object-contain"
                  src={ucgastrobaguiomockup}
                  alt="ucgastrobaguiomockup"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">04.</span> UC GastroBaguio</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                A <span className="text-textCyan">university healthcare website application</span> for the hospitals based in Baguio City, Philippines, to solve the problems in <span className="text-textCyan">gastroenteritis cases</span> in Baguio City.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>SCSS</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href=""
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href="https://ucgastrobaguio.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project five */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ucgastrobaguio-consultation.vercel.app/"
              target="_blank"
            >
              <div>
                <Image className="w-full h-[375px] object-contain"
                  src={ucgastroconsultmockup}
                  alt="ucgastroconsultmockup"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">05.</span> UC GastroBaguio - Consultation</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                A <span className="text-textCyan">full-stack university healthcare website application</span> and the <span className="text-textCyan">first online platform of UC for hospitals </span> that you can use to <span className="text-textCyan">schedule your consultation for health-related services</span> in hospitals in Baguio City <span className="text-textCyan">quickly and efficiently.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>Tailwind CSS</li>
                <li>NodeJS</li>
                <li>Strapi</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href=""
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href="https://ucgastrobaguio-consultation.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Six */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image className="w-full h-[375px] object-contain"
                  src={edensoft}
                  alt="edensofts"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">06.</span> Eden: Software Model</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                A <span className="text-textCyan">mobile application</span> smart controller prototype for our <span className="text-textCyan">hardware model version eden </span> designed to <span className="text-textCyan">support farmers</span>, <span className="text-textCyan">governments</span>, and <span className="text-textCyan">individuals</span> in achieving <span className="text-textCyan">sustainable</span>, <span className="text-textCyan">efficient</span>, and <span className="text-textCyan">successful crop production.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Figma</li>
                <li>Blender</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href=""
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href=""
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Seven */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image className="w-full h-[375px] object-contain"
                  src={edengreenhouse}
                  alt="edengreenhouse"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">

              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">07.</span> Eden: Hardware Model</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                Eden prototype hardware model is an advanced <span className="text-textCyan">greenhouse hardware model engineered</span> to <span className="text-textCyan">revolutionize agricultural practices</span> by enabling <span className="text-textCyan">sustainable</span> and <span className="text-textCyan">efficient crop production</span>. Designed to cater to the needs of farmers, governments, and individuals, Eden integrates cutting-edge technology to <span className="text-textCyan">optimize the growing environment for a wide variety of crops.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Figma</li>
                <li>Blender</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href=""
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href=""
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
          {/* Project 8 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href=""
                target="_blank"
              >
                <div>
                  <Image className="w-full h-[300px] object-contain"
                    src={perapinoyweb}
                    alt="perapinoyweb"
                  />
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
                <p className="font-titleFont text-textCyan text-sm tracking-wide">

                </p>
                <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">08.</span> PeraPinoy! - Web App</h3>
                <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                  PeraPinoy! is a smart financial management application built specifically for the Filipino community. As the Founder and CTO, I led a cross-functional team of 3 through our university’s startup incubation program, overseeing the development of our MVP from ideation to deployment.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>NextJS</li>
                  <li>PostgreSQL</li>
                  <li>Google Gemini AI API</li>
                  <li>Neon Console</li>
                  <li>Drizzle ORM</li>
                  <li>Clerk Auth</li>
                </ul>
                <div className="text-2xl flex gap-4 ">
                  <a className="hover:text-textCyan duration-300"
                    href=""
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a className="hover:text-textCyan duration-300"
                    href=""
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 9 */}
          {/*<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href=""
                target="_blank"
              >
                <div className="bg-white py-8 px-4">
                  <Image className="w-full h-[350px] object-contain"
                    src={parapoproj}
                    alt="parapoproj"
                  />
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
                <p className="font-titleFont text-textCyan text-sm tracking-wide">

                </p>
                <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">09.</span> Para Po! - Android Mobile App</h3>
                <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                  Para Po! is a jeepney-centric mobile navigation app that provides users with jeepney station locators, route display, and jeepney options! Not only that, but you can also create your own jeepney avatar for a more fun and more Filipino commuting experience!
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Mapbox API</li>
                  <li>Firebase</li>
                  <li>Kotlin</li>
                  <li>Java</li>
                  <li>Android</li>
                </ul>
                <div className="text-2xl flex gap-4 ">
                  <a className="hover:text-textCyan duration-300"
                    href=""
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a className="hover:text-textCyan duration-300"
                    href=""
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>*/}
          {/* Project 10 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            {/* Outer wrapper: 
      - Flex column by default for small devices.
      - Flex row for large screens (xl). 
      - gap-28 sets the space between elements. */}
            <div className="flex flex-col xl:flex-row gap-6">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href=""
                target="_blank"
              >
                {/* Image container:
          - w-full ensures full width on small screens.
          - xl:w-1/2 sets the width to 50% for larger screens. */}
                <div className="bg-white py-8 px-4">
                  <Image className="w-full h-[350px] object-contain"
                    src={comparativeanalysis}
                    alt="comparativeanalysis"
                  />
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
                {/* Text container: 
          - w-full ensures the text section takes full width on smaller screens.
          - xl:w-1/2 sets 50% width for larger screens (side by side with image). 
          - flex flex-col arranges text elements vertically on small devices. 
          - text-right for right-aligned text on larger screens. */}
                <p className="font-titleFont text-textCyan text-sm tracking-wide">
                  {/* Optional Description */}
                </p>
                <h3 className="text-xl md:text-xl font-bold">
                  {/* Title with dynamic size for responsiveness */}
                  <span className="text-xl md:text-xl text-textCyan">09.</span> Comparative Analysis of Shortest Path Algorithms
                </h3>
                <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                  {/* Description */}
                  Led a research project in the Design and Analysis of Algorithms subject that conducts a detailed comparative analysis of five foundational shortest path algorithms: Dijkstra, Bellman-Ford, A*, Floyd-Warshall, and Johnson&apos;s algorithms. Spearheaded and developed a Python-based framework for implementing and analyzing those algorithms, putting emphasis on the performance, complexity, and their applicability across the different types of graphs to improve understanding of algorithmic trade-offs in real-world scenarios.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  {/* Tech stack list:
            - text-xs for smaller text on small screens.
            - md:text-sm increases the size on medium and larger screens. */}
                  <li>Python</li>
                  <li>Matplotlib</li>
                  <li>tracemalloc</li>
                  <li>PriorityQueue</li>
                  <li>defaultdict</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  {/* Links to GitHub and external pages */}
                  <a className="hover:text-textCyan duration-300"
                    href=""
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a className="hover:text-textCyan duration-300"
                    href=""
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project 10 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/donyelqt/AI.GIS"
              target="_blank"
            >
              <div className="w-full h-[350px] bg-[#112240] rounded-lg border-2 border-dashed border-textDark/30 flex flex-col justify-center items-center group-hover:border-textCyan/50 group-hover:bg-[#0B1120] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-textCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BsImage className="text-5xl text-textDark/50 group-hover:text-textCyan duration-300 z-10" />
                <p className="text-textDark/50 text-sm font-titleFont tracking-widest mt-4 group-hover:text-textCyan duration-300 z-10">
                  IMAGE COMING SOON
                </p>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">
              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">10.</span> AI.GIS + Lifeband</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                The <span className="text-textCyan">"Best in Pitch" Winner</span> at Make-a-Thon 2025. A <span className="text-textCyan">real-time health monitoring application</span> featuring an <span className="text-textCyan">AI Doctor Assistant</span> (powered by Google Genkit) that analyzes live vitals to provide <span className="text-textCyan">proactive health advice</span> and <span className="text-textCyan">automatic emergency alerts</span>.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Google Genkit</li>
                <li>Gemini Pro</li>
                <li>ShadCN</li>
                <li>Tailwind CSS</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/AI.GIS"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/AI.GIS"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 11 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/donyelqt/Tarana.ai"
              target="_blank"
            >
              <div className="w-full h-[350px] bg-[#112240] rounded-lg border-2 border-dashed border-textDark/30 flex flex-col justify-center items-center group-hover:border-textCyan/50 group-hover:bg-[#0B1120] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-textCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BsImage className="text-5xl text-textDark/50 group-hover:text-textCyan duration-300 z-10" />
                <p className="text-textDark/50 text-sm font-titleFont tracking-widest mt-4 group-hover:text-textCyan duration-300 z-10">
                  IMAGE COMING SOON
                </p>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">
              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">11.</span> Tarana.ai</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                The <span className="text-textCyan">3rd Place Winner</span> at AI.DEAS FOR IMPACT HACKATHON 2025 and <span className="text-textCyan">Regional Finalist</span> at the Philippine Startup Challenge 10 (CAR). An <span className="text-textCyan">agentic AI travel planning app</span> that creates <span className="text-textCyan">real-time, hyper-personalized itineraries</span> based on a traveler’s interests, utilizing an <span className="text-textCyan">advanced RAG pipeline</span> and <span className="text-textCyan">multi-agent system</span>.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js 15</li>
                <li>React 19</li>
                <li>Supabase (pgvector)</li>
                <li>Google Gemini AI</li>
                <li>TomTom API</li>
                <li>OpenWeatherMap</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/Tarana.ai"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/Tarana.ai"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 12 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/donyelqt/Huzz-ler"
              target="_blank"
            >
              <div className="w-full h-[350px] bg-[#112240] rounded-lg border-2 border-dashed border-textDark/30 flex flex-col justify-center items-center group-hover:border-textCyan/50 group-hover:bg-[#0B1120] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-textCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BsImage className="text-5xl text-textDark/50 group-hover:text-textCyan duration-300 z-10" />
                <p className="text-textDark/50 text-sm font-titleFont tracking-widest mt-4 group-hover:text-textCyan duration-300 z-10">
                  IMAGE COMING SOON
                </p>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">
              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">12.</span> Huzz-ler</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                A <span className="text-textCyan">gamified productivity Android application</span> designed to <span className="text-textCyan">track assignments</span>, <span className="text-textCyan">manage rewards</span>, and <span className="text-textCyan">boost motivation</span> through an interactive dashboard and assignment tracking system.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Room</li>
                <li>Retrofit</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/Huzz-ler"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/Huzz-ler"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 13 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/donyelqt/Hinaing"
              target="_blank"
            >
              <div className="w-full h-[350px] bg-[#112240] rounded-lg border-2 border-dashed border-textDark/30 flex flex-col justify-center items-center group-hover:border-textCyan/50 group-hover:bg-[#0B1120] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-textCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BsImage className="text-5xl text-textDark/50 group-hover:text-textCyan duration-300 z-10" />
                <p className="text-textDark/50 text-sm font-titleFont tracking-widest mt-4 group-hover:text-textCyan duration-300 z-10">
                  IMAGE COMING SOON
                </p>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textCyan text-sm tracking-wide">
              </p>
              <h3 className="text-xl md:text-2xl font-bold"><span className="text-xl md:text-2xl text-textCyan">13.</span> Hinaing</h3>
              <p className="bg-[#080808] text-sm md:text-base text-left p-6 md:p-6 rounded-3xl">
                A <span className="text-textCyan">Self-Learning Multi-Agent System</span> utilizing a <span className="text-textCyan">7-node diverse architecture</span>. It features <span className="text-textCyan">Ensemble Sentiment Analysis</span> (RoBERTa + Gemini 2.5), <span className="text-textCyan">5-Signal Credibility Verification</span>, and <span className="text-textCyan">Hybrid Retrieval (Reddit, Facebook, Web)</span> to provide deep, context-aware insights on complex social issues.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>FastAPI</li>
                <li>LangGraph</li>
                <li>LangSmith</li>
                <li>Google Gemini 2.5</li>
                <li>RoBERTa</li>
                <li>Qdrant</li>
                <li>Next.js 15</li>
                <li>Docker</li>
              </ul>
              <div className="text-2xl flex gap-4 ">
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/Hinaing"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a className="hover:text-textCyan duration-300"
                  href="https://github.com/donyelqt/Hinaing"
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