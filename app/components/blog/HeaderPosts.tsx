import Image from "next/image";
import React from "react";

const HeaderPosts = () => {
  
  return (
    <section className="grid gap-[18px] grid-cols-1 md:grid-cols-5 md:grid-rows-2">

      {/* Fisrt Box */}
      <div className="rounded-[20px] overflow-hidden col-span-3 row-span-2 relative flex items-end">
        <Image className="w-full h-full" src={"/images/articles/3.jpg"} width={695} height={517} alt="" />
        <p className="absolute text-white tracking-tight w-full text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold p-3 md:p-6 lg:p-8 bg-gradient-to-t from-[#00000061] to-[#0000]">توافق با رئیس امور مالیات عملکرد</p>
      </div>

      {/* Second Box */}
      <div className="rounded-[20px] overflow-hidden col-span-3 md:col-span-2 row-span-1 relative flex items-end max-h-[251px]">
        <Image className="w-full h-full" src={"/images/articles/5.jpeg"} width={503} height={251} alt="" />
        <p className="absolute text-white tracking-tight w-full text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold p-3 md:p-6 lg:p-8 bg-gradient-to-t from-[#00000061] to-[#0000]">نحوه رسیدگی به تراکنشهای بانکی مشکوک</p>
      </div>

      {/* Third Box */}
      <div className="rounded-[20px] overflow-hidden col-span-3 md:col-span-2 row-span-1 relative flex items-end max-h-[251px]">
        <Image className="w-full h-full" src={"/images/articles/1.jpg"} width={503} height={251} alt="" />
        <p className="absolute text-white tracking-tight w-full text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold p-3 md:p-6 lg:p-8 bg-gradient-to-t from-[#00000061] to-[#0000]">ماده ۹۵ قانون مالیات های مستقیم</p>
      </div>
    </section>
  );
};

export default HeaderPosts;
