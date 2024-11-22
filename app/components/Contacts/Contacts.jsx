// 'use client'
// import React, {useEffect, useState} from 'react'
// import dynamicFetch from "@/hooks/fetch";
// import Image from "next/image";
// import {getLocalizedText} from "@/hooks/locale";
// import {localeStore} from "@/app/store/localeStore";
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
//
// export  function Contacts() {
//     const [contacts, setContacts] = useState()
//     const locale = localeStore((set) => set.locale);
//     const contactData = {
//         title_ru: "Контактные данные:",
//         title_en: "Contact information:",
//         title_kg: "Контакттар:",
//         phone_number_ru: "Телефон:",
//         phone_number_en: "Phone:",
//         phone_number_kg: "Телефон:",
//         email_address_ru: "Электронная почта:",
//         email_address_kg: "Электронная почта:",
//         email_address_en: "Email:",
//         working_hours_ru: "График работы:",
//         working_hours_en: "Working hours:",
//         working_hours_kg: "Иштоо мооноту:",
//         address_ru: "Адрес:",
//         address_en: "Address:",
//         address_kg: "Адрес:",
//         office_address_ru: "Офисный адрес:",
//         office_address_en: "Office address:",
//         office_address_kg: "Офистин адреси:",
//
//     }
//     const handleSubmit =  (event) => {
//         const form = event.target;
//         event.preventDefault();
//         const formData = new FormData(form);
//         const data = {
//             'fullName': formData.get('fullName'),
//             'phone': formData.get('phone'),
//             'country/question': formData.get('city'),
//         };
//
//         fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/send-to-email`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Success:', data);
//                 setStatus(true);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };
//
//     useEffect(() => {
//          dynamicFetch('/contact').then(data => setContacts(data));
//     }, []);
//     if(!contacts) return <p>Loading...</p>
//     return (
//         <section className='contacts'>
//             <section className='container px-[20px]'>
//                 {
//                     <section className='flex-col-reverse  xl:flex-row flex xl:justify-between'>
//                         <section className=''>
//                             <section>
//                                 <h2 className=' text-3xl mt-16 p-2'>{getLocalizedText(contactData, 'title', locale)}</h2>
//                                 <ul className=' text-[16px] font-thin text-[#000000CC] p-2'>
//                                     <a href={`tel:${contacts.phone}`}
//                                        target='_blank'><span>{getLocalizedText(contactData, 'phone_number', locale)}{contacts.phone}</span>
//                                     </a>
//                                     <li> {getLocalizedText(contactData, 'working_hours', locale)}</li>
//                                 </ul>
//                             </section>
//                             <section>
//                                 <h2 className=' text-2xl mt-10 p-2'>{getLocalizedText(contactData, 'email_address', locale)}:</h2>
//                                 <a href={`mailto:${contacts.email}`} target='_blank'
//                                    className=' p-2'> {contacts.email}</a>
//                             </section>
//                             <section>
//                                 <h2 className=' text-2xl mt-10 p-2'>{getLocalizedText(contactData, 'office_address', locale)}</h2>
//                                 <span className=' p-2'>{contacts.address}</span>
//                             </section>

//                             <section className=' mt-10 mb-10'>
//                                 <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.2264781681642!2d74.58359837683118!3d42.825829571153506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9148e809157%3A0xb9fb8f9dfc9caab9!2z0L_RgNC-0YHQv9C10LrRgiDQp9GL0L3Qs9GL0Lcg0JDQudGC0LzQsNGC0L7QstCwLTgyLzU!5e0!3m2!1sru!2skg!4v1731502895390!5m2!1sru!2skg"
//                                     width="600" height="200" style={{border: 0, borderRadius: '10px'}}
//                                     className="xl:w-[632px] w-full h-[200px]`" allowFullScreen="" loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade"></iframe>
//                             </section>
//                         </section>
//                         <section
//                             className="max-w-[700px] manrope py-[30px] xl:py-[80px] px-[23px] xl:px-[100px] mx-auto bg-white  ">
//                             <div>
//                                 <h2 className="text-2xl font-medium text-center text-gray-800 mb-2">{locale === 'ru' ? 'Оставьте ваш вопрос или отзыв' : locale === 'kgz' ? 'Сурооңузду же пикириңизди калтырыңыз' : 'Leave your question or feedback'}</h2>
//                                 <p className="text-sm text-gray-600 text-center font-thin mb-4">
//                                     {locale === 'ru' ? ' Заполните форму, и наш менеджер свяжется с вами для подтверждения деталей заказа' : locale === 'kgz' ? 'Форманы толтуруңуз жана биздин менеджер заказдын чоо-жайын ырастоо үчүн сиз менен байланышат' : 'Fill out the form and our manager will contact you to confirm the order details.'}
//                                 </p>
//                                 {/*TODO:fix spaces*/}
//
//                                 <form className="flex gap-[40px] flex-col" onSubmit={(e) => handleSubmit(e)}>
//                                     <div>
//                                         <label htmlFor="fullName" className="block text-sm text-gray-500">ФИО</label>
//                                         <input
//                                             type="text"
//                                             id="fullName"
//                                             name="fullName"
//                                             placeholder={`${locale === 'ru' ? 'Имя' : locale === 'kgz' ? 'Аты' : 'Name'}`}
//                                             required
//                                             className="mt-1 block w-full px-4 bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         />
//                                     </div>
//
//                                     <div>
//                                         <label htmlFor="phone"
//                                                className="block text-sm font-medium text-gray-500">{locale === 'ru' ? 'Телефон :' : locale === 'kgz' ? 'Телефон : ' : 'Phone : '}</label>
//                                         <input
//                                             type="tel"
//                                             id="phone"
//                                             name="phone"
//                                             placeholder="+996 (777) 77 77 77"
//                                             required
//                                             className="mt-1 block px-4 w-full py-[15px] bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         />
//                                     </div>
//
//                                     <div>
//                                         <label htmlFor="city"
//                                                className="block text-sm font-medium text-gray-500">{locale === 'ru' ? 'Страна/Город' : locale === 'kgz' ? 'Мамлекет / Шаар' : 'Country / City'}</label>
//                                         <input
//                                             type="text"
//                                             id="city"
//                                             name="city"
//                                             placeholder={`${locale === 'ru' || locale === 'kgz' ? 'Кыргызстан / Бишкек ' : 'Kyrgyzstan / Bishkek'}`}
//                                             required
//                                             className="mt-1 block w-full px-4 py-[15px] bg-[#F3F3F3] font-thin p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         />
//                                     </div>
//
//                                     <button
//                                         type="submit"
//                                         className="py-2 px-4 bg-[#1243C0] w-4/7 font-thin mx-auto text-white rounded-md shadow hover:bg-blue-700 focus:outline-none mt-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                                     >
//                                         {locale === 'ru' ? 'Отправить сообщение' : locale === 'kgz' ? 'Билдирүү жөнөтүү' : 'Send message'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </section>
//                     </section>
//                 }
//
//             </section>
//         </section>
//     );
// }
