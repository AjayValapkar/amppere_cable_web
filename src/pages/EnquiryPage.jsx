// src/EnquiryPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import imagePath from '../constant/imagePath';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col items-center bg-black">
        {/* <img
          src={imagePath}
          alt="Enquiry page"
          className=" object-cover"
        /> */}
        <div className=" top-0 w-full h-[500px] md:h-[650px] flex flex-col items-center justify-center text-center">

          <div className='mt-0'>
            <p className='px-10 md:px-0 text-lg md:text-3xl text-[#FF0000] font-bold text-left md:mb-10'>
              Send an enquiry:
            </p>
            <div>
              <form onSubmit={handleSubmit} className="p-10 md:p-0 md:w-[800px] mx-auto text-sm md:text-lg">
                <div className="mb-4 md:mb-8 flex flex-row items-center justify-between">
                  <label className="block text-white text-md font-bold mb-2" htmlFor="name">
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-[200px] h-[30px] md:w-[600px] md:h-[40px] px-3 py-2 text-white border rounded bg-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4 md:mb-8 flex flex-row items-center justify-between">
                  <label className="block text-white text-md font-bold mb-2" htmlFor="email">
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[200px] h-[30px] md:w-[600px] md:h-[40px] px-3 py-2 text-white border rounded bg-transparent"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4 md:mb-8 flex flex-row items-center justify-between">
                  <label className="block text-white text-md font-bold mb-2 " htmlFor="phone">
                    Phone :
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-[200px] h-[30px] md:w-[600px] md:h-[40px] px-3 py-2 px-1 text-white border rounded bg-transparent"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="mb-4 md:mb-8 flex flex-row items-center justify-between">
                  <label className="block text-white text-md font-bold mb-2 mr-2 md:mr-0" htmlFor="message">
                    How can I help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-[200px] h-[30px] md:w-[600px] md:h-[40px] px-3 py-2 text-white border rounded bg-transparent"
                    placeholder="Your Message"
                  />
                </div>
                <div className='mt-10 md:mt-20'>
                  <button
                    type="submit"
                    className='w-[100] h-[30px] px-2 md:px-0 md:w-[200px] md:h-[40px] text-base md:text-xl mr-4 bg-white text-[#AE1B1B] rounded-full hover:bg-[#AE1B1B] hover:text-white transition duration-300 mb-4'>
                    SEND ENQUIRY
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ name: '', email: '', phone: '', message: '' })}
                    className='w-[100] h-[30px] px-6 md:px-0 md:w-[200px] md:h-[40px] text-base md:text-xl mr-4 bg-[#A5A5A5] text-white rounded-full hover:bg-white hover:text-[#A5A5A5] transition duration-300'>
                    CLEAR ALL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='w-full md:h-[450px] flex justify-center items-center bg-black'>
          <div className='flex flex-col md:w-[800px] p-14 md:p-0 '>
            <p className='md:px-0 text-lg md:text-3xl text-[#FF0000] font-bold text-left md:mb-10'>
              Locate us:
            </p>
            <div className='flex mt-4 md:mt-0'>
              {/* <img
                src={imagePath.locationIcon}
                alt="Location Icon"
                className='h-[30px] md:h-[30px] mr-2 md:mr-4'
              /> */}
              <p className='text-white md:text-xl'>
                Shed no. 28/A, 1&2, Survey no. 47, Hi-Tech Industrial Area, Alyali, Tal-Dist.Palghar, Palghar 401404, Maharashtra, India
              </p>
            </div>

            <a href="https://www.google.com/maps/search/Shed+no.+28%2FA,+1%262,+Survey+no.+47,+Hi-Tech+Industrial+Area,+Alyali,+Tal-Dist.Palghar,+Palghar+401404,+Maharashtra,+India/@19.6977876,72.7358593,14.61z?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
              rel="noopener noreferrer"> <img src={imagePath.map} alt="Map" className='mt-10' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
