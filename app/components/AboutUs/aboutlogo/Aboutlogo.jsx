'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import dynamicFetch from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export  function Aboutlogo() {
    const [about, setAbout] = useState();
    const locale = localeStore(set => set.locale);

    useEffect(() => {
        dynamicFetch('/about-us-banner').then(data => setAbout(data));
    }, []);
    if(!about) return null;

  return (
        <section className='xl:py-[100px] mb-[100px] xl:mb-[100px] container'>
            {
                    <section className=' flex justify-center'>
                        <section className=' xl:w-[700px] xl:mt-10'>
                            <Image src={about.image} alt='logoAbout'
                                   width={500}
                                   height={500}
                                   loading={"eager"}
                                   className='xl:relative object-cover h-full absolute z-[-1] w-full  xl:w-full rounded-2xl '/>
                            <p className='hidden xl:block font-thin w-3/4  pt-10 pr-10'>{about.description2}</p>
                        </section>
                        <section
                            className='xl:mt-[00px] mt-[45vh] xl:w-[800px] flex flex-col justify-center p-5 xl:p-10'>
                            <h2 className=' text-5xl text-[#FF0000] drop-shadow-[50px_50px_50px_#FFFFFF]  bg-opacity-30   font-extrabold impact  mb-5'>{getLocalizedText(about, 'title', locale)}</h2>
                            <p className='drop-shadow-[1px_4px_5px_#FFFFFF]'>{getLocalizedText(about, 'description', locale)}</p>
                            <button
                                className=' bg-blue-700 text-white py-1 mt-10  w-[250px] rounded-[6px] xl:rounded-xl text-lg hover:bg-blue-800'>{locale === 'ru' ? 'Оформить заявку' : locale === 'kgz' ? 'Өтүнмө тапшыру' : 'Apply'}</button>
                        </section>
                    </section>
            }

        </section>
  )
}
