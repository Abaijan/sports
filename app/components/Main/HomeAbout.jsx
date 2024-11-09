import React from 'react'
import Image from 'next/image'
import imagesAbout from '../../assets/images/image61.png'



export const HomeAbout = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse  gap-[40px] xl:gap-0 xl:flex-row md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={imagesAbout}
            alt="О нас"
            height={500}
            width={500}
            className="  h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-semibold mb-5">О нас</h2>
          <p className="text-gray-700 mb-10  leading-[28px] xl:leading-[36px]">
            Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. 
            В нашем магазине представлены лучшие спортивные товары и экипировка, которые подходят как для новичков, так и для профессионалов. 
            Мы предлагаем качественные решения для активной жизни и поддерживаем каждого на пути к здоровью и успеху.
          </p>
          <p className=' text-gray-700 mb-10 leading-[28px] xl:leading-[36px]'> Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие спорт</p>
          <a 
            href="/about" 
            className="bg-blue-600
             text-white
              font-medium 
              py-3 px-8
              rounded-[10px]
               hover:bg-blue-700 
               transition duration-300"> Подробнее</a>
        </div>
      </div>
    </section>
  );
};


