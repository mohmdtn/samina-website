import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray2-25">
      <section className="text-center max-w-[682px] mx-auto pt-20 px-3 md:px-0">
        <h1 className="text-blaxk text-[40px] md:text-6xl font-yekanBakhNumbExtraBold tracking-tighter">نرم افزار حسابـــداری <span className="text-brand-600 block md:inline-block">ثمینــــا</span></h1>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">در کنار پیچیدگی ها و سختی های علم حسابداری، نرم فزار ثمینا  ساز و کاری ساده، روان و زیبا برای کسب و کار شما در نظر گرفته، که نیازهای یک مغازه و فروشگاه کوچک تا یک شرکت با چندین شعبه و سازمان را به راحتی مرتفع می کند.</p>
       <Link href={"/singup"} className="text-white bg-brand-600 rounded-lg py-[10px] md:py-3 px-6 inline-block w-full md:w-auto">ثبت نام رایگان</Link>
      </section>
    </section>
  );
};

export default Hero;
