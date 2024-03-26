"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useLocale } from "next-intl";

import { faPosts } from "@/public/data/blogs";

const DynamicArticle = dynamic(() => import("@/app/components/blog/Article"));

interface MainPostsProps {
  title?: string;
  option1: string;
  option2: string;
  option3: string;
}

const MainPosts: React.FC<MainPostsProps> = ({ title, option1, option2, option3 }) => {
  const [initialItems, setInitialItems] = useState(faPosts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(option1);
  const language = useLocale();

  const selectHandle = (option: string) => {
    setIsFilterOpen(false);
    setSelectedFilter(option)
  }

  useEffect(() => {
    if (language === "fa")
      setInitialItems(faPosts)
  }, [language])

  return (
    <section className="mt-8">
        
      {/* Filter Button And Title */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-9">

        {/* titlle */}
        <h5 className="text-black text-2xl font-yekanBakhNumbBold tracking-tight">{title}</h5>

        {/* filter button */}
        {/* <div className="w-full md:w-auto relative">
          <button className="border rounded-lg flex justify-center items-center gap-2 p-2 px-3 text-sm leading-6 font-semibold text-gray-700 w-full md:w-auto" onClick={() => setIsFilterOpen((prev) => !prev)}>
            <Image src={"/icons/filter.svg"} width={14} height={14} alt="Filter Icon" />
            {selectedFilter}
            <Image src={"/icons/angleDown.svg"} width={14} height={14} alt="Angle Icon" />
          </button>
          <div className={`w-full bg-white rounded-md absolute p-2 shadow-md flex-col gap-1 text-gray-700 text-sm ${isFilterOpen ? "flex" : "hidden"}`}>
            <div className={`w-full hover:bg-gray2-100 text-center cursor-pointer rounded-lg p-2 ${selectedFilter === option1 && "bg-gray2-100"}`} onClick={() => selectHandle(option1)}>{option1}</div>
            <div className={`w-full hover:bg-gray2-100 text-center cursor-pointer rounded-lg p-2 ${selectedFilter === option2 && "bg-gray2-100"}`} onClick={() => selectHandle(option2)}>{option2}</div>
            <div className={`w-full hover:bg-gray2-100 text-center cursor-pointer rounded-lg p-2 ${selectedFilter === option3 && "bg-gray2-100"}`} onClick={() => selectHandle(option3)}>{option3}</div>
          </div>
        </div> */}

      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {initialItems.map((item) => <div key={item.id} className="w-full"><DynamicArticle id={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} /></div>)}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-14">
        <button disabled className="size-12 rounded-lg p-3 flex justify-center items-center bg-gray2-100 duration-200 hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed">
          <Image src={"/icons/angleRight.svg"} width={9} height={9} alt="Angle right Icon" />
        </button>
        <div className="flex justify-center items-center gap-2">
          <Link href={`/${language}/blog`} className="size-12 text-lg font-semibold text-white rounded-lg p-3 flex justify-center items-center bg-brand-600 duration-200 hover:shadow-lg">
            1
          </Link>
          {/* <Link href={`/${language}/blog`} className="size-12 text-lg font-semibold text-gray2-500 rounded-lg p-3 flex justify-center items-center bg-gray2-100 duration-200 hover:shadow-lg">
            2
          </Link> */}
        </div>
        <button disabled className="size-12 rounded-lg p-3 flex justify-center items-center bg-gray2-100 duration-200 hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed">
          <Image src={"/icons/angleLeft.svg"} width={9} height={9} alt="Angle Left Icon" />
        </button>
      </div>
    </section>
  );
};

export default MainPosts;
