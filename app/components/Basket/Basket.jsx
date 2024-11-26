'use client'
import {useEffect, useState} from "react";
import { basketStore } from "@/app/store/basketSore";
import BasketCard from "@/app/components/Card/BaketCard";
import {ModalWind} from "@/app/components/modalWindows/ModalWindow";
import dynamicFetch from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export const Basket = api => {
    const [showModal, setShowModal] = useState(false);
    const basket = basketStore(state => state.basket);
    const removeFromBasket = basketStore(state => state.removeFromBasket);
    const updateItemCount = basketStore(state => state.updateItemCount);
    const [discount, setDiscount] = useState()

    useEffect(() => {
        dynamicFetch('/discount').then(data => setDiscount(data));
    }, []);

    const totalItems = basket.reduce((total, item) => total + item.count, 0);
    const totalPrice = basket.reduce((total, item) => total + (item.price * item.count), 0);


    function clickHandler() {
        setShowModal(!showModal);
    }
    const item = {
        empty_ru: 'Ваша корзина пуста',
        whole_sale_ru: 'Получите скидку 10% при заказе от 500 рублей',
        description_ru: 'При покупке от 100 штук вы получаете скидку 10%',
        button_ru: 'Оформить заказ',
        title_ru: 'Корзина покупок',
        total_ru: 'Итого:',
        quantity_ru: 'Количество:',

        empty_en: 'Your basket is empty',
        whole_sale_en: 'Get a discount of 10% when you order more than 500 rubles',
        description_en: 'You get a discount of 10% when you buy more than 100 items',
        button_en: 'Place an order',
        title_en: 'Shopping cart',
        total_en: 'Total:',
        quantity_en: 'Quantity:',

        empty_kg: 'Себетиниз бош',
        whole_sale_kg: `100 даанадан ашык сатып алууда сиз 10% арзандатуу аласыз`,
        description_kg: '100 даанадан ашык сатып алууда сиз 10% арзандатуу аласыз',
        button_kg: 'Ордер алу',
        title_kg: 'Соода корзинасы',
        total_kg: 'Суммасы:',
        quantity_kg: 'Саны:',

    }
const locale = localeStore((set) => set.locale);
    return (
        <section>
            {
                    <section  className='container px-[15px] xl:px-0 manrope'>
                        <section className='py-10'>
                            <h2 className='text-4xl font-bold'>{getLocalizedText(item, 'title', locale)}</h2>
                        </section>
                        <section className='quantity pb-5'>
                            <span>{basket.length} {locale === 'ru' ? 'товар' : locale === 'kgz' ? 'даана' : 'item'}</span>
                        </section>
                        <section className='flex flex-col xl:flex-row  xl:justify-between'>
                            <section className='xl:w-[762px] flex flex-col gap-[38px] py-[50px] xl:py-[100px] px-3 xl:pt-5 xl:pb-[300px]'>
                                { basket.length > 0 ? basket.map((item, index) => (
                                    <BasketCard key={index} item={item.image && item} removeFromBasket={removeFromBasket}
                                                updateItemCount={updateItemCount}/>
                                )) : (<h1 className='text-3xl font-bold'>{item.empty}</h1>) }
                            </section>
                            <section className='sending p-5'>
                                <section className='p-10 bg-[#F5F5F5] rounded-xl'>
                                    <h4 className='text-[18px] mb-3'>{item.whole_sale}</h4>
                                    <a href="/wholesale" className='text-blue-600 text-ms'>{getLocalizedText(item, 'description', locale)}</a>
                                </section>
                                <section className='bg-[#F5F5F5] p-10 rounded-xl mt-10'>
                                    <section>
                                        <span className='text-xl'>{getLocalizedText(item, 'quantity', locale)}</span>
                                        <span> {totalItems} {locale === 'ru' ? 'товар' : locale === 'kgz' ? 'даана' : 'item'}</span>
                                    </section>
                                    <section>
                                        <h2 className='text-3xl mt-7'>{getLocalizedText(item, 'total', locale)} {totalPrice} сом</h2>
                                    </section>
                                    <section className='mt-10'>
                                        <button
                                            onClick={clickHandler}
                                            className='bg-blue-600 text-white py-2 px-20 w-full rounded-[10px] text-lg hover:bg-blue-700'>{getLocalizedText(item, 'button', locale)}
                                        </button>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
            }

            {showModal ? (<ModalWind param={'basket'} setShowModal={setShowModal}/>) : null}
        </section>

    );
}
