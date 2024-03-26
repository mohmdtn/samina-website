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
    {id: 1, name: item1, picture: "dashboard"},
    {id: 2, name: item2, picture: "financialPeriod"},
    {id: 3, name: item3, picture: "cerditSide"},
    {id: 4, name: item4, picture: "product"},
    {id: 5, name: item5, picture: "factor"},
    {id: 6, name: item6, picture: "transfer"},
    {id: 7, name: item7, picture: "accounting"},
  ];

  const [isActive, setIsActive] = useState(1);

  return (
    <section className="bg-gray2-25">
      <section className="px-3 md:px-0 max-w-5xl mx-auto pt-14 flex flex-col items-center tracking-tight">
        <div className="flex flex-wrap justify-center gap-3 gap-x-4 md:gap-10 text-black text-sm md:text-base font-bold">
          {items.map(item => <div key={item.id} className={`cursor-pointer whitespace-nowrap ${isActive === item.id && "text-blue-600"}`} onClick={() => setIsActive(item.id)}>{item.name}</div>)}
        </div>
        {items.map(item => <Image className={`rounded-3xl mt-8 shadow-lg shadow-gray2-200 ${isActive === item.id ? "block" : "hidden"}`} key={item.id} src={`/images/appPreview/${item.picture}.jpg`} width={1000} height={700} alt={item.picture} />)}
      </section>
    </section>
  );
};

export default AppPreview;
