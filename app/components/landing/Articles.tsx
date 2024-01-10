"use client";

import Image from "next/image";
import Slider from "react-slick";

// Import slider css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Article from "../blog/Article";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

const faItems = [
  {
    id: "article1",
    img: "/images/articles/1.jpg",
    date: "5 آذر 1402",
    auther: "سید حمزه قریشی",
    autherImg: "/images/article-auther.png",
    title: "ماده ۹۵ قانون مالیات های مستقیم",
    desc: `نکته در این قانون اینجا است ، که شما به عنوان مودی باید نکات و آئین نامه ها را آشنا باشید. ماده ۹۵ق.م.م

  این امور باید توسط تیم حسابداری به صورت دقیق انجام شود. شاید یکی از مهم ترین ماده های قانون مالیاتی های مستقم ماده ۹۵ می باشد.که البته در حال  حاضر دارای تبصره هایی نیز می باشد . طبق این ماده مودیان به صورت

  دستی
  مکانیزه
  باید فعالیت های خود را ثبت و نگهداری نمایند.
  
  یک نکته بسیار مهم در خصوص نگهداری اسناد و مدارک اسن است که اداره مالیات تا ۵ سال مجاز به سرکشی مجدد حساب ها می باشد.
  
  چگونه مالیات کمتر بپردازیم؟
  در بسیاری از موارد شما میتوانید مالیات سالیانه خود را کاهش دهید.  ماده ۹۵ق.م.م شرط اول دانش کافی در خصوص قوانین مالیات های مستقیم و استانداردهای حسابداری می باشد.
  
  اسناد و مدارک باید به گونه ای کامل باشد که تمام نیاز های ممیز زمان رسیدگی را برطرف نماید.
  
  این اسناد به ما کمک می کنند تا دید بهتری برای فعالیت شرکت خود باز نماییم.
  
  با کمک مشاوران با تجربه مالیاتی ما مالیات سالانه خود را به صورت چشمگیر کاهش دهید.
  
   
  
  چه مدارکی برای رسیدگی مالیاتی ماده ۹۵ق.م.م نیاز است ؟
  اسناد و مدارک حسابداری
  دفتر روزنامه
  دفتر کل
  تراز حساب ها
  ترازنامه
  صورت حساب سود و زیان
  صورت حساب سود و زیان انباشته
  بیشتر بخوانید در  تهیه مدارک ممیزی جهت رسیدگی مالیاتی۲
  مشمولین ماده ۹۵ق.م.م ؟
  اشخاص حقوقی
  اشخاص حقیقی
  تمام افراد در حوزه اقتصادی موظف به ارائه مالیات و ارائه اظهارنامه مالیاتی می باشد.`,
  },
  {
    id: "article2",
    img: "/images/articles/2.jpg",
    date: "5 آذر 1402",
    auther: "سید حمزه قریشی",
    autherImg: "/images/article-auther.png",
    title: "ماده ۱۳۴ قانون مالیات های مستقیم ",
    desc: `در بسیاری از موارد پیش میاد ، که مودیان نسبت به مالیات متلقه خود اعتراض داشته باشند. و نیاز به کاهش این مالیات ها دارند .

    اما اینکه با چه روشی به صورت دقیقا نسبت به میزان مالیات تشخیصی خود اعتراض نمایند . بسیار مهم است . توافق با مالیات تا زمانیکه با چگونگی اعتراض به عملکرد ماموران مالیاتی آشنا نباشید نمی توانید از حقوق خود دفاع کنید.مراحل ثبت اعتراض و توافق با مالیات
    فهرست مطالب
    
    مودی ظرف مدت سی روز پس از ابلاغ برگ تشخیص می تواند به مندرجات برگ تشخیص اعتراض کند
    طبق ماده ۲۳۸ قانون مالیات های مستقیم مودی تا ۳۰ روز از زمان ابلاغ توانایی دارد
    اداره مالیات نیز موظف است در این بازه زمانی تعیین نمایید آیا اعتراض مودی صحیح می باشد یا خیر توافق با مالیات
    در هر دو صورت نظریع خود را پشت نویسی برگ تشخیص می نماید.
    مودی با در درست داشتن لایحه و اسناد  مدارک مورد نظر نسبت به کاهش میزان مالیات اقدام می نماید
    مهلت جهت طرح اعتراض به رئیس امور مالیاتی
    برای قانون مالیات مستقیم : ۳۰ روز پس از ابلاغ برگ تشخیص به مودی
    برای ارزش افزوده : ۲۰ روز پس از تاریخ ابلاغ برگ مطالبه توافق با مالیات
    نکته در خصوص توافق با رئیس امور مالیاتی
    نکته اصلی رسیدگی در موعد مقرر است . یعنی مودی مجاز است در موعد مقرر خود اقدام به اعتراض نماید
    در توافق با ممیز دو حالت پیش می آید :
    در صورت رفع اختلاف با ممیز کل پرونده مختومه می گردد توافق با مالیات
    در صورت عدم رفع اختلاف پرونده به هیات حل اختلاف مالیاتی ارجاع می گردد.`,
  },
  {
    id: "article3",
    img: "/images/articles/3.jpg",
    date: "5 آذر 1402",
    auther: "سید حمزه قریشی",
    autherImg: "/images/article-auther.png",
    title: "توافق با رئیس امور مالیات عملکرد",
    desc: `در بسیاری از موارد پیش میاد ، که مودیان نسبت به مالیات متلقه خود اعتراض داشته باشند. و نیاز به کاهش این مالیات ها دارند .

    اما اینکه با چه روشی به صورت دقیقا نسبت به میزان مالیات تشخیصی خود اعتراض نمایند . بسیار مهم است . توافق با مالیات تا زمانیکه با چگونگی اعتراض به عملکرد ماموران مالیاتی آشنا نباشید نمی توانید از حقوق خود دفاع کنید.
    مراحل ثبت اعتراض و توافق با مالیات
    مودی ظرف مدت سی روز پس از ابلاغ برگ تشخیص می تواند به مندرجات برگ تشخیص اعتراض کند
  طبق ماده ۲۳۸ قانون مالیات های مستقیم مودی تا ۳۰ روز از زمان ابلاغ توانایی دارد
  اداره مالیات نیز موظف است در این بازه زمانی تعیین نمایید آیا اعتراض مودی صحیح می باشد یا خیر توافق با مالیات
  در هر دو صورت نظریع خود را پشت نویسی برگ تشخیص می نماید.
  مودی با در درست داشتن لایحه و اسناد  مدارک مورد نظر نسبت به کاهش میزان مالیات اقدام می نماید
  مهلت جهت طرح اعتراض به رئیس امور مالیاتی
  برای قانون مالیات مستقیم : ۳۰ روز پس از ابلاغ برگ تشخیص به مودی
  برای ارزش افزوده : ۲۰ روز پس از تاریخ ابلاغ برگ مطالبه توافق با مالیات
  نکته در خصوص توافق با رئیس امور مالیاتی
  نکته اصلی رسیدگی در موعد مقرر است . یعنی مودی مجاز است در موعد مقرر خود اقدام به اعتراض نماید
  در توافق با ممیز دو حالت پیش می آید :
  در صورت رفع اختلاف با ممیز کل پرونده مختومه می گردد توافق با مالیات
  در صورت عدم رفع اختلاف پرونده به هیات حل اختلاف مالیاتی ارجاع می گردد.
  بیشتر بخوانید در  تنظیم اظهارنامه مالیات عملکرد سال ۹۸
  خدمات حسابداری پارسا حساب ایرانیان
  ارسال بیمه و مالیات حقوق توافق با مالیات
  ارسال ارزش افزوده فصلی
  ارسال صورت معاملات فصلی ماده ۱۶۹ ق.م.م
  ارسال اظهارنامه مالیات عملکرد
  تحریر دفاتر قانونی
  تحریر لایحه مالیاتی توافق با مالیات
  تحریر لایحه کاهش مالیات
  اعزام نیروی حسابداری
    شرکت در هیات ها حل اختلاف مالیاتی`,
  },
  {
    id: "article4",
    img: "/images/articles/4.jpg",
    date: "5 آذر 1402",
    auther: "سید حمزه قریشی",
    autherImg: "/images/article-auther.png",
    title: "چگونه دفتر روزنامه کل را بنویسیم؟",
    desc: `تحریر دفتر روزنامه
    این دفتر از سند حسابداری اقتباس می گردد. یعنی شما با ثبت سند حسابداری امکان تحریر دفاتر روزنامه را دارید. ثبت اسناد به صورت روزانه می باشد. در حال حاضر نیاز به استفاده از نرم افزار های مالی است. تحریر دفاتر
    
    این نرم افزار ها غالبا فرمت دفاتر را آماده می کنند. و شما به راحتی می توانید آنها را ثبت نمایید.
    
    مانده های نقل  منقول و همچنین فرمت ثبتی هر صفحه متفاوت است.
    
    تحریر دفتر کل
    حساب های مختلف هر کدام تراکنش های مرتبط با خود را دارند. بر این اساس شما باید بدانید که تمام تراکنش های هر حساب در دفتر روزنامه به حساب کل آن سرفصل برده می شود و مانده نهایی تراکنش ها از این طریق مشخص می شود. تحریر دفاتر
    
    خدمات شرکت حسابداری پارسا حساب ایرانیان
    ثبت اسناد حسابداری تحریر دفاتر
    ثبت اسناد مالی در دفتر روزنامه
    تحریر دفاتر طبق آئین نامه تحریر دفاتر
    حمع نقل و منقول
    جمع بندی و خط نهایی تحریر دفاتر
    تحریر دفتر کل طبق آئین نامه تحریر دفاتر
    جمع بندی
    صفحه بندی
    لیست بندی
    درخواست دفاتر قانونی
    دریافت دفاتر قانونی خارج از موعد مقرر
    آموزش تحریر دفاتر
    ریز بینی و جلسه آئین نامه تحریر دفاتر قانونی تحریر دفاتر`,
  },
  {
    id: "article5",
    img: "/images/articles/5.jpeg",
    date: "5 آذر 1402",
    auther: "سید حمزه قریشی",
    autherImg: "/images/article-auther.png",
    title: "نحوه رسیدگی به تراکنشهای بانکی مشکوک",
    desc: `
    نحوه رسیدگی به تراکنشهای بانکی مشکوک ، بر اساس دستور صادره و هماهنگی بانک مرکزی و سازمان امور مالیاتی نسبت به تراکنش های مشکوک حساب ها رسیدگی می شود. این امر به دلیل مبارزه با فرار مالیاتی ، عدم عدالت اجتماعی و مبارزه با پولشویی میباشد.
    شرایط رسیدگی به تراکنشهای بانکی مشکوک
    مراحل اجرایی تراکنشهای بانکی مشکوک
    دریافت حکم رسیدگی توسط گروه ویژه
    دریافت پرونده و اطلاعات تراکنش های بانکی
    اجرای مقررات ۹۵ ، ۹۷ ، ۲۲۹ قانون مالیات های مستقیم
    بررسی اسناد و مدارک تراکنشهای بانکی مشکوک
    دعوت از مودی
    تهیه صورتجلسه ارائه اسناد و مدارک
    تکلیف مودیان که در نظام مالیاتی ثبت نام نکردن چیست؟
    این مودیان حسب مورد تشکیل پرونده مالیاتی می شوند. و تمام دستور العمل های صادره برای ایشان صادر می شود.

    حسب مقررات ماده ۹۳ ق.م.م در قالب ” اشتغال به مشاغل یا عناوین دیگر غیر از مورد مذکور در سایر فصل های این قانون ” می باشد.

    در صورت احراز هرگونه درآمد توسط صاحب حساب ، اداره مالیات باید به تعیین درآمد مشمول مالیات اقدام نمایند.

    در صورت عدم احراز کسب درآمد مشمول مالیات الزامی به صدور برگ تشخیص مالیات نبوده است . تراکنشهای بانکی مشکوک صرفا گزارش مبنی بر عدم نیاز به صدور برگ تشخیص به دفتر بازررسی ویژه ، مبارزه با پول شویی و فرار مالیاتی تهیه و ارسال می گردد.

    بیشتر بخوانید در  ارسال معاملات فصلی ماده ۱۶۹ ق.م.م
    مودیان دارای پرونده مالیاتی تراکنشهای بانکی مشکوک
    این مودیان با توجه به تجمیع گردش بانکی مورد بررسی قرار می گیررند.

    حساب های بانکی با سوابق مالیاتی مودی و حجم فعالیت های تضخیص مودی مطابقت داده می شود.
    `,
  },
];

