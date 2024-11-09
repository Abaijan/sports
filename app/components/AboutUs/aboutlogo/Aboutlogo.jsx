import React from 'react'
import Image from 'next/image'
import imglogo from '../../../assets/images/image47.png'

export function Aboutlogo() {
  return (
        <section className='xl:py-[100px] mb-[100px] xl:mb-[100px] container'>
            <section className=' flex justify-center' >
                <section className=' xl:w-[700px] xl:mt-10'>
                    <Image  src={imglogo} alt='logoAbout' className='xl:relative object-cover h-full absolute z-[-1] w-full  xl:w-full rounded-2xl '  />
                    <p className='hidden xl:block font-thin w-3/4  pt-10 pr-10'>Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие спорт </p>
                </section >               
                     <section className='xl:mt-[00px] mt-[45vh] xl:w-[800px] flex flex-col justify-center p-5 xl:p-10'>
                          <h2 className=' text-5xl text-[#FF0000] drop-shadow-[50px_50px_50px_#FFFFFF]  bg-opacity-30   font-extrabold impact  mb-5'>Мы — команда, которая любит спорт и знает, </h2>
                           <p className='drop-shadow-[1px_4px_5px_#FFFFFF]'>Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок</p>
                           <button className=' bg-blue-700 text-white py-1 mt-10  w-[250px] rounded-[6px] xl:rounded-xl text-lg hover:bg-blue-800'>Оформить заявку</button>
                     </section>  
            </section>
        </section>
)
}
