import React from 'react'
import Image from 'next/image'

import imageProduct from '../../assets/images/image72.png'

export function Produckt() {
  return (
    <section className='mb-28'>
        <section className='container '>
            <section className='  '>
                <h2 className=' text-4xl font-bold p-2 lg:p-10'>Корзина покупок</h2>
            </section>
                <section className='quantity'>
                    <span className='product p-2 mb-10  lg:p-10 text-xl '>3 товара</span>
             </section>
              <section className=' lg:flex justify-center items-start' >
                <section className='cards p-2 mt-10'>
                    <section className='card-one mb-5 flex bg-slate-100 rounded-xl md:text-sm'>
                        <section className='produckt-phohto'>
                            <Image src={imageProduct} alt='produckt phohto' className='rounded-xl max-w-full max-h-full' />
                        </section>
                        <section className=' flex flex-col justify-between p-5'>
                        <h2 className='produckt-name md:text-xl sm: text-ms'>Спортивные штаны для активного отдыха</h2>
                                <span className='lightz-size'>
                                   <h4 className='md:text-xl font-thin light text-slate-400'>Черный</h4>
                                   <h4 className='size text-slate-400 md:text-sm '>ХХL</h4>
                                </span>
                                <span className=' flex justify-center flex-col'>
                                <input type="range" min="0" max="100"  className="w-1/4 h-2 bg-blue-200 accent-blue-700 rounded-lg cursor-pointer" />
                                 <div className="text-xl text-blue-700 mt-3">50</div>
                                </span>
                        </section>
                        <section className='delete-produckt flex flex-col justify-around items-start'>
                            <button className='text-3xl bg-slate-200 w-14 rounded-xl '>&#x1F5D1;</button>
                            <h3 className=' text-blue-700 text-xl  '> 1200coм</h3>
                        </section>
                    </section>

                    <section className='card-one mb-5 flex bg-slate-100 rounded-xl md:text-sm'>
                        <section className='produckt-phohto'>
                            <Image src={imageProduct} alt='produckt phohto' className='rounded-xl max-w-full max-h-full' />
                        </section>
                        <section className=' flex flex-col justify-between p-5'>
                        <h2 className='produckt-name md:text-xl sm: text-ms'>Спортивные штаны для активного отдыха</h2>
                                <span className='lightz-size'>
                                   <h4 className='md:text-xl font-thin light text-slate-400'>Черный</h4>
                                   <h4 className='size text-slate-400 md:text-sm '>ХХL</h4>
                                </span>
                                <span className=' flex justify-center flex-col'>
                                <input type="range" min="0" max="100"  className="w-1/4 h-2 bg-blue-200 accent-blue-700 rounded-lg cursor-pointer" />
                                 <div className="text-xl text-blue-700 mt-3">50</div>
                                </span>
                        </section>
                        <section className='delete-produckt flex flex-col justify-around items-start'>
                            <button className='text-3xl bg-slate-200 w-14 rounded-xl '>&#x1F5D1;</button>
                            <h3 className=' text-blue-700 text-xl  '> 1200coм</h3>
                        </section>
                    </section>
                   
                    <section className='card-one mb-5 flex bg-slate-100 rounded-xl md:text-sm'>
                        <section className='produckt-phohto'>
                            <Image src={imageProduct} alt='produckt phohto' className='rounded-xl max-w-full max-h-full' />
                        </section>
                        <section className=' flex flex-col justify-between p-5'>
                        <h2 className='produckt-name md:text-xl sm: text-ms'>Спортивные штаны для активного отдыха</h2>
                                <span className='lightz-size'>
                                   <h4 className='md:text-xl font-thin light text-slate-400'>Черный</h4>
                                   <h4 className='size text-slate-400 md:text-sm '>ХХL</h4>
                                </span>
                                <span className=' flex justify-center flex-col'>
                                <input type="range" min="0" max="100"  className="w-1/4 h-2 bg-blue-200 accent-blue-700 rounded-lg cursor-pointer" />
                                 <div className="text-xl text-blue-700 mt-3">50</div>
                                </span>
                        </section>
                        <section className='delete-produckt flex flex-col justify-around items-start'>
                            <button className='text-3xl bg-slate-200 w-14 rounded-xl '>&#x1F5D1;</button>
                            <h3 className=' text-blue-700 text-xl  '> 1200coм</h3>
                        </section>
                    </section>

                </section>
                <section className='sending p-2  mt-8 lg:p-5 '>
                    <section className=' p-10 bg-slate-100 rounded-lg'>
                        <h4 className=' text-2xl mb-3'>Оптовая покупка</h4>
                        <a href="/" className=' text-blue-600 text-ms'>При покупке от 100 штук вы получаете скидку 10%</a>
                    </section>
                    <section className=' bg-slate-100 p-10 rounded-lg mt-14'>
                        <section className=''>
                            <span className=' text-xl'>Количество:</span>
                            <span className=''> 3 товара</span>
                        </section>
                        <section>
                            <h2 className=' text-3xl mt-7'>Итог: 4000 сом</h2>
                        </section>
                        <section className=' mt-10'>
                            <button className=' bg-blue-600 text-white py-2 px-20 rounded-full text-lg hover:bg-blue-700 md:text-sm'>Оформить заказ</button>
                        </section>
                    </section>
                </section>
              </section>
        </section>
    </section>
  )
}

