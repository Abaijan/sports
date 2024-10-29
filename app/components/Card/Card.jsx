import Image from "next/image";

export const Card = ({prop}) => {
    return  (
        <section className="cart h-[474px] w-[315px]">
            <section
                className="xl:h-[474px] xl:w-[315px] rounded-xl border-[1px] border-gray-300 flex justify-between pb-2 items-center flex-col leading-3 gap-2">
                <Image className="w-[315px]  rounded-xl  object-cover  h-[323px] scale" src={prop.image}
                       alt={prop.title} width={200} height={200}/>
                <section className="flex w-full flex-col px-2 gap-[10px] py-1 manrope text-left">
                    <p className="text-black manrope font-medium text-[16px]">{prop.title}</p>
                    {
                        prop.whole_price ? (
                                <section className="flex gap-2 flex-col">
                                    <span className="font-thin">Розничная цена: <span className="text-blue-500 ">{prop.price}</span>c</span>
                                    <span className="font-thin ">Оптовая цена: <span className="text-blue-500">{prop.whole_price}</span>c</span>
                                </section>
                            ) :
                            <span className="font-bold ">{prop.price}c</span>
                    }

                </section>
                <button
                    className="hover:bg-blue-700 transition duration-300 px-[33x] py-[10px] rounded-[6px] bg-[#1243C0] text-center text-[white] w-[280px] h-[47px] manrope">В
                    корзину
                </button>
            </section>
        </section>
    );
}