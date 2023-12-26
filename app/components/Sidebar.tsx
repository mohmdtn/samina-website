"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Sidebar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <aside className='bg-white relative px-3'>
      <section className='flex justify-between items-center w-full md:hidden py-6'>
        {/* Menu Button */}
        <div  id="menu-btn" className={`z-40 block hamburger md:hidden focus:outline-none ${menuIsOpen && "open"}`} onClick={() => setMenuIsOpen(prev => !prev)}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>

        {/* Site Logo */}
        <div className="flex items-center gap-2">
          <Image src={"/images/logo.svg"} width={40} height={40} alt="samina logo" />
          <h3 className="text-2xl font-bold text-brand-900">ثمینا</h3>
        </div>
      </section>

      <section className={`absolute flex-col h-[calc(100vh-88px)] left-0 right-0 px-3 bg-gray2-25 z-40 border-t ${menuIsOpen ? "flex" : "hidden"}`}>
        {/* Menu Links */}
        <div className="flex flex-col gap-6 text-black text-lg font-semibold items-start py-6">
          <Link href={"/"}>خانه</Link>
          <Link href={"/"}>محصولات</Link>
          <Link href={"/"}>تعرفه ها</Link>
          <Link href={"/"}>پشتیبانی و آموزش</Link>
          <Link href={"/"}>تماس با ما</Link>
        </div>

        {/* Register Section */}
        <div className="flex w-full flex-col gap-2">
          <Link href={"/singup"} className="text-white text-sm bg-brand-600 rounded-lg py-[10px] px-6 flex justify-center">ثبت نام رایگان</Link>
          <Link href={"/login"} className="border rounded-lg py-[10px] px-3 text-gray2-700 flex justify-center items-center gap-2 text-sm">
            <Image src={"/icons/login.svg"} width={14} height={14} alt="login icon" />ورود
          </Link>
        </div>
      </section>

    </aside>
  )
}

export default Sidebar