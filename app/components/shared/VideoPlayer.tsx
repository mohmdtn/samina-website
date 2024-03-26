"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

interface VideoPlayerProps {
  knowMoreAboutSamina?: string;
  poster?: string;
  video: string;
}

const VideoPlayer = ({ knowMoreAboutSamina, poster, video }: VideoPlayerProps) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Button Action For Puse And Play Video
  const playVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlay(true);
      } else {
        videoRef.current.pause();
        setIsPlay(false);
      }
    }
  };

  return (
    <div className="w-100 mx-auto p-4">
      <div className="flex justify-center items-center relative">
        {/* Video Background */}
        <div className="absolute w-full h-full">
          <div className="bg-gray-100 rounded-3xl w-full h-full relative right-2 bottom-2 sm:right-3 sm:bottom-3 md:right-5 md:bottom-5" />
        </div>

        {/* Player */}
        <div className="relative flex justify-center items-center w-full left-2 top-2 sm:left-3 sm:top-3 md:top-5 md:left-5 group aspect-[16/9]">
          <video
            className="rounded-3xl md:h-auto object-cover w-full"
            width="100%"
            height="100%"
            poster={poster}
            ref={videoRef}
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className={`absolute z-20 flex flex-col justify-center items-center gap-2 md:gap-5`}>
            <Image
              className={`size-16 md:size-24 cursor-pointer duration-700 group-hover:opacity-100 ${isPlay && "opacity-0"}`}
              src={!isPlay ? "/images/play.svg" : "/images/pause.svg"}
              width={100}
              height={100}
              alt="Video Player"
              onClick={playVideo}
            />
            {knowMoreAboutSamina && <h3 className={`font-yekanBakhNumbExtraBold text-white text-lg md:text-[40px] ${isPlay && "hidden"}`}>{knowMoreAboutSamina}</h3>}
          </div>

          <div
            className={`h-full w-full absolute z-10 rounded-3xl duration-200 ${
              isPlay ? "bg-opacity-0" : "bg-gray2-900 bg-opacity-75"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
