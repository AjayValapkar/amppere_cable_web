import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import imagePath from '../constant/imagePath';


const CopperConductors = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 800,
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

        <div className="relative text-white overflow-hidden pb-20 ">
            <div className='bg-black -mb-20'>
                <img
                    src={imagePath.wire}
                    alt=""
                    className='w-full h-2/3 object-contain'
                />
                <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center relative">
                    {/* Left side - Heading */}
                    <div className="md:w-1/2 text-left md:text-left" data-aos="fade-in">
                        <h1 className="font-inter text-5xl md:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-700 via-pink-700 to-purple-600 bg-200% animate-gradient-animation text-transparent bg-clip-text">
                            <span >Manufacturing</span><br />
                            <span >Low Tension</span><br />
                            <span >Copper</span><br />
                            <span>Conductors</span>
                        </h1>
                    </div>

                    {/* Right side - Text & Button */}
                    <div className="font-inter md:w-1/2 mt-6 md:mt-0 text-left p-4" data-aos="fade-in">
                        <p className="mb-4 text-white leading-relaxed">
                            An emerging manufacturer in the cable industry, the company boasts 30 years of core manufacturing experience and has been producing wires and cables independently for the past 4 years.
                            <br />
                            <span className="text-red-600 font-bold">Accredited with ISO-9001:2008 certification and registered under MSME</span>, the company also holds CE and RoHS certifications.
                        </p>
                        <p className="text-white mb-6 leading-relaxed">
                            It serves a distinguished clientele, including Comfort Techno Solutions, Kaimi Inc., Securex Systems, Virtue Automation & Control Solutions, Schneider Electric India Ltd., and many others across India, reflecting its commitment to quality and industry standards.
                        </p>
                        <div className="flex justify-center items-center relative">
                            <a href="" className="relative inline-block bg-[#AE1B1B] text-white font-bold py-3 px-6 rounded hover:bg-red-700 transition">

                                <Link to="/about"> READ MORE</Link>

                                <span className="absolute border-t-2 border-l-2 border-red-600 top-0 left-0 w-8 h-8 -m-3"></span>
                                {/* <span className="absolute border-t-2 border-r-2 border-red-600 top-0 right-0 w-6 h-6"></span> */}
                                {/* <span className="absolute border-b-2 border-l-2 border-red-600 bottom-0 left-0 w-6 h-6"></span> */}
                                <span className="absolute border-b-2 border-r-2 border-red-600 bottom-0 right-0 w-8 h-8 -m-3"></span>
                            </a>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default CopperConductors;
