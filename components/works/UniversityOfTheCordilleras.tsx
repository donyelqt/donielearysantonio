import { motion } from "framer-motion";

import { AiFillThunderbolt } from "react-icons/ai";

const UniversityOfTheCordilleras = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Computer Science Student <span className="text-textCyan tracking-wide">@UC Baguio</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        August 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Successfully developed a full-stack portfolio university project website using HTML5, CSS3, and JavaScript ES7+, with the features of admin login authorization for you to see your own Email, Facebook Messenger, and SMS messages. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""} 
          I lead a small team of three members for our technopreneurship project, and I handle all the web app development. We proposed and developed the UC GastroBaguio web app, a community platform for hospitals in Baguio City, Philippines, focusing on solving gastroenteritis cases.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""} 
          Developed a Python-based framework to implement and analyze classical graph algorithms, including Dijkstra, Bellman-Ford, Floyd-Warshall, A*, and Johnson&apos;s algorithms. Generated random and specialized graphs (e.g., negative cycles) for testing, validated algorithm correctness, and compared performance across scalability metrics. Visualized execution time and memory usage trends using Matplotlib for graphs of varying sizes. Utilized Python's collections and queue for efficient data structure implementation, measured algorithmic complexity with tracemalloc and time for in-depth performance analysis, and designed heuristic functions for A* to optimize pathfinding. Improved understanding of algorithmic trade-offs and their application in real-world scenarios.
        </li>
      </ul>
    </motion.div>
  );
};

export default UniversityOfTheCordilleras;