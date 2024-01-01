import HeaderPosts from '@/app/components/blog/HeaderPosts';
import MainPosts from '@/app/components/blog/MainPosts';
import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blogPage');

  return (
    <main className='px-3 md:px-5 lg:px-24'>
      {/* Header Posts */}
      <HeaderPosts />

      {/* Main Posts */}
      <MainPosts title={t("title")} option1={t("option1")} option2={t("option2")} option3={t("option3")} />
    </main>
  )
}
