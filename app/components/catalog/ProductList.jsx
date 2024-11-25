import {Card} from "@/app/components";



export const ProductList =  ({filteredItems}) => {
    if (filteredItems.length === 0) {
        return (
            <div>Товары не найдены</div>
        )
    }
    return (
        <section className="min-h-[100vh] xl:min-h-none">
            <section
                className="  px-[15px] xl:px-0  w-full  mb-[50px] overflow-y-scroll flex flex-wrap h-fit gap-[10px] xl:gap-[10px]  ">
                {
                    filteredItems.map((item, index) => (
                        <Card key={index} prop={item}/>
                    ))
                }
            </section>
        </section>

    )
}