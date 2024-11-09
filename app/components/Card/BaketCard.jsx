import Image from "next/image";
import Link from "next/link";
import trash from "@/app/assets/icons/trash.svg";

export default function BasketCard({item, index, removeFromBasket, updateItemCount}) {
    return (
        <section className="flex w-full h-[160px] mb-[30px] xl:h-[202px]" key={index}>
            <section>
                <Image alt="product" src={item.image}
                       width={202} height={202}
                       className="rounded-xl h-[160px] object-cover w-[132px] xl:min-w-[202px] min-h-[202px]"/>
            </section>
            <section className="flex flex-col w-full pl-[20px] gap-[15px]">
                <section className="flex w-full justify-between gap-2">
                    <Link href='/catalog/[id]' as={`/catalog/${item.id}`}>
                        <h2 className='produckt-name text-[20px] font-medium'>{item.title}</h2>
                    </Link>
                    <button
                        onClick={() => removeFromBasket(item.id, item.color, item.size, item.category)}
                        className='text-3xl w-[38px] bg-[#ECECEC] p-[10px] h-[38px] rounded-[6px]'>
                        <Image src={trash} alt='trash basket'/>
                    </button>
                </section>
                <section className="flex flex-col gap-2 text-start opacity-70">
                    <div
                        key={index} className={`rounded-full cursor-pointer w-[30px] h-[30px]`}
                        style={{backgroundColor: item.color}}></div>

                    <h4 className='font-thin text-[16px] '>{item.size}</h4>
                </section>
                <section className="flex justify-between">
                    <section className="flex gap-4 items-center">
                        <button
                            onClick={() => updateItemCount(item.id, item.category, item.size, item.color, item.count - 1)}
                            className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px]">-
                        </button>
                        <span>{item.count === 0 ? removeFromBasket(item.id, item.color, item.size, item.category) : item.count}</span>
                        <button
                            onClick={() => updateItemCount(item.id, item.category, item.size, item.color, item.count + 1)}
                            className="bg-[#ECECEC] w-[32px] h-[32px] rounded-[6px]">+
                        </button>
                    </section>
                    <p className="text-[22px] text-[#1243C0] manrope font-bold leading-[30px]">{item.price} сом</p>
                </section>
            </section>
        </section>

    );
}