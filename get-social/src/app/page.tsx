'use client';

import { useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { GoogleGeminiEffect } from '@/app/components/ui/google-gemini-effect';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from '@/app/components/Marquee'
import Brands from './components/brands';
import About1 from './components/About1';
import FeaturesSectionDemo from './components/BentoGrid';
import AgencySection from './components/BentoGrid';
import Faq from './components/faq';
import Section1 from './components/Section1';
import AnimatedSection from './components/AnimatedSection';
import Terms from './components/Terms';
export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Modify the range to stop the animation at the right time before the Hero/About sections
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]); // Adjusted range
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0, 1.7]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0, 1.5]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 2.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);

  return (
    <div className=''>
      {/* Section 1: The Google Gemini Effect */}
      {/* <div className="h-screen  !bg-black/90" ref={ref}>
        <div className="fixed top-32 left-0 w-full"> */}

          {/* <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          /> */}
        {/* </div>
      </div> */}
<Section1/>
      {/* Section 2: About Section */}
      {/* <div className=""> */}
        <About />
      {/* </div> */}

<Marquee/>
{/* <About1/> */}
<div className='relative'>
{/* <AgencySection/> */}
<Faq/>
<AnimatedSection/>
<Terms/>
<Brands/>
</div>
    </div>
  );
}
