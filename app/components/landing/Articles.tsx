"use client";

import Image from "next/image";
import Slider from "react-slick";

// Import slider css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Article from "../Article";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {id: "article1", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article2", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article3", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article4", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article5", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article6", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article7", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
  {id: "article8", img: "/images/article-sample.png", auther: "سید حمزه قریشی", autherImg: "/images/article-auther.png", title: "سادگی نامفهوم از صنعـت چاپ", desc: "لورم ایپـسوم متـن ساختـگی با تولید سادگی نامفهوم از صنعـت چاپ، و با سادگی نامفهوم از 2", date: "5 آذر 1402"},
]

const Articles = () => {
  const sliderRef = useRef<any>(null);

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

  return (
    <section className="mt-32 px-3 md:px-0 overflow-hidden dir-right">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">مقالات</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">محتوای آموزشی مالی و حسابداری</p>
      </div>

      {/* Articles */}
      <div>
        {/* Slider For Desktop View */}
        <div className="hidden md:block">
          <Slider ref={sliderRef} {...settings}>
            {items.map((item) => <Article key={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} />)}
          </Slider>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-3 md:hidden">
          {items.map((item) => <Article key={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} />)}
        </div>

        <div className="mt-3 md:mt-14 w-full flex justify-center relative mb-3 max-w-[1216px] mx-auto md:py-3">
          {/* Show More Button */}
          <Link className="inline-block text-sm text-gray-700 text-center py-[9px] px-5 border border-gray2-300 rounded-lg bg-white w-full md:w-auto" href={"/articles"}>مشاهده همه</Link>
          {/* Slider Button */}
          <div className="absolute left-3">
            <div className="hidden md:flex gap-3">
              <div onClick={nextSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleRight.svg"} width={17} height={17} alt="Angle Icon" /></div>
              <div onClick={prevSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleLeft.svg"} width={17} height={17} alt="Angle Icon" /></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Articles;
