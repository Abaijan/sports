'use client'
import React, {useEffect, useState} from 'react'
import dynamicFetch, {dynamicFetch2} from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export  default function Contacts() {
    const [contacts, setContacts] = useState()
    const locale = localeStore((set) => set.locale);
    const contactData = {
        title_ru: "Контактные данные:",
        title_en: "Contact information:",
        title_kg: "Контакттар:",
        phone_number_ru: "Телефон:",
        phone_number_en: "Phone:",
        phone_number_kg: "Телефон:",
        email_address_ru: "Электронная почта:",
        email_address_kg: "Электронная почта:",
        email_address_en: "Email:",
        working_hours_ru: "График работы:",
        working_hours_en: "Working hours:",
        working_hours_kg: "Иштоо мооноту:",
        address_ru: "Адрес:",
        address_en: "Address:",
        address_kg: "Адрес:",
        office_address_ru: "Офисный адрес:",
        office_address_en: "Office address:",
        office_address_kg: "Офистин адреси:",

    }
    const handleSubmit =  (event) => {
        const form = event.target;
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            'fullName': formData.get('fullName'),
            'phone': formData.get('phone'),
            'country/question': formData.get('city'),
        };


        dynamicFetch2('/send-to-email', data)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setStatus(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        dynamicFetch('/contact').then(data => setContacts(data));
    }, []);
    if(!contacts) return <p>Loading...</p>
    return (
        <section className='contacts'>
            <section className='container px-[20px]'>
                {
                    <section className='flex-col-reverse  xl:flex-row flex xl:justify-between'>
                        <section className=''>
                            <section>
                                <h2 className=' text-3xl mt-16 p-2'>{getLocalizedText(contactData, 'title', locale)}</h2>
                                <ul className=' text-[16px] font-thin text-[#000000CC] p-2'>
                                    <a href={`tel:${contacts.phone}`}
                                       target='_blank'><span>{getLocalizedText(contactData, 'phone_number', locale)}{contacts.phone}</span>
                                    </a>
                                    <li> {getLocalizedText(contactData, 'working_hours', locale)}</li>
                                </ul>
                            </section>
                            <section>
                                <h2 className=' text-2xl mt-10 p-2'>{getLocalizedText(contactData, 'email_address', locale)}:</h2>
                                <a href={`mailto:${contacts.email}`} target='_blank'
                                   className=' p-2'> {contacts.email}</a>
                            </section>
                            <section>
                                <h2 className=' text-2xl mt-10 p-2'>{getLocalizedText(contactData, 'office_address', locale)}</h2>
                                <span className=' p-2'>{contacts.address}</span>
                            </section>
                            <section className=' flex justify-around w-28 mt-5'>
                                <a href={`tel:${contacts.phone}`} target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.58811 18.4401 8.49169 17.5041 7.47 16.49C6.45877 15.472 5.5261 14.3789 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                                            stroke="#112A76" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    </svg>
                                </a>
                                <a href={contacts.facebook}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                                            stroke="#112A76" strokeWidth="1.5" strokeMiterlimit="10"
                                            strokeLinecap="round"/>
                                        <path
                                            d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                                            stroke="#112A76" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a href={contacts.instagram}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                            stroke="#112A76" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M12 15.5C12.4596 15.5 12.9148 15.4095 13.3394 15.2336C13.764 15.0577 14.1499 14.7999 14.4749 14.4749C14.7999 14.1499 15.0577 13.764 15.2336 13.3394C15.4095 12.9148 15.5 12.4596 15.5 12C15.5 11.5404 15.4095 11.0852 15.2336 10.6606C15.0577 10.236 14.7999 9.85013 14.4749 9.52513C14.1499 9.20012 13.764 8.94231 13.3394 8.76642C12.9148 8.59053 12.4596 8.5 12 8.5C11.0717 8.5 10.1815 8.86875 9.52513 9.52513C8.86875 10.1815 8.5 11.0717 8.5 12C8.5 12.9283 8.86875 13.8185 9.52513 14.4749C10.1815 15.1313 11.0717 15.5 12 15.5Z"
                                            stroke="#112A76" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M17.6362 7H17.6482" stroke="#112A76" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </a>


                            </section>
                            <section className=' mt-10 mb-10'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.2264781681642!2d74.58359837683118!3d42.825829571153506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9148e809157%3A0xb9fb8f9dfc9caab9!2z0L_RgNC-0YHQv9C10LrRgiDQp9GL0L3Qs9GL0Lcg0JDQudGC0LzQsNGC0L7QstCwLTgyLzU!5e0!3m2!1sru!2skg!4v1731502895390!5m2!1sru!2skg"
                                    width="600" height="200" style={{border: 0, borderRadius: '10px'}}
                                    className="xl:w-[632px] w-full h-[200px]`" allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </section>
                        </section>
                        <section
                            className="max-w-[700px] manrope py-[30px] xl:py-[80px] px-[23px] xl:px-[100px] mx-auto bg-white  ">
                            <div>
                                <h2 className="text-2xl font-medium text-center text-gray-800 mb-2">{locale === 'ru' ? 'Оставьте ваш вопрос или отзыв' : locale === 'kgz' ? 'Сурооңузду же пикириңизди калтырыңыз' : 'Leave your question or feedback'}</h2>
                                <p className="text-sm text-gray-600 text-center font-thin mb-4">
                                    {locale === 'ru' ? ' Заполните форму, и наш менеджер свяжется с вами для подтверждения деталей заказа' : locale === 'kgz' ? 'Форманы толтуруңуз жана биздин менеджер заказдын чоо-жайын ырастоо үчүн сиз менен байланышат' : 'Fill out the form and our manager will contact you to confirm the order details.'}
                                </p>
                                {/*TODO:fix spaces*/}

                                <form className="flex gap-[40px] flex-col" onSubmit={(e) => handleSubmit(e)}>
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm text-gray-500">ФИО</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder={`${locale === 'ru' ? 'Имя' : locale === 'kgz' ? 'Аты' : 'Name'}`}
                                            required
                                            className="mt-1 block w-full px-4 bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone"
                                               className="block text-sm font-medium text-gray-500">{locale === 'ru' ? 'Телефон :' : locale === 'kgz' ? 'Телефон : ' : 'Phone : '}</label>
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
                                        <label htmlFor="city"
                                               className="block text-sm font-medium text-gray-500">{locale === 'ru' ? 'Страна/Город' : locale === 'kgz' ? 'Мамлекет / Шаар' : 'Country / City'}</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder={`${locale === 'ru' || locale === 'kgz' ? 'Кыргызстан / Бишкек ' : 'Kyrgyzstan / Bishkek'}`}
                                            required
                                            className="mt-1 block w-full px-4 py-[15px] bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="py-2 px-4 bg-[#1243C0] w-4/7 font-thin mx-auto text-white rounded-md shadow hover:bg-blue-700 focus:outline-none mt-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        {locale === 'ru' ? 'Отправить сообщение' : locale === 'kgz' ? 'Билдирүү жөнөтүү' : 'Send message'}
                                    </button>
                                </form>
                            </div>
                        </section>
                    </section>
                }

            </section>
        </section>
    );
}
