import Image from 'next/image'
import React from 'react'
import imgVector from '../../assets/images/Vector.png'

export function successful() {
  return (
    <section>
        <section className='container'>
      <section>
         <section class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <section class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center relative border-t-4 border-blue-600">  
              <section class="flex justify-center mb-4">
                <Image src={imgVector} alt="Success" class="w-20 h-20"/>
              </section>

              <h2 class="text-2xl font-semibold text-gray-800 mb-2">Спасибо за ваш заказ!</h2>
              <p class="text-gray-600 mb-6">Мы свяжемся с вами в течение 24 часов для подтверждения деталей вашего заказа.</p>

              <button class="py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Вернуться
              </button>
    </section>
  </section>
            </section>
        </section>
    </section>
  )
}
