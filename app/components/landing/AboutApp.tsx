"use client";

import Image from 'next/image'
import React, { useRef, useState } from 'react'

const AboutApp = () => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    setIsPlay(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <section className="text-center mt-32 mb-24 px-3 md:px-0">
      {/* Section Title */}
      <div>
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">درباره نرم افزار</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6 max-w-xl mx-auto">اگر به دنبال بهترین راه حل در بخش های مدیریت مالی، حسابداری و انبار خود هستید، نرم افزار ثمینا را به شما پیشنهاد می کنیم</p>
      </div>

      {/* Video Player */}
      <div className="flex justify-center items-center relative mt-11">
        <div className="absolute h-full w-full">
          <div className="bg-gray-100 rounded-3xl w-full md:w-[1088px] h-full md:h-[600px] relative right-1 md:right-12 bottom-1 md:bottom-12" />
        </div>
        <div className='relative flex justify-center items-center'>
          <video className="w-[95%] md:h-[600px] md:w-[1088px] rounded-3xl" width="100%" height="100%" poster="/images/videoPoster.png" ref={videoRef}>
            <source src="" type="video/mp4" />
          </video>
          <Image className={`absolute z-20 cursor-pointer ${isPlay && "hidden"}`} src={"images/play.svg"} width={100} height={100} alt="Video Player" onClick={playVideo} />
        </div>
      </div>
    </section>
  )
}

export default AboutApp