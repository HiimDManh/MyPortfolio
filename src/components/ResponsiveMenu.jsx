import { React } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCodeDownloadOutline } from "react-icons/io5";

export function ResponsiveMenu({ open }) {
    return (
        <AnimatePresence mode='wait'>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className='absolute top-30 left-0 w-full z-20 md:hidden'
                >
                    <div className='text-xl fira-sans-condensed-medium m-10 py-10 gap-4 rounded-3xl menu-hidden'>
                        <ul className='flex flex-col gap-10 justify-center items-center text-blue-900'>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;