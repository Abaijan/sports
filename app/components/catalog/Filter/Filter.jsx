import dynamicFetch from "@/hooks/fetch";
import { FilterItem } from "@/app/components";

export const Filter =  async () => {
    const filters = await dynamicFetch('/filterParams')
    return (
        <article className="rounded-2xl  mb-[100px] border-[1px]">
            <section className="xl:w-[316px] flex flex-col   ">
                {
                    filters && filters.map(filter => (
                        <FilterItem key={filter.id} filterParam={filter}/>
                    ))
                }
            </section>
        </article>
    )
}