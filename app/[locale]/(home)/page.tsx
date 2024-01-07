import Plans from "@/app/components/Plans";
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
  const Tplans = useTranslations('plans')

  return (
    <main>
      <Hero />
      <AppPreview item1={TappPreview("1")} item2={TappPreview("2")} item3={TappPreview("3")} item4={TappPreview("4")} item5={TappPreview("5")} item6={TappPreview("6")} item7={TappPreview("7")} />
      <Property />
      <Company title={Tcompany("title")} />
      <AppIntroduction title={TappIntruduction("title")} desc={TappIntruduction("desc")} />
      <Plans
        periodTitle1={Tplans("periodTitle1")}
        periodTitle2={Tplans("periodTitle2")}
        periodTitle3={Tplans("periodTitle3")}
        periodTitle4={Tplans("periodTitle4")}
        numberOfAccounts={Tplans("numberOfAccounts")}
        numberOfUsers={Tplans("numberOfUsers")}
        numberOfStuff={Tplans("numberOfStuff")}
        numberOfDocuments={Tplans("numberOfDocuments")}
        mobileVersion={Tplans("mobileVersion")}
        store={Tplans("store")}
        api={Tplans("api")}
        smsPanel={Tplans("smsPanel")}
        log={Tplans("log")}
        toman={Tplans("toman")}
        buttonPlan={Tplans("button")}
      />
      <LoginToApp />
      <Articles title={Tarticle("title")} desc={Tarticle("desc")} button={Tarticle("button")} />
      <FAQs title={Tfaq("title")} button={Tfaq("button")} />
      <TeamIntroduction />
      <DownloadBox />
    </main>
  );
}
