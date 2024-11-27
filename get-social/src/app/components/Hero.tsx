'use client'
import dynamic from "next/dynamic";

import { styles } from "@/style";
import  ComputersCanvas  from "./canvas/ComputerCanvas";
import AnimatedText from "./AnimatedText";
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
    ssr: false,  // This will disable server-side rendering for the framer-motion component
  });
  
const Hero = () => {
  return (
    <section className={`hero relative w-full h-[70vh] mx-auto -mt-32 pr-11`}>
      {/* <div
        className={`absolute inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'> */}
          {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          {/* <AnimatedText 
          text="Empowering Businesses with Cutting-Edge Digital Solutions"
          className={`${styles.heroHeadText} xxs:m-3 z-10 !text-black xs:text-5xl xs:font-semibold  xs:m-3 xs:w-47 lg:!text-7xl  lg:mt-44 sm:!text-5xl md:text-6xl lg:w-[70vw] xl:w-[90vw] xl:bg-green-500 lg:px-5 md:w-[85%]  lg:ml-16 md:mt-24 md:ml-11 sm:w-[75%] sm:mt-20 sm:ml-20  xs:mt-20 xl:text-8xl text-center mx-auto xl:font-bold xl:mt-36 xl:-ml-8 xl:m-5`}
            /> */}
          {/* <h1 >
            Hi, I'm <span className='text-[#915EFF]'>Mazz Ather</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p> */}
        {/* </div>
      </div> */}

      <ComputersCanvas />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <MotionDiv
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;