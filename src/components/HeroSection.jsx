// src/components/HeroSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 200, // Try increasing the offset
    });

    AOS.refreshHard(); // Ensure animations are refreshed

    return () => {
      AOS.refresh(); // Clean up and refresh
    };
  }, []);


  return (
    <section className="text-white relative flex flex-col items-center justify-center h-screen -mt-16 md:mt-6">
      <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-x-0 md:space-y-0 w-full max-w-screen-lg p-0">
        <div className="relative w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
          <img
            src="/src/assets/commit.png" // Replace with the actual path to the image
            alt="Hand Holding Heart"
            className="h-auto w-3/5 md:w-3/4 relative z-30 md:-mb-14 p-0" // Apply negative margin for overlap
            data-aos="fade-down"
          />
        </div>
        <div className="relative text-center md:text-left" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 flex flex-col md:flex-row md:items-center">
           
            <span className="text-red-600 font-inter"> <span className="text-black md:mr-2 font-inter">WE</span> COMMIT</span>
          </h1>
          <h3 className="text-base md:text-lg p-4 text-black font-inter">
            At Amppere Cable, we commit to providing top-quality, reliable products backed by over 30 years of expertise and international certifications. Our state-of-the-art facility and skilled team ensure excellence in every cable we manufacture.
          </h3>
        </div>
      </div>

      <div className="bg-custom-blue w-full py-10 md:py-16 mb-2 md:mb-8 flex flex-wrap justify-center gap-2 md:gap-[40px] items-center">
        {["icon1.png", "icon2.png", "icon3.png", "icon4.png"].map((icon, index) => (
          <div
            key={index}
            className="bg-icon-color p-5 md:p-4 rounded-full"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Adds a delay for staggered animations
          >
            <img src={`/src/assets/${icon}`} alt={`Icon ${index + 1}`} className="w-8 md:w-20 h-8 md:h-20" />
          </div>
        ))}
      </div>
    </section>

  );
};

export default HeroSection;
