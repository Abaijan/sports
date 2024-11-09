import {Card} from "@/app/components";



export const ProductList =  ({filteredItems}) => {

    return (
        <section className=" mb-[50px] overflow-y-scroll flex flex-wrap h-fit gap-[10px] xl:gap-[30px]  ">
            {
                filteredItems.map((item, index ) => (
                    <Card key={index} prop={item} />
                ))
            }
        </section>
    )
}