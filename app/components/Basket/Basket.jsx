import Image from 'next/image'
import trash from '@/app/assets/icons/trash.svg';
import imageProduct from '../../assets/images/image72.png'

export const Basket = () => {
  return (
    <section>
        <section className='container manrope'>
            <section className='py-10'>
                <h2 className=' text-4xl font-bold'>Корзина покупок</h2>
            </section>
                <section className='quantity  pb-5'>
                    <span className=''>3 товара</span>
             </section>
              <section className=' flex justify-between' >
                  <section className='max-w-[762px] flex flex-col gap-[38px] pt-5 pb-[300px]'>

                      <section className="flex h-[202px] ">
                          <section className="">
                              <Image alt="product" src={imageProduct}
                                     className="rounded-xl  min-w-[202px] min-h-[202px]"/>
                          </section>
                          <section className="flex flex-col pl-[20px] gap-[15px]  ">
                              <section className="flex justify-between gap-2">
                                  <h2 className='produckt-name text-[20px] font-thin '>Спортивные штаны для активного
                                      отдыха "SportFit Pro" (унисекс)</h2>
                                  <button className='text-3xl w-[38px] bg-[#ECECEC] p-[10px] h-[38px]  rounded-[6px] '>
                                      <Image src={trash} alt='trash basket'/>
                                  </button>
                              </section>
                              <section className="flex flex-col gap-2 text-start opacity-70">
                                  <h4 className="font-thin text-[#484848,90] text-[16px] ">Черный</h4>
                                  <h4 className='font-thin text-[16px] '>ХХL</h4>
                              </section>
                              <section className="flex justify-between">
                                  <section className="flex gap-4 items-center">
                                      <button className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px] ">-</button>
                                      <span className="">1</span>
                                      <button className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px] ">+</button>
                                  </section>
                                  <p className="text-[22px] text-[#1243C0] manrope font-bold leading-[30px]">1200
                                      сом</p>
                              </section>
                          </section>
                      </section>
                      <section className="flex h-[202px] ">
                          <section className="">
                              <Image alt="product" src={imageProduct}
                                     className="rounded-xl min-w-[202px] min-h-[202px]"/>
                          </section>
                          <section className="flex flex-col pl-[20px] gap-[15px]  ">
                              <section className="flex justify-between gap-2">
                                  <h2 className='produckt-name text-[20px] font-thin '>Спортивные штаны для активного
                                      отдыха "SportFit Pro" (унисекс)</h2>
                                  <button className='text-3xl w-[38px] bg-[#ECECEC] p-[10px] h-[38px]  rounded-[6px] '>
                                      <Image src={trash} alt='trash basket'/>
                                  </button>
                              </section>
                              <section className="flex flex-col gap-2 text-start opacity-70">
                                  <h4 className="font-thin text-[#484848,90] text-[16px] ">Черный</h4>
                                  <h4 className='font-thin text-[16px] '>ХХL</h4>
                              </section>
                              <section className="flex justify-between">
                                  <section className="flex gap-4 items-center">
                                      <button className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px] ">-</button>
                                      <span className="">1</span>
                                      <button className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px] ">+</button>
                                  </section>
                                  <p className="text-[22px] text-[#1243C0] manrope font-bold leading-[30px]">1200
                                      сом</p>
                              </section>
                          </section>
                      </section>
                      <section className="flex h-[202px] ">
                          <section className="">
                              <Image alt="product" src={imageProduct}
                                     className="rounded-xl min-w-[202px] min-h-[202px]"/>
                          </section>
                          <section className="flex flex-col pl-[20px] gap-[15px]  ">
                              <section className="flex justify-between gap-2">
                                  <h2 className='produckt-name text-[20px] font-thin '>Спортивные штаны для активного
                                      отдыха "SportFit Pro" (унисекс)</h2>
                                  <button className='text-3xl w-[38px] bg-[#ECECEC] p-[10px] h-[38px]  rounded-[6px] '>
                                      <Image src={trash} alt='trash basket'/>
                                  </button>
                              </section>
                              <section className="flex flex-col gap-2 text-start opacity-70">
                                  <h4 className="font-thin text-[#484848,90] text-[16px] ">Черный</h4>
                                  <h4 className='font-thin text-[16px] '>ХХL</h4>
                              </section>
                              <section className="flex justify-between">
                                  <section className="flex gap-4 items-center">
                                      <button className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px] ">-</button>
                                      <span className="">1</span>
                                      <button className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px] ">+</button>
                                  </section>
                                  <p className="text-[22px] text-[#1243C0] manrope font-bold leading-[30px]">1200
                                      сом</p>
                              </section>
                          </section>
                      </section>

                  </section>
                  <section className='sending p-5'>
                      <section className=' p-10 bg-[#F5F5F5] rounded-xl'>
                          <h4 className=' text-[18px] mb-3'>Оптовая покупка</h4>
                          <a href="/wholesale" className=' text-blue-600 text-ms'>При покупке от 100 штук вы получаете
                              скидку
                              10%</a>
                      </section>
                      <section className=' bg-[#F5F5F5] p-10 rounded-xl mt-10'>
                          <section className=''>
                              <span className=' text-xl'>Количество:</span>
                              <span className=''> 3 товара</span>
                          </section>
                          <section>
                              <h2 className=' text-3xl mt-7'>Итог: 4000 сом</h2>
                          </section>
                          <section className=' mt-10'>
                              <button
                                  className=' bg-blue-600 text-white py-2 px-20 w-full rounded-[10px] text-lg hover:bg-blue-700'>Оформить
                                  заказ
                              </button>
                          </section>
                      </section>
                  </section>
              </section>
        </section>
    </section>
  )
}

