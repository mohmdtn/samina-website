import AppIntroduction from "../components/landing/AppIntroduction";
import AppPreview from "../components/landing/AppPreview";
import Articles from "../components/landing/Articles";
import Company from "../components/landing/Company";
import DownloadBox from "../components/landing/DownloadBox";
import FAQs from "../components/landing/FAQs";
import Hero from "../components/landing/Hero";
import LoginToApp from "../components/landing/LoginToApp";
import Property from "../components/landing/Property";
import TeamIntroduction from "../components/landing/TeamIntroduction";

export default function Home() {
  return (
    <main>
      <Hero />
      <AppPreview />
      <Property />
      <Company />
      <AppIntroduction />
      <LoginToApp />
      <Articles />
      <FAQs />
      <TeamIntroduction />
      <DownloadBox />
    </main>
  );
}
