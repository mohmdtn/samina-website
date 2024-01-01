import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LastPostsProps {
  lastPostsTitle: string;
  lastPosts: any[];
}

const LastPosts: React.FC<LastPostsProps> = ({ lastPostsTitle, lastPosts }) => {
  const language = useLocale();

  return (
    <section className="bg-gray2-50 rounded-3xl flex flex-col gap-3 md:gap-4 p-6">
      <h1 className="text-black font-semibold text-xl mb">{lastPostsTitle}</h1>
      {lastPosts.map((item) => {
        return (
          <Link key={item.id} href={`/${language}/blog/${item.id}`} className="flex gap-3 items-center hover:bg-white p-1 rounded-xl">
            <Image className="w-[100px] h-[65px] rounded-xl" src={item.img} width={100} height={65} alt="" />
            <h4 className="text-gray2-600 text-sm leading-6 font-semibold line-clamp-2">{item.title}</h4>
          </Link>
        )
      })}
    </section>
  );
};

export default LastPosts;
