'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import dynamicFetch from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export const  HomeWholesale = () =>  {
    const [wholesale, setWholesale] = useState([]);
    const locale = localeStore((set) => set.locale);
    useEffect(() => {
        dynamicFetch('/whole-sale-banner').then(data => setWholesale(data));
    }, []);

    if(wholesale.length === 0) {
        return <p>Loading...</p>
    }
  return (
      <section className="relative h-[100vh] overflow-hidden">
          <section className="absolute top-16 -left-32 w-[1400px] z-9 h-[1500px] bg-[#B0C1F4] rounded-full transform"></section>
          <section className='container px-[15px] xl:px-0'>
                      <section className=" bg-white z-100  flex  items-center justify-between  w-full h-[900px] overflow-hidden">
                          <section className=" w-full xl:w-1/2  z-[100]   py-[50px]">
                              <h1 className="xl:text-[70px] text-[66px] font-bold drop-shadow-[1px_4px_5px_#FFFFFF] leading-[65px] xl:leading-[70px] max-w-md text-blue-800 mb-4">{getLocalizedText(wholesale, 'title', locale)}</h1>
                              <p className="text-gray-700 drop-shadow-[1px_4px_5px_#FFFFFF] text-[18px]  font-medium mb-6">
                                  {getLocalizedText(wholesale, 'description', locale)}
                              </p>
                              <button
                                  className="xl:px-6 py-2 bg-green-500 text-white montserrat text-[16px] w-[202px] rounded-md hover:bg-green-600 focus:outline-none">
                                  {locale === 'ru' ? 'Оформить заявку' : locale === 'kgz' ? 'Өтүнмө тапшыру' : 'Apply'}
                              </button>
                          </section>
                          <Image width={2000} height={2000} src={wholesale.image} alt="Wholesale"
                                 className="xl:w-1/2  xl:object-top xl:h-[110vh] xl:translate-y-[50px] xl:top-0  xl:z-10 object-cover  xl:relative absolute z-[10] right-0 top-0 w-full h-full"/>
                      </section>

          </section>
      </section>
  )
}
