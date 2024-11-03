'use client';
import { Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
import {useEffect, useState} from "react";

export const SameProducts =  ({category}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dynamicFetch('/products').then(data => setProducts(data.filter(item => item.category === category)));
    }, []);


    return (
        <section className="container flex flex-col gap-6">
            <h2 className="impact font-bold text-[36px] text-left"> Похожие товары</h2>
            <section className="p-10 overflow-x-auto whitespace-nowrap flex space-x-4">
                {
                    products.slice(0, 15).map((prop, index) => (
                        <Card key={index} prop={prop} />
                    ))
                }
            </section>
        </section>
    )
}