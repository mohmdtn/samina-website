"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {id: 1, name: "داشبورد"},
  {id: 2, name: "دوره های مالی"},
  {id: 3, name: "طرف های حساب"},
  {id: 4, name: "کالا / خدمات"},
  {id: 5, name: "فاکتور فروش"},
  {id: 6, name: "نقل و انتقال اسناد"},
  {id: 7, name: "حسابداری"},
]

const AppPreview = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <section className="bg-gray2-25">
      <section className="px-3 md:px-0 max-w-5xl mx-auto pt-14 flex flex-col items-center tracking-tight">
        <div className="hidden md:flex justify-center gap-6 md:gap-10 text-black text-sm md:text-base font-bold">
          {items.map(item => <div key={item.id} className={`cursor-pointer whitespace-nowrap ${isActive === item.id && "text-blue-600"}`} onClick={() => setIsActive(item.id)}>{item.name}</div>)}
        </div>
        <Image src={"/images/app-dashboard.svg"} width={1000} height={700} alt="Samina App Preview" />
      </section>
    </section>
  );
};

export default AppPreview;
