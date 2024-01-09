"use client";

import { SiteContext } from '@/app/context/siteContext';
import axios from 'axios';
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'

interface CodeFormProps{
  section2Resend: string;
  section2Button: string;
  back: string;
  errorEmpty: string;
}

const CodeForm: React.FC<CodeFormProps> = ({ section2Button, section2Resend, back, errorEmpty }) => {
  const [timer, setTimer] = useState(120);
  const { formsData, setSectionLevel, loading, setLoading, sectionLevel } = useContext(SiteContext);
  const [error, setError] = useState({state: false, msg: ""});
  const [otpCode, setOtpCode] = useState('');
  const [sendAgin, setSendAgin] = useState(false);

  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);
  const input4Ref = useRef<HTMLInputElement>(null);

  // Auto Focus to Next Input
  const changeHandle = () => {
    if (input1Ref.current?.value.length == 1)
      input2Ref.current?.focus();
    if (input2Ref.current?.value.length == 1)
      input3Ref.current?.focus();
    if (input3Ref.current?.value.length == 1)
      input4Ref.current?.focus();

    if (input1Ref.current && input2Ref.current && input3Ref.current && input4Ref.current){
      setOtpCode(input1Ref.current?.value + input2Ref.current?.value + input3Ref.current?.value + input4Ref.current?.value);
    }  
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setSendAgin(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000)
    return () => clearInterval(timer)
  }, [timer]);

  useEffect(() => {
    setTimer(120);
    setError({state: false, msg: ""});
  }, [sectionLevel])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `0${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  // Verify Code
  const submitHandle = () => {
    // Form Validation
    if (input1Ref.current && input2Ref.current && input3Ref.current && input4Ref.current){
      if (
        input1Ref.current?.value.length == 0 || 
        input2Ref.current?.value.length == 0 || 
        input3Ref.current?.value.length == 0 || 
        input4Ref.current?.value.length == 0
      ){
        return setError({state: true, msg: errorEmpty});
      }
    }

    try {
      setLoading(true);
      setError({state: false, msg: ""});
      axios
        .post("http://siteapi.saminasoft.ir/SiteApproveVerifyCode", { userName: formsData.number, codeSentByUser: otpCode })
        .then(() => setSectionLevel("name"))
        .catch((error) => setError({state: true, msg: error.message}))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("خطا در برقراری ارتباط!");
    }
  };


  // Send Verify Code Again 
  const sendAgainHandle = () => {
    try {
      setLoading(true);
      axios
        .post("http://siteapi.saminasoft.ir/SiteSendVerifyCode", { userName: formsData.number })
        .then(() => {
          setSendAgin(false);
          setTimer(120);
        })
        .catch(() => alert("خطا در برقراری ارتباط!"))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("2خطا در برقراری ارتباط!");
    }
  }

  return (
    <section className="w-full max-w-72 md:max-w-[360px] mx-auto">

      {/* Code */}
      <div className="w-full mb-2 flex justify-center items-center gap-2 md:gap-3 dir-left text-center">
        <input type="text" className={`border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-500 placeholder:text-gray2-300 size-16 md:size-20 focus:outline-none duration-200 focus:shadow-md ${error.state && "border-red-500"}`} maxLength={1} placeholder="0" ref={input1Ref} onChange={changeHandle} />
        <input type="text" className={`border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-500 placeholder:text-gray2-300 size-16 md:size-20 focus:outline-none duration-200 focus:shadow-md ${error.state && "border-red-500"}`} maxLength={1} placeholder="0" ref={input2Ref} onChange={changeHandle} />
        <input type="text" className={`border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-500 placeholder:text-gray2-300 size-16 md:size-20 focus:outline-none duration-200 focus:shadow-md ${error.state && "border-red-500"}`} maxLength={1} placeholder="0" ref={input3Ref} onChange={changeHandle} />
        <input type="text" className={`border rounded-lg p-3 text-5xl md:text-7xl text-center text-gray2-500 placeholder:text-gray2-300 size-16 md:size-20 focus:outline-none duration-200 focus:shadow-md ${error.state && "border-red-500"}`} maxLength={1} placeholder="0" ref={input4Ref} onChange={changeHandle} />
      </div>
      {error.state && <h6 className="text-sm mt-[6px] text-red-600">{error.msg}</h6>}

      {/* Timer */}
      <div className='text-gary2-600 text-sm mb-6'>
        <div className={`${sendAgin && "hidden"}`}>{section2Resend} {formatTime(timer)}</div>
        <div className={`text-brand-600 cursor-pointer ${!sendAgin && "hidden"}`} onClick={sendAgainHandle}>ارسال مجدد</div>
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button onClick={submitHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6 disabled:opacity-70" disabled={loading}>{section2Button}</button>
      </div>

      {/* Back Button */}
      <button onClick={() => setSectionLevel("number")} className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>

    </section>
  )
}

export default CodeForm