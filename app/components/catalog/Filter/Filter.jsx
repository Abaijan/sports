'use client';
import { useEffect, useState } from "react";
import dynamicFetch from "@/hooks/fetch";
import { FilterItem } from "@/app/components";

export const Filter = ({ onChangeFilter }) => {
    const [filters, setFilters] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});

    useEffect(() => {
        const fetchFilters = async () => {
            const data = await dynamicFetch('/filterParams');
            setFilters(data);
        };
        fetchFilters();
    }, []);

    // // Handle filter change
    // const handleFilterChange = (category, value) => {
    //     setSelectedFilters((prevFilters) => {
    //         const updatedFilters = { ...prevFilters };
    //
    //         // Add or remove selected filter
    //         if (updatedFilters[category]?.includes(value)) {
    //             updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
    //             if (updatedFilters[category].length === 0) delete updatedFilters[category];
    //         } else {
    //             updatedFilters[category] = [...(updatedFilters[category] || []), value];
    //         }
    //
    //         return updatedFilters;
    //     });
    // };

    // Update the URL when selectedFilters changes
    // useEffect(() => {
    //     const params = new URLSearchParams();
    //     Object.keys(selectedFilters).forEach((key) => {
    //         if (selectedFilters[key].length > 0) {
    //             params.set(key, selectedFilters[key].join(' C2 ')); // Group all filters under the category name
    //         }
    //     });
    //
    //     if (Array.from(params).length > 0) {
    //         router.replace(`${pathname}?${params.toString()}`, { shallow: true });
    //     } else {
    //         router.replace(`${pathname}`, { shallow: true });
    //     }
    // }, [selectedFilters, router, pathname]);
    //
    // // Notify parent component about selected filters
    // useEffect(() => {
    //     onChangeFilter(selectedFilters);
    // }, [selectedFilters, onChangeFilter]);

    return (
        <article  className="rounded-2xl  bg-white z-[10] top-0 left-0 xl:static xl:flex flex-col w-[316px] h-fit mb-[100px] xl:border-[1px]">
            <section className="xl:w-[316px] flex flex-col">
                {filters.map((filter) => (
                    <FilterItem
                        key={filter.id}
                        filterParam={filter}
                        selectedFilters={selectedFilters}
                        // onFilterChange={handleFilterChange}
                    />
                ))}
            </section>
        </article>
    );
};
