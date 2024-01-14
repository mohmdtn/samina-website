"use client";

import Link from "next/link";
import FAQ from "../faq/FAQ";
import { useLocale } from 'next-intl';
import { useEffect, useState } from "react";

const faItems = [
  {id: "faq1", question: "چگونه می توانم از نرم افزار ثمینا استفاده کنم؟", answer: "این برنامه به شکل آنلاین در اختیار کاربران قرار می گیرد و احتیاج به نصب هیچگونه نرم افزار جانبی خاصی ندارد . بنابراین از طریق یک مرورگر ، بر روی کامپیوتر ، لپ تاپ و یا تبلت خود می توانید به سایت نرم افزار دسترسی داشته باشید و از تمامی امکانات آن استفاده نمایید."},
  {id: "faq2", question: "چگونه می توانم دمو نرم افزار ثمینا را ببینم؟", answer: "دسترسی به تمامی بخش ها ، امکانات و ابزارهای نرم افزار ثمینا به مدت 30 روز به شکل رایگان وجود دارد . برای این منظور ، کافی است از بخش ثبت نام رایگان و با وارد کردن ایمیل یا شماره همراه خود ثبت نام کرده و از نرم افزار استفاده کنید."},
  {id: "faq3", question: "هزینه ها و تعرفه های نرم افزار به چه شکل می باشد؟", answer: "دسترسی به تمامی بخش های نرم افزار ثمینا ، کاملا رایگان می باشد و تمامی کاربران، به همه بخش های نرم افزار دسترسی خواهند داشت هزینه ها در ثمینا بر اساس اشتراک استفاده از آن می باشد که به صورت ماهیانه و یا سالیانه در بخش تعرفه های سایت آمده است ."},
  {id: "faq4", question: "آیا اطلاعات نرم افزار به اداره دارایی ارسال می شود؟", answer: "خیر، اطلاعات شما به اداره دارایی ارسال نمی شود . ثمینا متعهد است که اطلاعات کاربران را محرمانه نگه داشته و در اختیار شخص ثالثی قرار ندهد مگر با حکم نهادهای امنیتی و قضایی که در این صورت نیز ، حتماً قبل از آن موارد به اطلاع کاربر می رسد."},
  {id: "faq5", question: "بک آپ و پشتیبانی از اطلاعات به چه شکل می باشد؟", answer: "در طول شبانه روز 4 نوبت از کلیه اطلاعات شما بک آپ گرفته می شود . همچنین در هر لحظه این امکان برای شما وجود خواهد داشت ، که از اطلاعات مهم خود بوسیله فایل اکسل خروجی تهیه کنید."},
  {id: "faq6", question: "اگر اینترنت قطع شد ، چه اتفاقی برای اطلاعات من می افتد؟", answer: "اول اینکه سیستم ارتباطی ثمینا به شکلی طراحی شده است ، که ارتباطی امن و دائمی برای نرم افزار تدارک دیده شده و به صورت دائمی اطلاعات در دسترس خواهد بود . حتی در زمان قطع شدن اینترنت بین الملل ، از آنجا که سرور های ما در داخل ایران هستند ، باز هم ثمینا با اینترنت داخلی به فعالیت خود ادامه خواهد داد و اطلاعات در دسترس خواهند بود . البته در صورتی که اینترنت به طور کامل قطع شود، ثمینا نیز همانند سایر وب سایت های داخلی از دسترس خارج خواهد شد که این مسئله بسیار بعید و دور از ذهن است، زیرا در این صورت دسترسی به تمامی وب سایت ها و سیستم ها نظیر بانک ها و موسسات دولتی نیز ممکن نخواهد بود ."},
  {id: "faq7", question: "آیا امکان ورود و یا خروج اطلاعات بوسیله فایل اکسل وجود دارد؟", answer: "در بخش های اصلی و مهم سیستم مثل تعریف کالا ، طرف حساب ، فاکتورها ، رسید ها ، نقل و انتقال چک ها ، اسناد حسابدرای و ... این امکان برای کاربران فراهم شده است ."},
]

interface FAQsProps {
  button: string;
  title: string;
}

const FAQs: React.FC<FAQsProps> = ({ button, title }) => {
  const language = useLocale();
  const [initialItems, setInitialItems] = useState(faItems);

  // Change Items For Every Existing Language
  useEffect(() => {
    if (language === "fa")
      setInitialItems(faItems)
  }, [language]);

  return (
    <section className="px-4 mt-12 md:mt-24">
      {/* Section Title */}
      <h2 className="font-yekanBakhNumbExtraBold text-balck text-[32px] md:text-[40px] text-center mb-8">{title}</h2>
      
      {/* FAQs */}
      <div className="flex flex-col gap-3">
        {initialItems.map((item) => <FAQ key={item.id} id={item.id} question={item.question} answer={item.answer} open={false} />)}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-3 md:mt-14">
        <Link className="inline-block text-sm text-gray-700 text-center py-[9px] px-5 border border-gray2-300 rounded-lg bg-white w-full md:w-auto" href={`${language}/faq`}>{button}</Link>
      </div>
    </section>
  );
};

export default FAQs;
