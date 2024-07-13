import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const Hack4Gov = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        DICT HackForGov 2024 <span className="text-textCyan tracking-wide">CTF Player of University of the Cordilleras</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Developed a visually stunning and fully responsive portfolio website and full-stack web app using HTML5, CSS3, and JavaScript ES7+.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          I developed my personal website and a full-stack website application using React-based technologies.
        </li>
      </ul>
    </motion.div>
  );
};

export default Hack4Gov;