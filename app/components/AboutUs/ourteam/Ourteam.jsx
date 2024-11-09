'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import imagesTeam from '../../../assets/images/image51.png'
import dynamicFetch from "@/hooks/fetch";




export function Ourteam() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        dynamicFetch('/ourTeam').then(data => setTeam(data));
    }, []);
  return (
    <section>
        <section className='container'>
            <section className='ourteam-content'>
                <section className=' p-5'>
                    <h2 className="impact py-5 font-bold text-[24px] xl:text-[36px] text-left">Наша команда</h2>
                    <section className="overflow-x-auto flex xl:space-x-4 xl:p-4">
                        {
                          team &&  team.map((team) => (
                                <section key={team.id} className="min-w-[300px] min-h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                    <Image width={300} height={300} src={team.image} alt="Aki Sam" className="rounded-xl"/>
                                    <p className="font-semibold">{team.name}</p>
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
