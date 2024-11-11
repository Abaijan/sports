
import Image from "next/image";
import black from '@/app/assets/images/black.jpg'
import dynamicFetch from "@/hooks/fetch";

export const PopularCategory = async () => {
    const card = await dynamicFetch('/popularCategories')
    return(
        <section className="container px-[15px] xl:px-0 flex flex-col my-[80px] gap-[20px]">
            <section className="flex justify-between">
                <h2 className="xl:text-[36px] text-[24px] impact ">Популярные категории</h2>
                <button className="rounded-xl border-[2px] border-gray-800 w-[98px] text-[24px] h-[39px] xl:h-[49px] flex items-center justify-center ">Все
                </button>
            </section>
            <section  className="xl:p-10  flex  overflow-x-scroll xl:gap-[20px] space-x-6">
                {
                    card && card[1].products.map(item => (
                        <section key={item.id} className="xl:min-w-[315px] min-w-[210px]  z-1 relative montserrat flex text-left items-end h-[290px] xl:h-[396px] rounded-[10px] bg-cover bg-center">
                            <Image src={black} alt={item.description} width={100} height={100} className="absolute z-1 h-full w-full rounded-[10px] opacity-[0.2]"/>
                            <Image src={item.image} alt={item.description} width={300} height={300} className="w-full z-[-1]  rounded-[10px] absolute object-cover items-center  h-full"/>
                            <p className="montserrat text-[22px] z-[2] mb-3 ml-3 text-white">{item.description}</p>
                        </section>
                    ))

                }

            </section>
        </section>
    )
}
