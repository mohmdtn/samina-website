import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const DynamicPostContent = dynamic(() => import("@/app/components/blog/PostContent"));
const DynamicLastPosts = dynamic(() => import("@/app/components/blog/LastPosts"));
const DynamicRelatedPosts = dynamic(() => import("@/app/components/blog/RelatedPosts"));

// const DynamicCommentForm = dynamic(() => import("@/app/components/blog/CommentForm"));
// const DynamicCommentSection = dynamic(() => import("@/app/components/blog/CommentSection"));

import { lastPosts } from "@/public/data/lastPosts";
import { relatedPosts } from "@/public/data/relatedPosts";

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

  return (
    <main className='px-3 md:px-5 lg:px-24'>

      <section className="flex flex-col md:flex-row gap-8">
        <section className="md:w-4/6">
          {/* Post Content */}
          <DynamicPostContent id={params.id} time={t("time", {time2: 3})} shareButton={t("share")} />

          {/* Comment Form */}
          {/* <DynamicCommentForm 
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
          {/* <DynamicCommentSection writer={t("writer")} showMoreButton={t("showMoreButton")} comments={comments} /> */}

        </section>

        <section className="md:w-2/6">
          {/* Last Posts */}
          <DynamicLastPosts lastPostsTitle={t("lastPostsTitle")} lastPosts={lastPosts} />
        </section>
      </section>

      {/* Related Posts */}
      <DynamicRelatedPosts relatedPosts={t("relatedPosts")} posts={relatedPosts} />

    </main>
  );
};

export default SingleBlogPage;
