'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import imgVideotwo from '../../../assets/images/image.png'
import imgVideo from '../../../assets/images/image69.png'
import dynamicFetch from "@/hooks/fetch";
import { ModalVideos } from "@/app/components/modalWindows/ModalVideos";

const fetchKey = '/videos';

export function Videomaterials() {
    const [videos, setVideos] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        dynamicFetch(fetchKey).then(data => setVideos(data));
    }, []);

    const videoOpen = (videoSrc) => {
        setVideoSrc(videoSrc);
        setShowVideo(true);
    };

    if (videos.length === 0) {
        return null;
    }
    const title = "Видео материалы";

    return (
        <section className=''>
            <section className='container'>
                <h2 className='text-4xl impact mt-10 p-5'>{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pt-0 h-[527px]">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            onClick={() => videoOpen(video.video)}
                            className={`relative rounded-lg overflow-hidden ${index === 0 ? 'md:col-span-1 md:row-span-2' : ''}`}
                        >
                            <Image
                                width={500}
                                height={500}
                                src={video.image}
                                alt={`Video ${video.title}`}
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-4xl">
                                &#9654;
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {showVideo && (
                <ModalVideos videoSrc={videoSrc} showVideo={showVideo} setShowVideo={setShowVideo} />
            )}
        </section>
    );
}
