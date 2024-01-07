import { useTranslations } from "next-intl";
import Image from "next/image";

const ContactInfo = () => {
  const t = useTranslations("contactUsPage");

  return (
    <section>
      <div className="flex items-center gap-4 pb-8">
        <div className="bg-brand-50 rounded-2xl flex justify-center items-center min-w-[75px] size-[75px]">
          <Image src={"/icons/mapBig.svg"} width={32} height={32} alt="Map Icon" />
        </div>
        <h6 className="text-base text-black font-semibold tracking-tight leading-7">{t("address")}</h6>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">

        <div className="flex items-center gap-4">
          <div className="bg-brand-50 rounded-2xl flex justify-center items-center min-w-[75px] size-[75px]">
            <Image src={"/icons/phoneBig.svg"} width={32} height={32} alt="Phone Icon" />
          </div>
          <h6 className="text-base text-black font-semibold tracking-tight leading-7 dir-left">{t("phone")}</h6>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-brand-50 rounded-2xl flex justify-center items-center min-w-[75px] size-[75px]">
            <Image src={"/icons/envelopeBig.svg"} width={32} height={32} alt="Envelope Icon" />
          </div>
          <h6 className="text-base text-black font-semibold tracking-tight leading-7">{t("email")}</h6>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-brand-50 rounded-2xl flex justify-center items-center min-w-[75px] size-[75px]">
            <Image src={"/icons/clockBig.svg"} width={32} height={32} alt="Clock Icon" />
          </div>
          <h6 className="text-base text-black font-semibold tracking-tight leading-7 max-w-44">{t("activeTime")}</h6>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
