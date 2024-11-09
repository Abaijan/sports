import Image from 'next/image'
import React from 'react'
import imgVector from '../../assets/images/Vector.png'

export function ModalSuccess() {
  return (
    <section>
        <section className='container z-10'>
            <section className="bg-white  rounded-lg shadow-lg xl:w-[600px] h-[400px] items-center flex flex-col gap-4 p-[40px]  w-full text-center relative border-t-4 border-blue-600">
              <section className="flex justify-center mb-4">
                <Image src={imgVector} width={300} height={300} alt="Success" className="w-[76px] h-[76px]"/>
              </section>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Спасибо за ваш заказ!</h2>
              <p className="text-gray-600 mb-6">Мы свяжемся с вами в течение 24 часов для подтверждения деталей вашего заказа.</p>

              <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="py-2 px-6 bg-blue-600 max-w-[200px] text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Вернуться
              </button>
            </section>
        </section>
    </section>
  )
}
