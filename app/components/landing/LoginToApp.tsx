import Link from "next/link";
import { useTranslations } from 'next-intl';

const LoginToApp = () => {
  const t = useTranslations('loginToApp');

  return (
    <section className="max-w-[1216px] mx-auto w-full px-4">
      <section className="bg-gray2-25 rounded-3xl flex flex-col md:flex-row justify-between gap-6 items-center w-full px-3 py-16 md:p-16">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="font-yekanBakhNumbExtraBold text-[40px] md:text-5xl tracking-tighter text-black">{t("title")}</h1>
          <p className="text-sm leading-6 text-gray-600 text-center md:text-start">{t("desc")}</p>
        </div>
        <Link href={"/singup"} className="text-white text-center bg-brand-600 rounded-lg py-[10px] md:py-3 px-6 inline-block w-full md:w-auto">{t("button")}</Link>
      </section>
    </section>
  );
};

export default LoginToApp;
