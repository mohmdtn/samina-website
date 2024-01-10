import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const TeamIntroduction = () => {
  const t = useTranslations('teamIntroduction');

  return (
    <section className="px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16 mt-24 max-w-[1216px] mx-auto">
      {/* Team Poster */}
      <div className="flex justify-center items-center relative md:order-1 m-4 md:m-5 lg:w-[440px] md:w-[300px]">
        <div className="absolute w-full h-full">
          <div className="bg-gray-100 rounded-3xl w-full h-full relative right-2 bottom-2 sm:right-3 sm:bottom-3 md:right-4 md:bottom-4 lg:right-5 lg:bottom-5" />
        </div>
        <div>
          <Image className="relative z-10 left-2 top-2 sm:left-3 sm:top-3 md:left-4 md:top-4 lg:left-5 lg:top-5" src={"/images/team-poster.svg"} width={467} height={556} alt="Samina Develop Team" />
        </div>
      </div>

      {/* Team Description */}
      <div className="max-w-2xl flex-1">
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px] text-center md:text-start mb-6">{t("title")}</h2>
        <div className="text-gray2-500 md:leading-7 md:text-lg">
          <p className="mb-9">{t("firstP")}</p>
          <p>{t("secondP")}</p>
        </div>
        {/* Show More Button */}
        <div className="mt-3 md:mt-6">
          <Link className="inline-block text-sm text-gray-700 text-center py-[9px] px-5 border border-gray2-300 rounded-lg bg-white w-full md:w-auto" href={"/"}>{t("button")}</Link>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
