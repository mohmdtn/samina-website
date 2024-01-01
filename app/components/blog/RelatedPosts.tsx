import React from "react";
import Article from "./Article";

interface RelatedPostsProps {
  relatedPosts: string;
  posts: any[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ relatedPosts, posts }) => {
  return (
    <section className="mt-12 md:mt-16">
      <h1 className="font-yekanBakhNumbExtraBold text-black text-center md:text-start text-2xl tracking-tight mb-4 md:mb-8">{relatedPosts}</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((item) => <div key={item.id} className="w-full"><Article id={item.id} img={item.img} title={item.title} desc={item.desc} date={item.date} auther={item.auther} autherImg={item.autherImg} /></div>)}
      </section>
    </section>
  );
};

export default RelatedPosts;
