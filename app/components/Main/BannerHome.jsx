'use client';
import Image from "next/image";
import Link from "next/link";
import dynamicFetch from "@/hooks/fetch";
import { useEffect, useState } from "react";
import { getLocalizedText } from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export const BannerHome = () => {
    const [response, setResponse] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0);
const locale = localeStore((set) => set.locale);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mainPageData = await dynamicFetch('/banners');
                setResponse(mainPageData || []);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSliderIndex((prevIndex) =>
                (prevIndex + 1) % (response?.results[0]?.images?.length || 1)
            );
        }, 4000);

        return () => clearInterval(intervalId);
    }, [response]);

    if (response.length === 0) {
        return <p className="px-auto">Loading...</p>;
    }

    return response?.results.map((item, index) => (
        <section key={index} className="blue overflow-hidden">
            <section className="h-[120vh] xl:h-[900px] relative container md:flex-row justify-between flex flex-col items-center xl:relative">
                {/* Левая часть с заголовком */}
                <section className="max-h-[800px] md:w-[25%] pt-[50px] flex">
                    <section className="flex flex-col bg-transparent z-[100] gap-[30px] xl:gap-[50px] py-[100px] px-5 xl:px-3 w-fit">
                        <h1 className="xl:text-[88px] text-[56px] max-w-[350px] gap-2 flex flex-wrap leading-[63px] font-extrabold xl:leading-[88px] montserrat">
                            {getLocalizedText(item, 'title', locale).split(' ').map((word, index) => (
                                <span className={index === getLocalizedText(item, 'title', locale).split(' ').length - 1 ? 'text-[#FF0000]' : ''} key={index}>{word}</span>
                            ))}
                        </h1>
                        <p className="leading-25 font-thin xl:text-[24px] z-[100] xl:max-w-[400px] text-[19px]">
                            {getLocalizedText(item, 'description', locale)}
                        </p>
                        <Link className="w-fit" href='/catalog'>
                            <button className="px-8 py-3 bg-[#DBFF00] color-black rounded-[6px] xl:rounded-2xl max-w-[200px] text-black">
                                {getLocalizedText({ button_ru: 'Купить', button_kg: 'Сатып алу', button_en: 'Buy' }, 'button', locale)}
                            </button>
                        </Link>
                    </section>
                </section>
                {/* Правая часть со слайдами */}
                <section className="relative  top-[-30vh]  xl:min-h-[1020px] xl:min-w-[1000px] min-w-[1660px] right-[-120%] min-h-[1660px] xl:w-[1060px] xl:top-[20vh] xl:right-[-10vw]  xl:h-[1020px] rounded-full bg-white">
                    {item.images?.map((image, imgIndex) => (
                        <Image
                            key={imgIndex}
                            src={image}
                            width={1500}
                            height={1500}
                            loading={"eager"}
                            alt={`Slide ${imgIndex + 1}`}
                            className={`absolute inset-0 w-[500px] lg:w-[80%] lg:h-auto left-[100px] h-[500px] transition-opacity xl:mt-0 mt-[150px] duration-1000 ease-in-out ${
                                imgIndex === sliderIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                </section>
            </section>
        </section>
    ));
};
