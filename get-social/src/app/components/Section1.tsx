'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section1 = () => {
// Animation variants
const fadeIn = {
  initial: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.5 }
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

  return (
    <div className='mt-28 h-[50vh]'>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          
          {/* Content Side */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeIn}
              className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
            >
              Start your journey with <span className="text-blue-600">Digital Aliens Agency</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="mt-3 text-lg text-gray-800 dark:text-neutral-400"
            >
              Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeIn}
              className="mt-7 grid gap-3 w-full sm:inline-flex"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get started
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Contact sales team
              </motion.a>
            </motion.div>

            {/* Reviews Section */}
            <motion.div 
              variants={fadeIn}
              className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5"
            >
              {/* Review content remains the same */}
            </motion.div>
          </motion.div>

          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative ms-4"
          >
           <motion.video
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5 }}
  src="/hero1.mp4"
  autoPlay
  loop
  muted
  className="w-full h-full md:h-[70vh] object-cover rounded-lg"
/>
            
            {/* Background gradient and SVG remain the same */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
