import FAQSection from '@/app/components/faq/FAQSection';
import { useTranslations } from 'next-intl';

export default function FAQPage() {
  const t = useTranslations('faqPage');

  return (
    <main>
      <FAQSection title={t("title")} desc={t("desc")} searchTitle={t("searchTitle")} placeholder={t("placeholder")} />
    </main>
  )
}
