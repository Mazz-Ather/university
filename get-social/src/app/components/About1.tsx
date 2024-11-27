import React from 'react'
import Hero from './Hero'

const About1 = () => {
  return (
    <section className='bg-gradient-to-r from-black via-white/30 to-violet-400  relative min-h-[70vh] w-full bg-black/95 py-20'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-300 to-violet-400 
                bg-clip-text text-transparent">
                We are here to make great design accessible and delightful
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of 
              using Lorem Ipsum.
            </p>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 
              to-purple-600 rounded-lg overflow-hidden transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <span className="relative z-10 text-white font-medium">
                About Us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 
                to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity
                duration-300 ease-in-out">
              </div>
            </button>
          </div>

          {/* Hero Component Side */}
          <div className="w-full lg:w-1/2">
            <Hero />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About1
