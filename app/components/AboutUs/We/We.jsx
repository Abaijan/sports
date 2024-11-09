'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import weimages from '../../../assets/images/Weimage.png'
import dynamicFetch from "@/hooks/fetch";

export function We() {
    const [about, setAbout] = useState()
    useEffect(() => {
        dynamicFetch('/aboutUs').then(data => setAbout(data));
    }, []);
  return (
    <section className="xl:py-[100px]">
        <section className='container'>
            {
                about && about.map((about) => (
                    <section key={about.id} className=' px-[10px] flex flex-col xl:flex-row xl:p-10 xl:mt-10'>
                        <p className=' xl:mb-14 xl:w-1/2 font-thin mb-[30px] xl:p-8 text-xl'>{about.description}</p>
                        <Image width={800} height={500} src={about.image} alt='We images' className='xl:w-1/2 xl:h-[400px] w-full h-[150px] rounded-xl  object-cover xl:rounded-xl'/>
                    </section>
                ))
            }

        </section>
    </section>
  )
}
