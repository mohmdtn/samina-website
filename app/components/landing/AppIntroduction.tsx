"use client";

import React, { useRef, useState } from 'react'
import VideoPlayer from '../shared/VideoPlayer';

interface AppIntroductionProps {
  title: string;
  desc: string;
}

const AppIntroduction: React.FC<AppIntroductionProps> = ({ title, desc }) => {
  return (
    <section className="text-center mt-32 mb-24 px-3 md:px-0">
      {/* Section Title */}
      <div>
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">{title}</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6 max-w-xl mx-auto">{desc}</p>
      </div>

      {/* Video Player */} 
      <div className="mt-6 md:mt-11 w-100 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-md mx-auto p-4">
        <VideoPlayer
          poster="/images/videoPoster.png"
          video="/video/saminaVideo.mp4"
        />
      </div>
    </section>
  )
}

export default AppIntroduction