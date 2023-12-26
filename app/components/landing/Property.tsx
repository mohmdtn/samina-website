import Image from "next/image";
import React from "react";

const items = [
  {id: "propert1", img: "/images/property-simple.svg", title: "سادگی و راحتی در کنار قدرت و توانایی"},
  {id: "propert2", img: "/images/property-secure.svg", title: "امنیت بالا و اطمینان بابت نگهداری مطمئن اطلاعات"},
  {id: "propert3", img: "/images/property-data.svg", title: "دسترسی به اطلاعات از هر مکان و زمان"},
  {id: "propert4", img: "/images/property-backup.svg", title: "پشتیبانی دائمی و همیشگی"},
]

const Property = () => {
  return (
    <section className="text-center mt-32 mb-24 px-3 md:px-0">
      <div>
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">ویژگی های نرم افزار</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">مهمترین ویژگی ها و امکانات این نرم افزار به شرح زیر می باشد</p>
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
