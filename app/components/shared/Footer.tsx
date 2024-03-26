import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import Script from "next/script";

const Footer = () => {
  const t = useTranslations('footer');
  const language = useLocale();

  return (
    <footer className="bg-gray2-25 mt-24 p-5 text-center lg:text-start lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">

      <section className="max-w-72 flex flex-col items-center lg:items-start">
        <Logo name={t("name")} />

        <div className="flex flex-col gap-3 mt-8">
          {/* Phone Number */}
          <div className="flex items-center gap-3">
            <Image src={"/icons/phone.svg"} width={20} height={20} alt="Phone Icon" />
            <p className="text-black text-base dir-left">{t("phone")}</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-3">
            <Image src={"/icons/email.svg"} width={20} height={20} alt="Envelope Icon" />
            <p className="text-black text-base">{t("email")}</p>
          </div>
        </div>

        {/* Address */}
        <p className="text-black text-sm leading-6 mt-6">{t("address")}</p>
      </section>


      {/* License Colmun */}
      <section className="grid grid-cols-2 grid-rows-2 gap-4 mt-5 lg:mt-0">
        {/* <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/samanDehi.png"} width={64} height={64} alt="Samandehi license" /></div> */}
        <Link target="_blank" referrerPolicy="origin" href={'https://trustseal.enamad.ir/?id=442091&Code=y0c2WWEBauCaCRNVf76t8EpsSwSfmpiM'} className="size-24 bg-white rounded-xl flex justify-center items-center"><Image referrerPolicy="origin" src={"/images/ENamad.png"} width={59} height={64} alt="Enamad license" /></Link>
        <div className="size-24 bg-white rounded-xl flex justify-center items-center">
          <div id="zarinpal" className="w-[46px]">
            <Script src="https://www.zarinpal.com/webservice/TrustCode" type="text/javascript"></Script>
          </div>
        </div>
        {/* <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/sazmanNezamSenfi.png"} width={80} height={64} alt="Sazmane Nezam Senfi license" /></div> */}
        {/* <div className="size-24 bg-white rounded-xl flex justify-center items-center"><Image src={"/images/etehadieKasbOKar.png"} width={54} height={64} alt="Etehadie Kaso kAr license" /></div> */}
      </section>


      {/* Links Column */}
      <section className="flex gap-4 md:gap-14 lg:gap-36 mt-12 lg:mt-0">
        <div className="flex flex-col">
          <h4 className="text-base md:text-lg font-semibold">{t("firstColTitle")}</h4>
          <Link className="text-sm md:text-base text-gray-600 mt-4" href={`/${language}/about_us`}>{t("firstCol1")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={`/${language}/about_software`}>{t("firstCol2")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={`/${language}/contact_us`}>{t("firstCol3")}</Link>
          {/* <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("firstCol4")}</Link> */}
          {/* <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("firstCol5")}</Link> */}
        </div>
        <div className="flex flex-col">
          <h4 className="text-base md:text-lg font-semibold">{t("secondColTitle")}</h4>
          {/* <Link className="text-sm md:text-base text-gray-600 mt-4" href={"/"}>{t("secondCol1")}</Link> */}
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={`/${language}/faq`}>{t("secondCol2")}</Link>
          <Link className="text-sm md:text-base text-gray-600 mt-3" href={`/${language}/blog`}>{t("blogs")}</Link>
          {/* <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("secondCol3")}</Link> */}
          {/* <Link className="text-sm md:text-base text-gray-600 mt-3" href={"/"}>{t("secondCol4")}</Link> */}
        </div>
      </section>

    </footer>
  );
};

export default Footer;
