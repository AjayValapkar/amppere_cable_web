import React, { useState, useEffect } from "react";
import logo from '/src/assets/logo.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(prev => !prev);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "src/assets/brochure.pdf"; // Replace with actual PDF path
    link.download = "brochure.pdf";
    link.click();
  };

  return (
    <>
      <header className="relative text-white p-0">
        <div className="absolute inset-0 bg-[url('/src/assets/navback.png')] bg-cover bg-bottom filter">
          <div className="absolute inset-0 shadow-[inset_0px_130px_40px_rgba(0,0,0,0.65)] md:shadow-[inset_0px_250px_30px_rgba(0,0,0,0.50)]"></div>
        </div>
        <div className="relative z-10">
          <nav className="container mx-auto flex flex-col items-center justify-center my-0">
            <div className="flex justify-between items-center w-full px-4 py-0 sm:hidden">
              <img src={logo} alt="Logo" className="h-20 mb-4" />

              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <div className="relative w-full text-center">
              <div className="hidden sm:block mb-0 animate-fade-in-down">
                <img src={logo} alt="Logo" className="h-16 sm:h-20 md:h-20 lg:h-36 mx-auto" />
              </div>
              <p className="hidden md:block text-white text-sm mb-4">Where Quality Meets Reliability</p>

              {/* Button positioned at the top-right for large screens */}
              <button
                onClick={handleDownloadPDF}
                className="hidden sm:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 absolute top-0 right-0 mt-4 mr-4"
              >
                Download Brochure
              </button>
            </div>
            <div className="black sm:block w-full border-t-2 md:border-t-8 border-red-600 my-0"></div>

            <div className="flex justify-center items-center w-full">
              <ul className="hidden sm:flex space-x-20 animate-fade-in-down my-5">
                <li>
                  <Link to="/" className="md:text-2xl lg:text-2xl font-bold hover:text-red-600 transition-transform transform hover:-translate-y-2 font-inter">
                    Home
                  </Link>
                </li>

                <li className="relative font-inter">
                  <button
                    onMouseOver={toggleDropdown1}
                    className="md:text-2xl lg:text-2xl font-bold hover:text-red-600 focus:outline-none"
                  >
                    Company
                  </button>

                  <div
                    className={`w-60 dropdown-content absolute left-0 mt-2 bg-red-600 text-black shadow-lg rounded-lg transition-all duration-300 transform origin-top ${isDropdownOpen1 ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                    onMouseOut={toggleDropdown1}
                  >
                    <Link to="/about" className="block w-full px-4 py-2 bg-gray-300 hover:bg-white">Company Overview</Link>
                    <Link to="/founder" className="block px-4 py-2 bg-gray-300 hover:bg-white">Founder & MD</Link>
                  </div>
                </li>

                <li className="relative font-inter">
                  <button
                    onMouseOver={toggleDropdown}
                    className="md:text-2xl lg:text-2xl font-bold hover:text-red-600 focus:outline-none"
                  >
                    Products
                  </button>

                  <div
                    className={`w-60 dropdown-content absolute left-0 mt-2 bg-red-600 text-black shadow-lg rounded-lg transition-all duration-300 transform origin-top ${isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                    onMouseOut={toggleDropdown}
                  >
                    <Link to="/product/Instrumentation Cables" className="block w-full px-4 py-2 bg-gray-300 hover:bg-white">Instrumentation Cables</Link>
                    <Link to="/product/Fire Alarm Cables" className="block px-4 py-2 bg-gray-300 hover:bg-white">Fire Alarm Cables</Link>
                    <Link to="/product/Flexible Cables" className="block px-4 py-2 bg-gray-300 hover:bg-white">Flexible Cables</Link>
                    <Link to="/product/Fire Survival Cables" className="block px-4 py-2 bg-gray-300 hover:bg-white">Fire Survival Cables</Link>
                    <Link to="/product/Co Axial Cable" className="block px-4 py-2 bg-gray-300 hover:bg-white">Co Axial Cable</Link>
                    <Link to="/product/Power LT Cable" className="block px-4 py-2 bg-gray-300 hover:bg-white">Power LT Cable</Link>
                    <Link to="/product/Screened Cable" className="block px-4 py-2 bg-gray-300 hover:bg-white">Screened Cable</Link>
                    <Link to="/product/Signal Cables" className="block px-4 py-2 bg-gray-300 hover:bg-white">Signal Cable</Link>
                  </div>
                </li>

                <li>
                  <Link to="/clients" className="md:text-2xl lg:text-2xl font-bold hover:text-red-600 transition-transform transform hover:-translate-y-2">Clients</Link>
                </li>

                <li>
                  <Link to="/contact" className="md:text-2xl lg:text-2xl font-bold hover:text-red-600 transition-transform transform hover:-translate-y-2">Enquiry</Link>
                </li>
              </ul>


            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={`bg-[#202424] w-72 h-full shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <button onClick={toggleMobileMenu} className="text-white p-4 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <ul className="space-y-6 text-xl p-10">
            <li><Link to="/" className="text-white hover:text-red-600" onClick={toggleMobileMenu}>Home</Link></li>

            <li>
              <button onClick={toggleDropdown1} className="text-white hover:text-red-600">
                Company
              </button>
              {isDropdownOpen1 && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link to="/about" className="text-white hover:text-red-600">Company Overview</Link></li>
                  <li><Link to="/founder" className="text-white hover:text-red-600">Founder & MD</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={toggleDropdown} className="text-white hover:text-red-600">
                Products
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link to="/product/Instrumentation Cables" className="text-white hover:text-red-600">Instrumentation Cables</Link></li>
                  <li><Link to="/product/Fire Alarm Cables" className="text-white hover:text-red-600">Fire Alarm Cables</Link></li>
                  <li><Link to="/product/Flexible Cables" className="text-white hover:text-red-600">Flexible Cables</Link></li>
                  <li><Link to="/product/Fire Survival Cables" className="text-white hover:text-red-600">Fire Survival Cables</Link></li>
                  <li><Link to="/product/Co Axial Cable" className="text-white hover:text-red-600">Co Axial Cable</Link></li>
                  <li><Link to="/product/Power LT Cable" className="text-white hover:text-red-600">Power LT Cable</Link></li>
                  <li><Link to="/product/Screened Cable" className="text-white hover:text-red-600">Screened Cable</Link></li>
                  <li><Link to="/product/Signal Cables" className="text-white hover:text-red-600">Signal Cables</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/clients" className="text-white hover:text-red-600" onClick={toggleMobileMenu}>Clients</Link></li>
            <li><Link to="/contact" className="text-white hover:text-red-600" onClick={toggleMobileMenu}>Enquiry</Link></li>

            <li>
              <button onClick={handleDownloadPDF} className="text-white bg-red-600 px-4 py-2 rounded-md w-full hover:bg-red-700">
                Download Brochure
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default Header;
