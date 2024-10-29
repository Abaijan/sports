import Image from 'next/image'
import React from 'react'
import imgVideotwo from '../../../assets/images/image.png'
import imgVideo from '../../../assets/images/image69.png'

export function Videomaterials() {
  return (
    <section  className=''>
        <section className='container'>
                <h2 className=' text-4xl impact  mt-10 p-5'>Видео материялы</h2>
            <section className='video-content flex justify-around p-5'>
                    <Image src={imgVideotwo} alt='video' className='w-1/2 h-full p-1 rounded-2xl '/>
                <section className="w-1/2 flex flex-col ">
                    <Image src={imgVideo} alt='video' className=' w-full p-1 rounded-xl'/>
                    <Image src={imgVideo} alt='video' className=' w-full h-1/3 p-1 rounded-xl'/>
                </section>
            </section>    
        </section>    
     </section>
  )
}
