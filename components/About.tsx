import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillCloud } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";
import { cplus2, csharp, css3, html, java, javascript, nextjs, 
  nodejs, postgresql, prisma, profileImg, python, react, scss, supabase, tailwindcss, typescript, git,
  github,
  vercel,
  bootstrap, firebase,
  kalilinux} from "@/public/assets";
import { donieleprof } from "@/public/assets"
import SectionTitle1 from "./SectionTitle1"
import css from "styled-jsx/css";


const About = () => {
  return (
    <section 
      id="about" 
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="ABOUT ME" titleNO="< >" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello, I am <span className="text-textCyan">Doniele Arys Antonio,</span> currently <span className="text-textCyan">focusing on software development. </span>
            I am currently a <span className="text-textCyan">student computer scientist</span> in the center of excellence in ITE at the <span className="text-textCyan">University of the Cordilleras. </span> 
            A highly motivated <span className="text-textCyan">18-year-old </span> eagerness to learn and improve skills in the growing tech industry and to adapt to every change in <span className="text-textCyan">technologies and sciences.</span>
          </p>
          <p>
            Here are the <span className="text-textCyan">technologies</span> I have played with.  I am currently exploring more technologies to <span className="text-textCyan">develop innovative ideas</span> and to <span className="text-textCyan">learn more. </span>
          </p>
          <p>
            I also currently learning about <span className="text-textCyan">data science, artificial intelligence, machine learning, cybersecurity</span> through <span className="text-textCyan">CTF challenges.</span>
          </p>
          <br/>
          <SectionTitle1 title="TECHNOLOGY STACK" titleNO="< />" />
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={javascript} 
                alt="javascript"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={typescript} 
                alt="typescript"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="">
              <Image className="rounded-lg h-full object-cover" 
                src={react} 
                alt="react"
                style={{ height: "40px", width: "40px" }} />
              </span>
              ReactJS
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={nextjs} 
                alt="nextjs"
                style={{ height: "40px", width: "40px" }} />
              </span>
              NextJS
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={html} 
                alt="html"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Html5
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={css3} 
                alt="css"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Css3
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={csharp} 
                alt="csharp"
                style={{ height: "40px", width: "40px" }} />
              </span>
              C#
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={java} 
                alt="java"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Java
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={python} 
                alt="python"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={cplus2} 
                alt="cplus2"
                style={{ height: "40px", width: "40px" }} />
              </span>
              C++
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={nodejs} 
                alt="nodejs"
                style={{ height: "40px", width: "40px" }} />
              </span>
              NodeJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <Image className="rounded-lg h-full object-cover" 
                src={tailwindcss} 
                alt="tailwindcss"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={supabase} 
                alt="supabase"
                style={{ height: "40px", width: "40px" }} />
              </span>
              SupaBase
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <Image className="rounded-lg h-full object-cover" 
                src={postgresql} 
                alt="postgresql"
                style={{ height: "40px", width: "40px" }} />
              </span>
              PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <Image className="rounded-lg h-full object-cover" 
                src={prisma} 
                alt="prisma"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Prisma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <Image className="rounded-lg h-full object-cover" 
                src={scss} 
                alt="scss"
                style={{ height: "40px", width: "40px" }} />
              </span>
              SCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <Image className="rounded-lg h-full object-cover" 
                src={github} 
                alt="github"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Github
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <Image className="rounded-lg h-full object-cover" 
                src={git} 
                alt="git"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Git
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
               <Image className="rounded-lg h-full object-cover" 
                src={vercel} 
                alt="vercel"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Vercel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
               <Image className="rounded-lg h-full object-cover" 
                src={bootstrap} 
                alt="bootstrap"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Bootstrap 5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
               <Image className="rounded-lg h-full object-cover" 
                src={firebase} 
                alt="firebase"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
               <Image className="rounded-lg h-full object-cover" 
                src={kalilinux} 
                alt="kalilinux"
                style={{ height: "40px", width: "40px" }} />
              </span>
              Kali Linux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              Framer Motion
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              Shadcn UI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              NextAuth.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              Cloudflare
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              Resend
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              React Native
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              C
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              REST API
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textCyan">
                <AiFillCloud />
              </span>
              Luicide.dev
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-100 relative group">
          <div className=" w-full h-100 -left-6 -top-0 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image 
                className="rounded-lg h-full object-cover" 
                src={donieleprof} 
                alt="donieleprof"
                style={{ height: "350px", width: "350px" }}
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textLight/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;