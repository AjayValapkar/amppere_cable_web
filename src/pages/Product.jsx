import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import imagePath from '../constant/imagePath';
import { productData } from '../constant/productData';
import ProductSlider from '../components/ProductSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";


const Product = () => {
  const { productName } = useParams(); // Get product name from route parameters

  const product = useMemo(() => productData.find(item => item.productName === productName), [productName]);

  if (!product) {
    return <div className='text-center p-4'>No product data available</div>;
  }

  const { data, headerImg, detailsImg } = product;

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden'>
        <img
          src={imagePath.productBgImg}
          alt='Background'
          className='opacity-5 w-[1440px] h-[200px] md:h-[450px]'
        />
        <img
          src={headerImg}
          alt='Product'
          className='w-1/2 md:w-1/3 h-auto absolute -bottom-2 -right-2 md:bottom-0 md:right-2 md:top-0 -rotate-90'
        />
        <img
          src={detailsImg}
          alt='Product Details'
          className='w-1/2 h-auto absolute top-16 left-2 md:left-8 border-2 border-black'
        />
      </div>


      <div className='h-[8px] sm:h-[16px] bg-[#880000]'></div>
      <div className='m-4 sm:m-8 lg:m-12'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl w-auto text-center font-bold text-[#880000]'>{productName}</p>
        <div className='p-4 sm:p-6 lg:p-8 pb-0'>
          {data.map((item) => (
            <div className='flex flex-col sm:flex-row pb-6' key={item.id}>
              <p className='font-semibold text-lg sm:text-xl md:text-2xl flex-shrink-0 mr-0 sm:mr-2 text-[#AE1B1B]'>{item.title} :</p>
              <p className='text-[#AE1B1B] text-lg sm:text-xl md:text-2xl'>{item.description}</p>
            </div>
          ))}
          <button className='mt-4 p-3 sm:p-4 border-[2px] sm:border-[3px] border-[#880000] bg-white text-[#AE1B1B] rounded-lg text-base sm:text-lg font-bold hover:bg-[#880000] hover:text-white hover:border-white transition-all duration-300'>

            <Link to="/contact"> Send Enquiry </Link>
          </button>
        </div>
      </div>
      <div className='h-[8px] sm:h-[16px] w-full bg-[#880000]'></div>
      <ProductSlider />
    </div>
  );
}

export default Product;
