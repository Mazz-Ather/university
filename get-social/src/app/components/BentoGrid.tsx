'use client';

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function AgencySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const content = [
    {
      title: "Strategic Design Solutions",
      description: "We transform complex challenges into elegant, user-centric designs that drive real business results.",
      image: "/brand1.jpg",
      delay: 0.2,
    },
    {
      title: "Our Creative Process",
      description: "From concept to execution, we blend creativity with strategic thinking to deliver memorable brand experiences.",
      image: "/brand1.jpg",
      delay: 0.4,
    },
    {
      title: "Global Creative Force",
      description: "Creating impact across cultures with innovative solutions",
      image: "/portfolio3.jpg",
      delay: 0.6,
    },    {
      title: "Strategic Design Solutions",
      description: "We transform complex challenges into elegant, user-centric designs that drive real business results.",
      image: "/brand1.jpg",
      delay: 0.2,
    },
    {
      title: "Our Creative Process",
      description: "From concept to execution, we blend creativity with strategic thinking to deliver memorable brand experiences.",
      image: "/brand1.jpg",
      delay: 0.4,
    },
    {
      title: "Global Creative Force",
      description: "Creating impact across cultures with innovative solutions",
      image: "/portfolio3.jpg",
      delay: 0.6,
    },    {
      title: "Strategic Design Solutions",
      description: "We transform complex challenges into elegant, user-centric designs that drive real business results.",
      image: "/brand1.jpg",
      delay: 0.2,
    },
    {
      title: "Our Creative Process",
      description: "From concept to execution, we blend creativity with strategic thinking to deliver memorable brand experiences.",
      image: "/brand1.jpg",
      delay: 0.4,
    },
    {
      title: "Global Creative Force",
      description: "Creating impact across cultures with innovative solutions",
      image: "/portfolio3.jpg",
      delay: 0.6,
    }
  ];

  return (
    <div className="min-h-screen z-[999] !bg-red-500 w-full text-white -36">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb- z-[999]"
        >
     
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.map((item, index) => (
            <Card
              key={item.title}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  item: {
    title: string;
    description: string;
    image: string;
    delay: number;
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function Card({ item, index, hoveredIndex, setHoveredIndex }: CardProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: item.delay, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHoveredIndex(index)}
      style={{
        rotateX: mounted ? rotateX : 0,
        rotateY: mounted ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 
                 transition-all relative group overflow-hidden transform-gpu"
    >
      {/* Hover Image */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          hoveredIndex === index ? 'opacity-20' : 'opacity-0'
        }`}
        style={{ transform: "translateZ(-20px)" }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
        <p className="text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  );
}
