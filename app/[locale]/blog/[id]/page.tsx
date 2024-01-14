import CommentForm from "@/app/components/blog/CommentForm";
import CommentSection from "@/app/components/blog/CommentSection";
import LastPosts from "@/app/components/blog/LastPosts";
import PostContent from "@/app/components/blog/PostContent";
import RelatedPosts from "@/app/components/blog/RelatedPosts";
import { useTranslations } from "next-intl";

const SingleBlogPage = ({ params }: { params: { id: string } }) => {
  const t = useTranslations('singleBlogPage');
  const Terrors = useTranslations('errors');

  const comments = [
    {
      id: "cm1",
      img: "/images/avatar2.png",
      writer: "رضا حسین‌زاده",
      date: "بهمن 1400",
      auther: false,
      body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد"
    },
    {
      id: "cm2",
      img: "/images/article-auther.png",
      writer: "حمزه قریشی",
      date: "اسفند 1400",
      auther: true,
      body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
    }
  ]

  const relatedPosts = [
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
  ];

  const lastPosts = [
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

  return (
    <main className='px-3 md:px-5 lg:px-24'>

      <section className="flex flex-col md:flex-row gap-8">
        <section className="md:w-4/6">
          {/* Post Content */}
          <PostContent id={params.id} time={t("time", {time2: 3})} shareButton={t("share")} />

          {/* Comment Form */}
          {/* <CommentForm 
            commentTitle            ={t("commentTitle")}
            commentInputTitle       ={t("commentInputTitle")}
            commentInputPlaceholder ={t("commentInputPlaceholder")}
            nameInputTitle          ={t("nameInputTitle")}
            nameInputPlaceholder    ={t("nameInputPlaceholder")}
            emailInputTitle         ={t("emailInputTitle")}
            emailInputPlaceholder   ={t("emailInputPlaceholder")}
            sendButton              ={t("sendButton")}
            writer                  ={t("writer")} 
            errorEmail              ={Terrors("email")}
            errorEmpty              ={Terrors("empty")}
            errorName               ={Terrors("name")}
            errorMin                ={Terrors("minLength")}
            errorMax                ={Terrors("maxLength")}
          /> */}

          {/* Comments Section */}
          {/* <CommentSection writer={t("writer")} showMoreButton={t("showMoreButton")} comments={comments} /> */}

        </section>

        <section className="md:w-2/6">
          {/* Last Posts */}
          <LastPosts lastPostsTitle={t("lastPostsTitle")} lastPosts={lastPosts} />
        </section>
      </section>

      {/* Related Posts */}
      <RelatedPosts relatedPosts={t("relatedPosts")} posts={relatedPosts} />

    </main>
  );
};

export default SingleBlogPage;
