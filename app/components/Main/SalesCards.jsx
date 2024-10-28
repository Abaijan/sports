
import dynamicFetch from "@/hooks/fetch";

export const SalesCards =  async () => {
    const blocks = await dynamicFetch('/sales_card');
    return(
        <section className="container py-[70px] flex gap-[20px] justify-between">
            {
                blocks && blocks.map(block => (
                    <section key={block.id} className="flex w-[648px] h-[343px] flex-col items-center gap-[30px] py-[40px] bg-[#1A3EA9E5] px-[30px] text-center rounded-[10px] ">
                        <h2 className="manrope text-[24px] text-white font-bold">{block.title}</h2>
                        <p className="manrope text-[20px] text-white font-medium">{block.description}</p>
                        <button className="w-[288px] px-[33px] py-[10px] rounded-[10px] mt-[20px] bg-white text-black ">{block.button}</button>
                    </section>
                ))

            }


        </section>)
}

