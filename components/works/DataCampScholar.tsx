import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const DataCampScholar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Google Developer x DataCamp Scholar <span className="text-textCyan tracking-wide">@DataCamp</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2025 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Selected to be one of the DataCamp Scholars through Google Developer Groups on Campus at Polytechnic University of the Philippines to access 500+ courses and 110+ industry-aligned projects in data science, AI, and more.
        </li>
      </ul>
    </motion.div>
  );
};

export default DataCampScholar;