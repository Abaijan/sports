import { Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
export const New = async  () => {
   const carts = await dynamicFetch('/new')
    const cartsStyle = carts * 345;
    return(
        <section className="container px-[15px] xl:px-0 flex flex-col mt-[150px] xl:my-[80px] gap-[20px]">
            <section className="flex justify-between">
                <h2 className="text-[36px] impact ">Новинки</h2>
                <button className="rounded-xl border-[2px] border-gray-800 w-[98px] h-[49px] px-[33px] py-[10px] ">Все</button>
            </section>
            <section  className="xl:p-10 flex gap-[14px] overflow-x-scroll xl:gap-[20px] xl:space-x-6">
                {
                    carts.map(cart => (
                        <div className="w-fit" key={cart.id}>
                            <Card prop={cart && cart}/>
                        </div>
                    ))
                }
            </section>
        </section>
    )
};