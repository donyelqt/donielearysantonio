import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const AWSCloudClub = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Vice Skill-Builder Chairperson <span className="text-textCyan tracking-wide">AWS Cloud Club LLC - UC Baguio</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 26, 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Collaborated effectively with a diverse team during the DICT HackForGov3 2024 Capture the Flag competition, demonstrating strong teamwork and problem-solving skills to tackle complex cybersecurity challenges.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Showcased adaptability and a commitment to continuous learning by successfully upskilling in cybersecurity, applying these new skills alongside my software development/engineering expertise to contribute significantly to the team&apos;s performance.
        </li>
      </ul>
    </motion.div>
  );
};

export default AWSCloudClub;