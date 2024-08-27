import { motion } from "framer-motion";

const Banner = () => {
  return ( 
    <section 
      id="home" 
      className="justify-center items-center max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      
      <motion.h3 
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }} 
        className="text-2xl font-titleFont tracking-wide text-textCyan"
      >
        Hello, World! 🧑🏻‍💻🚀👾
      </motion.h3>
      <motion.h1 
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.7 }} 
        className="justify-center items-center text-center text-3xl lgl:text-5xl font-titleFont font-semibold flex flex-col text-textWhite"
      >
        Doniele Arys Antonio.{" "} 
        <span className="text-center text-textSpace mt-2 lgl:mt-4 typewriter">
          Software Engineer 💻
        </span> 
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.8 }}  
        className="text-center text-base md:max-w-[600px] text-textDark font-medium"     
      >
       Hi! I am Doniele Arys Antonio, a student computer scientist and freelance software engineer based in Baguio City, Philippines. I love exploring software engineering, data science, artificial intelligence, machine learning, and cybersecurity. 
       The success stories of Bill Gates, Mark Zuckerberg, Larry Page, Sergey Brin, Elon Musk, and Jeff Bezos have greatly inspired me to pursue programming and aim high in my career. {""}
      </motion.p>
      <motion.a
        href="mailto:arysantonio123@gmail.com"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
      <motion.button
        className="w-52 h-14 text-md font-titleFont border border-textCyan rounded-md text-textCyan tracking-wide hover:bg-hoverColor duration-300"
      >
        💌 Say Hello!
      </motion.button>
     </motion.a>
    </section>
  );
};

export default Banner;