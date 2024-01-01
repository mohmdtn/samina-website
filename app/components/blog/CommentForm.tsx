import React from "react";

interface CommentFormProps {
  commentTitle: string;
  commentInputTitle: string;
  commentInputPlaceholder: string;
  nameInputTitle: string;
  nameInputPlaceholder: string;
  emailInputTitle: string;
  emailInputPlaceholder: string;
  sendButton: string;
  writer: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
  commentTitle,
  commentInputTitle,
  commentInputPlaceholder,
  nameInputTitle,
  nameInputPlaceholder,
  emailInputTitle,
  emailInputPlaceholder,
  sendButton,
  writer,
}) => {

  return (
    <section className="border-b py-6 md:py-8">
      <h1 className="font-yekanBakhNumbExtraBold text-black text-center md:text-start text-2xl tracking-tight mb-4">{commentTitle}</h1>

      {/* Body */}
      <div>
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{commentInputTitle}</h5>
        <textarea className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none min-h-[155px]" placeholder={commentInputPlaceholder}></textarea>
      </div>

      {/* Writer Info */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-4">
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{nameInputTitle}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" placeholder={nameInputPlaceholder} />
        </div>

        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{emailInputTitle}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" placeholder={emailInputPlaceholder} />
        </div>
      </div>

      <div className="mt-3 md:mt-4">
        <button className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full md:w-auto p-2 leading-6 min-w-24">{sendButton}</button>
      </div>
    </section>
  );
};

export default CommentForm;
