'use client'
import dynamicFetch from "@/hooks/fetch";
import {getLocalizedText} from "@/hooks/locale";
import {useEffect, useState} from "react";
import {localeStore} from "@/app/store/localeStore";

export const  Explanation =  () => {
    const [explain, setExplain] = useState();
    useEffect(() => {
        const fetchExplain = async () => {
            const data = await dynamicFetch('/why-us');
            setExplain(data);
        };
        fetchExplain();
    }, []);
    const locale = localeStore((set) => set.locale);
    if(!explain) return null;

  return (
      <section className='container xl:py-[50px] py-[100px] px-[10px] xl:px-0'>
        <section className=' flex-col xl:flex-row gap-6 flex justify-around'>
            {
                explain?.results.map((explain) => (
                    <section key={explain.id} className='w-full xl:w-1/4 text-center flex flex-col gap-[10px] xl:px-[50px] font-thin py-[30px] bg-red-600 rounded-xl p-7 xl:m-5'>
                        <h3 className=' text-xl text-white '>{getLocalizedText(explain, 'title', locale)}</h3>
                        <p className=' text-sm text-white'>{getLocalizedText(explain, 'description', locale)}</p>
                    </section>
                ))
            }
        </section>
      </section>
  )
}
