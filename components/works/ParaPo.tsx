import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const ParaPo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        CTO & Lead Android Developer <span className="text-textCyan tracking-wide">@Para Po! </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Become the new CTO & Lead Android Developer of startup navigation app in Baguio City, one of our startup university&apos;s incubator cohort 7 that is also a former Philippine Startup Challenge 8 Region CAR Champion and 4th place in Nationals.
        </li>

      </ul>
    </motion.div>
  );
};

export default ParaPo;