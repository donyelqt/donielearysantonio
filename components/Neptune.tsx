import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Neptune = () => {
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();

    // Gentle Parallax
    const yParallax = useTransform(scrollY, [0, 500], [0, 50]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] lgl:w-[1000px] lgl:h-[1000px] pointer-events-none z-0 overflow-visible">
            <motion.div style={{ y: yParallax }} className="w-full h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -250 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [-450, -465, -450],
                        rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeOut" },
                        y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-full h-full"
                >
                    {/* 1. THE CORE: Deep Blue Base */}
                    <div className="absolute inset-0 bg-[#1e40af] rounded-full shadow-[inset_-50px_-50px_150px_rgba(0,0,0,0.8),inset_20px_20px_100px_rgba(96,165,250,0.6)]" />

                    {/* 2. THE TEXTURE: Visible Gas Bands */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        {/* Static Base Texture */}
                        <svg className="w-full h-full opacity-80 mix-blend-overlay">
                            <filter id="neptuneBands">
                                <feTurbulence type="fractalNoise" baseFrequency="0.003 0.02" numOctaves="4" seed="2" result="noise" />
                                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -5" in="noise" result="coloredNoise" />
                                <feComposite in="coloredNoise" operator="in" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#neptuneBands)" fill="#93c5fd" />
                        </svg>

                        {/* ROTATING FEATURES - Simulating Planetary Spin */}
                        {/* Dark Spot - Slow rotation from left to right */}
                        <motion.div
                            initial={{ left: "-30%" }}
                            animate={{ left: "120%" }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[35%] w-[25%] h-[15%] rounded-[100%] bg-[#0e1b42] opacity-70 blur-[25px] mix-blend-multiply rotate-[-10deg]"
                        />

                        {/* Cloud Group 1 - Faster (High altitude winds) */}
                        <motion.div
                            initial={{ left: "-20%" }}
                            animate={{ left: "130%" }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 0 }}
                            className="absolute top-[30%] w-[15%] h-[4%] bg-white opacity-70 blur-[6px] rounded-full rotate-[-8deg] shadow-[0_0_15px_white]"
                        />

                        {/* Cloud Group 2 - Different latitude/speed */}
                        <motion.div
                            initial={{ left: "-20%" }}
                            animate={{ left: "120%" }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 15 }}
                            className="absolute top-[55%] w-[20%] h-[3%] bg-white opacity-50 blur-[8px] rounded-full rotate-[5deg]"
                        />

                        {/* Cloud Group 3 - Small stray clouds */}
                        <motion.div
                            initial={{ left: "-10%" }}
                            animate={{ left: "110%" }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: 25 }}
                            className="absolute top-[20%] w-[8%] h-[2%] bg-white opacity-40 blur-[4px] rounded-full"
                        />
                    </div>

                    {/* 3. THE GLOW: Cinematic Rim Light */}
                    <div className="absolute inset-0 rounded-full border-t-[2px] border-l-[1px] border-blue-200/50 blur-[1px]" />
                    <div className="absolute inset-0 rounded-full border-t-[4px] border-l-[3px] border-blue-400/30 blur-[6px] mix-blend-screen" />

                </motion.div>

                {/* 4. THE ATMOSPHERE: Radiant Blue Aura - Pulse Breathing */}
                <motion.div
                    animate={{ opacity: [0.3, 0.4, 0.3], scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-blue-600/30 blur-[200px] -z-10 translate-y-[-100px]"
                />
            </motion.div>
        </div>
    );
};

export default Neptune;
