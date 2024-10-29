import Image from 'next/image'
import React from 'react'
import imgWholesale from '../../assets/images/wholesales.svg'

export const  HomeWholesale = () =>  {
  return (
      <section className="relative overflow-hidden">
          <section className="absolute top-16 -left-32 w-[1400px] z-10 h-[1500px] bg-[#B0C1F4] rounded-full transform"></section>
          <section className='container'>
              <section className=" bg-white   flex  items-center justify-between  w-full h-[900px] overflow-hidden">
                  <section className=" w-full z-10 p-4">
                      <h1 className="text-[70px] font-bold leading-[70px] max-w-md text-blue-800 mb-4">Оптовые покупки</h1>
                      <p className="text-gray-700 text-[18px]  font-thin mb-6">
                          Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем
                          магазине представлены лучшие товары.
                      </p>
                      <button
                          className="px-6 py-2 bg-green-500 text-white  rounded-md hover:bg-green-600 focus:outline-none">
                          Оформить заявку
                      </button>
                  </section>
                      <Image src={imgWholesale} alt="Wholesale"
                             className="w-1/2 z-10 h-full"/>
              </section>
          </section>
      </section>
  )
}
