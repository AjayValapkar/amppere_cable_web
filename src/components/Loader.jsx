// src/components/Loader.jsx

import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img src={logo} alt="Company Logo" className="h-24 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Ammpere Cable</h1>
      </div>
    </div>
  );
};

export default Loader;