interface ArticlesProps {
  title: string;
  desc: string;
  button: string;
}

const Articles: React.FC<ArticlesProps> = ({ title, desc, button }) => {
  const sliderRef = useRef<any>(null);
  const componentRef = useRef<HTMLElement>(null);
  const language = useLocale();
  const [initialItems, setInitialItems] = useState(faItems);

  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  // Slider Navigate Functions
  const nextSlide = () => {
    if (sliderRef.current)
      sliderRef.current.slickNext()
  }
  const prevSlide = () => {
    if (sliderRef.current)
      sliderRef.current.slickPrev()
  }

  // Slider Navigate With Arrow Keys
  function checkKey(e: any) {
    if (e.keyCode == '37') {
      if (sliderRef.current)
      sliderRef.current.slickNext()
    }
    else if (e.keyCode == '39') {
      if (sliderRef.current)
      sliderRef.current.slickPrev()
    }
  }
  useEffect(() => {
    document.body.addEventListener('keyup', checkKey)
  
    return () => {
      document.body.removeEventListener('keyup', checkKey)
    }
  })

  useEffect(() => {
    if (language === "fa")
      setInitialItems(faItems)
  }, [language])

  return (
    <section className="mt-32 px-3 md:px-0 overflow-hidden dir-right">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px]">{title}</h2>
        <p className="text-sm leading-6 text-gray-600 pt-4 pb-6">{desc}</p>
      </div>

      {/* Articles */}
      <div>
        {/* Slider For Desktop View */}
        <div className="hidden md:block">
          <Slider ref={sliderRef} {...settings}>
            {initialItems.map((item) => <div key={item.id} className="md:px-3"><Article id={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} /></div>)}
          </Slider>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-3 md:hidden">
          {initialItems.map((item) => <Article id={item.id} key={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} />)}
        </div>

        <div className="mt-3 md:mt-14 w-full flex justify-center relative mb-3 max-w-[1216px] mx-auto md:py-3">
          {/* Show More Button */}
          <Link className="inline-block text-sm text-gray-700 text-center py-[9px] px-5 border border-gray2-300 rounded-lg bg-white w-full md:w-auto" href={`${language}/blog`}>{button}</Link>
          {/* Slider Button */}
          <div className="absolute left-3">
            <div className="hidden md:flex gap-3 select-none">
              <div onClick={nextSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleRight.svg"} width={17} height={17} alt="Angle Icon" /></div>
              <div onClick={prevSlide} className="rounded-full border flex justify-center items-center size-12 cursor-pointer hover:shadow-md duration-150"><Image className="size-4" src={"/icons/angleLeft.svg"} width={17} height={17} alt="Angle Icon" /></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Articles;
