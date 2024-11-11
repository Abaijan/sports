'use client'
import Link from "next/link";
import Image from "next/image";
import basket from "@/app/assets/icons/basketIconWhite.svg";
import {usePathname} from "next/navigation";
import { useState} from "react";
import {HeaderBurger} from "@/app/components/header/HeaderBurger";

export const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)

    function handleClick() {
        setBurgerOpen(!burgerOpen)
    }
    const windowSize = window.innerWidth;


    const param = usePathname();
    return (
        <header className={`    ${ windowSize > 510  ? 'blue' :  windowSize < 510 && param !== '/main' ? 'white' : 'blue'} px-[10px] xl:px-0 w-full`} >
            <section className="container flex justify-between ">
                <nav className="h-[80px] flex gap-16 monrope items-center w-full text-[16px] justify-between lg:hidden">
                    <Link href="/"><p className="text-3xl  font-bold">LOGO</p></Link>
                    <svg className="block lg:hidden cursor-pointer" onClick={handleClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9997 13.333H9.33301" stroke={`${param  === '/main' ? 'white' : 'black'} `} strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M28 8H4" stroke={`${param  === '/main' ? 'white' : 'black'} `} strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M28 18.667H4" stroke={`${param  === '/main' ? 'white' : 'black'} `} strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M27.9997 24H9.33301" stroke={`${param  === '/main' ? 'white' : 'black'} `} strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>{burgerOpen ? (<HeaderBurger path={param} setCloseBurger={setBurgerOpen} isOpen={burgerOpen}/>) : null}
                </nav>
                <nav className="h-[80px] hidden lg:flex gap-16 monrope items-center text-[16px] ">
                    <Link href="/"><p className="text-3xl font-bold">LOGO</p></Link>
                    <Link href="/about">О компании</Link>
                    <Link href="/catalog">Каталог</Link>
                    <Link href="/wholesale">Оптовая покупка</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>
                <nav className="h-[80px] hidden  lg:flex gap-3 monrope items-center px-5 text-[16px] ">
                    <Link href="/basket" className="flex gap-5 items-center">
                        <Image
                            className="cursor-pointer w-[20px] h-[20px] object-cover"
                            src={basket}
                            alt="user"
                            width={40}
                            height={40}
                        />
                        Корзина</Link>
                </nav>
            </section>
        </header>
    );
}