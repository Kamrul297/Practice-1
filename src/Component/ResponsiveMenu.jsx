import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';

const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode="wait">
        { isOpen && (
            <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.3}}
            className='absolute left-0 w-full h-screen z-20 lg:hidden'
            >
                <div className='bg-black text-white text-[14px] poppins-medium py-10 m-6'>
                    <ul className='flex flex-col-reverse justify-center items-center gap-[20px]'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Plan</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </motion.div>
        )};
    </AnimatePresence>
  )
}

export default ResponsiveMenu