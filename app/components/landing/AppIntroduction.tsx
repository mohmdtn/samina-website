"use client";

import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface AppIntroductionProps {
  title: string;
  desc: string;
}

const AppIntroduction: React.FC<AppIntroductionProps> = ({ title, desc }) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Button Action For Puse And Play Video
  const playVideo = () => {
    setIsPlay(true);
    if (videoRef.current) {
      if (videoRef.current.paused)
        videoRef.current.play();
      else
        videoRef.current.pause();
    }
  }

  return (
    <section className="text-center mt-32 mb-24 px-3 md:px-0">
      {/* Section Title */}
      <div>
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">{title}</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6 max-w-xl mx-auto">{desc}</p>
      </div>

      {/* Video Player */} 
      <div className="mt-11 w-100 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-md mx-auto p-4">
        <div className='flex justify-center items-center relative'>

          {/* Video Background */}
          <div className="absolute w-full h-full">
            <div className="bg-gray-100 rounded-3xl w-full h-full relative right-2 bottom-2 sm:right-3 sm:bottom-3 md:right-5 md:bottom-5" />
          </div>

          {/* Player */}
          <div className='relative flex justify-center items-center left-2 top-2 sm:left-3 sm:top-3 md:top-5 md:left-5 group'>
            <video className="rounded-3xl w-[1110px]" width="100%" height="100%" poster="/images/videoPoster.png" ref={videoRef}>
              <source src="" type="video/mp4" />
            </video>
            <Image className={`absolute z-20 cursor-pointer duration-700 ${ "group-hover:opacity-100"} ${isPlay && "opacity-0"}`} src={"images/play.svg"} width={100} height={100} alt="Video Player" onClick={playVideo} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AppIntroduction