'use client'
// components/Footer.jsx
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF, FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import { SiBinance, SiDribbble } from 'react-icons/si';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };
  // Animation variants
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
   
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }
    };
  
    const linkVariants = {
      hover: { 
        color: "#22c55e", // green-500
        x: 5,
        transition: { duration: 0.1 }
      }
    };

  return (
    <motion.footer 
    initial="hidden"
    whileInView="visible"  // Triggers animation when footer comes into view
    viewport={{ once: false }}  // Only animate once
    variants={footerVariants}
    className="relative w-full bg-[#111111] h-full text-white py-1 -mb-9">
      <div className="m-20  h-full">
      <motion.div variants={itemVariants} className="w-full h-px bg-gray-700 mb-8" />
        <div className="flex flex-col sm:flex-row h-full">
          {/* Left Section - 60% */}
          <motion.div  variants={itemVariants} className="w-full md:w-[60%] pl-9 p-5">
            <div 
              className="relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

<div className="relative group"> {/* Parent must have 'group' class */}
  <motion.h1 className="text-4xl font-bold mb-12 md:text-6xl cursor-pointer h-full transition-transform duration-300 group-hover:scale-105">
    Have A Project <br /> In Mind? <br />Contact Us!
  </motion.h1>
</div>
              {isHovered && (
                  <motion.div
                  className="absolute bg-green-500 rounded-full flex items-center justify-center text-sm overflow-hidden "
                  style={{
                    width: "0px",
                    height: "0px",
                    originX: 0.9,
                    originY: 0.9,
                    transform: "translate(-50%, -50%)",
                
                  }}
                  animate={{
                    width: "11rem",
                    height: "11rem",
                    x: mousePosition.x - 68,
                    y: mousePosition.y - 68,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="relative">
                    Let's talk
                    <div
                      className="absolute left-1/2 top-1/2 w-4 h-4 bg-green-500"
                      style={{
                        clipPath: "polygon(10% 10%, 50% 10%, 10% 70%)",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </span>
                </motion.div>
              )}
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {/* Shaping Experience */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white/50">Shaping <br /> Experience</h3>
                <ul className="space-y-2">
                  {['UX Audit', 'UI Design', 'UX Design', 'UX Research'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-green-500 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Where We Shine */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white/50">Where We <br />Shine</h3>
                <ul className="space-y-2">
                  {['SAAS', 'WebApp', 'MobileApp', 'Design'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-green-500 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Behind the Scenes */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white/50">Behind the <br /> Scenes</h3>
                <ul className="space-y-2">
                  {['Our Story', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-green-500 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - 40% */}
          <div className="w-full md:w-[40%] mt-12 md:mt-0 pl-9 p-5">
            <h3 className="text-lg font-semibold mb-2 text-white/50">Let's Connect</h3>
            <button className="px-3 py-1 rounded-lg transition-colors mb-8 ring-1">
              Check Our Latest Desk
            </button>

            <h3 className="text-xl font-semibold mb-2 text-white/50">Our Location</h3>
            <p className="text-3xl font- mb-8 ">PECHS BLOCK 6 NEAR <br /> CHINCHPOKLI BANDAR KHAO GALI </p>

            <h3 className="text-xl font-semibold mb-2 mt-20 text-white/50">Our Social</h3>
            <div className="flex space-x-4 mb-8">
              {[
                { Icon: FaLinkedin, link: '#' },
                { Icon: FaFacebookF, link: '#' },
                { Icon: FaInstagram, link: '#' },
                { Icon: SiBinance, link: '#' },
                { Icon: SiDribbble, link: '#' },
                { Icon: FaDiscord, link: '#' },
                { Icon: FaWhatsapp, link: '#' },
              ].map(({ Icon, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  // variants={socialIconVariants}
                  // whileHover="hover"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-700 mt-8 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 py-11 gap-8 pl-9 p-5">
              {/* industries */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white/50">Industries</h3>
                <ul className="space-y-2">
                  {['AI', 'ML', 'Web 3.0'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-green-500 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* second */}
              <div>
                {/* <h3 className="text-lg font-semibold mb-2 text-white/50">Where We <br />Shine</h3> */}
                <ul className="space-y-2 mt-11">
                  {['Fintech', 'Ecommerce'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-green-500 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
{/* 3rd */}
              </div>
              <div>
              
            <div>
                <h3 className="text-lg font-semibold mb-2 text-white/50">Process</h3>
                <ul className="space-y-2">
                  {['MVP', 'Relaunch'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-green-500 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                  </div>
                  </div>
              </div>
              <div className="w-full h-px bg-gray-700 mt-8" />
              <motion.div 
          variants={itemVariants}
          className='py-9 flex items-center justify-between p-5'
        >
          <motion.h1 whileHover={{ scale: 1.05 }}>lazarev - AI + Product AI Agency</motion.h1>
          <motion.h2 whileHover={{ scale: 1.05 }}>All Right Reserved</motion.h2>
          <motion.h2 whileHover={{ scale: 1.05 }}> &#169;2024</motion.h2>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
