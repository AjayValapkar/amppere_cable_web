import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const KeyNumbers = () => {
    // Initialize AOS
    React.useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: false,
          mirror: true,
          offset: 200,
        });
        
        AOS.refreshHard();
      
        return () => {
          AOS.refresh(); 
        };
      }, []);

    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });

    return (
        <div className="bg-[#000000] text-white py-16 px-12">
            <div className="text-center md:text-left mx-0 md:mx-36 ">
                <h2 className="text-4xl font-bold text-[#E91F1F]">Our Key Numbers</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-16">
                {/* First Number Block */}
                <div
                    data-aos="fade-up"
                    className="bg-gray-700 rounded-lg shadow-lg text-left flex flex-col items-start w-60 h-90"
                >
                    <div
                        className="bg-gray-800 text-white rounded-lg p-10 w-full h-full flex flex-col items-start"
                        ref={ref1}
                    >
                        <img
                            src="src/assets/key1.png"
                            alt="Image description"
                            className="w-40 h-40 p-4 object-contain mx-auto"
                        />
                        {inView1 && (
                            <CountUp
                                start={0}
                                end={30}
                                duration={3}
                                suffix="+"
                                className="text-5xl font-bold mb-2"
                            />
                        )}
                        <div className="h-1 w-16 bg-red-600 my-2 self-start"></div>
                        <div className="text-left">Years Of Experience</div>
                    </div>
                </div>

                {/* Second Number Block */}
                <div
                    data-aos="fade-up"
                    className="bg-gray-600 rounded-lg shadow-lg text-left flex flex-col items-start w-60 h-90"
                >
                    <div
                        className="bg-gray-800 text-white rounded-lg p-10 w-full h-full flex flex-col items-start"
                        ref={ref2}
                    >
                        <img
                            src="src/assets/key2.png"
                            alt="Image description"
                            className="w-28 h-28 object-contain mb-10 mx-auto"
                        />
                        {inView2 && (
                            <CountUp
                                start={0}
                                end={100}
                                duration={1}
                                suffix="+"
                                className="text-5xl font-bold mb-2"
                            />
                        )}
                        <div className="h-1 w-16 bg-red-600 my-2 self-start"></div>
                        <div className="text-left">Number Of Clients</div>
                    </div>
                </div>

                {/* Third Number Block */}
                <div
                    data-aos="fade-up"
                    className="bg-gray-600 rounded-lg shadow-lg text-left flex flex-col items-start w-60 h-90"
                >
                    <div
                        className="bg-gray-800 text-white rounded-lg px-10 py-6 w-full h-full flex flex-col items-start"
                        ref={ref3}
                    >
                        <img
                            src="src/assets/key3.png"
                            alt="Image description"
                            className="w-40 h-40 object-contain mx-auto"
                        />
                        {inView3 && (
                            <CountUp
                                start={0}
                                end={3000}
                                duration={3}
                                suffix="K+"
                                className="text-5xl font-bold mb-2"
                            />
                        )}
                        <div className="h-1 w-16 bg-red-600 my-2 self-start"></div>
                        <div className="text-left">Total Cable length Manufactured</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyNumbers;
