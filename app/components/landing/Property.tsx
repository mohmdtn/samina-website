import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

const Property = () => {
  const t = useTranslations('property');

  const items = [
    {id: "propert1", img: "/images/property-simple.svg", title: t("1")},
    {id: "propert2", img: "/images/property-secure.svg", title: t("2")},
    {id: "propert3", img: "/images/property-data.svg", title: t("3")},
    {id: "propert4", img: "/images/property-backup.svg", title: t("4")},
  ];

  return (
    <section className="text-center mt-32 mb-24 px-3 md:px-0">
      <div>
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">{t("title")}</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">{t("desc")}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {items.map((item) => {
          return (
            <div className="flex flex-col justify-center gap-3 md:gap-6 items-center max-w-44" key={item.id}>
              <div className="bg-gray2-25 rounded-3xl p-10"><Image src={item.img} width={96} height={96} alt="App Property" /></div>
              <h4 className="text-sm md:text-base font-semibold leading-6 ">{item.title}</h4>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Property;
