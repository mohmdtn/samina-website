import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

const NewNotification = () => {
  const t = useTranslations();

  return (
    <section className="bg-brand-900 text-white flex items-center gap-4 py-3 px-3 md:px-5 lg:px-24">
      <Image src={"/icons/hornWhite.svg"} width={20} height={20} alt="Horn Icon" />
      <p className="text-sm">{t("newNotif")}</p>
    </section>
  );
};

export default NewNotification;
