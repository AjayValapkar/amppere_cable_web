import React from 'react'; // Create custom styles here if needed

const CableComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
            <div className="p-4">
                <img src="/src/assets/wire.svg" alt="Broken Cable" className="w-full h-auto" />
            </div>
            <div className="w-full bg-black h-16"></div> {/* Black color section */}
        </div>
    );
};

export default CableComponent;
