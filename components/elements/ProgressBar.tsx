'use client'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type ProgressBarProps = {
    progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2 // Trigger animation when 20% of the component is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start({ width: `${progress}%` });
        } else {
            controls.start({ width: 0 });
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="w-full h-4 bg-gray-300 rounded-lg overflow-hidden">
            <motion.div className="h-full bg-blue"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut' }}
            />
        </div>
    )
}