'use client'

// components/Project.tsx
import Image from "next/image";
import Glyph from "./elements/Glyph";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useIsMobile from "@/app/utils/useIsMobile";

type ProjectProps = {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
    technologies: string[];
}

const Project = ({ title, description, image, reverse, technologies }: ProjectProps) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2 // Trigger animation when 20% of the component is visible
    });
    const isMobile = useIsMobile();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: isMobile ? 0 : 0 });
        } else {
            controls.start({ opacity: 0, x: isMobile ? 0 : (reverse ? 15 : -15) });
        }
    }, [controls, inView, isMobile, reverse]);

    const initialAnimateProps = isMobile ? { opacity: 0, x: 0 } : { opacity: 0, x: reverse ? 15 : -15 };

    if (isMobile) {
        return (
            <div ref={ref} className="mx-auto px-8">
                <motion.div className="grid grid-cols-1 gap-6 items-center"
                    initial={initialAnimateProps}
                    animate={controls}
                    transition={{ duration: 1 }}
                >
                    <div className="rounded-xl" style={{ maxWidth: '500px' }}>
                        <Image src={image} alt={title} width={500} height={500} className="rounded-2xl drop-shadow-lg" />
                    </div>
                    <div className="flex flex-col space-y-6" style={{ maxWidth: '500px' }}>
                        <div className="w-fit">
                            <h3 className="text-3xl font-bold">{title}</h3>
                            <div className="h-[3px] w-full bg-blue mt-2 rounded-lg"></div>
                        </div>
                        <p className="font-semibold">{description}</p>
                        <div className="flex space-x-6 items-center">
                            {technologies.map((technology, index) => (
                                <Glyph key={index} icon={technology} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div ref={ref} className="mx-auto px-12">
            <motion.div
                initial={initialAnimateProps}
                animate={controls}
                transition={{ duration: 1 }}
                className="grid grid-cols-2 gap-24 items-center"
            >
                {!reverse ? (
                    <>
                        <div className="rounded-xl" style={{ maxWidth: '500px' }}>
                            <Image src={image} alt={title} width={500} height={500} className="rounded-2xl drop-shadow-lg" />
                        </div>
                        <div className="flex flex-col space-y-6" style={{ maxWidth: '500px' }}>
                            <div className="w-fit">
                                <h3 className="text-3xl font-bold">{title}</h3>
                                <div className="h-[3px] w-full bg-blue mt-2 rounded-lg"></div>
                            </div>
                            <p className="font-semibold">{description}</p>
                            <div className="flex space-x-6 items-center">
                                {technologies.map((technology, index) => (
                                    <Glyph key={index} icon={technology} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col space-y-6" style={{ maxWidth: '500px' }}>
                            <div className="w-fit">
                                <h3 className="text-3xl font-bold">{title}</h3>
                                <div className="h-[3px] w-full bg-blue mt-2 rounded-lg"></div>
                            </div>
                            <p className="font-semibold">{description}</p>
                            <div className="flex space-x-6 items-center">
                                {technologies.map((technology, index) => (
                                    <Glyph key={index} icon={technology} />
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl" style={{ maxWidth: '500px' }}>
                            <Image src={image} alt={title} width={500} height={500} className="rounded-2xl drop-shadow-lg" />
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
}

export default Project;