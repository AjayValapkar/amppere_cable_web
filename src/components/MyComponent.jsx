import React from 'react';

const MyComponent = () => {
  return (
    <div className="flex flex-col space-y-0 p-3">
      <div className="w-full h-40 bg-black border-l-4 border-b-4 border-red-600 m-0 "></div>
      <div className="w-full h-40 bg-black border-r-4 border-b-4 border-red-600 m-0"></div>
      <div className="w-full h-40 bg-black border-l-4 border-b-4 border-red-600 m-0"></div>
    </div>
  );
};

export default MyComponent;
