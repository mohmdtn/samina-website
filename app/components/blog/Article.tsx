import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleProps {
  img: string,
  date: string,
  auther: string,
  autherImg: string,
  title: string,
  desc: string,
  id: string
}

const Article: React.FC<ArticleProps> = ({ id, img, auther, autherImg, title, desc, date }) => {
  const language = useLocale();

  return (
    <Link href={`/${language}/blog/${id}`}>
      <article className="bg-gray2-50 rounded-3xl overflow-hidden mx-1 dir-right p-3 md:p-0">

        {/* Article Content */}
        <div className="flex gap-3 md:gap-0 md:flex-col">
          <Image className="size-20 md:size-auto rounded-2xl md:rounded-none md:w-full md:h-[225px]" src={img} width={384} height={225} alt={title} />
          <div className="md:px-4 md:pt-4">
            <h3 className="text-base font-semibold md:text-xl text-black mb-2 line-clamp-1">{title}</h3>
            <p className="text-gray2-500 text-sm md:leading-6 line-clamp-2">{desc}</p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:px-4 md:pb-4">
          <div className="flex justify-between gap-3 md:pt-11 md:gap-0">
            {/* Auther Info */}
            <div className="flex gap-2 items-center">
              <Image className="rounded-full size-8" src={autherImg} width={30} height={30} alt={auther} />
              <h6 className="text-gray2-500 text-sm">{auther}</h6>
            </div>

            {/* Date */}
            <div className="flex gap-2 items-center">
              <Image src={"/icons/calendar-days.svg"} width={20} height={20} alt="Calendar Icon" />
              <h6 className="text-gray2-500 text-sm">{date}</h6>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Article;
