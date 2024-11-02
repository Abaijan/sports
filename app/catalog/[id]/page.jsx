import Image from "next/image";
import img from '@/app/assets/images/image72.svg'
import {SameProducts} from "@/app/components";
import Link from "next/link";
export default function Product() {
    return (
        <section className="container">
            <section className="flex flex-col gap-6">
                <div className="my-[50px]">
                    <div className="text-[18px] flex font-thin text-[#00000099]">
                        <Link href='/catalog'>Каталог</Link><p> / Шапки</p>
                    </div>
                </div>
                <div className="flex mb-[60px] gap-6">
                        <div className="flex flex-col w-1/5 gap-8 max-w-[92px] max-h-[473px] scrollbar-hidden overflow-y-scroll ">
                            <Image src={img} alt="image" className="rounded-xl  w-[92px] h-[92px]" width={92} height={92}/>
                            <Image src={img} alt="image" className="rounded-xl  w-[92px] h-[92px]" width={92} height={92}/>
                            <Image src={img} alt="image" className="rounded-xl  w-[92px] h-[92px]" width={92} height={92}/>
                            <Image src={img} alt="image" className="rounded-xl  w-[92px] h-[92px]" width={92} height={92}/>
                            <Image src={img} alt="image" className="rounded-xl  w-[92px] h-[92px]" width={92} height={92}/>
                        </div>

                    <Image src={img} alt="image" className="rounded-xl w-[539px] h-[472px]" width={539} height={472}/>
                    <div className="flex flex-col gap-[30px] w-1/2">
                        <h1 className="manrope font-bold text-[24px] leading-[30px]">Спортивные штаны для активного
                            отдыха "SportFit Pro" (унисекс)</h1>
                        <p className="font-normal text-[16px] leading-[21px] text-[#222222CC]">Материял:
                            60% хлопок, 35% полиэстер, 5% эластан (ткань, позволяющая коже дышать и обеспечивающая
                            свободу движений)</p>
                        <span className="font-bold text-[22px] leading-[30px] text-[#1243C0]">1300 сом</span>
                        <p className=""></p>
                        <div className="flex flex-col gap-4 ">
                            <p className="font-thin text-[16px] leading-[21px] ">Цвет</p>
                            <div className="flex gap-4 ">
                                <div className={`rounded-full w-[30px] h-[30px] ${`bg-[#1243C0]`} `}></div>
                                <div className={`rounded-full w-[30px] h-[30px] ${`bg-[#000000]`} `}></div>
                                <div className={`rounded-full w-[30px] h-[30px] ${`bg-[#A8A8A8]`} `}></div>

                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col gap-4 ">
                                <p className="font-thin text-[16px] leading-[21px]">Размеры</p>
                                <div className="flex ">
                                    <div className="flex w-[300px] gap-4">
                                        <div
                                            className={`rounded-full w-[30px] flex items-center justify-center h-[30px] border-[1px] cursor-pointer hover:border-[#1243C0]`}>s
                                        </div>
                                        <div
                                            className={`rounded-full w-[30px] flex items-center justify-center border-[1px] h-[30px] cursor-pointer hover:border-[#1243C0] `}>m
                                        </div>
                                        <div
                                            className={`rounded-full w-[30px] flex items-center justify-center border-[1px] h-[30px] cursor-pointer hover:border-[#1243C0] `}>l
                                        </div>
                                    </div>

                                    <button
                                        // onClick={}
                                        className="hover:bg-blue-700 transition duration-300 px-[23x] py-[7px] rounded-[6px] bg-[#1243C0] text-center text-[white] w-[280px] h-[47px] manrope">Добавить
                                        в
                                        корзину
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <SameProducts category={'men\'s clothing'}/>
                </div>
            </section>
        </section>
    );
}