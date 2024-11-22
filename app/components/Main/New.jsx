'use client'
import { Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
import {localeStore} from "@/app/store/localeStore";
import {useEffect, useState} from "react";
export const New = () => {

    const [carts, setCarts] = useState({results: []});
    useEffect(() => {
     dynamicFetch('/products').then(data => setCarts(data));
    }, []);

    const locale = localeStore((set) => set.locale);
    if(carts.results.length === 0) return <p>Loading...</p>
    return(
        <section className="container px-[15px] xl:px-0 flex flex-col mt-[150px] xl:my-[80px] gap-[20px]">
            <section className="flex justify-between">
                <h2 className="text-[36px] impact ">{locale === 'ru' ? 'Новинки' : locale === 'kgz' ? 'Жаңы' : 'New'}</h2>
                <button className="rounded-xl border-[2px] border-gray-800 w-[98px] h-[49px] px-[33px] py-[10px] ">{locale === 'ru' ? 'Все' : locale === 'kgz' ? 'Баары' : 'All'}</button>
            </section>
            <section  className="xl:p-10 flex gap-[14px] overflow-x-scroll xl:gap-[20px] xl:space-x-6">
                {
                   carts.results.map(cart => (
                        <div className="w-fit" key={cart.id}>
                            <Card prop={cart && cart}/>
                        </div>
                    ))
                }
            </section>
        </section>
    )
};