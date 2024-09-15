import React from 'react';
import imagePath from '../constant/imagePath';

const Clients = () => {
    const clients = [
        imagePath.comany1,
        imagePath.comany2,
        imagePath.comany3,
        imagePath.comany4,
        imagePath.comany5,
        imagePath.comany6,
        imagePath.comany9,
        imagePath.comany10,
        imagePath.comany11,
        imagePath.comany12,
        imagePath.comany13,
        imagePath.review1,
    ];

    return (
        <section id="clients" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="section-header text-center mb-10">
                    {/* <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 flex flex-col md:flex-row md:items-center"> */}

                        <span className="text-3xl md:text-4xl font-bold text-[#E91F1F] font-inter"> <span className=" text-black md:mr-2 font-inter">OUR</span>CLIENTS</span>
                    {/* </h1> */}
                    <p className="text-gray-500 text-xl md:text-xl mt-2 max-w-xl mx-auto">Meet our happy clients</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo border border-gray-200 bg-white h-40 flex justify-center items-center">
                            <img src={client} alt={`Client ${index + 1}`} className="max-h-full max-w-full transition-transform duration-300 ease-in-out hover:scale-105" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
