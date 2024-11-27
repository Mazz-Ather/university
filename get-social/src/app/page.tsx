'use client';

import React from 'react';
import About from './components/About';
// import Marquee from '@/app/components/Marquee'
import Brands from './components/brands';
import Faq from './components/faq';
import Section1 from './components/Section1';
import AnimatedSection from './components/AnimatedSection';
import Terms from './components/Terms';
import Marquee from './components/Marquee';
export default function page() {
  
  return (
    <div className=''>
<Section1/>
        <About />
<Marquee/>
<div className='relative'>
<Faq/>
<AnimatedSection/>
<Terms/>
<Brands/>
</div>
    </div>
  );
}
