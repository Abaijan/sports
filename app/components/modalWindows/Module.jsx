'use client';
import React, { useState } from 'react';
import { ModalSuccess } from "@/app/components/modalWindows/successful";
import { ModalWind } from "@/app/components/modalWindows/ModalWindow";
import {basketStore} from "@/app/store/basketSore";
import {localeStore} from "@/app/store/localeStore";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export const ModalWindow = () => {
  const [status, setStatus] = useState(false);
  // basketStore(state => state.resetBasket());
  const locale = localeStore((set) => set.locale);



  const handleSubmit = (event) => {
    const form = event.target;
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      country: formData.get('city'),
    };

    fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/send-to-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setStatus(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };


  return (
      <section className="z-10">
        <section className="max-w-[700px] manrope py-[30px] xl:py-[80px] px-[23px] xl:px-[100px] mx-auto bg-white border border-gray-200 rounded-[20px] shadow-md">
          <div>
            <h2 className="text-2xl font-medium text-center text-gray-800 mb-2">{locale === 'ru' ? 'Оставить заявку' : locale === 'kgz' ? 'Заказ берүү' : 'Placing an order'}</h2>
            <p className="text-sm text-gray-600 text-center font-thin mb-4">
              {locale === 'ru' ? ' Заполните форму, и наш менеджер свяжется с вами для подтверждения деталей заказа' : locale === 'kgz' ? 'Форманы толтуруңуз жана биздин менеджер заказдын чоо-жайын ырастоо үчүн сиз менен байланышат' : 'Fill out the form and our manager will contact you to confirm the order details.'}
            </p>

            <form  className="flex gap-[10px] flex-col" onSubmit={handleSubmit} >
              <div>
                <label htmlFor="fullName" className="block text-sm text-gray-500">ФИО</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder={`${locale === 'ru' ? 'Имя' : locale === 'kgz' ? 'Аты' : 'Name' }`}
                    required
                    className="mt-1 block w-full px-4 bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-500">{locale === 'ru' ? 'Телефон :' : locale === 'kgz' ? 'Телефон : ' : 'Phone : '}</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+996 (777) 77 77 77"
                    required
                    className="mt-1 block px-4 w-full py-[15px] bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-500">{locale === 'ru' ? 'Страна/Город' : locale === 'kgz' ? 'Мамлекет / Шаар' : 'Country / City'}</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder={`${locale === 'ru' || locale === 'kgz' ? 'Кыргызстан / Бишкек ' : 'Kyrgyzstan / Bishkek' }`}
                    required
                    className="mt-1 block w-full px-4 py-[15px] bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                  type="submit"
                  className="py-2 px-4 bg-[#1243C0] w-4/7 font-thin mx-auto text-white rounded-md shadow hover:bg-blue-700 focus:outline-none mt-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {locale === 'ru' ? 'Отправить заявку' : locale === 'kgz' ? 'Заявка берүү' : 'Send application'}
              </button>
            </form>
          </div>
        </section>

        {status && <ModalWind param="success" setShowModal={setStatus} />}
      </section>
  );
};
