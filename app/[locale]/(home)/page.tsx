import AppIntroduction from "../../components/landing/AppIntroduction";
import AppPreview from "../../components/landing/AppPreview";
import Articles from "../../components/landing/Articles";
import Company from "../../components/landing/Company";
import DownloadBox from "../../components/landing/DownloadBox";
import FAQs from "../../components/landing/FAQs";
import Hero from "../../components/landing/Hero";
import LoginToApp from "../../components/landing/LoginToApp";
import Property from "../../components/landing/Property";
import TeamIntroduction from "../../components/landing/TeamIntroduction";

import { useTranslations } from 'next-intl';

export default function Home() {
  // Mullti Languages For Prop Drilling To Components
  const TappPreview = useTranslations('appPreview');
  const Tcompany = useTranslations('company');
  const TappIntruduction = useTranslations('appIntruduction');
  const Tarticle = useTranslations('articleHome');
  const Tfaq = useTranslations('faqHome');

  return (
    <main>
      <Hero />
      <AppPreview item1={TappPreview("1")} item2={TappPreview("2")} item3={TappPreview("3")} item4={TappPreview("4")} item5={TappPreview("5")} item6={TappPreview("6")} item7={TappPreview("7")} />
      <Property />
      <Company title={Tcompany("title")} />
      <AppIntroduction title={TappIntruduction("title")} desc={TappIntruduction("desc")} />
      <LoginToApp />
      <Articles title={Tarticle("title")} desc={Tarticle("desc")} button={Tarticle("button")} />
      <FAQs title={Tfaq("title")} button={Tfaq("button")} />
      <TeamIntroduction />
      <DownloadBox />
    </main>
  );
}
