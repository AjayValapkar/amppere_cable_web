import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { productData } from '../constant/productData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";


const ProductSlider = () => {
  const [data, setData] = useState([]);
  const props = 'Fire Alarm Cables';
  const filteredProducts = productData.filter((item) => item.productName !== props);

  const selectRandomFourProducts = () => {
    const selectedProducts = [];
    const usedIndices = new Set();

    while (selectedProducts.length < 4 && usedIndices.size < filteredProducts.length) {
      const index = Math.floor(Math.random() * filteredProducts.length);
      if (!usedIndices.has(index)) {
        usedIndices.add(index);
        selectedProducts.push(filteredProducts[index]);
      }
    }

    setData(selectedProducts);
  };

  useEffect(() => {
    selectRandomFourProducts();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='flex flex-col justify-center items-center py-5'>
      <p className='text-[24px] text-center font-bold text-[#880000] mb-5'>
        OUR PRODUCTS
      </p>
      <div className='w-full max-w-[1100px] mx-auto'>
        <Slider {...settings}>
          {data.map((item, index) => (
            item ? (
              <div className='flex flex-col items-center w-full max-w-[250px]' key={index}>
                <div className='bg-gray-300 w-full h-[230px] overflow-hidden flex items-center justify-center'>
                  <img
                    src={item.headerImg}
                    alt={item.productName}
                    className='w-full h-[180px] object-cover'
                  />
                </div>
                <Link to={`/product/${item.productName.replace(/\s+/g, ' ')}`}>
                  <button className='flex items-center justify-between w-full mt-4 p-2 border border-white rounded hover:text-white hover:border-black hover:rounded-lg transition-all duration-300'>
                    <p className='text-lg text-black font-semibold'>{item.productName}</p>
                    <p className='text-lg text-black font-semibold ml-2'>&gt;</p>
                  </button>
                </Link>
              </div>
            ) : null
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
