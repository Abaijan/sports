import Image from 'next/image'
import React from 'react'
import imagesTeam from '../../../assets/images/image51.png'
import imgTeamtwo from '../../../assets/images/image52.png'
import imgTeamfour from '../../../assets/images/image54.png'
import imgTeamfive from '../../../assets/images/image55.png'



export function Ourteam() {
  return (
    <section>
        <section className='container'>
            <section className='ourteam-content'>
                <section className='blocks p-5'>
                    <section class="overflow-x-auto flex space-x-4 p-4">
                            <section class="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                <Image src={imagesTeam} alt="Aki Sam" class="rounded-xl"/>
                                <p class="font-semibold">Aki Sam</p>
                                <p class="text-gray-500">CEO</p>
                            </section>
                            <section class="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                <Image src={imgTeamtwo} alt="Aki Sam" class="rounded-xl"/>
                                <p class="font-semibold">Aki Sam</p>
                                <p class="text-gray-500">CEO</p>
                            </section>
                            <section class="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                <Image src={imgTeamfive} alt="Aki Sam" class="rounded-xl"/>
                                <p class="font-semibold">Aki Sam</p>
                                <p class="text-gray-500">CEO</p>
                            </section>
                            <section class="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                <Image src={imgTeamfour} alt="Aki Sam" class="rounded-xl"/>
                                <p class="font-semibold">Aki Sam</p>
                                <p class="text-gray-500">CEO</p>
                            </section>
                            <section class="min-w-[300px] h-[300px] rounded-lg flex flex-col items-start justify-center p-5">
                                <Image src={imgTeamfive} alt="Aki Sam" class="rounded-xl"/>
                                <p class="font-semibold">Aki Sam</p>
                                <p class="text-gray-500">CEO</p>
                            </section>                            
                      </section>
                </section>
            </section>
        </section>
    </section>
  )
}
