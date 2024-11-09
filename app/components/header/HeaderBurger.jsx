'use client'
import Link from "next/link";
import Image from "next/image";
import basketWhite from "@/app/assets/icons/basketIconWhite.svg";
import basketBlack from "@/app/assets/icons/basketIconsBlack.svg";

export function HeaderBurger({path ,setCloseBurger, isOpen}) {
    function handleClose() {
        setCloseBurger(!isOpen)
    }

    return (
       <section  className={`${path === '/main' ? 'blue' : 'white'} container z-[10000] fixed overflow-y-scroll w-full h-full  top-0 left-0 flex items-center justify-center`}>
           <section className="w-full p-5 z-[100]  flex flex-col h-full">
               <nav className="flex justify-between items-center max-h-[80px] border-b-1 border-gray-300">
                   <Link href="/"><p className="text-3xl  font-bold">LOGO</p></Link>
                   <button onClick={handleClose} className="font-thin text-[100px] rotate-90  ">
                       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                   </button>
               </nav>
               <ul className="flex flex-col mt-[50px] gap-3 text-[50px] font-bold">
                   <li><Link href="/main">Главная</Link></li>
                   <li><Link href="/about">О компании</Link></li>
                   <li><Link href="/catalog">Каталог</Link></li>
                   <li><Link href="/wholesale">Оптоавая покупка</Link></li>
                   <li><Link href="/contacts">Контакты</Link></li>
                   <li><Link  className="flex gap-[20px]" href="/basket"><Image src={path === '/main' ? basketWhite : basketBlack} height={32} width={32} alt="basket"/> Корзина</Link></li>
               </ul>
           </section>
       </section>
    )
}