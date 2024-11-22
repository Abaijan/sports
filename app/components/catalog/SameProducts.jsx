'use client';
import { Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
import {useEffect, useState} from "react";
import {localeStore} from "@/app/store/localeStore";

export const SameProducts =  ({id,category}) => {
    const locale = localeStore((set) => set.locale);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dynamicFetch('/products').then(data => setProducts(data.results?.filter(item => item.category === category && item.id !== id)));
    }, [category, id]);

    return (
        <section className="container flex flex-col gap-6">
            <h2 className="impact xl:p-[30px] font-bold text-[24px] xl:text-[36px] text-left">{locale === 'en' ? 'Same products' : locale === 'ru' ? 'Похожие товары' : 'Алын артыкчылыктар'}</h2>
            <section className="xl:p-10 overflow-x-auto whitespace-nowrap flex space-x-4">
                {
                    products.slice(0, 15).map((prop, index) => (
                        <Card key={index} prop={prop} />
                    ))
                }
            </section>
        </section>
    )
}