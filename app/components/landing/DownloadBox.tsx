import Image from "next/image"
import Link from "next/link"

const DownloadBox = () => {
  return (
    <section className="bg-gray2-25 rounded-3xl flex flex-col md:flex-row justify-between gap-6 items-center w-full max-w-[1216px] md:mx-auto px-3 py-16 md:p-16 mt-24">
      
      {/* Section Title */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <h1 className="font-yekanBakhNumbExtraBold text-[40px] md:text-3xl lg:text-5xl tracking-tighter text-black">دانلود اپلیکیشن موبایل</h1>
      </div>

      {/* Download Box */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Google Play Download Link */}
        <Link href={"/"} className="text-gray-700 border border-gry2-500 flex justify-center gap-2 items-center rounded-lg py-[10px] md:py-3 px-6 w-full md:w-auto">
          <Image src={"/icons/googlePlay.svg"} width={18} height={18} alt="Google Play Icon" />
          دریافت از گوگل پلی
        </Link>
        {/* App Store Download Link */}
        <Link href={"/"} className="text-white bg-black border flex justify-center gap-2 items-center rounded-lg py-[10px] md:py-3 px-6 w-full md:w-auto">
          <Image src={"/icons/appleWhite.svg"} width={18} height={18} alt="Google Play Icon" />
          دریافت از اپ استور
        </Link>
      </div>

    </section>
  )
}

export default DownloadBox