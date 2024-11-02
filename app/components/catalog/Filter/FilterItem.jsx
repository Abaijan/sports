'use client';
import { useState } from "react";


export const FilterItem = ({filterParam}) => {

    const [showFilter, setShowFilter] = useState(true);
    console.log(filterParam)
    return (
        <section className="flex h-fit flex-col  gap-y-[10px] p-[21px]">
            <div className="flex justify-between items-center">
                <h2 className="montserrat font-medium  text-[18px]">{filterParam.name}</h2>
                {
                    filterParam.keys && filterParam.keys.length > 5 ? (
                        <div className="">
                            {
                                showFilter ? (
                                    <svg
                                        onClick={() => setShowFilter(!showFilter)}
                                        className={`cursor-pointer transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`}
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
                                ) : (
                                    <svg
                                        onClick={() => setShowFilter(!showFilter)}
                                        className={`cursor-pointer `}
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
                                )

                            }


                        </div>
                    ) : null
                }

            </div>
            {
                filterParam.keys.length > 5  ?  filterParam.keys.map((key, index) => (

                    <div
                        key={index}
                        className={ showFilter ? `h-auto opacity-100 transition-all duration-800 flex-col flex   gap-[12px]` : `transition-transform duration-800 h-0  opacity-0`}>

                        <label className="flex  items-center gap-2 text-lg font-medium text-gray-800">
                            <input type="checkbox" className="block w-5 h-full rounded-sm peer-checked:bg-[#112A76] "/>
                            <span className="">{key.name}</span>
                        </label>
                    </div>
                )) :
                    filterParam.keys.map((key, index) => (

                        <div
                            key={index}
                            className={ `flex-col flex transition-transform duration-300  gap-[12px]`}>

                            <label className="flex  items-center gap-2 text-lg font-medium text-gray-800">
                                <input type="checkbox" className="block w-5 h-5 rounded-sm peer-checked:bg-[#112A76] "/>
                                <span className="">{key.name}</span>
                            </label>
                        </div>
                    ))

            }

        </section>

    )
}