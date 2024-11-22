'use client';
import Link from "next/link";
import Image from "next/image";
import basket from "@/app/assets/icons/basketIconWhite.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderBurger } from "@/app/components/header/HeaderBurger";
import dynamic from "next/dynamic";
import {localeStore} from "@/app/store/localeStore";
export const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const param = usePathname();
    const handleClick = () => {
        setBurgerOpen(!burgerOpen);
    };
    const locale = localeStore((state) => state.locale);
    const setLocale = localeStore((state) => state.setLocale);

    const selectLocale = (e) => {
        setLocale(e.target.value);
    }

    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize(window.innerWidth);
        }
    }, [typeof window ]);

    const headerBgColor = windowSize > 510 ? 'blue' : param !== '/main' ? 'white' : 'blue';

    return (
        <header className={`${headerBgColor} px-[10px] xl:px-0 w-full`}>
            <section className="container flex justify-between ">
                <nav className="h-[80px] flex gap-16 monrope items-center w-full text-[16px] justify-between lg:hidden">
                    <Link href="/"><p className="text-3xl font-bold">LOGO</p></Link>
                    <svg className="block lg:hidden cursor-pointer" onClick={handleClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9997 13.333H9.33301" stroke={param === '/main' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 8H4" stroke={param === '/main' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 18.667H4" stroke={param === '/main' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27.9997 24H9.33301" stroke={param === '/main' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {burgerOpen && <HeaderBurger selectLocale={selectLocale} setCloseBurger={setBurgerOpen} isOpen={burgerOpen} />}
                </nav>

                <nav className="h-[80px] hidden lg:flex gap-16 monrope items-center text-[16px]">
                    <Link href="/"><p className="text-3xl font-bold">LOGO</p></Link>
                    <Link href="/about">{locale === 'ru' ? 'О нас' : locale === 'en' ? 'About' : 'Биз жонундо'}</Link>
                    <Link href="/catalog">{locale === 'ru' ? 'Каталог' : locale === 'en' ? 'Catalog' : 'Каталог'}</Link>
                    <Link href="/wholesale">{locale === 'ru' ? 'Оптовая покупка' : locale === 'en' ? 'Wholesale' : 'Дун сатып алуу'}</Link>
                    <Link href="/contacts">{locale === 'ru' ? 'Контакты' : locale === 'en' ? 'Contacts' : 'Байланышуу'}</Link>
                </nav>

                <nav className="h-[80px] hidden lg:flex gap-3 monrope items-center px-5 text-[16px]">
                    <div className="flex gap-[10px] items-center mr-[30px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M12 16C17.523 16 22 14.433 22 12.5C22 10.567 17.523 9 12 9C6.477 9 2 10.567 2 12.5C2 14.433 6.477 16 12 16Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M9 12C9 6.477 10.567 2 12.5 2C14.433 2 16 6.477 16 12C16 17.523 14.433 22 12.5 22C10.567 22 9 17.523 9 12Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <select className="bg-transparent cursor-pointer" value={locale} onChange={(event) => selectLocale(event)} name="locale" id="language">
                            <option className="cursor-pointer" value="ru">рус</option>
                            <option className="cursor-pointer" value="en">eng</option>
                            <option className="cursor-pointer" value="kgz">кыр</option>
                        </select>
                    </div>

                    <Link href="/basket" className="flex gap-5 items-center">
                        <Image
                            className="cursor-pointer w-[20px] h-[20px] object-cover"
                            src={basket}
                            alt="basket"
                            width={40}
                            height={40}
                        />
                        {locale === 'ru' ? 'Корзина' : locale === 'en' ? 'Basket' : 'Себет'}
                    </Link>
                </nav>
            </section>
        </header>
    );
};
