'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/app/components/Hero'; // Adjust path as needed

const AnimatedSection = ({ title, description, index }: { 
  title: string; 
  description: string; 
  index: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="min-h-screen flex items-center p-8"
  >
    <div className="space-y-6 max-w-xl">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-violet-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-gray-300 text-lg md:text-xl leading-relaxed"
      >
        {description}
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
      >
        Learn More
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  </motion.div>
);

export default function ScrollingSections() {
  const sections = [
    {
      title: "Transform Your Digital Experience",
      description: "Discover innovative solutions that revolutionize how you interact with technology.Lorem Ipsum is the most popularDiscover innovative solutions that revolutionize how you interact with technology.Lorem Ipsum is the most popularDiscover innovative solutions that revolutionize how you interact with technology.Lorem Ipsum is the most popular"
    },
    {
      title: "Build Without Boundaries",
      description: "Create seamless experiences with cutting-edge tools and frameworks Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate repellat ut magnam ipsa cumque, magni accusamus eaque at, aut quod quae. Totam consequuntur ipsam sint laudantium quos dolorum animi voluptate!."
    },
    {
      title: "Empower Your Vision",
      description: "Turn your ideas into reality with our powerful development platform."
    }
  ];

 
  return (
    <div className="flex flex-col lg:flex-row relative ">
      {/* Left scrolling sections */}
      <div className="w-full lg:w-1/2 bg-black/80">
        {sections.map((section, index) => (
          <AnimatedSection 
            key={index}
            title={section.title}
            description={section.description}
            index={index}
          />
        ))}
      </div>
      
      {/* Right Hero section */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-screen flex items-center justify-center bg-black/80 overflow-hidden">
        <Hero />
      </div>
      
      {/* Mobile Hero section */}
      <div className="w-full lg:hidden mt-9">
        <Hero />
      </div>
    </div>
  );
}