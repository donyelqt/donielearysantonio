import { motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";

const TaranaAI = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack AI Engineer <span className="text-textCyan tracking-wide">@Tarana-AI </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2025 - Present · Part-time
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Architected a BFF-based, DDD component monolith, reducing cross-domain coupling by ~40% and improving feature development velocity by ~30%. Optimized the Agentic RAG Pipeline Latency from 60s to 15-30s in real-time data adaptation with Live Traffic Data, Weather Data, and User Preferences Data Fusion.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Built an Agentic AI + RAG pipeline (Google Gemini API, pgvector, PostgreSQL), increasing contextual accuracy by ~50% and reducing irrelevant outputs by ~40%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textCyan mt-1">
            <AiFillThunderbolt />
          </span>{""}
          Deployed production infrastructure using Vercel, Supabase, and PostgreSQL, achieving 99%+ uptime with secure authentication via NextAuth.js.
        </li>
      </ul>
    </motion.div>
  );
};

export default TaranaAI;
