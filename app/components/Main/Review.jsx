'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamicFetch from "@/hooks/fetch";
import {localeStore} from "@/app/store/localeStore";

export const Review = () => {
  const locale = localeStore((set) => set.locale); // Задаем локаль (можно подключить контекст или передать как пропс)
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await dynamicFetch('/reviews');
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setError("Не удалось загрузить отзывы.");
      }
    };

    fetchReviews();
  }, []);

  // Функция для получения локализованного текста
  const getLocalizedText = (item, field) => {
    if (locale === 'en') return item[`${field}_en`];
    if (locale === 'ru') return item[`${field}_ru`];
    if (locale === 'kgz') return item[`${field}_kg`];
    return item[`${field}_ru`];
  };

  if (error) {
    return (
        <section className="Review">
          <div className="container px-[15px] xl:px-0 xl:p-10">
            <p className="text-red-500">{error}</p>
          </div>
        </section>
    );
  }

  if (!reviews) {
    return (
        <section className="Review">
          <div className="container px-[15px] xl:px-0 xl:p-10">
            <p>Загрузка...</p>
          </div>
        </section>
    );
  }
console.log(reviews.results)
  return (
      <section className="Review">
        <div className="container px-[15px] xl:px-0 xl:p-10">
          <div className="ofTitls">
            <h2 className="text-[24px] py-[30px] px-[15px] xl:px-0 xl:py-[0] font-normal impact xl:text-5xl xl:font-semibold mb-3">
              {locale === 'en' ? 'Customer Reviews' : locale === 'ru' ? 'Отзывы клиентов' : 'Кардарлардын пикирлери'}
            </h2>
          </div>
          <div className="cards xl:p-10 flex flex-col gap-[20px] xl:gap-[30px] xl:flex-row xl:overflow-x-scroll">
            {reviews.results?.map((review) => (
                <div
                    key={review.id}
                    className="flex flex-col justify-between min-w-[300px] xl:min-w-[530px] bg-[#1A3EA9] p-4 xl:p-7 rounded-2xl"
                >
                  <p className="text-white font-thin xl:text-ms">
                    {getLocalizedText(review, 'text')}
                  </p>
                  <span className="flex gap-2 content-center mt-8">
                                <Image
                                    src={review.avatar}
                                    alt={`${review.name} Photo`}
                                    className="w-[50px] h-[50px] rounded-full"
                                    width={50}
                                    height={50}
                                />
                                <h2 className="text-white text-base mt-3 ml-5">{review.full_name}</h2>
                            </span>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};
