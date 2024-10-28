import Image from 'next/image'
import React from 'react'
import weimages from '../../../assets/images/Weimage.png'

export function We() {
  return (
    <section className="py-[100px]">
        <section className='container'>
            <section className=' flex p-10 mt-10    '>
                 <p className=' mt-14 w-3/5 font-thin  p-8 text-xl'>Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие спортивные товары и экипировка, которые подходят как для новичков, так и для профессионалов. Мы предлагаем качественные решения для активной жизни и поддерживаем каждого на пути к здоровью и успеху.</p>
                <Image src={weimages} alt='We images' className=' rounded-xl'/>
              </section>
            </section>
    </section>
  )
}
