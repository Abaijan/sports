
'use client'
import banner from '../../../assets/images/bannerHome.svg'
import Image from "next/image";
import { useState, useEffect} from "react";
import dynamicFetch from "@/hooks/fetch";

const fetchKey = '/bannerItems';

export const BannerHome =  () => {
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        dynamicFetch(fetchKey).then(res => setInitialData(res));
    }, []);
    console.log(initialData)


    return (
        <section className="blue ">
            <section className="blue max-h-[800px] overflow-x-hidden obverflow-hidden pt-[100px] flex container">
                <section className="flex flex-col gap-[50px]  py-[100px] px-3 blue w-[35%]">
                    <h1 className="text-[88px] font-extrabold leading-[108px] monrope">Движение в <span
                        className=" red font-extrabold italic">стиле</span></h1>

                    <p className="leading-25 text-[19px]">Экипировка для побед: будь готов к любым вершинам</p>
                    <button className="px-8 py-3 bg-[#DBFF00] color-black rounded-2xl max-w-[200px] text-black">Купить</button>
                    <section className="swiper">
                        {/*swiper buttons*/}
                    </section>
                </section>

                <section className="bg-repeat-no-repeat overflow-hidden bg-center w-[65%] relative ">
                    <Image
                        className="w-[1000px] h-[800px] top-[40px] absolute   "
                        src={banner}
                        alt="background"
                        width={400}
                        height={400}
                    />
                    <section className="swiper ">
                        {
                            initialData && initialData.map(item => {
                                return (
                                    <Image
                                        key={item.id}
                                        className="w-[1000px] h-[800px] top-[40px] absolute   "
                                        src={item.image}
                                        alt="banner"
                                        width={400}
                                        height={400}
                                    />
                                )
                            })

                        }
                    </section>

                </section>
            </section>
        </section>

    );

};

