'use client';
import dynamicFetch from "@/hooks/fetch";
import { useEffect, useState } from "react";
import {localeStore} from "@/app/store/localeStore";

export  function BannerWithDescription() {
    const locale = localeStore((set) => set.locale); // Задаем локаль (можно подключить контекст или передать как пропс)
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const data = await dynamicFetch('/banner-on-bottom-page');
                setBanner(data);
            } catch (error) {
                console.error("Failed to fetch banner:", error);
            }
        };

        fetchBanner();
    }, []);

    // Функция для получения локализованного текста
    const getLocalizedText = (item, field) => {
        if (locale === 'en') return item[`${field}_en`];
        if (locale === 'ru') return item[`${field}_ru`];
        if (locale === 'kgz') return item[`${field}_kg`];
        return item[`${field}_ru`];
    };

    if (!banner) return null;

    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center">
            {
                <div
                    key={banner.id}
                    className="relative h-96 flex bg-no-repeat bg-center bg-cover items-center justify-center xl:px-[300px] w-full"
                    style={{ backgroundImage: `url('${banner.image}')` }}
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative text-center text-white px-4 xl:px-0 z-10">
                        <h2 className="font-thin text-[18px] xl:text-[24px] manrope xl:font-medium mb-4">
                            {getLocalizedText(banner, 'description')}
                        </h2>
                        <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-[10px] hover:bg-blue-700 transition duration-300">
                            {locale === 'en' ? 'Contact Us' : locale === 'ru' ? 'Связаться с нами' : 'Биз менен байланышуу'}
                        </button>
                    </div>
                </div>
            }
        </section>
    );
}
