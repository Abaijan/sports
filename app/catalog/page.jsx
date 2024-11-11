'use client'
import { useEffect, useState } from "react";
import { Filter, ProductList } from '@/app/components';
import dynamicFetch from "@/hooks/fetch";
import {MOdalFilter} from "@/app/components/catalog/Filter/MOdalFilter";

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [showFilter, setShowFilter] = useState(false);
    const onSelectFilter = (newFilters) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dynamicFetch('/products');
            setProducts(data);
            setFilteredProducts(data);
        };
        fetchProducts();
    }, []);
    function toggleFilter() {
        setShowFilter(!showFilter);
    }

    useEffect(() => {
        if (window.innerWidth > 630) {
            setShowFilter(false);
        }
    }, []);

    if(!products) return (
        <section className="container px-auto">
            <h1>Loading..</h1>
        </section>
    )
    return (
        <section>
            <section className="container px-[10px] xl:px-0">
                <div className="flex flex-col gap-[20px]">
                    <div className="py-4 w-full flex justify-start">
                        <button
                            onClick={toggleFilter}
                            className="lg:hidden block montserrat font-medium  h-[40px] w-[158px] bg-[#1243C0]  rounded-2xl text-white  text-[18px]">Фильтрации
                        </button>
                        <h2 className="font-medium hidden lg:block text-[18px] ml-[40px]">Фильтрации</h2>
                    </div>
                    <div className="flex  gap-[30px]">
                        <div className="hidden  lg:block">
                            <Filter
                                filters={filters}
                                onSelectFilter={onSelectFilter}
                            />
                        </div>
                        {
                            showFilter ? (
                                <MOdalFilter handleShow={setShowFilter} showModal={showFilter} onSelectFilter={onSelectFilter}/>
                            ) : null
                        }
                        <ProductList filteredItems={products} appliedFilters={filters} />
                    </div>
                </div>
            </section>
        </section>
    );
}
