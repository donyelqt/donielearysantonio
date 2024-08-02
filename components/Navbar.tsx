import { logo } from "@/public/assets";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { 
  SiInstagram,      
  SiLinkedin, 
  SiTwitter, 
} from "react-icons/si";

const Navbar = () => {
const ref = useRef<string | any>("")
const [showMenu,setShowMenu] = useState(false);
const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  setShowMenu(false)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem =document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth"
  });
  
  const link = document.querySelectorAll(".nav-link")
  link.forEach((link)=>{
    link.classList.remove("active")
  });
  e.currentTarget.classList.add("active");
};

function handleClick(e:any){
  if (e.target.contains(ref.current)){
   
     setShowMenu(false);
  }
}
// remove bg-bodyColor2
  return ( 
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 shadow-navbarShadow
    px-10">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{duration:0.5}}
        >
          <Image className="w-16" src={logo} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            <Link 
              href="#home" 
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textPurple cursor-pointer duration-300 nav-link"
            >
             <motion.li 
               initial={{ y: -10, opacity: 0}} 
               animate={{ y: 0, opacity: 1 }} 
               transition={{ duration: 0.1 }}
             >
               Home
             </motion.li>
            </Link> 
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.2 }}
            >
                <span className="text-textCyan">01.</span>
                About
             </motion.li>
            </Link>
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.3 }}
            >
                <span className="text-textCyan">02.</span>
                Experience
             </motion.li>
            </Link>
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.4 }}
            >
                <span className="text-textCyan">03.</span>
                Project
             </motion.li>
            </Link>
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <span className="text-textCyan">04.</span>
                Contact
             </motion.li>
            </Link>    
          </ul>
         <a href="/assets/Doniele Arys A. Antonio - Software Engineer.pdf" target="_blank">
         <motion.button
            initial={{ opacity: 0}} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="px-4 py-2 rounded-md text-textCyan text-[13px] border border-textCyan hover:bg-hoverColor duration-300"
          >
            📁 Resume
          </motion.button>
         </a>
        </div>
      
        <div 
          onClick={() => setShowMenu(true)} 
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textCyan cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textCyan inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textCyan inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textCyan inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {
          showMenu && (
            <div 
              ref={(node) => (ref.current = node)}
              onClick={handleClick}
              className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }} 
                className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-gradient-to-tl from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center px-4 py-10 relative" // remove bg-[#002147]
              >
                <MdOutlineClose 
                  onClick={() => setShowMenu(false)} 
                  className="text-3xl text-textCyan cursor-pointer hover:text-red-500 absolute top-4 right-4" 
                />
            <div className="flex flex-col items-center gap-7">
            <ul className="flex flex-col text-base gap-7">
            <Link 
              href="#home" 
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link"
            >
             <motion.li 
               initial={{ y: 20, opacity: 0}} 
               animate={{ y: 0, opacity: 1 }} 
               transition={{ 
                 duration: 0.2,
                 delay: 0.1,
                 ease: "easeIn",
              }}
             >
               Home
             </motion.li>
            </Link> 
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: 20, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ 
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeIn"
                }}
            >
                <span className="text-textCyan">01.</span>
                About
             </motion.li>
            </Link>
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: 20, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ 
                  duration: 0.4,
                  delay: 0.3,
                  ease: "easeIn"
                }}
            >
                <span className="text-textCyan">02.</span>
                Experience
             </motion.li>
            </Link>
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: 20, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ 
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeIn"
                }}
            >
                <span className="text-textCyan">03.</span>
                Project
             </motion.li>
            </Link>
            <Link 
              className="flex items-center gap-1 font-medium text-textBlack hover:text-textCyan cursor-pointer duration-300 nav-link" 
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: 20, opacity: 0}} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  ease: "easeIn"
                }}
            >
                <span className="text-textCyan">04.</span>
                Contact
             </motion.li>
            </Link>    
          </ul>
          <a href="/assets/Doniele Arys A. Antonio - Software Engineer.pdf" target="_blank">
            <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, ease: "easeIn" }}
            className="w-32 h-10 rounded-md text-textCyan text-[13px] border border-textCyan hover:bg-hoverColor duration-300"
          >
            📁 Resume
            </motion.button>
          </a>
          <div className="flex flex-items center gap-4">
         <motion.a href="https://github.com/donyelqt" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiGithub />
            </span>
         </motion.a>
         <motion.a href="https://www.facebook.com/donielearys.antonio" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiFacebook />
            </span>
         </motion.a>
         <motion.a href="https://instagram.com/donieleantonio" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiInstagram />
            </span>
         </motion.a>
         <motion.a href="https://www.linkedin.com/in/donielearysantonio" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiLinkedin />
            </span>
         </motion.a>
         <motion.a href="" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiTwitter />
            </span>
         </motion.a>
      </div>
      <motion.a 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, ease: "easeIn" }}
      className="text-sm w-72 tracking-widest text-textCyan text-center mt-4"
      href="mailto:arysantonio363@gmail.com"
      >
        <p>arysantonio363@gmail</p>
      </motion.a>
                </div>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  );
}; 

export default Navbar;
