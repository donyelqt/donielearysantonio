import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const PhinmaUniversityOfPangasinan = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Graduation SHS<span className="text-textCyan tracking-wide">@Upang</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        August 2021 - June 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Graduated in Science, Technology, Engineering, and Mathematics.
        </li>
      </ul>
    </motion.div>
  );
};

export default PhinmaUniversityOfPangasinan;