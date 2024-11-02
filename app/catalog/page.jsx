import react from "react";
import {Filter, ProductList} from '@/app/components';
export default function Catalog() {
    return (
        <section>
            <section className="container">
                <div className="flex flex-col gap-[20px]">
                    <h2 className="montserrat font-medium pb-[30px] pt-[60px]  text-[18px]">Фильтрации</h2>
                    <div className="flex gap-[30px]">
                        <Filter/>
                        <ProductList/>
                    </div>
                </div>
            </section>
        </section>
    );
}