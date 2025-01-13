import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { comparativeanalysis, donieleAI, edengreenhouse, edensoft, netflixbydonieleImg, parapoproj, perapinoyweb } from "@/public/assets";
import { BsGithub } from "react-icons/bs";
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
                  Eden prototype hardware model is an advanced <span className="text-textCyan">greenhouse hardware model engineered</span> to <span className="text-textCyan">revolutionize agricultural practices</span> by enabling <span className="text-textCyan">sustainable</span> and <span className="text-textCyan">efficient crop production</span>. Designed to cater to the needs of farmers, governments, and individuals, Eden integrates cutting-edge technology to <span className="text-textCyan">optimize the growing environment for a wide variety of crops.</span>
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
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
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
          </div>
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
                <div className="py-8 px-4">
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
                  <span className="text-xl md:text-xl text-textCyan">10.</span> Comparative Analysis of Shortest Path Algorithms
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
      </div>
    </section>
  );
};

export default Projects;