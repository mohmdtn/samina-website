import Link from "next/link";

const LoginToApp = () => {
  return (
    <section className="bg-gray2-25 rounded-3xl flex flex-col md:flex-row justify-between gap-6 items-center w-full max-w-[1216px] mx-auto px-3 py-16 md:p-16">
      <div className="flex flex-col items-center md:items-start gap-4">
        <h1 className="font-yekanBakhNumbExtraBold text-[40px] md:text-5xl tracking-tighter text-black">ورود به نرم افزار</h1>
        <p className="text-sm leading-6 text-gray-600 text-center md:text-right">از هر نقطه و در هر زمان به دیتای مالی و حسابداری خود در محیطی امن و مطمئن دسترسی داشته باشید.</p>
      </div>
      <Link href={"/singup"} className="text-white text-center bg-brand-600 rounded-lg py-[10px] md:py-3 px-6 inline-block w-full md:w-auto">ثبت نام رایگان</Link>
    </section>
  );
};

export default LoginToApp;
