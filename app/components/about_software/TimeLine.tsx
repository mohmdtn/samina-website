import { useTranslations } from "next-intl";
import Image from "next/image";


const TimeLine = () => {
  const t = useTranslations("aboutSoftwarePage");

  return (
    <section>
      <section className="flex flex-col md:justify-start md:items-start h-[40rem]">
        {/* phase 1 */}
        <div className="h-full relative w-full flex flex-col md:justify-center md:items-center">
          <div className="size-8 rounded-full flex justify-center items-center bg-brand-600 relative">
            <Image src={"/images/register/check.svg"} width={32} height={32} alt="Check Icon" />
            <h3 className="text-accent-600 font-yekanBakhNumbExtraBold absolute start-14 text-2xl leading-8">1402</h3>
          </div>
          <div className={`w-[2px] h-full bg-brand-600 relative start-4 md:start-0`}></div>
          <div className="absolute start-14 md:start-0 top-0 w-5/6 md:w-2/5 pt-9 md:pt-0">
            <h3 className="text-2xl text-black tracking-tight leading-8 font-yekanBakhNumbBold mb-2">{t('title1Phase')}</h3>
            <p className="text-gray2-500 text-base tracking-tight">{t('desc1Phase')}</p>
          </div>
        </div>
        
        {/* phase 2 */}
        <div className="h-full relative w-full flex flex-col md:justify-center md:items-center">
          <div className="size-8 rounded-full flex justify-center items-center bg-brand-600 relative">
            <Image src={"/images/register/check.svg"} width={32} height={32} alt="Check Icon" />
            <h3 className="text-accent-600 font-yekanBakhNumbExtraBold absolute start-14 md:end-14 md:start-auto text-2xl leading-8">1402</h3>
          </div>
          <div className={`w-[2px] h-full bg-brand-600 relative start-4 md:start-0`}></div>
          <div className="absolute start-14 md:start-[58%] top-0 w-5/6 md:w-2/5 pt-9 md:pt-0">
            <h3 className="text-2xl text-black tracking-tight leading-8 font-yekanBakhNumbBold mb-2">{t('title2Phase')}</h3>
            <p className="text-gray2-500 text-base tracking-tight">{t('desc2Phase')}</p>
          </div>
        </div>

        {/* phase 3 */}
        <div className="h-full relative w-full flex flex-col md:justify-center md:items-center">
          <div className="size-8 rounded-full flex justify-center items-center bg-brand-600 relative">
            <Image src={"/images/register/check.svg"} width={32} height={32} alt="Check Icon" />
            <h3 className="text-accent-600 font-yekanBakhNumbExtraBold absolute start-14 text-2xl leading-8">1403</h3>
          </div>
          <div className={`w-[2px] h-full bg-gray2-100 relative start-4 md:start-0`}></div>
          <div className="absolute start-14 md:start-0 top-0 w-5/6 md:w-2/5 pt-9 md:pt-0">
            <h3 className="text-2xl text-black tracking-tight leading-8 font-yekanBakhNumbBold mb-2">{t('title3Phase')}</h3>
            <p className="text-gray2-500 text-base tracking-tight">{t('desc3Phase')}</p>
          </div>
        </div>

        {/* phase 4 */}
        <div className="h-full relative w-full flex flex-col md:justify-center md:items-center">
          <div className="size-8 w-8 h-8 rounded-full flex justify-center items-center bg-gray2-100 relative">
          <div className="size-3 rounded-full bg-white"></div>
            <h3 className="text-accent-600 font-yekanBakhNumbExtraBold absolute start-14 md:end-14 md:start-auto text-2xl leading-8">1403</h3>
          </div>
          <div className={`w-[2px] h-full flex-1 bg-white bg-opacity-0 relative start-4 md:start-0`}></div>
          <div className="absolute start-14 md:start-[58%] top-0 w-5/6 md:w-2/5 pt-9 md:pt-0">
            <h3 className="text-2xl text-black tracking-tight leading-8 font-yekanBakhNumbBold mb-2 opacity-50">{t('title4Phase')}</h3>
            <p className="text-gray2-500 text-base tracking-tight opacity-60">{t('desc4Phase')}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TimeLine;
