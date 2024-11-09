'use client'
import {useEffect, useState} from "react";
import { basketStore } from "@/app/store/basketSore";
import Link from "next/link";
import BasketCard from "@/app/components/Card/BaketCard";
import {ModalWind} from "@/app/components/modalWindows/ModalWindow";
import dynamicFetch from "@/hooks/fetch";

export const Basket = () => {
    const [showModal, setShowModal] = useState(false);
    const[info, setInfo] = useState([]);
    const basket = basketStore(state => state.basket);
    const removeFromBasket = basketStore(state => state.removeFromBasket);
    const updateItemCount = basketStore(state => state.updateItemCount);
    // Функция для удаления из корзины

    useEffect(() => {
        dynamicFetch('/basketPage').then(data => setInfo(data));
    }, []);

    // Общее количество товаров в корзине
    const totalItems = basket.reduce((total, item) => total + item.count, 0);
    const totalPrice = basket.reduce((total, item) => total + (item.price * item.count), 0);

    function clickHandler() {
        setShowModal(!showModal);
    }
    return (
        <section>
            {
                info && info.map((item) => (
                    <section key={item.id} className='container px-[15px] xl:px-0 manrope'>
                        <section className='py-10'>
                            <h2 className='text-4xl font-bold'>{item.title}</h2>
                        </section>
                        <section className='quantity pb-5'>
                            <span>{basket.length} товара(ов)</span>
                        </section>
                        <section className='flex flex-col xl:flex-row  xl:justify-between'>
                            <section className='xl:w-[762px] flex flex-col gap-[38px] py-[50px] xl:py-[100px] px-3 xl:pt-5 xl:pb-[300px]'>
                                { basket.length > 0 ? basket.map((item, index) => (
                                    <BasketCard key={index} item={item} removeFromBasket={removeFromBasket}
                                                updateItemCount={updateItemCount}/>
                                )) : (<h1 className='text-3xl font-bold'>{item.empty}</h1>) }
                            </section>
                            <section className='sending p-5'>
                                <section className='p-10 bg-[#F5F5F5] rounded-xl'>
                                    <h4 className='text-[18px] mb-3'>{item.whole_sale}</h4>
                                    <a href="/wholesale" className='text-blue-600 text-ms'>{item.description}</a>
                                </section>
                                <section className='bg-[#F5F5F5] p-10 rounded-xl mt-10'>
                                    <section>
                                        <span className='text-xl'>Количество:</span>
                                        <span> {totalItems} товара(ов)</span>
                                    </section>
                                    <section>
                                        <h2 className='text-3xl mt-7'>{item.total}: {totalPrice} сом</h2>
                                    </section>
                                    <section className='mt-10'>
                                        <button
                                            onClick={clickHandler}
                                            className='bg-blue-600 text-white py-2 px-20 w-full rounded-[10px] text-lg hover:bg-blue-700'>{item.button}
                                        </button>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                ))
            }

            {showModal ? (<ModalWind param={'basket'} setShowModal={setShowModal}/>) : null}
        </section>

    );
}
