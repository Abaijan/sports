

import banner from '../../assets/images/bannerHome.svg'
import Image from "next/image";
import Link from "next/link";


export const BannerHome = async () => {

    return (
        <section className="blue h-[110vh] O overflow-hidden  flex flex-col items-center xl:relative ">
            <section className="blue z-[1] max-h-[800px] pt-[150px] overflow-x-hidden obverflow-hidden container flex ">
                <section className="flex flex-col gap-[30px] xl:gap-[50px]  py-[100px] px-5 xl:px-3 blue  xl:w-[35%]">
                    <h1 className="xl:text-[88px] text-[56px] leading-[63px] font-extrabold xl:leading-[108px] montserrat"><span className="line-clamp-1"> Движение </span> в <span
                        className=" red font-extrabold italic">стиле</span></h1>

                    <p className="leading-25 font-thin xl:text-[24px]n z-[100]  text-[19px]">Экипировка для побед: будь готов к любым вершинам</p>
                    <Link className="w-fit" href='/catalog'>
                        <button
                            className="px-8 py-3 bg-[#DBFF00] color-black rounded-[6px] xl:rounded-2xl max-w-[200px] text-black">Купить
                        </button>
                    </Link>
                    <section className="swiper">
                    </section>
                </section>
            </section>
            <section className="bg-repeat-no-repeat z-[1000] overflow-hidden right-1 xl:top-[0%] top-[65%] xl:left-[30%] xl:right-[0%] h-[56%] xl:h-full bg-center w-full xl:w-[75%]  absolute ">
                <Image
                    className=" w-full h-[1000px]   xl:w-[1500px] z-10   right-0 top-0  xl:h-[1500px] xl:object-contain object-[left_bottom] object-cover absolute "
                    src={banner}
                    alt="background"
                    width={400}
                    height={400}
                />
                <section className="swiper absolute ">
                </section>
            </section>
        </section>

    );

};

