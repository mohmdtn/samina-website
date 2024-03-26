import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import Loading from '@/app/components/shared/Loading';

const DynamicContactForm = dynamic(() => import("@/app/components/contact_us/ContactForm"), {loading: () => <Loading />});
const DynamicContactInfo = dynamic(() => import("@/app/components/contact_us/ContactInfo"));
const DynamicAlert = dynamic(() => import("@/app/components/contact_us/Alert"));

export default function FAQPage() {
  const t = useTranslations('contactUsPage');
  const Terrors = useTranslations("errors");

  return (
    <main>
      {/* Alert Box */}
      <DynamicAlert successNotif={t("successNotif")} errorNotif={t("errorNotif")} />
      
      <section className="px-3 md:px-5 lg:px-24 py-6">
        {/* Contact form */}
        <DynamicContactForm
            nameInputTitle={t("nameInputTitle")}
            nameInputPlaceholder={t("nameInputPlaceholder")}
            phoneInputTitle={t("phoneInputTitle")}
            phoneInputPlaceholder={t("phoneInputPlaceholder")}
            subjectInputTitle={t("subjectInputTitle")}
            subjectInputPlaceholder={t("subjectInputPlaceholder")}
            bodyInputTitle={t("bodyInputTitle")}
            bodyInputPlaceholder={t("bodyInputPlaceholder")}
            sendButton={t("sendButton")}
            errorEmpty={Terrors("empty")}
            errorPhone={Terrors("phone")}
            errorName={Terrors("name")}
            errorMin={Terrors("minLength")}
            errorMax={Terrors("maxLength")}
        />

        {/* map Picture */}
        <section className='flex justify-center mt-12 md:mt-24 mb-10'>
            <Image className='rounded-3xl block' src={"/images/desktop-map.png"} width={1216} height={400} alt='Samina Location' /> 
            {/* <Image className='rounded-3xl block md:hidden' src={"/images/mobile-map.svg"} width={343} height={400} alt='Samina Location' />  */}
        </section>

        {/* Samina Info */}
        <DynamicContactInfo />
      </section>
    </main>
  )
}
