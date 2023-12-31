"use client";

import Image from "next/image";
import React, { useState } from "react";

interface FAQProps {
  question: string;
  answer: string;
  open?: boolean;
}

const FAQ: React.FC<FAQProps> = ({ question, answer, open }) => {
  const [isOpen, setIsOpen] = useState(open ? open : false);

  return (
    <div className="bg-gray2-50 rounded-2xl p-3 md:p-6 max-w-[1216px] w-full mx-auto cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="flex justify-between items-center">
        <h3 className="text-base md:text-lg text-black font-semibold tracking-tight">{question}</h3>
        <Image className={`${!isOpen && "rotate-180"} duration-200`} src={"/icons/angleUp.svg"} width={20} height={20} alt="Angle Up Icon" />
      </div>
      <p className={`text-sm md:text-base md:leading-[26px] tracking-tight text-gray-500 pt-3 whitespace-pre-line ${isOpen ? "block" : "hidden"}`}>{answer}</p>
    </div>
  );
};

export default FAQ;
