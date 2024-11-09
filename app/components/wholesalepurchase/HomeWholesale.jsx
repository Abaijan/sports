'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import dynamicFetch from "@/hooks/fetch";

export const  HomeWholesale = () =>  {
    const [wholesale, setWholesale] = useState([]);
    useEffect(() => {
        dynamicFetch('/wholesale_banner').then(data => setWholesale(data));
    }, []);
  return (
      <section className="relative h-[100vh] overflow-hidden">
          <section className="absolute top-16 -left-32 w-[1400px] z-9 h-[1500px] bg-[#B0C1F4] rounded-full transform"></section>
          <section className='container px-[15px] xl:px-0'>
              {
               wholesale &&  wholesale.map((wholesale) => (
                      <section key={wholesale.id} className=" bg-white z-100  flex  items-center justify-between  w-full h-[900px] overflow-hidden">
                          <section className=" w-full z-[100] mt-[40vh]  py-[50px]">
                              <h1 className="xl:text-[70px] text-[66px] font-bold drop-shadow-[1px_4px_5px_#FFFFFF] leading-[65px] xl:leading-[70px] max-w-md text-blue-800 mb-4">{wholesale.title}</h1>
                              <p className="text-gray-700 drop-shadow-[1px_4px_5px_#FFFFFF] text-[18px]  font-thin mb-6">
                                  {wholesale.description}
                              </p>
                              <button
                                  className="xl:px-6 py-2 bg-green-500 text-white montserrat text-[16px] w-[202px] rounded-md hover:bg-green-600 focus:outline-none">
                                  Оформить заявку
                              </button>
                          </section>
                          <Image width={1000} height={1000} src={wholesale.image} alt="Wholesale"
                                 className="xl:w-1/2 xl:z-10 object-cover  xl:relative absolute z-[10] right-0 top-0 w-full h-full"/>
                      </section>
                  ))
              }

          </section>
      </section>
  )
}
