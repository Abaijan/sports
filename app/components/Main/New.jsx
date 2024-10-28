import { Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
export const New = async  () => {
   const carts = await dynamicFetch('/new')
    const cartsStyle = carts * 345;
    return(
        <section className="container flex flex-col my-[80px] gap-[20px]">
            <section className="flex justify-between">
                <h2 className="text-[36px] impact ">Новинки</h2>
                <button className="rounded-xl border-[2px] border-gray-800 w-[98px] h-[49px] px-[33px] py-[10px] ">Все</button>
            </section>
            <section style={{ minWidth: `${cartsStyle}px`}} className="p-10 flex  overflow-x-scroll gap-[20px] space-x-6">
                {
                    carts.map(cart => (
                        <div key={cart.id}>
                            <Card prop={cart && cart}/>
                        </div>
                    ))
                }
            </section>
        </section>
    )
};