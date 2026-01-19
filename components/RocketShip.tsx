import React from "react";
import { motion } from "framer-motion";

const RocketShip = () => {
    return (
        <div className="flex justify-center items-center w-full h-full relative">
            <motion.svg
                width="300"
                height="400"
                viewBox="0 0 200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ y: 0 }}
                animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 1, -1, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                }}
                className="drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
                {/* Rocket Body */}
                <motion.path
                    d="M100 40 C 100 40, 50 120, 50 240 L 50 280 C 50 280, 50 310, 30 340 L 100 320 L 170 340 C 150 310, 150 280, 150 280 L 150 240 C 150 120, 100 40, 100 40 Z"
                    fill="url(#bodyGradient)"
                    stroke="#00FFFF"
                    strokeWidth="2"
                />

                {/* Center Window */}
                <circle cx="100" cy="180" r="25" fill="#1a0b2e" stroke="#00FFFF" strokeWidth="3" />
                <circle cx="100" cy="180" r="20" fill="rgba(0, 255, 255, 0.2)" />

                {/* Fins */}
                <motion.path
                    d="M50 260 L 20 340 L 50 310 Z"
                    fill="#334155"
                    stroke="#00FFFF"
                    strokeWidth="2"
                />
                <motion.path
                    d="M150 260 L 180 340 L 150 310 Z"
                    fill="#334155"
                    stroke="#00FFFF"
                    strokeWidth="2"
                />

                {/* Middle Fin */}
                <motion.path
                    d="M100 260 L 100 340"
                    stroke="#00FFFF"
                    strokeWidth="2"
                />

                {/* Flame */}
                <motion.g
                    initial={{ scaleY: 1, opacity: 0.8 }}
                    animate={{
                        scaleY: [1, 1.2, 0.9, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                >
                    <path d="M70 320 Q 100 420 130 320" fill="#FF5733" opacity="0.8" />
                    <path d="M80 320 Q 100 400 120 320" fill="#FFC300" opacity="0.9" />
                    <path d="M90 320 Q 100 380 110 320" fill="#FFFFFF" opacity="1" />
                </motion.g>

                {/* Definitions for Gradients */}
                <defs>
                    <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#FBFCFE" />
                        <stop offset="100%" stopColor="#F1F5F9" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </div>
    );
};

export default RocketShip;
