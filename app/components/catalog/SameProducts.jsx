'use client';
import { Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
import {useEffect, useState} from "react";

export const SameProducts =  ({id,category}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dynamicFetch('/products').then(data => setProducts(data.filter(item => item.category === category && item.id !== id)));
    }, [category, id]);

    return (
        <section className="container flex flex-col gap-6">
            <h2 className="impact xl:p-[30px] font-bold text-[24px] xl:text-[36px] text-left"> Похожие товары</h2>
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