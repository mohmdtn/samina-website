import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <section className="bg-gray2-25 px-3 md:px-0">
      <section className="max-w-6xl mx-auto pt-16 pb-12">
        {/* Title */}
        <div className="flex justify-between">
          <h4 className="text-xl font-semibold text-black">مجموعه‌هایی که به ما اعتماد کردن</h4>
          <div className="hidden md:flex gap-3">
            <div className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleRight.svg"} width={17} height={17} alt="Angle Icon" /></div>
            <div className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleLeft.svg"} width={17} height={17} alt="Angle Icon" /></div>
          </div>
        </div>

        {/* Slider */}
        <div className=""></div>
      </section>
    </section>
  );
};

export default Company;
