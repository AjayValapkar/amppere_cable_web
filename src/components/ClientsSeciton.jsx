import React from "react";
import { Link } from "react-router-dom";


// Sample client data
const clients = [
    { name: "Schneider Electric", logo: "src/assets/testimonial.png" },
    { name: "Kotak", logo: "src/assets/image 33.png" },
    { name: "Mahindra Aerospace", logo: "src/assets/image 34.png" },
    { name: "PNB", logo: "src/assets/image 35.png" },
    { name: "Dell", logo: "src/assets/image 36.png" },
    { name: "MindSpace", logo: "src/assets/image 37.png" },
    { name: "Genpact", logo: "src/assets/image 33.png" },
    { name: "C-DOT", logo: "src/assets/image 33.png" },
];

const ClientsComponent = React.memo(() => {
    return (
        <div className="bg-white -mt-2 md:mt-12 p-6 -mb-20 md:px-48 ">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-left mb-6 md:mb-0">
                    <div className="flex items-center">
                        <p className="text-[#880000] font-bold text-2xl md:text-4xl mr-2 font-inter">OUR ESTEEMED</p>
                        <p className="text-black font-bold text-2xl md:text-4xl font-inter">CLIENTS</p>
                    </div>

                    {/* <h2 className="text-red-700 font-bold text-3xl">OUR ESTEEMED CLIENTS</h2> */}
                    <p className="text-black mt-2 font-inter">AMMPERE CABLE got an opportunity to work with many prestigious clients.</p>
                </div>
                <div>
                    <button className="font-inter bg-[#AE1B1B] text-white px-6 py-2 rounded-md hover:bg-red-800 flex items-center">
                                <Link to="/clients">View our clients</Link>
                                
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 ml-2"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6.79 4.093a.5.5 0 0 1 .607-.064l4.5 3a.5.5 0 0 1 0 .854l-4.5 3A.5.5 0 0 1 6 10.5v-6a.5.5 0 0 1 .79-.407z" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="relative overflow-hidden mt-16 mb-20">
                <div className="flex animate-marquee whitespace-nowrap">
                    {clients.map((client, index) => (
                        <img
                            key={index}
                            src={client.logo}
                            alt={client.name}
                            className="h-6 md:h-10 mx-4 md:mx-8 object-contain"
                            loading="lazy" // Optimizes image loading
                        />
                    ))}
                    {clients.map((client, index) => (
                        <img
                            key={index + clients.length}
                            src={client.logo}
                            alt={client.name}
                            className="h-10 mx-8 object-contain"
                            loading="lazy" // Optimizes image loading
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default ClientsComponent;
