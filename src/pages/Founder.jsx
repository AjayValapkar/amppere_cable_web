import React from 'react';
import imagePath from '../constant/imagePath';
import union from '../constant/imagePath';
const Founder = () => {
    return (
        <>
            <div className="z-10 p-5 md:p-10 flex md:flex-row items-center justify-evenly w-full md:h-[300px] bg-black">
                <div>
                    <p className="text-white font-bold text-2xl md:text-6xl mb-2 md:mb-5">Mr. Sandeep Sawant</p>
                    <p className="text-[#FF0000] text-sm md:text-xl">Founder CEO, Ampere Cable</p>
                </div>
                <div>
                    <img
                        src={imagePath.profile}
                        alt="Profile Image"
                        className="bg-white w-[100px] h-[100px] md:w-[250px] md:h-[250px] rounded-full"
                    />
                </div>
            </div>
            <div className='relative'>

                <div className=' text-white bg-black p-10 md:p-24 text-base md:text-2xl'>
                    <p className=' mb-5 md:mb-10'>Sandeep Sawant, armed with a diploma in Electrical Engineering and driven by a passion for innovation, founded Amppere Cable with a vision to revolutionize the wire and cable industry.
                    </p>
                    <p className='mb-5 md:mb-10'>
                        Despite the challenges of entering a competitive market, Amppere Cable quickly gained traction under Sandeep's astute leadership. Over the past four years of independent production, his technical expertise and unwavering commitment have guided the company through various obstacles, fostering resilience and adaptability.
                    </p>
                    <span className='text-[#FF0000] mb-5 md:mb-10'>Today, Amppere Cable is recognized for its high-quality, specialized cables, including Instrumentation, Fire Alarm, and Fire Survival Cables. <span className='text-white mb-5 md:mb-10'>Looking ahead, Sandeep's vision and hands-on approach are poised to elevate Amppere Cable to new heights in the national and international markets. </span>
                    </span>
                    <p className='mt-5 md:mt-10'>The leadership of him has not only earned the trust of leading industrial houses but has also positioned Amppere Cable as an ISO-9001:2008 accredited organization with CE and RoHS certified products, setting new standards in the industry.</p>
                </div>
            </div>
            <div className='bg-black -mb-20'>
                <img
                    src={imagePath.union}
                    alt=""
                    className='w-full h-2/3 object-contain -mb-8 md:-mb-52  '
                />
            </div>

        </>
    );
}

export default Founder;