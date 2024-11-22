'use client';
import dynamicFetch from "@/hooks/fetch";
import {useEffect, useState} from "react";
import {localeStore} from "@/app/store/localeStore";

const SalesButtons = {
    en: 'Buy wholesale',
    ru: 'Оформить оптовую заявку',
    kgz: 'Дүң сатып алу',
};

export const SalesCards =  () => {
    const [blocks, setBlocks] = useState()
    const locale =  localeStore((set) => set.locale);

    useEffect(() => {
        try {
            dynamicFetch('/sales-cards').then(data => setBlocks(data));
        } catch (error) {
            console.error("Failed to fetch sales cards:", error);
            return <p>Failed to load sales cards</p>;
        }
    }, []);


    // Функция для получения локализованного текста
    const getLocalizedText = (block, field) => {
        if (locale === 'en') return block[`${field}_en`];
        if (locale === 'ru') return block[`${field}_ru`];
        if (locale === 'kgz') return block[`${field}_kg`];
        return block[`${field}_en`]; // Фолбек на английский
    };
    if(!blocks) return <p>Failed to load sales cards</p>

    return (
        <section className="container px-[15px] xl:px-0 py-[70px] flex flex-col xl:flex-row justify-center gap-[20px] xl:gap-[20px]">
            {blocks.results?.map((block) => (
                <section
                    key={block.id}
                    className="flex w-full xl:w-[648px] xl:h-[343px] flex-col items-center py-[15px] gap-[15px] xl:gap-[30px] xl:py-[40px] bg-[#1A3EA9E5] px-[30px] text-center rounded-[10px]"
                >
                    <h2 className="manrope text-[22px] xl:text-[24px] text-white font-bold">
                        {getLocalizedText(block, 'title')}
                    </h2>
                    <p className="manrope text-[18px] xl:text-[20px] text-white font-thin">
                        {getLocalizedText(block, 'description')}
                    </p>
                    <button className="w-[288px] px-[33px] py-[10px] rounded-[10px] mt-[20px] bg-white text-black">
                        {SalesButtons[locale]}
                    </button>
                </section>
            ))}
        </section>
    );
};
