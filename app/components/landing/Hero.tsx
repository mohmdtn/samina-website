import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  const language = useLocale();

  return (
    <section className="bg-gray2-25">
      <section className="text-center max-w-[682px] mx-auto pt-20 px-3 md:px-0">
        <h1 className="text-blaxk text-[40px] md:text-6xl font-yekanBakhNumbExtraBold tracking-tighter">{t("title")}<span className="text-brand-600 block md:inline-block">{t("title_name")}</span></h1>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">{t("desc")}</p>
       <Link href={`/${language}/register`} className="text-white bg-brand-600 rounded-lg py-[10px] md:py-3 px-6 inline-block w-full md:w-auto">{t("button")}</Link>
      </section>
    </section>
  );
};

export default Hero;
