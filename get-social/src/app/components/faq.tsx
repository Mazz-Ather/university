// components/Faq.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FaqItem {
  question: string;
  answer: string;
  image: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do you approach new project development?",
    answer: "We follow a comprehensive approach starting with discovery, planning, design, development, testing, and deployment phases. Each project is tailored to meet specific client needs and objectives.",
    image: "/brand1.jpg"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and various cloud platforms. Our stack is constantly evolving to incorporate the latest industry standards.",
    image: "/faq/tech.jpg"
  },
  {
    question: "How do you handle project timelines and deadlines?",
    answer: "We use agile methodology with clear milestones and regular client communications. Our project management ensures timely delivery while maintaining quality standards.",
    image: "/faq/timeline.jpg"
  },
  {
    question: "What makes your agency different from others?",
    answer: "Our unique blend of creative design, technical expertise, and strategic thinking sets us apart. We focus on delivering measurable results and long-term value for our clients.",
    image: "/faq/unique.jpg"
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your digital solutions continue to perform optimally.",
    image: "/faq/support.jpg"
  },
  {
    question: "How do you handle project pricing?",
    answer: "We provide transparent pricing based on project scope, complexity, and timeline. Each quote is customized to match specific project requirements and deliverables.",
    image: "/faq/pricing.jpg"
  },
  {
    question: "What is your typical project process?",
    answer: "Our process includes initial consultation, proposal development, project kickoff, regular progress updates, testing, and final deployment with thorough documentation.",
    image: "/faq/process.jpg"
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Background Image on Hover */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-0"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover opacity-40"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Question Button */}
              <motion.button
                className="relative z-10 w-full p-6 text-left bg-white/10 hover:bg-white/20 
                          transition-colors duration-300 rounded-lg flex items-center justify-between
                          group"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg md:text-xl font-medium text-white">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.div>
              </motion.button>

              {/* Answer Panel */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 bg-white/5 rounded-b-lg"
                  >
                    <div className="p-6 text-gray-300">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
