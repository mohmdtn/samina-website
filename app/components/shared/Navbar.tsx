import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useLocale, useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations('menu');
  const language = useLocale();

  return (
    <nav className="bg-white px-3 md:px-5 lg:px-24 py-5 hidden justify-between md:flex sticky top-0 bg-opacity-75 backdrop-blur-xl z-50">
      <section className="flex gap-16">
        {/* Site Logo */}
        <Logo name="ثمینا"/>

        {/* Nav Links */}
        <div className="flex md:gap-6 lg:gap-10 text-black text-base font-semibold items-center">
          <Link href={"/"}>{t("1")}</Link>
          <Link href={"/"}>{t("2")}</Link>
          <Link href={`/${language}#plans`}>{t("3")}</Link>
          <Link href={"/"}>{t("4")}</Link>
          <Link href={`/${language}/contact_us`}>{t("5")}</Link>
        </div>
      </section>

      {/* Login Button */}
      <Link href={`http://app.saminasoft.ir/`} target="_blank" className="border rounded-lg py-2 px-3 bg-white text-gray2-700 flex justify-center items-center gap-2 text-sm">
        <Image src={"/icons/login.svg"} width={14} height={14} alt="login icon" />{t("loginButton")}
      </Link>
    </nav>
  );
};

export default Navbar;
