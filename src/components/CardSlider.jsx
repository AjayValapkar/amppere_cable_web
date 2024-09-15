import React, { useState, useEffect } from 'react';
import imagePath from '../constant/imagePath';

const testimonials = [
    {
        id: 1,
        name: 'Junani Fire Industries',
        text: '"Amppere’s cables offer unmatched quality and durability, with outstanding customer service. They’ve been a crucial supplier for our fire safety systems, and their dedication to excellence ensures our continued partnership. "',
        imageUrl: imagePath.review1, // replace with actual image path
    },
    {
        id: 2,
        name: 'Nexus Engineering',
        text: '"Amppere provides dependable cabling solutions that meet our rigorous standards. Their consistent product quality and prompt delivery are essential to our engineering projects, making them a valued and trusted partner. "',
        imageUrl: imagePath.review2, // replace with actual image path
    },
    {
        id: 3,
        name: 'KIAM INTL PVT LTD.',
        text: '" Amppere’s cabling materials are top- notch, and their on - time delivery is impressive.Theyve been crucial to our banking and retail projects, and their reliability makes them a valuable partner.Were excited to continue working with them. "',
        imageUrl:imagePath.review3, // replace with actual image path
    },
    {
        id: 4,
        name: 'SCHNEIDER ELECTRIC',
        text: '"Amppere consistently delivers high-quality cabling materials and meets deadlines, which is vital for our operations. Their dependability has built our trust, and we are eager to expand our business relationship. Their exceptional service sets them apart."',
        imageUrl: imagePath.review4, // replace with actual image path
    },
];

const CardSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % Math.ceil(testimonials.length / 2));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getSlides = () => {
        if (window.innerWidth < 768) {
            return testimonials.map(testimonial => [testimonial]);
        } else {
            return Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) =>
                testimonials.slice(index * 2, index * 2 + 2)
            );
        }
    };

    const slides = getSlides();

    return (

        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden p-8 pt-20 ">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-600 font-inter">Our Key Numbers</h2>
                <p className="text-xl text-red-600 font-inter">31st December 2023</p>
            </div>
            <div
                className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="flex w-full h-full flex-shrink-0 p-1 md:p-40 bg-black mb-8">
                        {slide.map(testimonial => (
                            <div key={testimonial.id} className="w-full md:w-1/2 p-10 flex items-center justify-center">
                                <div className="relative rounded-xl bg-white text-center text-black p-4 overflow-visible -m-4">
                                    <div className="relative w-20 h-20 mx-auto -mt-14 mb-10 rounded-full overflow-hidden shadow-md bg-white">
                                        <img
                                            src={testimonial.imageUrl}
                                            alt={testimonial.name}
                                            className="w-full h-6 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        />
                                    </div>






                                    <h3 className="text-xl font-semibold mb-2 font-inter">{testimonial.name}</h3>
                                    <p className="text-sm md:text-lg mb-16 font-inter">{testimonial.text}</p>
                                    <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center">
                                        <span className="text-[#F4E134] text-3xl text-center font-semibold  py-4">
                                            {'★'.repeat(5)}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                ))}
            </div>
            <br />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6 pb-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-7 h-3 mx-1 rounded ${index === currentSlide ? 'bg-red-600' : 'bg-red-900'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
