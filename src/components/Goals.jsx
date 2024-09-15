import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imagePath from '../constant/imagePath';


const goals = [
  {
    id: 1,
    title: 'Innovative Product Development:',
    description: 'Continuously investing in research and development to introduce cutting-edge technologies that enhance performance, safety, and efficiency',
    icon: imagePath.goal1,
    anima: 'fade-left',
    borders: 'border-l-8 border-b-8 border-[#AE1B1B] m-0 p-6 md:p-0 md:border-none',
  },
  {
    id: 2,
    title: 'Exceptional Customer Service:',
    description: 'Delivering outstanding support and service at every stage of the customer journey, from initial inquiry to post-purchase assistance',
    icon: imagePath.goal2,
    anima: 'fade-right',
    borders: 'border-r-8 border-b-8 border-[#AE1B1B] m-0 p-6 md:p-0 md:border-none',
  },
  {
    id: 3,
    title: 'On-Time Delivery:',
    description: 'Ensuring that all orders are delivered promptly and within the promised timeframe to maintain customer satisfaction and trust',
    icon: imagePath.goal3,
    anima: 'fade-left',
    borders: 'border-l-8 border-b-8 border-[#AE1B1B] m-0 p-6 md:p-0 md:border-none',
  },
  {
    id: 4,
    title: 'Customized Orders:',
    description: 'Providing tailored solutions to meet the unique requirements of clients, offering a wide range of customizable options for cable length, material, and specifications',
    icon: imagePath.goal4,
    anima: 'fade-right',
    borders: 'border-r-8 border-[#AE1B1B] m-0 p-6 md:p-0 md:border-none',
  },
];

const Goals = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 200,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust as needed
    );

    const element = document.getElementById(`goal-${goals.id}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [goals.id]);

  return (
    <div className="relative bg-white p-6 md:p-20">
      <div data-aos="fade-up" className="flex flex-row justify-center items-center mb-12">
        <p className="text-[#880000] font-bold text-3xl md:text-4xl mr-2 font-inter">OUR</p>
        <p className="text-black font-bold text-3xl md:text-4xl font-inter">GOALS</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl my-4 relative">
        {goals.map(goal => (
           <div
           id={`goal-${goal.id}`}
           key={goal.id}
           className={`${
             inView ? 'animate-borderRun' : ''
           } ${goal.borders} -my-4`}
         >
            <div data-aos={goal.anima}>
              <div
                className="relative pb-4 mb-6 bg-white rounded-lg shadow-lg text-center transition-transform duration-500 transform hover:scale-105 hover:shadow-xl"
                style={{ boxShadow: '0 0px 2px rgba(0, 0, 0, 0.1), 0 18px 8px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="bg-[#AE1B19] text-white rounded-t-lg py-2 px-4 mb-4">
                  <h3 className="text-lg font-bold">Goal {goal.id}</h3>
                </div>

                <div className="flex justify-center mb-4">
                  <img src={goal.icon} alt={goal.title} className="font-inter w-24 h-24 object-cover" />
                </div>
                <div className="bg-white text-black rounded-t-lg py-2 px-4 mb-4">
                  <h3 className="text-lg font-bold font-inter">{goal.title}</h3>
                </div>
                <div className="p-3">
                  <p className="text-black text-sm md:text-sm font-inter">{goal.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
