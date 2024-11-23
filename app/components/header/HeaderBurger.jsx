'use client'
import Link from "next/link";
import Image from "next/image";
import basketWhite from "@/app/assets/icons/basketIconWhite.svg";
import basketBlack from "@/app/assets/icons/basketIconsBlack.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {localeStore} from "@/app/store/localeStore";

export function HeaderBurger({selectLocale, setCloseBurger, isOpen }) {
    const path = usePathname();
    const [bgColor, setBgColor] = useState()
    const basketIcon = path === '/main' ? basketWhite : basketBlack;

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }

    }, [isOpen]);


    useEffect(() => {
        if (path === '/main' ) {
            setBgColor('blue')
        } else {
            setBgColor('white')
        }
    }, [path])


    function handleClose() {
        setIsAnimating(false);
        setTimeout(() => {
            setCloseBurger(false);
        }, 500);
    }
    const locale = localeStore((set) => set.locale);

    return (
        <section
            className={`${bgColor} container z-[10000] fixed overflow-y-scroll w-full h-full transition-transform duration-500 ease-out 
            ${isAnimating ? 'translate-x-0' : 'translate-x-full'} top-0 left-0 flex items-center justify-center`}
        >
            <section className="w-full p-5 z-[100] flex flex-col h-full">
                <nav className="flex justify-between items-center max-h-[80px] border-b border-gray-300">
                    <Link href="/"><p className="text-3xl font-bold">LOGO</p></Link>
                    <button onClick={handleClose} className="font-thin text-[100px] rotate-90" aria-label="Close menu">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </nav>
                <div className="flex gap-[20px] mx-auto mt-[30px] items-center ">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
                            stroke={`${path === '/main' ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M12 16C17.523 16 22 14.433 22 12.5C22 10.567 17.523 9 12 9C6.477 9 2 10.567 2 12.5C2 14.433 6.477 16 12 16Z"
                            stroke={`${path === '/main' ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M9 12C9 6.477 10.567 2 12.5 2C14.433 2 16 6.477 16 12C16 17.523 14.433 22 12.5 22C10.567 22 9 17.523 9 12Z"
                            stroke={`${path === '/main' ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <select className="bg-transparent text-[36px] cursor-pointer" value={locale}
                            onChange={(event) => selectLocale(event)} name="locale" id="language">
                        <option className="cursor-pointer text-[26px]" value="ru">рус</option>
                        <option className="cursor-pointer" value="en">eng</option>
                        <option className="cursor-pointer" value="kgz">кыр</option>
                    </select>
                </div>
                <ul className="flex flex-col mt-[20px] gap-3 text-[50px] font-bold">

                    <li><Link
                        href="/main">{locale === 'ru' ? 'Главная' : locale === 'kgz' ? 'Башкы бет' : 'Main'}</Link></li>
                    <li><Link
                        href="/about">{locale === 'ru' ? 'О нас' : locale === 'en' ? 'About' : 'Биз жонундо'}</Link>
                    </li>
                    <li><Link
                        href="/catalog">{locale === 'ru' ? 'Каталог' : locale === 'en' ? 'Catalog' : 'Каталог'}</Link>
                    </li>
                    <li><Link
                        href="/wholesale">{locale === 'ru' ? 'Оптовая покупка' : locale === 'en' ? 'Wholesale' : 'Дун сатып алуу'}</Link>
                    </li>
                    <li><Link
                        href="/contacts">{locale === 'ru' ? 'Контакты' : locale === 'en' ? 'Contacts' : 'Байланышуу'}</Link>
                    </li>
                    <li>
                        <Link className="flex gap-[20px]" href="/basket">
                            <Image src={basketIcon} height={32} width={32}
                                   alt="basket"/> {locale === 'ru' ? 'Корзина' : locale === 'en' ? 'Basket' : 'Себет'}
                        </Link>
                    </li>

                </ul>
            </section>
        </section>
    )
}
