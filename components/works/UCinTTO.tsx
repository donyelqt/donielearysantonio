import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const UCinTTO = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Startup Incubatee <span className="text-textCyan tracking-wide">@UC Innovation and Technology Transfer Office </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Become 2nd selected for the competitive startup university’s incubation cohort 8 based on fast development of our mvp that i spearheaded and an innovative startup idea in the fintech sectors.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Gained mentorship from various industry professionals and startup expert, refining business strategies and scaling operations.
        </li>
    
      </ul>
    </motion.div>
  );
};

export default UCinTTO;