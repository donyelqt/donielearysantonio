import { motion } from "framer-motion";
import Rocket3D from "./Rocket3D";
import Neptune from "./Neptune";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto px-4 pt-10 pb-24 lgl:py-32 flex flex-col lgl:flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative"
    >
      <Neptune />
      <div className="flex flex-col gap-4 lgl:gap-8 items-center lgl:items-start justify-center w-full lgl:w-2/3 lgl:-translate-y-20 relative">
        <h3
          className="text-sm sm:text-lg mdl:text-xl lgl:text-2xl font-titleFont tracking-wide text-textCyan"
        >
          Hello, World!
        </h3>
        <h1
          className="text-xl sm:text-2xl md:text-3xl lgl:text-5xl font-titleFont font-semibold flex flex-col items-center lgl:items-start text-textWhite text-center lgl:text-left"
        >
          Doniele Arys Antonio.{" "}
          <span className=" text-textCyan mt-2 lgl:mt-4 typewriter">
            Full-Stack AI/ML Engineer 💻📱
          </span>
        </h1>
        <a
          href="mailto:arysantonio123@gmail.com"
          className="w-52 h-14 text-md font-titleFont border border-textCyan rounded-md text-textCyan tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center cursor-pointer"
        >
          💌 Say Hello!
        </a>
      </div>

      <div className="text-textCyan flex lgl:inline-flex w-full lgl:w-1/3 justify-center items-center lgl:-translate-y-20">
        <div className="relative w-full h-[400px] lgl:h-[650px] flex items-center justify-center">
          {/* Gradient backdrop for natural blending */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 rounded-full blur-3xl" />
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, delay: 0.1, ease: "easeInOut" }}
            className="relative z-10 w-full h-full"
          >
            <Rocket3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
