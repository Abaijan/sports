import Image from 'next/image'
import React from 'react'
import imgWholesale from '../../assets/images/image48.png'

export function HomeWholesale() {
  return (
    <section>
        <section className='container'>
            <div class="relative bg-white rounded-lg shadow-md flex items-center justify-around  w-full h-[500px] overflow-hidden">
                <div class="absolute -top-16 -left-32 w-[700px] h-[700px] bg-blue-200 rounded-full transform"></div>
                
                <div class="relative z-10 max-w-md p-4">
                <h1 class="text-4xl font-bold text-blue-800 mb-4">Оптовые покупки</h1>
                <p class="text-gray-700 mb-6">
                    Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине представлены лучшие товары.
                </p>
                <button class="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none">
                    Оформить заявку
                </button>
                </div>
                <div class="relative z-10">
                <Image src={imgWholesale} alt="Wholesale" style={{width:"700px"}} class="w-full h-auto max-w-xs object-cover"/>
                </div>
            </div>
        </section>
    </section>
  )
}
