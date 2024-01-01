import Image from "next/image";
import React from "react";

interface CommentSectionProps {
  writer: string;
  showMoreButton: string;
  comments: any[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ writer, showMoreButton, comments }) => {
  return (
    <section>
      <div className="rounded-3xl bg-gray2-50 divide-y-2 divide-gray2-200 mt-8 md:mt-6">
        {comments.map((comment) => {
        return (
            <div key={comment.id} className="p-6">
            <div className="flex gap-3">
                <Image className="rounded-full" src={comment.img} width={56} height={56} alt={comment.writer} />
                <div className="">
                <div className="flex gap-1">
                    <h4 className="text-black text-font-semibold tracking-tight text-lg">{comment.writer}</h4>
                    <span className={`text-sm text-gray-500 flex items-end ${comment.auther ? "block" : "hidden"}`}>{writer}</span>
                </div>
                <div className="text-sm text-gray2-500">{comment.date}</div>
                </div>
            </div>
            <div className="text-sm leading-6 text-gray-500 mt-2">{comment.body}</div>
            </div>
        )
        })}
      </div>
      <div className="mt-3 md:mt-4">
        <button className="border rounded-lg flex justify-center items-center gap-2 p-2 px-3 text-sm leading-6 font-semibold text-gray-700 w-full md:w-auto">
          <Image src={"/icons/refresh.svg"} width={14} height={14} alt="Refresh Icon" />
            {showMoreButton}
          <Image src={"/icons/angleDown.svg"} width={14} height={14} alt="Angle Icon" />
        </button>
      </div>
    </section>
  );
};

export default CommentSection;
