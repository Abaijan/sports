'use client'
import banner from "@/app/assets/images/bannerHome.svg"
import Image from "next/image";
import Link from "next/link";
import dynamicFetch from "@/hooks/fetch";

import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";

export const BannerHome =  () => {
    const [response, setResponse] = useState();
    const [slides, setSlides] = useState()
    useEffect(() => {
        dynamicFetch('/main_page').then(data => setResponse(data));
        dynamicFetch('/slider').then(data => setSlides(data));
    }, []);
    const swiper = useSwiper();
    let title = response && response[0].title.split(' ');
    const styling = {
        backgroundImage: `url('${banner}')`,
        width:"100%",
        height:"100%",
        backgroundRepeat:"no-repeat"
    }
   return (
          response?.map(res => (
              <section  key={res.id} className="blue">
                  <section
                           className=" h-[110vh] xl:h-[900px] container  xl:flex-row justify-between flex flex-col items-center xl:relative ">
                      <section
                          className="blue max-h-[800px] xl:w-[30%]  pt-[150px]  obverflow-hidden  flex ">
                          <section
                              className="flex flex-col bg-transparent z-[100] gap-[30px] xl:gap-[50px]  py-[100px] px-5 xl:px-3  w-fit">
                              <h1
                                  className="xl:text-[88px] text-[56px] leading-[63px] font-extrabold xl:leading-[108px] montserrat">
                                  <span className="line-clamp-1"> {title[0]} </span> {title[1]} <span
                                  className=" red font-extrabold italic">{title[2]}</span></h1>

                              <p className="leading-25 font-thin xl:text-[24px]n z-[100] xl:max-w-[400px] text-[19px]">{res.subtitle}</p>
                              <Link className="w-fit" href='/catalog'>
                                  <button
                                      className="px-8 py-3 bg-[#DBFF00] color-black rounded-[6px] xl:rounded-2xl max-w-[200px] text-black">Купить
                                  </button>
                              </Link>
                              <section className="swiper flex justify-between z-[10000] xl:ml-[200px] w-[100px] gap-6">
                                  <button onClick={() => swiper.slidePrev()} className="cursor-pointer z-10000 w-fit"
                                          type='button'>
                                      <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M28 30.3167L19.2973 21.5L28 12.6833L25.3514 10L14 21.5L25.3514 33L28 30.3167Z"
                                              fill="white"/>
                                          <circle cx="21.5" cy="21.5" r="20.5" transform="matrix(-1 0 0 1 43 0)"
                                                  stroke="white" strokeWidth="2"/>
                                      </svg>
                                  </button>
                                  <button onClick={() => swiper.slideNext()} className="cursor-pointer z-[10000] w-fit">
                                      <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M15 30.3167L23.7027 21.5L15 12.6833L17.6486 10L29 21.5L17.6486 33L15 30.3167Z"
                                              fill="white"/>
                                          <circle cx="21.5" cy="21.5" r="20.5" stroke="white" strokeWidth="2"/>
                                      </svg>
                                  </button>
                              </section>
                          </section>
                      </section>
                      <section
                          style={styling}
                          className=" bg-repeat-no-repeat z-[1000] right-1  xl:top-[10%] top-[65%] xl:left-[10%] xl:right-[0] h-[66%] xl:h-full bg-center w-full xl:w-[70%]   ">
                          {/*<Image*/}
                          {/*    className=" w-full h-[1000px]  xl:w-full xl:h-fit   xl:top-0   right-0 top-0 xl:left-[200px] z-0   xl:object-center object-[left_bottom] object-cover  "*/}
                          {/*    src={banner}*/}
                          {/*    alt="background"*/}
                          {/*    width={400}*/}
                          {/*    height={400}*/}
                          {/*/>*/}
                          <section className="swiper  top-[50%] w-[100000] bg-white z-[10000000] ">
                              {/*<Swiper className="top-0   ml-[500px] z-[1000000x]">*/}
                              {/*    {*/}
                              {/*      slides &&  slides.map((slide) => (*/}
                              {/*            <SwiperSlide key={slide.id}>*/}
                              {/*                <Image src={slide.slide} alt="sport" width={800} height={800} className="absolute right-[5%] z-[100000]"/>*/}
                              {/*            </SwiperSlide>*/}
                              {/*        ) )*/}
                              {/*    }*/}

                              {/*</Swiper>*/}
                          </section>
                      </section>
                  </section>
              </section>

          ))
   )


};

