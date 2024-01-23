import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const DynamicHeaderPosts = dynamic(() => import("@/app/components/blog/HeaderPosts"));
const DynamicMainPosts = dynamic(() => import("@/app/components/blog/MainPosts"));

export default function BlogPage() {
  const t = useTranslations('blogPage');

  return (
    <main className='px-3 md:px-5 lg:px-24'>
      {/* Header Posts */}
      <DynamicHeaderPosts />

      {/* Main Posts */}
      <DynamicMainPosts title={t("title")} option1={t("option1")} option2={t("option2")} option3={t("option3")} />
    </main>
  )
}
