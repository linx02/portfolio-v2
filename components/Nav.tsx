'use client'

import { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import useIsMobile from '@/app/utils/useIsMobile';
import Link from 'next/link';

const AnimatedListItem = ({ href, children }: { href: string; children: React.ReactNode; }) => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
        controls.start({
            scaleX: 1,
            transition: { duration: 0.4, ease: 'easeInOut' },
            transformOrigin: 'left',
        });
    };

    const handleMouseLeave = () => {
        controls.start({
            scaleX: 0,
            transition: { duration: 0.4, ease: 'easeInOut' },
            transformOrigin: 'right',
        });
    };

    return (
        <motion.li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative list-none"
        >
            <a href={href} className="block px-4 py-2">
                {children}
            </a>
            <motion.div
                className="absolute bottom-0 left-[15%] h-[4px] bg-blue"
                initial={{ scaleX: 0 }}
                animate={controls}
                style={{ width: '70%', transformOrigin: 'left' }}
            />
        </motion.li>
    );
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export default function Nav({lang}: {lang:'en' | 'sv'}) {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);

    const content = {
        en: {
            work: "Work",
            skills: "Skills",
            contact: "Contact"
        },
        sv: {
            work: "Projekt",
            skills: "Kompetens",
            contact: "Kontakt"
        }
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    if (!isMobile) {
        return (
            <nav className="border-b-[1px] border-neutral-300 sticky top-0 z-[100]">
                <div className="h-20 bg-white">
                    <div className="flex justify-between items-center h-full font-bold text-xl mx-24">
                        <button onClick={scrollToTop} className='hover:text-blue transition duration-300 ease-in-out'>
                            Linus
                        </button>
                        <ul className="flex space-x-6">
                            <AnimatedListItem href="#work">{content[lang]["work"]}</AnimatedListItem>
                            <AnimatedListItem href="#skills">{content[lang]["skills"]}</AnimatedListItem>
                            <AnimatedListItem href="#contact">{content[lang]["contact"]}</AnimatedListItem>
                            <AnimatedListItem href="https://v1.linuselvius.com">v1</AnimatedListItem>
                            { lang == 'en' ?
                            <Link href="/sv" className='flex items-center'><li>🇸🇪</li></Link>
                            :
                            <Link href="/" className='flex items-center'><li>🇬🇧</li></Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="border-b-[1px] border-neutral-300 sticky top-0 z-[100]">
                <div className="h-20 bg-white">
                    <div className="flex justify-between items-center h-full font-bold text-xl mx-4">
                        <button onClick={scrollToTop} className='hover:text-blue transition duration-300 ease-in-out'>
                            Linus
                        </button>
                        <div className='flex items-center space-x-4'>
                            { lang == 'en' ?
                                <Link href="/sv" className='flex items-center'>🇸🇪</Link>
                                :
                                <Link href="/" className='flex items-center'>🇬🇧</Link>
                            }
                            <button onClick={toggleNavbar}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center"
                        >
                          <button className="mt-8 absolute top-0 right-6" onClick={toggleNavbar}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="space-y-6 text-xl">
                                <li>
                                    <a href="#work" className="hover:text-blue transition duration-300 ease-in-out" onClick={toggleNavbar}>Work</a>
                                </li>
                                <li>
                                    <a href="#skills" className="hover:text-blue transition duration-300 ease-in-out" onClick={toggleNavbar}>Skills</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-blue transition duration-300 ease-in-out" onClick={toggleNavbar}>Contact</a>
                                </li>
                                <li>
                                    <a href="https://v1.linuselvius.com" className="hover:text-blue transition duration-300 ease-in-out" onClick={toggleNavbar}>v1</a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        )
    }
}