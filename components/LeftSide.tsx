import { BsGithub } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { 
  SiInstagram,      
  SiLinkedin, 
  SiTwitter, 
} from "react-icons/si";


const LeftSide = () => {
    return ( 
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 
    text-textLight">
      <div className="flex flex-col gap-4">
         <a href="https://github.com/donyelqt" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <BsGithub />
            </span>
         </a>
         <a href="https://www.facebook.com/donielearys.antonio" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiFacebook />
            </span>
         </a>
         <a href="https://instagram.com/donieleantonio" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiInstagram />
            </span>
         </a>
         <a href="https://www.linkedin.com/in/donielearysantonio" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiLinkedin />
            </span>
         </a>
         <a href="" target="_blank">
            <span className="w-10 h-10 text-xl bg-textBlack rounded-full inline-flex items-center justify-center hover:text-textCyan cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiTwitter />
            </span>
         </a>
      </div>
      <div className="w-[2px] h-32 bg-textBlack">
         
      </div>
    </div>
  );
};

export default LeftSide;