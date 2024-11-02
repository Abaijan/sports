import {Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";

export const ProductList = async () => {
    const filteredItems = await dynamicFetch('/products')
    return (
        <section className=" mb-[50px] overflow-y-scroll flex gap-[30px] flex-wrap ">
            {
                filteredItems.map((item, index ) => (
                    <Card key={index} prop={item}/>
                ))
            }
        </section>
    )
}