'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import imgVideotwo from '../../../assets/images/image.png'
import imgVideo from '../../../assets/images/image69.png'
import dynamicFetch from "@/hooks/fetch";
import {ModalVideos} from "@/app/components/modalWindows/ModalVideos";

const fetchKey = '/videos';

export function Videomaterials() {
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(false);
    useEffect(() => {
        dynamicFetch(fetchKey).then(data => setVideos(data));
    }, []);

    const videoOpen = (video) => {
        return (
            <ModalVideos param={video} setShowModal={setVideo}/>
        )
    }

  return (
    <section  className=''>
        {
            videos.map((video, index) => (
                <section key={index} className='container'>
                    <h2 className=' text-4xl impact  mt-10 p-5'>{video.title}</h2>
                    <section className='video-content grid grid-cols-1 xl:grid-cols-2 p-5'>

                        {
                            video.video_materials?.map((video) => (
                                <div onClick={() => setVideo(true)} key={video.id} className="w-full">
                                    <Image src={imgVideotwo} alt='video'
                                           className='xl:w-1/2 w-full object-cover object-top h-[200px] xl:h-full p-1 rounded-2xl '/>
                                </div>
                            ))

                        }
                    </section>
                </section>
            ))
        }

    </section>
  )
}
