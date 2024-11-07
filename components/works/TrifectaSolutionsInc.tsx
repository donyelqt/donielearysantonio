import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const TrifectaSolutionsInc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer Intern <span className="text-textCyan tracking-wide">@Trifecta Solutions Inc. </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Gained hands-on experience in Agile development methodologies, including sprint planning, daily stand-ups, and retrospectives.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          The Agile workshop gave me valuable insights, especially on how iterative processes and collaboration boost productivity and flexibility.
        </li>

      </ul>
    </motion.div>
  );
};

export default TrifectaSolutionsInc;