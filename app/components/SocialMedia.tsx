import Image from "next/image";
import Link from "next/link";

const items = [
  { id: "media-1", img: "/images/socialmedia/instagram.svg", url: "/", name: "Instagram" },
  { id: "media-2", img: "/images/socialmedia/x.svg",         url: "/", name: "X" },
  { id: "media-3", img: "/images/socialmedia/whatsapp.svg",  url: "/", name: "WhatsApp" },
  { id: "media-4", img: "/images/socialmedia/telegram.svg",  url: "/", name: "Telegram" },
  { id: "media-5", img: "/images/socialmedia/bale.svg",      url: "/", name: "Bale" },
  { id: "media-6", img: "/images/socialmedia/linkedin.svg",  url: "/", name: "LinkedIn" },
];

const SocialMedia = () => {
  return (
    <section className="bg-brand-900 text-white py-5 px-4 md:px-2">
      <section className="md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        {/* Social Media */}
        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item) => <Link className="size-[34px] rounded-full bg-white flex justify-center items-center" key={item.id} href={item.url}><Image src={item.img} width={20} height={20} alt={item.name} /></Link>)}
        </div>

        {/* Copyright Text */}
        <h5 className="text-sm text-center md:text-start">تمام حقوق این سایت متعلق به شرکت برنامه‌ نویسان داده پرداز آینده می‌باشد</h5>

      </section>
    </section>
  );
};

export default SocialMedia;
