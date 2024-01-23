import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const DynamicFAQSection = dynamic(() => import("@/app/components/faq/FAQSection"));

export default function FAQPage() {
  const t = useTranslations('faqPage');

  return (
    <main>
      <DynamicFAQSection title={t("title")} desc={t("desc")} searchTitle={t("searchTitle")} placeholder={t("placeholder")} />
    </main>
  )
}
