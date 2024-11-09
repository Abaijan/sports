import React from 'react'
import dynamicFetch from "@/hooks/fetch";
import Image from "next/image";

export async function Contacts() {
    const contacts = await dynamicFetch('/contactPage')
  return (
    <section className='contacts'>
      <section className='container px-[20px]'>
          {
              contacts && contacts.map((contact) => (
                  <section key={contact.id} className='flex-col-reverse  xl:flex-row flex xl:justify-between'>
                      <section className=''>
                          <section>
                              <h2 className=' text-3xl mt-16 p-2'>{contact.contacts_data}</h2>
                              <ul className=' text-[16px] font-thin text-[#000000CC] p-2'>
                                  <a href={`tel:${contact.phone_number}`} target='_blank'><span>{contact.phone_number}</span> </a>
                                  <li> {contact.working_hours}</li>
                              </ul>
                          </section>
                          <section>
                              <h2 className=' text-2xl mt-10 p-2'>Email:</h2>
                              <a href={`mailto:${contact.email_address}`} target='_blank' className=' p-2'> {contact.email_address}</a>
                          </section>
                          <section>
                              <h2 className=' text-2xl mt-10 p-2'>{contact.office_address}</h2>
                              <span className=' p-2'>{contact.address}</span>
                          </section>
                          <section className=' flex justify-around w-28 mt-5'>

                              {
                                  contact.contacts.map((contact) => (
                                      <section key={contact.id} >
                                          <a href={contact.name === "call" ? {tel: contact.link} : contact.name === "email" ? {mailto: contact.link}: contact.link }><Image src={contact.image} alt={contact.name} width={30} height={30}/></a>
                                      </section>
                                  ))
                              }

                          </section>
                          <section className=' mt-10 mb-10'>
                              {/*<Map address="1600 Amphitheatre Parkway, Mountain View, CA"/>*/}
                          </section>
                      </section>
                      <section className='requests  xl:mt-16 xl:mb-[40px] py-7 xl:mr-10  xl:w-[532px]'>
                          <h1 className=' text-lg xl:text-3xl'>{contact.title}</h1>
                          <p className='text-[16px] leading-[20px] font-thin text-[#000000CC] mt-2 '>{contact.description}</p>
                          <section className=' mt-5'>
                              <label className="block text-gray-600 text-sm mb-2">ФИО</label>
                              <input type="text" placeholder={`${contact.name}`}
                                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>

                              <label className="block text-gray-600 text-sm mt-5 mb-2">{contact.phone}</label>
                              <input type="number" placeholder="+996 (777) 777 777"
                                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"/>

                              <label className="block text-gray-600 text-sm mb-2 mt-5">{contact.message}</label>
                              <textarea placeholder="Комментарий" rows="4"
                                        className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-400"></textarea>
                              <button
                                  className=' bg-blue-600 text-white py-2 px-14 rounded-xl text-sm xl:text-lg hover:bg-blue-700 mt-5'>{contact.button}
                              </button>
                          </section>
                      </section>
                  </section>
              ))
          }

      </section>
    </section>
  )
}
