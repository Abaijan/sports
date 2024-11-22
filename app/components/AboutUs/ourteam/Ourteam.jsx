'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import imagesTeam from '../../../assets/images/image51.png'
import dynamicFetch from "@/hooks/fetch";
import {localeStore} from "@/app/store/localeStore";




export function OurTeam() {
    const [team, setTeam] = useState([]);
    const locale = localeStore((set) => set.locale);
    useEffect(() => {
        dynamicFetch('/our-team').then(data => setTeam(data));
    }, []);
    console.log(team)
    if(team.length === 0) {
        return <p>Loading...</p>
    }
  return (
    <section>
        <section className='container'>
            <section className='ourteam-content'>
                <section className=' p-5'>
                    <h2 className="impact py-5 font-bold text-[24px] xl:text-[36px] text-left">{locale === 'ru' ? 'Наша команда' : locale === 'kgz' ? 'Биздин команда' : 'Our team'}</h2>
                    <section className="overflow-x-auto flex xl:space-x-4 xl:p-4">
                        {
                        team?.results.map((team) => (
                                <section key={team.id} className="min-w-[300px] min-h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                    <Image width={300} height={300} src={team.avatar} alt="Aki Sam" className="rounded-xl"/>
                                    <p className="font-semibold">{team.full_name}</p>
                                    <p className="text-gray-500">{team.position}</p>
                                </section>
                            ))
                        }


                    </section>
                </section>
            </section>
        </section>
    </section>
  )
}
