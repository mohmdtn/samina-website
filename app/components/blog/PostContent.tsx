"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

import { faPosts } from "@/public/data/blogs";

interface PostContentProps {
  id: string;
  time: string;
  shareButton: string;
}

const PostContent: React.FC<PostContentProps> = ({ id, time, shareButton }) => {
  const language = useLocale();
  const [post, setPost] = useState<any>(faPosts);

  useEffect(() => {
    if (language === "fa")
      setPost(faPosts.filter(item => item.id === id))
  }, [language, id])

  return (
    <section>

      {/* Header of Post */}
      <section className="text-center md:text-start">
        <Image className="rounded-3xl max-h-[350px] w-full" src={post[0].img} width={800} height={350} alt={post[0].title} />
        <h1 className="text-black font-yekanBakhNumbBold md:font-yekanBakhNumbExtraBold text-3xl md:text-2xl tracking-tighter mb-3 mt-8">{post[0].title}</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-blue-600">
          {/* Time For Read */}
          <div className="flex justify-center items-center gap-2">
            <Image src={"/icons/clockBlue.svg"} width={16} height={16} alt="Clock Icon" />
            {time}
          </div>
          {/* Date Of Post */}
          <div className="flex justify-center items-center gap-2">
            <Image src={"/icons/calendarBlue.svg"} width={16} height={16} alt="Clock Icon" />
            {post[0].date}
          </div>
        </div>
      </section>

      {/* Content Of Post */}
      <section className="text-gray2-500 text-base leading-[26px] tracking-tighter whitespace-pre-line mt-4 border-b pb-6 md:pb-8">
        {post[0].desc}
      </section>

      {/* Auther Info */}
      <section className="py-6 md:py-8 border-b">
        <div className="flex justify-between items-center flex-col md:flex-row gap-6">

          <div className="flex gap-2 items-center md:order-1">
            <Image className="rounded-full size-8" src={post[0].autherImg} width={30} height={30} alt={post[0].auther} />
            <h6 className="text-gray2-500 text-sm">{post[0].auther}</h6>
          </div>

          {/* Share Button */}
          <button className="border rounded-lg py-[10px] px-4 text-gray2-700 flex justify-center items-center gap-2 text-sm w-full md:w-auto">
            <Image src={"/icons/share.svg"} width={14} height={14} alt="Share Icon" />
            {shareButton}
          </button>

        </div>

        {/* Post Tags */}
        {/* <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-4">
          <Link href={"/"} className="bg-brand-50 rounded-lg p-2 text-brand-600 inline-block w-full md:w-auto text-center"># تست</Link>
          <Link href={"/"} className="bg-brand-50 rounded-lg p-2 text-brand-600 inline-block w-full md:w-auto text-center"># تست</Link>
          <Link href={"/"} className="bg-brand-50 rounded-lg p-2 text-brand-600 inline-block w-full md:w-auto text-center"># تست</Link>
          <Link href={"/"} className="bg-brand-50 rounded-lg p-2 text-brand-600 inline-block w-full md:w-auto text-center"># تست</Link>
        </div> */}

      </section>

    </section>
  );
};

export default PostContent;
