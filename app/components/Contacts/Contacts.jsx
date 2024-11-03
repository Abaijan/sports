import React from 'react'

export function Contacts() {
  return (
    <section className='contacts'>
      
      <section className='container'>
        <section className=' flex justify-between'>
        <section className=' '>
          <section>
            <h2 className=' text-3xl mt-16 p-2'>Контактные данные:</h2>
            <ul className=' text-[16px] font-thin text-[#000000CC] p-2'>
              <span>Телефон: +7 (999) 123-45-67</span>
              <li> ~ Время работы: Пн-Пт, с 9:00 до 18:00</li>
            </ul>
          </section>
            <section>
              <h2 className=' text-2xl mt-10 p-2'>Email:</h2>
              <a href="#" className=' p-2'> info@company.com</a>
            </section>
        <section>
            <h2 className=' text-2xl mt-10 p-2'>Адрес офиса:</h2>
            <span className=' p-2'>ул. Центральная, 10, офис 25, г. Москва, Россия</span>
        </section>
            <section className=' flex justify-around w-28 mt-5'>
                <section className='Phone text-blue-700'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.58811 18.4401 8.49169 17.5041 7.47 16.49C6.45877 15.472 5.5261 14.3789 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                            stroke="#112A76" strokeWidth="1.5" strokeMiterlimit="10"/>
                    </svg>

                </section>
                <section className='Facebook text-xl text-blue-700'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                            stroke="#112A76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                              stroke="#112A76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </section>
                <section className='instgram text-blue-700 '>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                              stroke="#112A76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M12 15.5C12.4596 15.5 12.9148 15.4095 13.3394 15.2336C13.764 15.0577 14.1499 14.7999 14.4749 14.4749C14.7999 14.1499 15.0577 13.764 15.2336 13.3394C15.4095 12.9148 15.5 12.4596 15.5 12C15.5 11.5404 15.4095 11.0852 15.2336 10.6606C15.0577 10.236 14.7999 9.85013 14.4749 9.52513C14.1499 9.20012 13.764 8.94231 13.3394 8.76642C12.9148 8.59053 12.4596 8.5 12 8.5C11.0717 8.5 10.1815 8.86875 9.52513 9.52513C8.86875 10.1815 8.5 11.0717 8.5 12C8.5 12.9283 8.86875 13.8185 9.52513 14.4749C10.1815 15.1313 11.0717 15.5 12 15.5Z"
                            stroke="#112A76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.6362 7H17.6482" stroke="#112A76" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>

                </section>
            </section>
            <section className=' mt-10 mb-10'>
                {/*<Map address="1600 Amphitheatre Parkway, Mountain View, CA"/>*/}
            </section>
        </section>
            <section className='requests  mt-16 mb-[40px] py-7 mr-10  w-[532px]'>
                <h2 className=' text-3xl'>Оставьте ваш вопрос или отзыв</h2>
                <p className='text-[16px] font-thin text-[#000000CC] mt-2 '>Заполните форму, и наш менеджер свяжется с
                    вами для подтверждения деталей заказа</p>
                <section className=' mt-5'>
                    <label className="block text-gray-600 text-sm mb-2">ФИО</label>
                    <input type="text" placeholder="Имя"
                           className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>

                    <label className="block text-gray-600 text-sm mt-5 mb-2">Номер телефона</label>
                    <input type="number" placeholder="+996 (777) 777 777"
                           className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>

                    <label className="block text-gray-600 text-sm mb-2 mt-5">Ваш вопрос или отзыв</label>
                    <textarea placeholder="Комментарий" rows="4"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"></textarea>
              <button className=' bg-blue-600 text-white py-2 px-14 rounded-xl text-lg hover:bg-blue-700 mt-5'>Отправить сообщение</button>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}
