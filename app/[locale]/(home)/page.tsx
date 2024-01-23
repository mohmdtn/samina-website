import dynamic from "next/dynamic";
import { useTranslations } from 'next-intl';

const DynamicHero = dynamic(() => import("@/app/components/landing/Hero"));
const DynamicAppPreview = dynamic(() => import("@/app/components/landing/AppPreview"));
const DynamicProperty = dynamic(() => import("@/app/components/landing/Property"));
const DynamicAppIntroduction = dynamic(() => import("@/app/components/landing/AppIntroduction"));
const DynamicPlans = dynamic(() => import("@/app/components/shared/Plans"), {ssr: false});
const DynamicLoginToApp = dynamic(() => import("@/app/components/landing/LoginToApp"));
const DynamicArticle = dynamic(() => import("@/app/components/landing/Articles"));
const DynamicFAQs = dynamic(() => import("@/app/components/landing/FAQs"));
const DynamicTeamIntroduction = dynamic(() => import("@/app/components/landing/TeamIntroduction"));

// const DynamicCompany = dynamic(() => import("@/app/components/landing/Company"));
// const DynamicDownloadBox = dynamic(() => import("@/app/components/landing/DownloadBox"));

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
      <DynamicHero />
      <DynamicAppPreview item1={TappPreview("1")} item2={TappPreview("2")} item3={TappPreview("3")} item4={TappPreview("4")} item5={TappPreview("5")} item6={TappPreview("6")} item7={TappPreview("7")} />
      <DynamicProperty />
      {/* <DynamicCompany title={Tcompany("title")} /> */}
      <DynamicAppIntroduction title={TappIntruduction("title")} desc={TappIntruduction("desc")} />
      <DynamicPlans
        landing={true}
        title={Tplans("title")}
        desc={Tplans("desc")}
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
        loginText={Tplans("login")}
        login={true}
      />
      <DynamicLoginToApp />
      <DynamicArticle title={Tarticle("title")} desc={Tarticle("desc")} button={Tarticle("button")} />
      <DynamicFAQs title={Tfaq("title")} button={Tfaq("button")} />
      <DynamicTeamIntroduction />
      {/* <DynamicDownloadBox /> */}
    </main>
  );
}
