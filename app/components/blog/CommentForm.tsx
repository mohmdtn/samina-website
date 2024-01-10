"use client";

import React, { useState } from "react";

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
  errorEmail: string;
  errorEmpty: string;
  errorName: string;
  errorMin: string;
  errorMax: string;
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
  errorEmail,
  errorEmpty,
  errorName,
  errorMax,
  errorMin,
}) => {

  // Input Value States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  // Error States
  const [nameError, setNameError] = useState(false);
  const [nameError2, setNameError2] = useState(false);
  const [nameError3, setNameError3] = useState(false);
  const [nameError4, setNameError4] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailError2, setEmailError2] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [bodyError2, setBodyError2] = useState(false);
  const [bodyError3, setBodyError3] = useState(false);

  const validateHandle = () => {
    if (name.trim() == "") {
      setNameError(true);
      setNameError2(false);
      setNameError3(false);
      setNameError4(false);
    }
    else if(! /^[\u0600-\u06FF\s]+$/.test(name.trim())) {
      setNameError(false);
      setNameError2(true);
      setNameError3(false);
      setNameError4(false);
    }
    else if(name.trim().length > 25) {
      setNameError(false);
      setNameError2(false);
      setNameError3(true);
      setNameError4(false);
    }
    else if(name.trim().length < 3) {
      setNameError(false);
      setNameError2(false);
      setNameError3(false);
      setNameError4(true);
    }
    else {
      setNameError(false);
      setNameError2(false);
      setNameError3(false);
      setNameError4(false);
    }

    if (email.trim() == "") {
      setEmailError(true);
      setEmailError2(false);
    }
    else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmailError2(true);
      setEmailError(false);
    }
    else {
      setEmailError(false);
      setEmailError2(false);
    }

    if (body.trim() == "") {
      setBodyError(true);
      setBodyError2(false);
      setBodyError3(false);
    }
    else if (body.trim().length > 250) {
      setBodyError(false);
      setBodyError2(true);
      setBodyError3(false);
    }
    else if (body.trim().length < 4) {
      setBodyError(false);
      setBodyError2(false);
      setBodyError3(true);
    }
    else {
      setBodyError(false);
      setBodyError2(false);
      setBodyError3(false);
    }


    if (name.trim() !== "" && email.trim() !== "" && body.trim()) {
      return true;
    }
  }

  return (
    <section className="border-b py-6 md:py-8">
      <h1 className={"font-yekanBakhNumbExtraBold text-black text-center md:text-start text-2xl tracking-tight mb-4"}>{commentTitle}</h1>

      {/* Body */}
      <div>
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{commentInputTitle}</h5>
        <textarea maxLength={250} className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none min-h-[155px] resize-none ${bodyError && "border-red-500"} ${bodyError2 && "border-red-500"} ${bodyError3 && "border-red-500"}`} placeholder={commentInputPlaceholder} defaultValue={body} onChange={(e) => setBody(e.target.value)}></textarea>
        {bodyError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
        {bodyError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorMax}</h6>}
        {bodyError3 && <h6 className="text-sm mt-[6px] text-red-600">{errorMin}</h6>}
      </div>

      {/* Writer Info */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-4">
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{nameInputTitle}</h5>
          <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none ${nameError && "border-red-500"} ${nameError2 && "border-red-500"} ${nameError3 && "border-red-500"} ${nameError4 && "border-red-500"}`} placeholder={nameInputPlaceholder} value={name} onChange={(e) => setName(e.target.value)} />
          {nameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          {nameError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorName}</h6>}
          {nameError3 && <h6 className="text-sm mt-[6px] text-red-600">{errorMax}</h6>}
          {nameError4 && <h6 className="text-sm mt-[6px] text-red-600">{errorMin}</h6>}
        </div>

        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{emailInputTitle}</h5>
          <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none ${emailError && "border-red-500"} ${emailError2 && "border-red-500"}`} placeholder={emailInputPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          {emailError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorEmail}</h6>}
        </div>
      </div>

      <div className="mt-3 md:mt-4">
        <button onClick={validateHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full md:w-auto p-2 leading-6 min-w-24">{sendButton}</button>
      </div>
    </section>
  );
};

export default CommentForm;
