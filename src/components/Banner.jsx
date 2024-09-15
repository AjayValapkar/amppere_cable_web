import React, { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        title: 'Cable & Wires',
        description: 'Our extensive cable product line is engineered to meet the highest standards in the industry.',
        imageUrl: '/src/assets/banner-wire.png', // replace with actual image path
    },
    {
        id: 2,
        title: 'Optical Fiber',
        description: 'Delivering high-performance optical fiber cables for fast and reliable data transmission.',
        imageUrl: '/src/assets/banner2.png', // replace with actual image path
    },
    {
        id: 4,
        title: 'Power Cables',
        description: 'Durable power cables designed to meet diverse industrial needs with the utmost reliability.',
        imageUrl: '/src/assets/banner3.png', // replace with actual image path
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[25vh] md:h-[80vh] overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map(slide => (
                    <div key={slide.id} className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900 ">
                        <div className="flex items-center w-full">
                            {slide.id % 2 === 0 ? (
                                <>
                                    <div className="w-full md:w-1/2 -p-20 animate-slide-in-left">
                                        <img src={slide.imageUrl} alt={slide.title} className="object-cover w-full h-auto" />
                                    </div>
                                    <div className="text-center p-4 md:p-8 text-white w-full md:w-1/2 animate-slide-in-right">
                                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                                        <p className="text-sm md:text-lg lg:text-xl">{slide.description}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-center p-2 md:p-36 text-white w-full md:w-1/2 animate-slide-in-left">
                                        <h2 className="text-xl md:text-xl lg:text-5xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                                        <p className="text-sm md:text-lg lg:text-xl font-inter">{slide.description}</p>
                                    </div>
                                    <div className="w-full md:w-1/2 p-0 animate-slide-in-right">
                                        <img src={slide.imageUrl} alt={slide.title} className="object-cover w-full h-auto" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
