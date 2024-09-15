import React from 'react';
import imagePath from '../constant/imagePath';

export default function AboutUs() {
  return (
    <>
      <div className="relative w-full h-[800px] md:h-[900px]  flex flex-col bg-[#000000] items-center ">
        {/* <img
          src={imagePath}
          alt="About Us"
          className="w-full h-[800px] md:h-[900px] object-cover"
        /> */}
        <div className="absolute top-0 w-full flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          <div className="text-white pt-10 pb-14 px-4 md:px-6">
            <p className="text-2xl md:text-4xl font-bold mb-6">About Us</p>
            <p className="text-sm md:text-xl">
              Our products, certified by CE and RoHS, are crafted by a team of experienced professionals with more than 20 years of expertise in Instrumentation, Fire Alarm, and Fire Survival Cables.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#763232] to-[#000000] via-[#000000] m-6 p-5 md:m-20 md:p-14 mt-6 md:mt-12 text-white space-y-4">
            <p className="text-[#F4ACAC] text-sm md:text-xl">
              Amppere Cable is a leading manufacturer of Low Tension Copper Conductor Wires and Cables, offering a comprehensive range of solutions from our state-of-the-art facility in Maharashtra, India. With over 30 years of core manufacturing experience and four years of independent production, we have established ourselves as an ISO-9001:2008 accredited and MSME-registered organization.
            </p>
            <p className="font-bold text-sm md:text-xl">
              Equipped with international standard equipment and comprehensive in-house testing facilities, we pride ourselves on being a well-knitted team that delivers high-quality, reliable products.
            </p>
            <p className="text-[#F4ACAC] text-sm md:text-xl">
              As a one-stop shop for all wire and cable needs, Amppere Cable combines technical prowess with a commitment to meeting our customers' unique requirements, ensuring we remain at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Owner Section */}
        <div className="relative bg-black w-full flex flex-col items-center justify-center">
          <div className="md:bg-white w-[300px] h-[150px] md:w-[700px] md:h-[400px] flex justify-center items-center -mt-36">
            <video
              src={imagePath.frame} // Replace this with the actual video file path
              controls
              autoPlay
              loop
              muted
              className="w-[300px] h-[150px] md:w-[700px] md:h-[400px] object-contain p-2"
            />

          </div>
          <div className="relative mt-4 text-center text-white text-sm md:text-xl underline">
            <a href="#" className="hover:text-red-500 hover:underline-offset-4">
              For more videos
            </a>
          </div>
        </div>

        <img
          src={imagePath.union}
          alt=""
          className="bg-black w-full h-2/3 object-contain -mb-12 md:-mb-52"
        />
      </div>
    </>
  );
}
