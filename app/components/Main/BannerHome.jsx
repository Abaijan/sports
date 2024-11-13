'use client';
import Image from "next/image";
import Link from "next/link";
import dynamicFetch from "@/hooks/fetch";
import { useEffect, useState } from "react";

export const BannerHome = () => {
    const [response, setResponse] = useState();
    const [slides, setSlides] = useState();
    const [wind, setWind] = useState(0);

    useEffect(() => {
        dynamicFetch('/main_page').then(data => setResponse(data));
        dynamicFetch('/slider').then(data => setSlides(data));
    }, []);

    const [sliderIndex, setSliderIndex] = useState(0);

    // Check for client-side and set window width
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWind(window.innerWidth);
            setWind(window.innerWidth); // Set initial width

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSliderIndex((prevIndex) => (prevIndex + 1) % (slides?.length || 1));
        }, 4000);

        return () => clearInterval(intervalId);
    }, [slides?.length]);

    const slidePrev = () => {
        setSliderIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : slides?.length - 1);
    };

    const slideNext = () => {
        setSliderIndex((prevIndex) => prevIndex === slides?.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        response?.map(res => (
            <section key={res.id} className="blue overflow-hidden">
                <section className="h-[120vh] xl:h-[900px] relative container md:flex-row justify-between flex flex-col items-center xl:relative">
                    <section className="max-h-[800px] md:w-[25%] pt-[50px] flex">
                        <section className="flex flex-col bg-transparent z-[100] gap-[30px] xl:gap-[50px] py-[100px] px-5 xl:px-3 w-fit">
                            <h1 className="xl:text-[88px] text-[56px] leading-[63px] font-extrabold xl:leading-[108px] montserrat">
                                <span className="line-clamp-1"> {res.title?.split(' ')[0]} </span> {res.title?.split(' ')[1]} <span className="red font-extrabold italic">{res.title?.split(' ')[2]}</span>
                            </h1>
                            <p className="leading-25 font-thin xl:text-[24px] z-[100] xl:max-w-[400px] text-[19px]">{res.subtitle}</p>
                            <Link className="w-fit" href='/catalog'>
                                <button className="px-8 py-3 bg-[#DBFF00] color-black rounded-[6px] xl:rounded-2xl max-w-[200px] text-black">Купить</button>
                            </Link>
                            <section className="swiper flex justify-between z-[10000] xl:ml-[200px] w-[100px] gap-6">
                                <button onClick={slidePrev} className="cursor-pointer hidden lg:block z-10000 w-fit" type='button'>
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28 30.3167L19.2973 21.5L28 12.6833L25.3514 10L14 21.5L25.3514 33L28 30.3167Z" fill="white"/>
                                        <circle cx="21.5" cy="21.5" r="20.5" transform="matrix(-1 0 0 1 43 0)" stroke="white" strokeWidth="2"/>
                                    </svg>
                                </button>
                                <button onClick={slideNext} className="cursor-pointer hidden lg:block z-[10000] w-fit">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 30.3167L23.7027 21.5L15 12.6833L17.6486 10L29 21.5L17.6486 33L15 30.3167Z" fill="white"/>
                                        <circle cx="21.5" cy="21.5" r="20.5" stroke="white" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </section>
                        </section>
                    </section>
                    <section className={`xl:w-[1660px] xl:h-[1020px] xl:left-[13%]  ${wind <= 1110 ? 'md:left-[100px]' : 'md:left-0'} z-1 lg:h-[950px] h-[860px] absolute xl:right-1/2 xl:relative lg:top-[120px] md:h-[1600px] top-1/2 right-[-100%] md:right-[-50%] lg:right-[-130px] rounded-full bg-white z-5 md:w-[1600px] w-[860px] sm:h-80`}>
                        {slides?.map((item, index) => (
                            <Image
                                key={index}
                                src={item.slide}
                                width={1500}
                                height={1500}
                                alt={`Slide ${index + 1}`}
                                className={`absolute inset-0 ${wind <= 390 ? 'left-[10%] top-[10px]' : ' left-0 top-[70px] '} xl:right-4 opacity-0 xl:w-[90%] w-1/2 lg:w-full xl:h-full object-fit lg:object-contain transition-opacity duration-1000 ease-in-out ${index === sliderIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </section>
                </section>
            </section>
        ))
    );
};
