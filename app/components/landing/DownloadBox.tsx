import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl';


const DownloadBox = () => {
  const t = useTranslations('downloadBox');

  return (
    <section className="w-full max-w-[1216px] mx-auto px-4">
      <section className="bg-gray2-25 rounded-3xl flex flex-col md:flex-row justify-between gap-6 items-center px-3 py-16 md:p-16 mt-24">
        
        {/* Section Title */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="font-yekanBakhNumbExtraBold text-[40px] md:text-3xl lg:text-5xl tracking-tighter text-black text-center md:text-start">{t("title")}</h1>
        </div>

        {/* Download Box */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Google Play Download Link */}
          <Link href={"/"} className="text-gray-700 border border-gry2-500 flex justify-center gap-2 items-center rounded-lg py-[10px] md:py-3 px-6 w-full md:w-auto">
            <Image src={"/icons/googlePlay.svg"} width={18} height={18} alt="Google Play Icon" />
            {t("googlePlay")}
          </Link>
          {/* App Store Download Link */}
          <Link href={"/"} className="text-white bg-black border flex justify-center gap-2 items-center rounded-lg py-[10px] md:py-3 px-6 w-full md:w-auto">
            <Image src={"/icons/appleWhite.svg"} width={18} height={18} alt="Google Play Icon" />
            {t("appStore")}
          </Link>
        </div>

      </section>
    </section>
  )
}

export default DownloadBox