import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import SocialMedia from '../components/SocialMedia'
import NewNotification from '../components/landing/NewNotification'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = useTranslations('menu');

  return (
    <html lang="en">
      <body className=''>
        <NewNotification />
        <Navbar />
        <Sidebar item1={t("1")} item2={t("2")} item3={t("3")} item4={t("5")} item5={t("5")} />
        {children}
        <Footer />
        <SocialMedia />
      </body>
    </html>
  )
}
