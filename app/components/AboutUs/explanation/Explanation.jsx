'use client'
import React, {useEffect, useState} from 'react'
import dynamicFetch from "@/hooks/fetch";

export const  Explanation = () => {
    const [explane, setExplane] = useState([])

    useEffect(() => {
        dynamicFetch('/explanation').then(data => setExplane(data));
    }, []);
  return (
      <section className='container xl:py-[50px] py-[100px] px-[10px] xl:px-0'>
        <section className=' flex-col xl:flex-row gap-6 flex justify-around'>
            {
               explane && explane.map((explain) => (
                    <section key={explain.id} className='w-full xl:w-1/4 text-center flex flex-col gap-[10px] xl:px-[50px] font-thin py-[30px] bg-red-600 rounded-xl p-7 xl:m-5'>
                        <h3 className=' text-xl text-white '>{explain.title}</h3>
                        <p className=' text-sm text-white'>{explain.text}</p>
                    </section>
                ))
            }
        </section>
      </section>
  )
}
