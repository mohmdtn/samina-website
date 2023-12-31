"use client";

import Image from "next/image";
import { useState } from "react";

interface AppPreviewProps {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
}

const AppPreview: React.FC<AppPreviewProps> = ({ item1, item2, item3, item4, item5, item6, item7 }) => {
  const items = [
    {id: 1, name: item1},
    {id: 2, name: item2},
    {id: 3, name: item3},
    {id: 4, name: item4},
    {id: 5, name: item5},
    {id: 6, name: item6},
    {id: 7, name: item7},
  ];

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
