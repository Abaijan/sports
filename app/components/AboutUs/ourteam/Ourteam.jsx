import Image from 'next/image'
import React from 'react'
import imagesTeam from '../../../assets/images/image51.png'




export function Ourteam() {
  return (
    <section>
        <section className='container'>
            <section className='ourteam-content'>
                <section className='blocks p-5'>
                    <section className="overflow-x-auto flex space-x-4 p-4">
                        <section
                            className="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                            <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                            <p className="font-semibold">Aki Sam</p>
                            <p className="text-gray-500">CEO</p>
                        </section>
                        <section
                            className="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                            <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                            <p className="font-semibold">Aki Sam</p>
                            <p className="text-gray-500">CEO</p>
                        </section>
                        <section
                            className="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                            <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                            <p className="font-semibold">Aki Sam</p>
                            <p className="text-gray-500">CEO</p>
                        </section>
                        <section
                            className="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                            <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                            <p className="font-semibold">Aki Sam</p>
                            <p className="text-gray-500">CEO</p>
                        </section>
                        <section
                            className="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                            <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                            <p className="font-semibold">Aki Sam</p>
                            <p className="text-gray-500">CEO</p>
                        </section>
                        <section
                            className="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                            <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                            <p className="font-semibold">Aki Sam</p>
                            <p className="text-gray-500">CEO</p>
                        </section>


                    </section>
                </section>
            </section>
        </section>
    </section>
  )
}
