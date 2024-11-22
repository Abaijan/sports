'use client'
import dynamicFetch from "@/hooks/fetch";
import {useEffect, useState} from "react";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export const Advantages =  () => {
    const locale = localeStore((set) => set.locale);
    const [advantages, setAdvantages] = useState([]);

    useEffect(() => {
        try {
             dynamicFetch('/advantages').then(data => setAdvantages(data));
        } catch (error) {
            console.error("Failed to fetch advantages:", error);
            return <p>Failed to load advantages</p>;
        }
    }, []);


    return (
        <section className="container py-[50px] xl:py-[100px] px-[15px] xl:px-0 flex flex-col">
            <h2 className="impact text-[36px] font-semibold">
                {locale === 'en' ? 'Advantages' : locale === 'ru' ? 'Преимущества' : 'Артыкчылыктары'}
            </h2>
            <div className="space-y-6 manrope lg:px-[40px] pt-[100px] pb-[100px] font-raleway">
                {advantages.results?.map((item) => (
                    <div
                        key={item.id}
                        className="grid md:grid-cols-1 lg:grid-cols-3 grid-rows-1 xl:items-center-cols-1 xl:border-b pb-14"
                    >
                        <span className="text-[32px] hidden xl:block ">0{item.id}/</span>
                        <div className="flex justify-between items-center ">
                            <h2 className="text-[24px] leading-[31px] xl:leading-[45px] xl:text-[34px] font-semibold w-[200px] text-[#112A76]">
                                {getLocalizedText(item, 'title', locale)}
                            </h2>
                            <span className="text-[24px] xl:text-[32px] block xl:hidden ">0{item.id}/</span>
                        </div>

                        <p className="text-[20px] text-left xl:text-center leading-[22px] pt-[20px] font-thin">
                            {getLocalizedText(item, 'description', locale)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
