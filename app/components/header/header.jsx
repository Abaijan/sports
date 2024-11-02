import Link from "next/link";
import Image from "next/image";
import basket from "@/assets/icons/basketIcons.svg";

export const Header = () => {
    return (
        <header className="blue w-full" >
            <section className="container flex justify-between ">
                <nav className="h-[80px]  flex gap-16 monrope items-center text-[16px] ">
                    <Link href="/"><p className="text-3xl font-bold">LOGO</p></Link>
                    <Link href="/about">О компании</Link>
                    <Link href="/catalog">Каталог</Link>
                    <Link href="/wholesale">Оптовая покупка</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>
                <nav className="h-[80px] flex gap-3 monrope items-center px-5 text-[16px] ">
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