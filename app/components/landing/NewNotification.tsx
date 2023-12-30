import Image from "next/image";
import React from "react";

const NewNotification = () => {
  return (
    <section className="bg-brand-900 text-white flex items-center gap-4 py-3 px-3 md:px-5 lg:px-24">
      <Image src={"/icons/hornWhite.svg"} width={20} height={20} alt="Horn Icon" />
      <p className="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است!</p>
    </section>
  );
};

export default NewNotification;
