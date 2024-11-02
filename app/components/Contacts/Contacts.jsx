// import React from 'react'
// import Image from 'next/image'
// import imgMap from '../../assets/images/image77.png'
// import { Module } from '../module/Module'

// export function Contacts() {
//   return (
//     <section className='contacts'>
      
//       <section className='container'>
//         <section className=' flex justify-around ' >
//           <section className='md: flex'>
//         <section className='given p-5'>
//           <section>
//             <h2 className=' text-3xl mt-16 p-2'>Контактные данные:</h2>
//             <ul className=' p-2'>
//               <span>Телефон: +7 (999) 123-45-67</span>
//               <li>Время работы: Пн-Пт, с 9:00 до 18:00</li>
//             </ul>
//           </section>
//             <section>
//               <h2 className=' text-2xl mt-10 p-2'>Email:</h2>
//               <a href="#" className=' p-2'> info@company.com</a>
//             </section>
//         <section>
//             <h2 className=' text-2xl mt-10 p-2'>Адрес офиса:</h2>
//             <span className=' p-2'>ул. Центральная, 10, офис 25, г. Москва, Россия</span>
//         </section>
//             <section className=' flex justify-around w-28 mt-5'>
//               <section className='Phone text-blue-700' >&#128222;</section>
//               <section className='Facebook text-xl text-blue-700'>&#9429;</section>
//               <section className='instgram text-blue-700 '>&#73;&#110;</section>
//             </section>
//             <section className=' mt-10 mb-10'>
//                <Image src={imgMap} alt='map' className=' rounded-xl'/>
//             </section>
//           </section>
//           <section className='requests mt-16 p-7 max-w-[550px]'>
//             <h2 className=' text-3xl'>Оставьте ваш вопрос или отзыв</h2>
//             <p className=' text-sm mt-2 '>Заполните форму, и наш менеджер свяжется с вами для подтверждения деталей заказа</p>
//             <section className=' mt-5'>
//                 <label className="block text-gray-600 text-sm mb-2">ФИО</label>
//                 <input type="text" placeholder="Имя" 
//               className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>

//                 <label className="block text-gray-600 text-sm mt-5 mb-2">Номер телефона</label>
//                 <input type="text" placeholder="+996 (777) 777 777" 
//               className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>

//                   <label className="block text-gray-600 text-sm mb-2 mt-5">Ваш вопрос или отзыв</label>
//                   <textarea placeholder="Комментарий" rows="4"
//               className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"></textarea>
//               <button className=' bg-blue-600 text-white py-2 px-14 rounded-xl text-lg hover:bg-blue-700 mt-5'>Оформить заказ</button>

//             </section>
//           </section>
//           </section>
//         </section>
//       </section>
//     </section>
//   )
// }

import React from 'react'
import Image from 'next/image'
import imgMap from '../../assets/images/image77.png'
import { Module } from '../module/Module'

export function Contacts() {
  return (
    <section className='contacts bg-gray-50 p-4'>
      <section className='container mx-auto flex flex-col md:flex-row justify-around items-start'>
        
        {/* Левая часть с контактными данными */}
        <section className='given p-5 w-full md:w-1/2 lg:w-1/3'>
          <section>
            <h2 className='text-2xl lg:text-3xl mt-8 p-2'>Контактные данные:</h2>
            <ul className='p-2 text-sm lg:text-base'>
              <span>Телефон: +7 (999) 123-45-67</span>
              <li>Время работы: Пн-Пт, с 9:00 до 18:00</li>
            </ul>
          </section>
          
          <section>
            <h2 className='text-lg lg:text-2xl mt-6 p-2'>Email:</h2>
            <a href="#" className='p-2 text-sm lg:text-base text-blue-500'>info@company.com</a>
          </section>
          
          <section>
            <h2 className='text-lg lg:text-2xl mt-6 p-2'>Адрес офиса:</h2>
            <span className='p-2 text-sm lg:text-base'>ул. Центральная, 10, офис 25, г. Москва, Россия</span>
          </section>
          
          <section className='flex justify-around w-28 mt-5'>
            <span className='Phone text-blue-700 text-xl'>&#128222;</span>
            <span className='Facebook text-blue-700 text-xl'>&#9429;</span>
            <span className='Instagram text-blue-700 text-xl'>&#73;&#110;</span>
          </section>
          
          <section className='mt-10 mb-10'>
            <Image src={imgMap} alt='map' className='rounded-xl'/>
          </section>
        </section>
        
        {/* Правая часть с формой */}
        <section className='requests mt-10 md:mt-0 p-5 w-full md:w-1/2 lg:w-1/3 bg-gray-50 shadow-lg rounded-lg'>
          <h2 className='text-2xl lg:text-3xl'>Оставьте ваш вопрос или отзыв</h2>
          <p className='text-sm lg:text-base mt-2'>Заполните форму, и наш менеджер свяжется с вами для подтверждения деталей заказа</p>
          
          <section className='mt-5'>
            <label className="block text-gray-600 text-sm mb-2">ФИО</label>
            <input type="text" placeholder="Имя" className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>
            
            <label className="block text-gray-600 text-sm mt-5 mb-2">Номер телефона</label>
            <input type="text" placeholder="+996 (777) 777 777" className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>
            
            <label className="block text-gray-600 text-sm mt-5 mb-2">Ваш вопрос или отзыв</label>
            <textarea placeholder="Комментарий" rows="4" className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"></textarea>
            
            <button className='bg-blue-600 text-white py-2 px-14 rounded-xl text-lg hover:bg-blue-700 mt-5'>Отправить сообщение</button>
          </section>
        </section>
      </section>
    </section>
  )
}
