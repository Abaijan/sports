import {Card} from "@/app/components";



export const ProductList =  ({filteredItems}) => {
    if (filteredItems.length === 0) {
        return (
            <div>Товары не найдены</div>
        )
    }
    return (
        <section className=" mb-[50px] overflow-y-scroll flex flex-wrap h-fit gap-[10px] xl:gap-[10px]  ">
            {
                filteredItems.map((item, index ) => (
                    <Card key={index} prop={item} />
                ))
            }
        </section>
    )
}