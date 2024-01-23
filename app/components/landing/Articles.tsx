"use client";

import Image from "next/image";
import Slider from "react-slick";

// Import slider css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Article from "../blog/Article";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

import { faLandingPosts } from "@/public/data/landingPosts";

interface ArticlesProps {
  title: string;
  desc: string;
  button: string;
}

const Articles: React.FC<ArticlesProps> = ({ title, desc, button }) => {
  const sliderRef = useRef<any>(null);
  const language = useLocale();
  const [initialItems, setInitialItems] = useState(faLandingPosts);

  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  // Slider Navigate Functions
  const nextSlide = () => {
    if (sliderRef.current)
      sliderRef.current.slickNext()
  }
  const prevSlide = () => {
    if (sliderRef.current)
      sliderRef.current.slickPrev()
  }

  // Slider Navigate With Arrow Keys
  function checkKey(e: any) {
    if (e.keyCode == '37') {
      if (sliderRef.current)
      sliderRef.current.slickNext()
    }
    else if (e.keyCode == '39') {
      if (sliderRef.current)
      sliderRef.current.slickPrev()
    }
  }
  useEffect(() => {
    document.body.addEventListener('keyup', checkKey)
  
    return () => {
      document.body.removeEventListener('keyup', checkKey)
    }
  })

  useEffect(() => {
    if (language === "fa")
      setInitialItems(faLandingPosts)
  }, [language])

  return (
    <section className="mt-32 px-3 md:px-0 overflow-hidden dir-right">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">{title}</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">{desc}</p>
      </div>

      {/* Articles */}
      <div>
        {/* Slider For Desktop View */}
        <div className="hidden md:block">
          <Slider ref={sliderRef} {...settings}>
            {initialItems.map((item) => <div key={item.id} className="md:px-3"><Article id={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} /></div>)}
          </Slider>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-3 md:hidden">
          {initialItems.map((item) => <Article id={item.id} key={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} />)}
        </div>

        <div className="mt-3 md:mt-14 w-full flex justify-center relative mb-3 max-w-[1216px] mx-auto md:py-3">
          {/* Show More Button */}
          <Link className="inline-block text-sm text-gray-700 text-center py-[9px] px-5 border border-gray2-300 rounded-lg bg-white w-full md:w-auto" href={`${language}/blog`}>{button}</Link>
          {/* Slider Button */}
          <div className="absolute left-3">
            <div className="hidden md:flex gap-2 select-none">
              <div onClick={nextSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleLeftBlack.svg"} width={12} height={12} alt="Angle Icon" /></div>
              <div onClick={prevSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleRightBlack.svg"} width={12} height={12} alt="Angle Icon" /></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Articles;
