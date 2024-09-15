import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";// Importing Link from react-router-dom

const Footer = React.memo(() => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="relative bg-[url('/src/assets/foot.png')] bg-cover bg-bottom filter text-white p-6 md:p-28">
            {/* Overlay with shadow */}
            <div className="absolute inset-0 z-[-1] bg-black bg-opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <img src="/src/assets/logo.png" alt="Ampere Cable Logo" className="h-28 sm:h-20 md:h-26 lg:h-40" />
                <p className="text-white text-sm mb-4 ">Where Quality Meets Reliability</p>

                <div className="flex flex-wrap justify-between my-0 md:my-6">
                    {/* Left Column */}
                    <div className="font-inter w-full md:w-1/3 mb-8 md:mb-0" data-aos="fade-up">
                        <div className="mt-4">
                            <div className="flex items-center mb-2">
                                <span className="mr-2">📧</span>
                                <a href="mailto:infoampperecable@gmail.com">infoampperecable@gmail.com</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-2">📍</span>
                                <address>
                                    Shed no. 28 / A, 1&2, Survey no. 47, Hi-Tech Industrial Area, Village Alyali, Tal-Dist.Palghar, Palghar 401404, Maharashtra, India
                                </address>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">📞</span>
                                <a href="tel:+919370946510">+91 9370946510</a>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="font-inter w-full md:w-1/3 mb-8 md:mb-0 pl-0 md:pl-16" data-aos="fade-up">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <div className="w-1/3 border-t-4 border-red-600 my-3"></div>

                        <ul>
                            <li><Link to="/" className="text-2sm font-bold hover:underline">Home</Link></li>
                            <li><Link to="/about" className="text-2sm hover:underline">About Us</Link></li>
                            <li><Link to="/clients" className="text-2sm hover:underline">Clients</Link></li>
                            <li><Link to="/contact" className="text-2sm hover:underline">Enquiry</Link></li>
                            <li><Link to="/sitemap" className="text-2sm hover:underline">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="font-inter w-full md:w-1/3" data-aos="fade-up">
                        <h3 className="text-2xl font-bold mb-4">Our Products</h3>
                        <div className="w-1/3 border-t-4 border-red-600 my-3"></div>

                        <ul>
                            <li><Link to="/product/Instrumentation Cables" className="text-2sm hover:underline">Instrumentation Cables</Link></li>
                            <li><Link to="/product/Fire Alarm Cables" className="text-2sm hover:underline">Fire Alarm Cables</Link></li>
                            <li><Link to="/product/Fire Survival Cables" className="text-2sm hover:underline">Fire Survival Cables</Link></li>
                            <li><Link to="/product/Flexible Cables" className="text-2sm hover:underline">Flexible Cables</Link></li>
                            <li><Link to="/product/Power LT Cable" className="text-2sm hover:underline">Power LT Cables</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full border-t-8 border-red-600 my-5"></div>

                {/* Social Media Links */}
                <div className="font-inter flex flex-wrap justify-center mt-8 space-x-4" data-aos="fade-up">
                    <a href="https://www.facebook.com/profile.php?id=100093014817492&mibextid=LQQJ4d" target="_blank"
              rel="noopener noreferrer" className="flex items-center text-2xl hover:text-red-500">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12.076c0-5.521-4.479-10-10-10s-10 4.479-10 10c0 5.234 4.084 9.569 9.328 9.951v-7.031h-2.81v-2.92h2.81v-2.156c0-2.772 1.628-4.277 4.005-4.277 1.156 0 2.352.188 2.352.188v2.592h-1.326c-1.308 0-1.717.811-1.717 1.64v1.963h2.922l-.467 2.92h-2.455v7.029c5.243-.382 9.328-4.716 9.328-9.951z" />
                        </svg>
                        Facebook
                    </a>
                    <a href=" https://www.linkedin.com/in/ampperecable?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"
              rel="noopener noreferrer" className="flex items-center text-2xl hover:text-red-500">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.448h-3.686v-5.722c0-1.362-.024-3.112-1.892-3.112-1.892 0-2.183 1.476-2.183 3.001v5.833h-3.686v-11.44h3.535v1.559h.048c.493-.935 1.701-1.922 3.506-1.922 3.749 0 4.439 2.466 4.439 5.676v6.127zm-11.631-11.746h-3.631v11.44h3.631v-11.44zm-1.814-2.034c-1.168 0-2.119.954-2.119 2.119s.951 2.119 2.119 2.119 2.119-.953 2.119-2.119-.951-2.119-2.119-2.119zm12.225 14.958c0 .717-.577 1.293-1.293 1.293h-1.907c-.717 0-1.293-.577-1.293-1.293v-7.044c0-.717.577-1.293 1.293-1.293h1.907c.717 0 1.293.577 1.293 1.293v7.044z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    );
});

export default Footer;
