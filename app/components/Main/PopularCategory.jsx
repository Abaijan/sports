'use client'
import Image from "next/image";
import black from "@/app/assets/images/black.jpg";
import dynamicFetch from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {useEffect, useState} from "react";
import {localeStore} from "@/app/store/localeStore";
import {redirect} from "next/navigation";
import Link from "next/link";

export const PopularCategory =  () => {
    const [card, setCard] = useState({results: []});
    const locale = localeStore((set) => set.locale); // Установи текущую локаль

    useEffect(() => {
        try {
             dynamicFetch("/categories").then(data => setCard(data));
        } catch (error) {
            console.error("Failed to fetch popular categories:", error);
            return <p>Failed to load popular categories</p>;
        }
    }, []);




    return (
        <section className="container px-[15px] xl:px-0 flex flex-col my-[80px] gap-[20px]">
            <section className="flex justify-between">
                <h2 className="xl:text-[36px] text-[24px] impact">
                    {locale === "en" ? "Popular Categories" : locale === "ru" ? "Популярные категории" : "Популярдуу категориялар"}
                </h2>
                <Link href='/catalog'>
                <button  className="rounded-xl border-[2px] border-gray-800 w-[98px] text-[24px] h-[39px] xl:h-[49px] flex items-center justify-center">
                    {locale === "en" ? "All" : locale === "ru" ? "Все" : "Баары"}
                </button>
                </Link>
            </section>
            <section className="xl:p-10 flex overflow-x-scroll xl:gap-[20px] space-x-6">
                {card &&
                    card.results.map((item) => (
                        <section
                            key={item.id}
                            className="xl:min-w-[315px] min-w-[210px] z-1 relative montserrat flex text-left items-end h-[290px] xl:h-[396px] rounded-[10px] bg-cover bg-center"
                        >
                            <Image
                                src={black}
                                alt={getLocalizedText(item, "title")}
                                width={100}
                                height={100}
                                className="absolute z-1 h-full w-full rounded-[10px] opacity-[0.2]"
                            />
                            <Image
                                src={item.image}
                                alt={getLocalizedText(item, "title")}
                                width={300}
                                height={300}
                                className="w-full z-[-1] rounded-[10px] absolute object-cover items-center h-full"
                            />
                            <p className="montserrat text-[22px] z-[2] mb-3 ml-3 text-white">
                                {getLocalizedText(item, "title")}
                            </p>
                        </section>
                    ))}
            </section>
        </section>
    );
};
