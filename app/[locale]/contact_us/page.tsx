import Alert from '@/app/components/contact_us/Alert';
import ContactForm from '@/app/components/contact_us/ContactForm';
import ContactInfo from '@/app/components/contact_us/ContactInfo';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function FAQPage() {
  const t = useTranslations('contactUsPage');
  const Terrors = useTranslations("errors");

  return (
    <main>
      {/* Alert Box */}
      <Alert successNotif={t("successNotif")} errorNotif={t("errorNotif")} />
      
      <section className="px-3 md:px-5 lg:px-24 py-6">
        {/* Contact form */}
        <ContactForm
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
        />

        {/* map Picture */}
        <section className='flex justify-center mt-12 md:mt-24 mb-10'>
            <Image className='rounded-3xl hidden md:block' src={"/images/desktop-map.png"} width={1216} height={400} alt='Samina Location' /> 
            <Image className='rounded-3xl block md:hidden' src={"/images/mobile-map.svg"} width={343} height={400} alt='Samina Location' /> 
        </section>

        {/* Samina Info */}
        <ContactInfo />
      </section>
    </main>
  )
}
