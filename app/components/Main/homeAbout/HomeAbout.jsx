import React from 'react'
import Image from 'next/image'
import imagesAbuot from '../../../assets/images/image61.png'


// components/HomeAbout.js

 export const HomeAbout = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={imagesAbuot} 
            alt="О нас"
            className=" w-auto h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-semibold mb-5">О нас</h2>
          <p className="text-gray-700 mb-10">
            Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. 
            В нашем магазине представлены лучшие спортивные товары и экипировка, которые подходят как для новичков, так и для профессионалов. 
            Мы предлагаем качественные решения для активной жизни и поддерживаем каждого на пути к здоровью и успеху.
          </p>
          <p className=' text-gray-700 mb-10'> Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие спорт</p>
          <a 
            href="/about" 
            className="bg-blue-600
             text-white
              font-medium 
              py-2 px-4 
              rounded-full
               hover:bg-blue-700 
               transition duration-300"> Подробнее</a>
        </div>
      </div>
    </section>
  );
};


