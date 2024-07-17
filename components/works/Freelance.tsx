import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const Freelance = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend - Developer <span className="text-textCyan tracking-wide">(Freelance)</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
            Developed and designed a visually stunning and fully responsive website application utilizing react-based technologies and deployed in Vercel.  
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelance;