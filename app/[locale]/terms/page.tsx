import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import Loading from '@/app/components/shared/Loading';

const DynamicTermsSection = dynamic(() => import("@/app/components/terms/TermsSection"), {loading: () => <Loading />});

export default function Terms() {
  const t = useTranslations('termsPage');

  return (
    <main className="px-3 md:px-5 lg:px-24 py-6">
      {/* Page Header */}
      <section className="mb-12">
        <h3 className="text-2xl text-black font-bold mb-4">{t("title")}</h3>
        <p className="text-gray2-500 leading-[26px] text-sm md:text-base">{t("desc")}</p>
      </section>

      {/* Site Terms */}
      <DynamicTermsSection />
    </main>
  );
}
