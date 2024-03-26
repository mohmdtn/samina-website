"use client";

import { SiteContext } from "@/app/context/siteContext";
import Image from "next/image";
import React, { useContext } from "react";

interface FAQProps {
  question: string;
  answer: string;
  open?: boolean;
  id: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer, open, id }) => {
  // const [isOpen, setIsOpen] = useState(open ? open : false);
  const { isFaqOpen, setIsFaqOpen } = useContext(SiteContext);

  const onClickHandle = () => {
    if (isFaqOpen === id) {
      setIsFaqOpen("");
    }
    else {
      setIsFaqOpen(id);
    }
  }

  return (
    <div className="bg-gray2-50 rounded-2xl p-3 md:p-6 w-full mx-auto cursor-pointer" onClick={onClickHandle}>
      <div className="flex justify-between items-center">
        <h3 className="text-base md:text-lg text-black font-semibold tracking-tight">{question}</h3>
        <Image className={`${isFaqOpen === id && "rotate-180"} duration-200`} src={"/icons/angleDown.svg"} width={20} height={20} alt="Angle Up Icon" />
      </div>
      <p className={`text-sm md:text-base md:leading-[26px] text-justify tracking-tight text-gray-500 whitespace-pre-line duration-200 overflow-hidden ${isFaqOpen === id ? "max-h-[200vh] pt-3" : "max-h-0"}`}>{answer}</p>
    </div>
  );
};

export default FAQ;
