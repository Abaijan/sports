'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamicFetch from "@/hooks/fetch";
import {localeStore} from "@/app/store/localeStore";

export const HomeAbout = () => {
  const [homeAbout, setHomeAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = localeStore(set => set.locale); // Текущая локаль, можно заменить на динамическое значение

  useEffect(() => {
    const fetchData =  () => {
      try {
        dynamicFetch('/about-us-on-main-page').then(data => setHomeAbout(data));
      } catch (error) {
        console.error("Error fetching home_about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getLocalizedText = (item, field) => {
    if (locale === "en") return item[`${field}_en`] || item[field];
    if (locale === "ru") return item[`${field}_ru`] || item[field];
    if (locale === "kgz") return item[`${field}_kg`] || item[field];
    return item[field]; // Фолбек
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!homeAbout || homeAbout.length === 0) {
    return <p>No data available</p>;
  }

  return (
      <section className="py-20">

            <div
                // Уникальный ключ для каждого элемента
                className="container mx-auto px-4 flex flex-col-reverse gap-[40px] xl:gap-0 xl:flex-row md:flex-row items-center"
            >
              <div className="w-full md:w-1/2">
                <Image
                    src={homeAbout.image}
                    alt="about" // Локализация для `alt`
                    height={500}
                    width={500}
                    className="h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h2 className="text-4xl font-semibold mb-5">
                  {locale === "en" ? "About Us" : locale === "ru" ? "О нас" : "Биз жөнүндө"}
                </h2>
                <p className="text-gray-700 mb-10 leading-[28px] xl:leading-[36px]">
                  {getLocalizedText(homeAbout, "description")}
                </p>
                <a
                    href="/about"
                    className="bg-blue-600 text-white font-medium py-3 px-8 rounded-[10px] hover:bg-blue-700 transition duration-300"
                >
                  {locale === "en" ? "Read More" : locale === "ru" ? "Подробнее" : "Толугураак"}
                </a>
              </div>
            </div>
      </section>
  );
};
