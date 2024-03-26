import VideoPlayer from "@/app/components/shared/VideoPlayer";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUsPage() {
  const t = useTranslations("aboutUsPage");

  return (
    <main className="px-3 md:px-5 lg:px-24">
      {/* About Us Section */}
      <section className="mt-4">
        <div>
          <Image
            className="w-full"
            src={"/images/aboutus-poster.svg"}
            width={1216}
            height={425}
            alt="Samina Develop Team"
          />
        </div>
        <div>
          <h2 className="font-yekanBakhNumbExtraBold text-balck text-[2rem] md:text-[2.5rem] text-center md:text-start mb-4 mt-8">
            {t("aboutUs")}
          </h2>
          <div className="text-gray2-500 md:leading-7 md:text-lg text-justify flex flex-col gap-6">
            <p>{t("aboutUsFirstP")}</p>
            <p>{t("aboutUsSecondP")}</p>
            <p>{t("aboutUsThirdP")}</p>
          </div>
        </div>
      </section>

      {/* About Team Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-16 mt-24 mx-auto">
        {/* Team Poster */}
        <div className="flex justify-center items-center relative md:order-1 m-4 md:m-5 lg:w-[27.5rem] md:w-[18.75rem]">
          <div className="absolute w-full h-full">
            <div className="bg-gray-100 rounded-3xl w-full h-full relative right-2 bottom-2 sm:right-3 sm:bottom-3 md:right-4 md:bottom-4 lg:right-5 lg:bottom-5" />
          </div>
          <div className="relative z-10 left-2 top-2 sm:left-3 sm:top-3 md:left-4 md:top-4 lg:left-5 lg:top-5">
            <Image
              src={"/images/team-poster.svg"}
              width={467}
              height={556}
              alt="Samina Develop Team"
            />
          </div>
        </div>

        {/* Team Description */}
        <div className="flex-1">
          <h1 className="font-yekanBakhNumbExtraBold text-balck text-[2rem] md:text-[2.5rem] text-center md:text-start mb-6">
            {t("saminaTeam")}
          </h1>
          <p className="text-gray2-500 text-justify md:leading-7 md:text-lg">
            {t("saminaTeaamDesc")}
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="mt-24">
        <VideoPlayer
          knowMoreAboutSamina={t("knowMoreAboutSamina")}
          // poster="/images/about-samina-team-poster.svg"
          video="/video/saminaVideo.mp4"
        />
      </section>

      {/* License Section */}
      <section className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-10 lg:gap-16 mt-24 mx-auto">
        {/* License Poster */}
        <div className="flex justify-center items-center relative md:order-1 m-4 md:m-5 lg:w-[27.5rem] md:w-[18.75rem]">
          <div className="absolute w-full h-full">
            <div className="bg-gray-100 rounded-3xl w-full h-full relative right-2 bottom-2 sm:right-3 sm:bottom-3 md:right-4 md:bottom-4 lg:right-5 lg:bottom-5" />
          </div>
          <div className="relative z-10 left-2 top-2 sm:left-3 sm:top-3 md:left-4 md:top-4 lg:left-5 lg:top-5">
            <Image
              src={"/images/license-poster.svg"}
              width={467}
              height={556}
              alt="Samina Develop Team"
            />
          </div>
        </div>
        {/* License Description */}
        <div className="flex-1">
          <h1 className="font-yekanBakhNumbExtraBold text-balck text-[2rem] md:text-[2.5rem] text-center md:text-start mb-6">
            {t("license")}
          </h1>
          <p className="text-gray2-500 text-justify md:leading-7 md:text-lg">
            {t("licenseDesc")}
          </p>
        </div>
      </section>
    </main>
  );
}
