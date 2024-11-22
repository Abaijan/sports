'use client'
import React, {useEffect, useState} from 'react'
import dynamicFetch from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export  const  Discount = () =>  {
    const locale = localeStore((set) => set.locale);
    const [discount, setDiscount] = useState([]);
    useEffect(() => {
        dynamicFetch('/whole-sale-banner').then(data => setDiscount(data));
    }, []);
    if(discount.length === 0) {
        return <p>Loading...</p>
    }
  return (
    <section className="py-[100px]">
        <section className='container'>
            {
                    <section  className=' mx-auto xl:w-[800px] flex flex-col justify-center gap-2 p-2 xl:gap-[30px] text-center xl:p-10'>
                        <h2 className=' text-[30px] leading-[33px] font-bold manrope text-blue-700 xl:text-5xl mx-auto'>{getLocalizedText(discount, 'title2', locale)}</h2>
                        <p className=' text-sm mx-auto xl:text-xl font-thin manrope xl:p-3'>{getLocalizedText(discount, 'description2', locale)}</p>
                    </section>
            }

        </section>
    </section>
  )
}
