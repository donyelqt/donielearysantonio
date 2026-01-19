import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
    id: number;
    x: number;
    y: number;
}

const ShootingStars = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const createStar = () => {
            // Random position - keep mostly in upper/right view
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight * 0.7);

            const newStar = { id: Date.now(), x, y };

            setStars((prev) => [...prev, newStar]);

            // Cleanup after animation
            setTimeout(() => {
                setStars((prev) => prev.filter((s) => s.id !== newStar.id));
            }, 2500);
        };

        // Increased Frequency: Intervals for more stars
        const interval = setInterval(() => {
            createStar();
        }, 2000);

        // Occasional "Bursts"
        const burstInterval = setInterval(() => {
            if (Math.random() > 0.7) createStar(); // 30% chance for an extra one
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(burstInterval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{
                        x: star.x,
                        y: star.y,
                        opacity: 1,
                        scale: 1
                    }}
                    animate={{
                        x: star.x - 700,
                        y: star.y + 700,
                        opacity: 0,
                        scale: 0.5
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeOut"
                    }}
                    className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_20px_2px_rgba(255,255,255,0.8)]"
                >
                    {/* Tail */}
                    <div className="absolute top-0 right-0 w-[150px] h-[1px] bg-gradient-to-l from-transparent via-blue-400 to-white transform -rotate-45 origin-top-left" />
                </motion.div>
            ))}
        </div>
    );
};

export default ShootingStars;
