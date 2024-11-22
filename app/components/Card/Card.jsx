'use client';
import Image from "next/image";
import Link from "next/link";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export const Card = ({prop}) => {
    const locale = localeStore((set) => set.locale);
    return  (
        <section className="cart xl:h-[474px] w-[200px] xl:w-[315px]">
            <section
                className="xl:h-[474px] xl:w-[315px] w-[200px] rounded-xl border-[1px] border-gray-300 flex justify-between pb-2 items-center flex-col leading-3 gap-2">
                <Image className="w-[200px] h-[180px] xl:w-[315px]  rounded-xl  object-cover  xl:h-[323px] scale" src={prop.image || prop.main_image }
                       alt={prop.title} width={200} height={200}/>
                <section className="flex w-full flex-col px-2 gap-[15px] py-1 manrope text-left">
                    <p className="text-black text-xl line-clamp-1 xl:font-bold break-words whitespace-normal overflow-hidden max-w-full manrope font-medium xl:text-[24px] text-[16px]">{getLocalizedText(prop, 'title', locale)}</p>

                            <span className="font-bold text-[16px] xl:text-[23px] ">{prop.price}c</span>

                </section>
                <Link href={`/catalog/${prop.id}`}>
                    <button
                        className="hover:bg-blue-700 transition duration-300 px-[33x] py-[10px] rounded-[6px] bg-[#1243C0] text-center text-[white] w-[189px] xl:w-[280px] h-[34px] xl:h-[47px] manrope">
                        {locale === 'ru' ? 'В корзину' : locale === 'kgz' ? 'Себетке кошуу' : 'Save to cart'}
                    </button>
                </Link>

            </section>
        </section>
    );
}