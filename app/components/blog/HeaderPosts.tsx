import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderPosts = () => {
  const language = useLocale();
  
  return (
    <section className="grid gap-[18px] grid-cols-1 mt-3 md:grid-cols-5 md:grid-rows-2">

      {/* Fisrt Box */}
      <Link href={`/${language}/blog/article3`} className="col-span-3 row-span-2 flex">
        <div className="rounded-[20px] overflow-hidden relative flex items-end w-full">
          <Image className="w-full h-full" src={"/images/articles/3.jpg"} width={695} height={517} alt="" />
          <p className="absolute text-white tracking-tight w-full text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold p-3 md:p-6 lg:p-8 bg-gradient-to-t from-[#00000061] to-[#0000]">توافق با رئیس امور مالیات عملکرد</p>
        </div>
      </Link>

      {/* Second Box */}
      <Link href={`/${language}/blog/article8`} className="col-span-3 md:col-span-2 row-span-1 flex">
        <div className="rounded-[20px] overflow-hidden relative flex items-end max-h-[251px] w-full min-h-full">
          <Image className="w-full h-full" src={"/images/articles/8.jpg"} width={503} height={251} alt="" />
          <p className="absolute text-white tracking-tight w-full text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold p-3 md:p-6 lg:p-8 bg-gradient-to-t from-[#00000061] to-[#0000]">قابل توجه خریداران سکه و ارز</p>
        </div>
      </Link>

      {/* Third Box */}
      <Link href={`/${language}/blog/article1`} className="col-span-3 md:col-span-2 row-span-1 flex">
        <div className="rounded-[20px] overflow-hidden relative flex items-end max-h-[251px] w-full min-h-full">
          <Image className="w-full h-full" src={"/images/articles/1.jpg"} width={503} height={251} alt="" />
          <p className="absolute text-white tracking-tight w-full text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold p-3 md:p-6 lg:p-8 bg-gradient-to-t from-[#00000061] to-[#0000]">ماده ۹۵ قانون مالیات های مستقیم</p>
        </div>
      </Link>
    </section>
  );
};

export default HeaderPosts;
