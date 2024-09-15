import React, { useEffect } from 'react';
import imagePath from '../constant/imagePath';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const ProductSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200, // Adjust offset to start the animation at the right scroll position
        });
    }, []);

    return (
        <>
            <div className="md:flex md:flex-row m-10 md:m-0 justify-evenly items-center p-0 md:p-8 mb-12">
                {/* Mobile view */}
                <div className="contents md:hidden">
                    <div data-aos="fade-up" className="flex flex-row justify-center items-center mb-8">
                        <p className="text-[#880000] font-bold text-3xl md:text-lg mr-2 font-inter">OUR</p>
                        <p className="text-black font-bold text-3xl md:text-lg font-inter" >PRODUCT</p>
                    </div>
                </div>

                {/* Product Images with Scroll Animation */}
                <div className="sm:flex sm:flex-col sm:justify-center">
                    <div className="flex flex-row sm:w-full sm:flex justify-center items-center">
                        <div data-aos="fade-right" className="relative w-[100px] h-[120px] m-2 lg:w-[210px] lg:h-[240px] md:m-5 md:mb-0 md:mr-4 flex justify-center items-center rounded-br-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_1} alt="Product 1" className="transition-all duration-300 ease-in-out group-hover:opacity-40" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Co-Axial Cable</span>
                        </div>
                        <div data-aos="fade-left" className="relative w-[100px] h-[130px] mt-2.5 md:mt-0 md:w-[225px] md:mb-4 md:h-[280px] flex justify-center items-center rounded-bl-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_2} alt="Product 2" className="transition-all duration-300 ease-in-out group-hover:opacity-40 h-[130px] md:h-[280px]" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Fire Alaram Cable</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div data-aos="fade-up" className="relative w-[120px] h-[160px] md:w-[250px] mr-2 md:mr-4 md:h-[260px] flex justify-center items-center rounded-tr-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_3} alt="Product 3" className="transition-all duration-300 ease-in-out group-hover:opacity-40 h-[160px] md:w-[250px] md:h-[260px]" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Flexible Cables</span>
                        </div>
                        <div data-aos="fade-down" className="relative w-[120px] h-[170px] mt-2 md:mt-0 md:w-[250px] md:h-[320px] flex justify-center items-center rounded-tl-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_4} alt="Product 4" className="transition-all duration-300 ease-in-out group-hover:opacity-40 h-[170px] md:h-[320px]" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Fire Survival Cables</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-[40%]">
                    <div>
                        {/* Desktop view */}
                        <div className="hidden md:contents">
                            <p className="text-[#880000] font-bold text-6xl mb-5 font-inter">OUR</p>
                            <p className="text-black font-bold text-6xl mb-10 font-inter">PRODUCT</p>
                        </div>
                        <p className="text-sm mt-5 md:text-2xl text-[#880000] font-inter">
                            Our comprehensive range of cables, including coaxial, fire alarm safety, instrumentation, braided multicore, CCTV, and control cables, caters to diverse industrial and commercial applications. Each type is meticulously designed for optimal performance, durability, and safety.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mb-24">
                <button className="font-inter p-2 md:p-4 border-[2px] md:mt-10 md:border-[3px] border-[#880000] bg-white text-[#AE1B1B] rounded-lg text-lg font-bold hover:bg-[#880000] hover:text-white hover:border-white hover:rounded-lg transition-all duration-300">

                    <Link to="/products">  More Products</Link>

                </button>
            </div>
        </>
    );
};

export default ProductSection;
