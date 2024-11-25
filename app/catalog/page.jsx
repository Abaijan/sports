'use client';
import { useEffect, useState } from "react";
import { Filter, ProductList } from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
import { MOdalFilter } from "@/app/components/catalog/Filter/MOdalFilter";
import {localeStore} from "@/app/store/localeStore";
import {useRouter} from "next/navigation";

export default function Catalog() {
    const [products, setProducts] = useState([]); // Все продукты
    const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные продукты
    const [filters, setFilters] = useState({}); // Выбранные фильтры
    const [showFilter, setShowFilter] = useState(false); // Состояние мобильного фильтра
    const locale = localeStore(set => set.locale);
    const router = useRouter();
    // Запрос данных о продуктах
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dynamicFetch("/products");
            setProducts(data.results);
            setFilteredProducts(data.results);
        };
        fetchProducts();
    }, []);

    // Применение фильтров
    useEffect(() => {
        const  applyFilters = async () => {
            await dynamicFetch(`/products?${Object.entries(filters).map(([key, value]) => `${key}=${value}`).join("&")}`).then(data => setFilteredProducts(data.results.filter((item, index, self) =>
                index === self.findIndex((t) => t.id === item.id)
            )));
            router.push(`/catalog?${Object.entries(filters).map(([key, value]) => `${key}=${value}`).join("&")}`)
        };
        applyFilters();

    }, [filters]);

    // Обновление размера окна



    const toggleFilter = () => setShowFilter(!showFilter);

    return (
        <section>
            <section className="container px-[10px] xl:px-0">
                <div className="flex flex-col gap-[20px]">
                    <div className="py-4 w-full flex justify-start">
                        <button
                            onClick={toggleFilter}
                            className="lg:hidden block montserrat font-medium h-[40px] w-[158px] bg-[#1243C0] rounded-2xl text-white text-[18px]"
                        >
                            {locale === 'en' ? 'Filters' : locale === 'ru' ? 'Фильтры' : 'Фильтрлер'}
                        </button>
                        <h2 className="font-medium hidden lg:block text-[18px] ml-[40px]">
                            {locale === 'en' ? 'Filters' : locale === 'ru' ? 'Фильтры' : 'Фильтрлер'}
                        </h2>
                    </div>
                    <div className="flex gap-[30px]">
                        {/* Боковой фильтр для десктопа */}
                        <div className="hidden lg:block">
                            <Filter onChangeFilter={setFilters} />
                        </div>

                        {/* Мобильный фильтр */}
                        {showFilter && (
                            <MOdalFilter
                                handleShow={setShowFilter}
                                showModal={showFilter}
                                onChangeFilter={setFilters}
                                className="sm:block lg:hidden"
                            />
                        )}

                        {/* Список продуктов */}
                        <ProductList filteredItems={ filteredProducts || []} />
                    </div>
                </div>
            </section>
        </section>
    );
}
