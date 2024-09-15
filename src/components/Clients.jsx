import React from 'react';

const Clients = () => {
    const clients = [
        "src/assets/testimonial.png",
        "src/assets/nexus.png",
        "src/assets/Capgemini-Logo.png",
        "src/assets/image 34.png",
        "src/assets/Mahindra_aerospace.webp",
        "src/assets/image 35.png",
        "src/assets/bse.jpg",
        "src/assets/nxp.avif",
        "src/assets/image 36.png",
        "src/assets/image 37.png",
        "src/assets/image 33.png",
        "src/assets/junai.png",
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
