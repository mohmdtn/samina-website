import AboutApp from "../components/landing/AboutApp";
import AppPreview from "../components/landing/AppPreview";
import Company from "../components/landing/Company";
import Hero from "../components/landing/Hero";
import Property from "../components/landing/Property";

export default function Home() {
  return (
    <main>
      <Hero />
      <AppPreview />
      <Property />
      <Company />
      <AboutApp />
    </main>
  );
}
