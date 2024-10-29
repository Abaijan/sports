import React from 'react'
import Image from 'next/image'
import imglogo from '../../../assets/images/image47.png'

export function Aboutlogo() {
  return (
    <section className='py-[100px]'>
        <section className=' container'>
            <section className='about-content flex justify-center' >
                <section className=' w-[900px] mt-10'>
                    <Image  src={imglogo} alt='logoAbout' className=' w-full rounded-2xl '  />
                    <p className='font-thin w-3/4  pt-10 pr-10'>Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие спорт </p>
                </section >               
                     <section className=' w-[800px] flex flex-col justify-center p-10'>
                          <h2 className=' text-5xl font-extrabold impact  mb-5'>Мы — команда, которая любит спорт и знает, </h2>
                           <p className=''>Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие спорт</p>
                           <button className=' bg-blue-700 text-white py-1 mt-10  w-[250px] rounded-xl text-lg hover:bg-blue-800'>Оформить заявку</button>
                     </section>  
            </section>
        </section>
    </section>
)
}
