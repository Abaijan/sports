'use client';
import { useEffect, useState } from "react";
import { FilterItem } from "@/app/components";
import dynamicFetch from "@/hooks/fetch";
import {filterStore} from "@/app/store/filterStore";

export const Filter = ({ onChangeFilter }) => {
    const [filters, setFilters] = useState( []);
    const [selectedFilters, setSelectedFilters] = useState({});
    const setFilter = filterStore(set => set.setFilter);
    useEffect(() => {
        const fetchFilters = async () => {
            const categories = await dynamicFetch("/categories");
            const types = await dynamicFetch("/types");
            const sizes = await dynamicFetch("/sizes");
            const colors = await dynamicFetch("/colors");

            setFilters([
                { id: "categories", name_ru: "Категории" , name_en: "Categories", name_kg: "Категориялар", results: categories },
                { id: "types", name_ru : "Типы", name_en: "Types", name_kg: "Типтер", results: types },
                { id: "sizes", name_ru: "Размеры", name_en: "Sizes", name_kg: "Размерлер", results: sizes },
                { id: "colors", name_ru: "Цвета", name_en: "Colors", name_kg: "Тустор", results: colors },
            ]);
        };
        fetchFilters();
    }, []);

    // Передача выбранных фильтров вверх
    useEffect(() => {
        onChangeFilter(selectedFilters);
        setFilter(selectedFilters);
        console.log(selectedFilters)

    }, [selectedFilters]);

    return (
        <article className="rounded-2xl bg-white z-[10] flex flex-col w-[316px] h-fit">
            {filters.map((filter) => (
                <FilterItem
                    key={filter.id}
                    filterParam={filter}
                    setSelectedFilters={setSelectedFilters}
                />
            ))}
        </article>
    );
};
