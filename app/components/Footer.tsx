import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray2-25 mt-24 p-5 text-center lg:text-start lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">

      <section className="max-w-72 flex flex-col items-center lg:items-start">
        <Logo name="ثمینا" />

        <div className="flex flex-col gap-3 mt-8">
          {/* Phone Number */}
          <div className="flex items-center gap-3">
            <Image src={"/icons/phone.svg"} width={20} height={20} alt="Phone Icon" />
            <p className="text-black text-base dir-left">021 - 66595657</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-3">
            <Image src={"/icons/email.svg"} width={20} height={20} alt="Phone Icon" />
            <p className="text-black text-base">Info@saminasoft.ir</p>
          </div>
        </div>

        {/* Address */}
        <p className="text-black text-sm leading-6 mt-6">{t("address")}</p>
      </section>


      {/* License Colmun */}
      <section className="grid grid-cols-2 grid-rows-2 gap-4 mt-5 lg:mt-0">
        <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/samanDehi.png"} width={64} height={64} alt="Samandehi license" /></div>
        <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/ENamad.png"} width={59} height={64} alt="Enamad license" /></div>
        <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/sazmanNezamSenfi.png"} width={80} height={64} alt="Sazmane Nezam Senfi license" /></div>
        <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/etehadieKasbOKar.png"} width={54} height={64} alt="Etehadie Kaso kAr license" /></div>
      </section>


      {/* Links Column */}
      <section className="flex gap-4 md:gap-14 lg:gap-36 mt-12 lg:mt-0">
        <div className="flex flex-col">
          <h4 className="text-base md:text-lg font-semibold">{t("firstColTitle")}</h4>
          <Link className="text-sm md:text-base text-gray-600 mt-4" href={"/"}>{t("firstCol1")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("firstCol2")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("firstCol3")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("firstCol4")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("firstCol5")}</Link>
        </div>
        <div className="flex flex-col">
          <h4 className="text-base md:text-lg font-semibold">{t("secondColTitle")}</h4>
          <Link className="text-sm md:text-base text-gray-600 mt-4" href={"/"}>{t("secondCol1")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("secondCol2")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("secondCol3")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("secondCol4")}</Link>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
