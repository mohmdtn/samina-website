"use client";

import Image from "next/image";
import { useState } from "react";

interface TermProps {
  id?: string;
  question: string;
  answer: string;
}

const Term: React.FC<TermProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="border-b cursor-pointer mb-4" onClick={() => setIsOpen((prev) => !prev)}>

      {/* Term Head */}
      <div className="flex justify-between mb-3 md:mb-5">
        <h4 className="text-base md:text-lg font-semibold">{question}</h4>
        <Image className={`${!isOpen && "rotate-180"} duration-200`} src={"/icons/angleUp.svg"} width={20} height={20} alt="Angle Up Icon" />
      </div>

      {/* Term Body */}
      <div className={`text-gray2-500 text-sm md:text-base mb-5 whitespace-pre-line leading-[26px] tracking-tight text-justify ${isOpen ? "block" : "hidden"}`}>{answer}</div>

    </section>
  );
};

export default Term;
