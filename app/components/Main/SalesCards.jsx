
import dynamicFetch from "@/hooks/fetch";

export const SalesCards =  async () => {
    const blocks = await dynamicFetch('/sales_cards');
    return(
        <section className="container px-[15px] xl:px-0 py-[70px] flex flex-col xl:flex-row justify-center gap-[20px] xl:gap-[20px] ">
            {
                blocks && blocks.map(block => (
                    <section key={block.id} className="flex w-full xl:w-[648px] xl:h-[343px] flex-col items-center py-[15px] gap-[15px] xl:gap-[30px] xl:py-[40px] bg-[#1A3EA9E5] px-[30px] text-center rounded-[10px] ">
                        <h2 className="manrope text-[22px] xl:text-[24px] text-white font-bold">{block.title}</h2>
                        <p className="manrope text-[18px]  xl:text-[20px] text-white font-thin">{block.description}</p>
                        <button className="w-[288px] px-[33px] py-[10px] rounded-[10px] mt-[20px] bg-white text-black ">{block.button}</button>
                    </section>
                ))

            }


        </section>)
}

