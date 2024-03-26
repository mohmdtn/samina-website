import TimeLine from "@/app/components/about_software/TimeLine";
import VideoPlayer from "@/app/components/shared/VideoPlayer";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSoftwarePage() {
  const t = useTranslations("aboutSoftwarePage");

  return (
    <main className="px-3 md:px-5 lg:px-24">
      {/* Know More Section */}
      <section className="mt-4">
        <div>
          <Image
            className="w-full h-[25.688rem] md:h-auto"
            src={"/images/about-software-poster.svg"}
            width={1216}
            height={425}
            alt="Samina Develop Team"
          />
        </div>
        <div>
          <h2 className="font-yekanBakhNumbExtraBold text-balck text-[2rem] md:text-[2.5rem] text-center md:text-start mb-4 mt-8">
            {t("knowMoreAboutSamina")}
          </h2>
          <div className="text-gray2-500 md:leading-7 text-justify md:text-lg flex flex-col gap-6">
            <p>{t("knowMoreFirstP")}</p>
            <p>{t("knowMoreSecondP")}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mt-24">
        <TimeLine />
      </section>

      {/* Video Section */}
      <section className="mt-24">
        <VideoPlayer
          knowMoreAboutSamina={t("knowMoreAboutSamina")}
          // poster="/images/about-software-video-poster.svg"
          video="/video/saminaVideo.mp4"
        />
      </section>
    </main>
  );
}
