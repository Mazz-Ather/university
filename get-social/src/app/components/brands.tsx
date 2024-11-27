import React from 'react';

const Brands = () => {
  return (
    <div className="relative z-10 bg-black">
      <div className="w-full px-4 xl:px-0 mx-auto">
        <div className="mb-4">
          <h2 className="text-neutral-200 text-lg p-5 flex items-center-center justify-center">
            Trusted by Nvidia, Tesla, and more than 99,000 of you
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee gap-6 lg:gap-16">
            {/* Brand logos */}
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/brand1.jpg"  // Replace with actual brand image paths
              alt="Brand 1"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/images/brand2.png"  // Replace with actual brand image paths
              alt="Brand 2"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/images/brand3.png"  // Replace with actual brand image paths
              alt="Brand 3"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/images/brand4.png"  // Replace with actual brand image paths
              alt="Brand 4"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/brand1.jpg"  // Replace with actual brand image paths
              alt="Brand 5"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/images/brand2.png"  // Replace with actual brand image paths
              alt="Brand 6"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/images/brand3.png"  // Replace with actual brand image paths
              alt="Brand 7"
            />
            <img
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24"
              src="/images/brand4.png"  // Replace with actual brand image paths
              alt="Brand 8"
            />
            {/* Add more brands as necessary */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
