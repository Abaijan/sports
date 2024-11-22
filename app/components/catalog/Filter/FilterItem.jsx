'use client'
import { useState } from "react";
import { getLocalizedText } from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export const FilterItem = ({ filterParam, setSelectedFilters }) => {
    const [showFilter, setShowFilter] = useState(true);
    const locale = localeStore((set) => set.locale);

    const handleClick = (keyId) => {
        setSelectedFilters((prev) => {
            const currentFilter = prev[filterParam.id] || [];
            const updatedFilter = currentFilter.includes(keyId)
                ? currentFilter.filter((id) => id !== keyId) // Удаляем, если выбран
                : [...currentFilter, keyId]; // Добавляем, если не выбран

            return {
                ...prev,
                [filterParam.id]: updatedFilter,
            };
        });
    };

    return (
        <section className="flex h-fit flex-col gap-y-[10px] p-[21px]">
            <div className="flex justify-between items-center">
                <h2 className="montserrat font-medium text-[18px]">
                    {getLocalizedText(filterParam, "name", locale) || filterParam.name}
                </h2>
                {filterParam.results.results && filterParam.results.results.length > 5 && (
                    <div>
                        <svg
                            onClick={() => setShowFilter(!showFilter)}
                            className={`cursor-pointer transition-transform duration-300 ${
                                showFilter ? "rotate-180" : ""
                            }`}
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.2602 8.20422L12.2836 14.1809C11.5777 14.8867 10.4227 14.8867 9.7169 14.1809L3.74023 8.20422"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}
            </div>
            {(filterParam.results.length > 5
                    ? filterParam.results
                    : filterParam.results.results
            ).map((key, index) => (
                <div
                    key={index}
                    className={`${
                        showFilter
                            ? "h-auto opacity-100 transition-all duration-800 flex-col flex gap-[12px]"
                            : "transition-transform duration-800 h-0 opacity-0"
                    }`}
                >
                    <label className="flex items-center gap-2 text-lg font-medium text-gray-800">
                        <input
                            name={getLocalizedText(key, "title", locale)}
                            type="checkbox"
                            onClick={() => handleClick(key.id)}
                            className="cursor-pointer block w-5 h-5 rounded-sm peer-checked:bg-[#112A76]"
                        />
                        <span>{getLocalizedText(key, "title", locale) || key.title}</span>
                    </label>
                </div>
            ))}
        </section>
    );
};
