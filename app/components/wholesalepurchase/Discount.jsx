'use client'
import React, {useEffect, useState} from 'react'
import dynamicFetch from "@/hooks/fetch";

export  const  Discount = () =>  {
    const [discount, setDiscount] = useState([]);
    useEffect(() => {
        dynamicFetch('/discount').then(data => setDiscount(data));
    }, []);
  return (
    <section className="py-[100px]">
        <section className='container'>
            {
                discount && discount.map((discount) => (
                    <section key={discount.id} className=' mx-auto xl:w-[800px] flex flex-col justify-center gap-2 p-2 xl:gap-[30px] text-center xl:p-10'>
                        <h2 className=' text-[30px] leading-[33px] font-bold manrope text-blue-700 xl:text-5xl mx-auto'>{discount.title}</h2>
                        <p className=' text-sm mx-auto xl:text-xl font-thin manrope xl:p-3'>{discount.description}</p>
                    </section>
                ))
            }

        </section>
    </section>
  )
}
