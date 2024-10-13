import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const PeraPinoy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      transition={{ delay: 0.1 }} 
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Founder | CTO | Full - Stack / Lead Developer <span className="text-textCyan tracking-wide">@PeraPinoy!</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Implement Clerk Auth for easy to log in with Apple ID, Github, and Google.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Implement a visually stunning Philippine-inspired theme for the frontend for a better UI/UX experience and engagement for Filipino users.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Implement Neon Console for managing our PostgreSQL database and Drizzle ORM for type-safe, efficient database queries, ensuring seamless performance and scalability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Implement and integrate PeraPinoyGPT, an AI-powered chatbot utilizing Google AI/Gemini APIs and SDKs, to provide personalized financial advice and support and enhance the user experience for our Filipino users.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Implement all the features, including the dashboard with LineChart, budget and expense tracking, commodity forecasting, expense alert, savings reward system, financial forums, and a PeraPinoyGPT.
        </li>
      </ul>
    </motion.div>
  );
};

export default PeraPinoy;