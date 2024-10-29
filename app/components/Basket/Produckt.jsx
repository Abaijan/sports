import React from 'react'
import Image from 'next/image'

import imageProduct from '../../assets/images/image72.png'

export function Produckt() {
  return (
    <section>
        <section className='container '>
            <section className=' p-10 '>
                <h2 className=' text-4xl font-bold'>Корзина покупок</h2>
            </section>
                <section className='quantity'>
                    <span className='product p-10'>3 товара</span>
             </section>
              <section className=' flex justify-around' >
                <section className='cards p-5'>
                    <section className='card-one flex bg-slate-100 p-5 rounded-xl w-2/2'>
                        <section className='produckt-phohto'>
                            <Image src={imageProduct} alt='produckt phohto' className='rounded-xl'/>
                        </section>
                        <section className=' flex flex-col justify-between p-5'>
                                <h2 className='produckt-name text-2xl'>Спортивные штаны для активного отдыха "SportFit Pro" (унисекс)</h2>
                                <span className='light-size'>
                                   <h4 className='text-xl font-thin light'>Черный</h4>
                                   <h4 className='size'>ХХL</h4>
                                </span>
                                <span className=' flex justify-center flex-col'>
                                <input type="range" min="0" max="100"  className="w-1/4 h-2 bg-blue-200 accent-blue-700 rounded-lg cursor-pointer" />
                                 <div className="text-xl text-blue-700 mt-3">50</div>
                                </span>
                        </section>
                        <section className='delete-produckt flex flex-col justify-between text-center'>
                            <section className='text-3xl bg-slate-200 w-14 rounded-xl '>&#x1F5D1;</section>
                            <h3 className=' text-blue-700 text-3xl '> 1200coм</h3>
                        </section>
                    </section>
                    <section className='card-one flex bg-slate-100 p-5 mt-5 rounded-xl w-2/2'>
                        <section className='produckt-phohto'>
                            <Image src={imageProduct} alt='produckt phohto' className=' rounded-xl'/>
                        </section>
                        <section className=' flex flex-col justify-between p-5'>
                                <h2 className='produckt-name text-2xl'>Спортивные штаны для активного отдыха "SportFit Pro" (унисекс)</h2>
                                <span className='light-size'>
                                 <h4 className='text-xl font-thin light'>Черный</h4>
                                   <h4 className='size'>ХХL</h4>
                                </span>
                                <span className=' flex justify-center flex-col'>
                                <input type="range" min="0" max="100"  className="w-1/4 h-2 bg-blue-200 accent-blue-700 rounded-lg cursor-pointer" />
                                 <div className="text-xl text-blue-700 mt-3">50</div>
                                </span>
                        </section>
                        <section className='delete-produckt flex flex-col justify-between text-center'>
                            <section className='text-3xl bg-slate-200 w-14 rounded-xl '>&#x1F5D1;</section>
                            <h3 className=' text-blue-700 text-3xl '> 1200coм</h3>
                        </section>
                    </section>
                    <section className='card-one flex bg-slate-100 p-5 mt-5 rounded-xl w-2/2'>
                        <section className='produckt-phohto'>
                            <Image src={imageProduct} alt='produckt phohto' className=' rounded-xl'/>
                        </section>
                        <section className=' flex flex-col justify-between p-5'>
                                <h2 className='produckt-name text-2xl'>Спортивные штаны для активного отдыха "SportFit Pro" (унисекс)</h2>
                            <span className='light-size'>
                                   <h4 className='text-xl font-thin light'>Черный</h4>
                                   <h4 className='size'>ХХL</h4>
                                </span>
                            <span className=' flex justify-center flex-col'>
                                <input type="range" min="0" max="100" className="w-1/4 h-2 bg-blue-200 accent-blue-700 rounded-lg cursor-pointer" />
                                 <div className="text-xl text-blue-700 mt-3">50</div>
                                </span>
                        </section>
                        <section className='delete-produckt flex flex-col justify-between text-center'>
                            <section className='text-3xl bg-slate-200 w-14 rounded-xl '>&#x1F5D1;</section>
                            <h3 className=' text-blue-700 text-3xl '> 1200coм</h3>
                        </section>
                    </section>
                </section>
                <section className='sending p-5'>
                    <section className=' p-10 bg-slate-100 rounded-xl'>
                        <h4 className=' text-2xl mb-3'>Оптовая покупка</h4>
                        <a href="/" className=' text-blue-600 text-ms'>При покупке от 100 штук вы получаете скидку 10%</a>
                    </section>
                    <section className=' bg-slate-100 p-10 rounded-xl mt-10'>
                        <section className=''>
                            <span className=' text-xl'>Количество:</span>
                            <span className=''> 3 товара</span>
                        </section>
                        <section>
                            <h2 className=' text-3xl mt-7'>Итог: 4000 сом</h2>
                        </section>
                        <section className=' mt-10'>
                            <button className=' bg-blue-600 text-white py-2 px-20 rounded-full text-lg hover:bg-blue-700'>Оформить заказ</button>
                        </section>
                    </section>
                </section>
              </section>
        </section>
    </section>
  )
}

