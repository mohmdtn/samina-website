"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

interface CodeFormProps{
  section2Resend: string;
  section2Button: string;
  back: string;
}

const CodeForm: React.FC<CodeFormProps> = ({ section2Button, section2Resend, back }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `0${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <section className="w-full max-w-72 md:max-w-[360px] mx-auto">

      {/* Code */}
      <div className="w-full mb-2 flex justify-center items-center gap-2 md:gap-3 dir-left text-center">
        <input type="text" className="border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-300 size-16 md:size-20 focus:outline-none" placeholder="0" />
        <input type="text" className="border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-300 size-16 md:size-20 focus:outline-none" placeholder="0" />
        <input type="text" className="border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-300 size-16 md:size-20 focus:outline-none" placeholder="0" />
        <input type="text" className="border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-300 size-16 md:size-20 focus:outline-none" placeholder="0" />
      </div>

      {/* Timer */}
      <div className='text-gary2-600 text-sm mb-6'>
        {section2Resend} {formatTime(timer)}
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section2Button}</button>
      </div>

      {/* Back Button */}
      <button className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>

    </section>
  )
}

export default CodeForm