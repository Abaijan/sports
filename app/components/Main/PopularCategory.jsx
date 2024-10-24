'use client'
import {useEffect, useState} from "react";
import dynamicFetch from "@/hooks/fetch";
import Image from "next/image";
import black from '@/app/assets/images/black.jpg'
export const PopularCategory = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        dynamicFetch('/popularCategories').then(res => setCard(res));
    }, []);
    const style = card.length * 340
    return(
        <section className="container flex flex-col my-[80px] gap-[20px]">
            <section className="flex justify-between">
                <h2 className="text-[36px] impact ">Популярные категории</h2>
                <button className="rounded-xl border-[2px] border-gray-800 w-[98px] h-[49px] px-[33px] py-[10px] ">Все
                </button>
            </section>
            <section  className="p-10 flex  overflow-x-scroll gap-[20px] space-x-6">
                {
                    card && card.map(item => (
                        <section key={item.id} className="min-w-[315px]  z-1 relative montserrat flex text-left items-end h-[396px] rounded-[10px] bg-cover bg-center">
                            <Image src={black} alt={item.description} width={100} height={100} className="absolute z-1 h-full w-full rounded-[10px] opacity-[0.2]"/>
                            <Image src={item.image} alt={item.description} width={300} height={300} className="w-full z-[-1]  rounded-[10px] absolute object-cover items-center  h-full"/>
                            <p className="montserrat text-[22px] z-[2] mb-3 ml-3 text-white">{item.description}</p>
                        </section>
                    ))

                }

            </section>
        </section>
    )
}
