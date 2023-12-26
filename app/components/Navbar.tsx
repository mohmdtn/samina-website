import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 py-6 hidden justify-between max-w-7xl mx-auto md:flex">
      <section className="flex gap-16">
        {/* Site Logo */}
        <div className="flex items-center gap-2">
          <Image src={"/images/logo.svg"} width={40} height={40} alt="samina logo" />
          <h3 className="text-2xl font-bold text-brand-900">ثمینا</h3>
        </div>

        {/* Nav Links */}
        <div className="flex gap-10 text-black text-base font-semibold items-center">
          <Link href={"/"}>خانه</Link>
          <Link href={"/"}>محصولات</Link>
          <Link href={"/"}>تعرفه ها</Link>
          <Link href={"/"}>پشتیبانی و آموزش</Link>
          <Link href={"/"}>تماس با ما</Link>
        </div>
      </section>

      {/* Login Button */}
      <Link href={"/login"} className="border rounded-lg py-2 px-3 text-gray2-700 flex justify-center items-center gap-2 text-sm">
        <Image src={"/icons/login.svg"} width={14} height={14} alt="login icon" />ورود
      </Link>
    </nav>
  );
};

export default Navbar;
