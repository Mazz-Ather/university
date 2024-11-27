'use client';

import { motion } from "framer-motion";
import { IconLock, IconShield, IconUserCheck, IconFiles, IconScale , IconKey, IconDatabase, IconShieldLock} from "@tabler/icons-react";
import Image from "next/image";
const IconPrivacy = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   className={className}
      className='string'      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2l9 4l-9 16l-9 -16z" />
      <path d="M10 10a2 2 0 1 1 4 0v2a2 2 0 1 1 -4 0z" />
    </svg>
  );
  
const Terms = () => {
  const terms = [
    {
      title: "Privacy Policy",
      description: "Your data is secured and encrypted with industry standards",
      icon: <IconPrivacy className="w-8 h-8" />,
      image: "/brand1.jpg",
      video: "/about1.mp4"
    },
    {
      title: "Data Protection",
      description: "We follow GDPR and international data protection guidelines",
      icon: <IconShield className="w-8 h-8" />,
      image: "/security.jpg"
    },
    {
      title: "User Agreement",
      description: "Clear and transparent terms for platform usage",
      icon: <IconUserCheck className="w-8 h-8" />,
      image: "/agreement.jpg"
    },
    {
      title: "Legal Compliance",
      description: "Adherence to international legal standards",
      icon: <IconScale className="w-8 h-8" />,
      image: "/legal.jpg"
    }, {
        title: "Data Encryption",
        description: "End-to-end encryption for all your sensitive information",
        icon: <IconLock className="w-8 h-8" />,
        image: "/encryption.jpg",
        video: "/security2.mp4"
      },
      {
        title: "Access Control",
        description: "Multi-factor authentication and role-based access management",
        icon: <IconKey className="w-8 h-8" />,
        image: "/access.jpg"
      },
      {
        title: "Data Retention",
        description: "Transparent policies for data storage and deletion",
        icon: <IconDatabase className="w-8 h-8" />,
        image: "/retention.jpg"
      },
      {
        title: "Breach Protection",
        description: "Advanced security measures against unauthorized access",
        icon: <IconShieldLock className="w-8 h-8" />,
        image: "/breach.jpg"
      }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Terms & Conditions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {terms.map((term, index) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Image
                  src={term.image}
                  alt={term.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6"
                >
                  {term.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{term.title}</h3>
                <p className="text-gray-300">{term.description}</p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-105 group-hover:scale-100" />
              </div>

              {/* Glowing Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
// npm install framer-motion @tabler/icons-react
