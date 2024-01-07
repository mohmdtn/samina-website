"use client";

import Image from "next/image";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const items = [
  {id: "company-slide1", img: "/images/company/microsoft.png", alt: "Microsoft Company Image"},
  {id: "company-slide2", img: "/images/company/dropbox.png", alt: "dropbox Company Image"},
  {id: "company-slide3", img: "/images/company/facebook.png", alt: "facebook Company Image"},
  {id: "company-slide4", img: "/images/company/uber.png", alt: "uber Company Image"},
  {id: "company-slide5", img: "/images/company/google.png", alt: "google Company Image"},
  {id: "company-slide6", img: "/images/company/facebook.png", alt: "facebook Company Image"},
]

const Company = ({ title }: { title: string }) => {
  const sliderRef = useRef<any>(null);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
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
    <section className="bg-gray2-25 px-3 lg:px-0 overflow-hidden">
      <section className="max-w-6xl mx-auto pt-16 pb-12">
        {/* Title */}
        <div className="flex justify-between px-4">
          <h4 className="text-xl font-semibold text-black">{title}</h4>
          {/* Slider Buttons */}
          <div className="hidden md:flex gap-3">
            <div onClick={nextSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleRight.svg"} width={17} height={17} alt="Angle Icon" /></div>
            <div onClick={prevSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleLeft.svg"} width={17} height={17} alt="Angle Icon" /></div>
          </div>
        </div>

        {/* Slider */}
        <div className="md:-mx-11 overflow-hidden pt-10">
          <Slider ref={sliderRef} {...settings}>
            {items.map((item) => <div className="h-14" key={item.id}><div className="flex justify-center mx-2 md:mx-0 items-center h-full"><Image src={item.img} width={143} height={48} alt={item.alt} /></div></div>)}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default Company;
