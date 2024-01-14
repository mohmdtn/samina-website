"use client";

import { SiteContext } from "@/app/context/siteContext";
import axios from "axios";
import Image from "next/image";
import React, { useContext, useState } from "react";

interface ContactFormProps {
  nameInputTitle: string;
  nameInputPlaceholder: string;
  phoneInputTitle: string;
  phoneInputPlaceholder: string;
  subjectInputTitle: string;
  subjectInputPlaceholder: string;
  bodyInputTitle: string;
  bodyInputPlaceholder: string;
  sendButton: string;
  errorEmpty: string;
  errorPhone: string;
  errorName: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  nameInputTitle,
  nameInputPlaceholder,
  phoneInputTitle,
  phoneInputPlaceholder,
  subjectInputTitle,
  subjectInputPlaceholder,
  bodyInputTitle,
  bodyInputPlaceholder,
  sendButton,
  errorEmpty,
  errorPhone,
  errorName,
}) => {
  const { loading, setLoading, setTicketStatus } = useContext(SiteContext);

  // Input Value States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Error States
  const [nameError, setNameError] = useState(false);
  const [nameError2, setNameError2] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [phoneError2, setPhoneError2] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);

  const numberChange = (e: any) => {
    const numberRegex = /^[0-9\b]+$/;
    if (e.target.value === '' || numberRegex.test(e.target.value)) {
      setPhone(e.target.value)
    }
  }

  const validateHandle = () => {
    if (name.trim() == "") {
      setNameError(true);
      setNameError2(false);
    }
    else if(! /^[\u0600-\u06FF\s]+$/.test(name.trim())) {
      setNameError2(true);
      setNameError(false);
    }
    else {
      setNameError(false);
      setNameError2(false);
    }

    if (phone.trim() == "") {
      setPhoneError(true);
      setPhoneError2(false);
    }
    else if (!phone.trim().match(/^0?9[0-9]{9}$/)) {
      setPhoneError2(true);
      setPhoneError(false);
    }
    else {
      setPhoneError(false);
      setPhoneError2(false);
    }

    if (title.trim() == "") {
      setTitleError(true);
    }
    else {
      setTitleError(false);
    }

    if (desc.trim() == "") {
      setDescError(true);
    }
    else {
      setDescError(false);
    }

    if (name.trim() !== "" && phone.trim() !== "" && title.trim() !== "" && desc.trim() !== "" && /^[\u0600-\u06FF\s]+$/.test(name.trim()) && phone.trim().match(/^0?9[0-9]{9}$/)) {
      submitHandle();
    }
  }

  const submitHandle = () => {
    const data = {
      "id": 0,
      "name": name,
      "mobile": phone,
      "title": title,
      "description": desc,
    };

    try {
      setLoading(true);
      axios
        .post("http://siteapi.saminasoft.ir/AddSiteTicket", data, {
          headers: { "Accept-Language": "fa-IR", }
        })
        .then(() => {
          setTicketStatus("SUCCESS");
          setName("");
          setPhone("");
          setTitle("");
          setDesc("");
        })
        .catch(() => setTicketStatus("ERROR"))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("خطا در برقراری ارتباط!");
    }
  }

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-16">
        {/* Contact Us Form */}
        <section className="md:max-w-2xl w-full md:w-auto flex-1 flex flex-col gap-3 md:gap-5">

          {/* Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{nameInputTitle}</h5>
            <input maxLength={25} minLength={5} type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${nameError && "border-red-500"} ${nameError2 && "border-red-500"}`} placeholder={nameInputPlaceholder} value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
            {nameError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorName}</h6>}
          </div>

          {/* Phone */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{phoneInputTitle}</h5>
            <input maxLength={11} type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${phoneError && "border-red-500"} ${phoneError2 && "border-red-500"}`} placeholder={phoneInputPlaceholder} value={phone} onChange={(e) => numberChange(e)} />
            {phoneError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
            {phoneError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorPhone}</h6>}
          </div>

          {/* Subject */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{subjectInputTitle}</h5>
            <input maxLength={40} minLength={5} type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${titleError && "border-red-500"}`} placeholder={subjectInputPlaceholder} value={title} onChange={(e) => setTitle(e.target.value)} />
            {titleError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          </div>

          {/* Body */}
          <div>
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{bodyInputTitle}</h5>
            <textarea maxLength={300} minLength={5} className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none min-h-[155px] focus:shadow-md resize-none ${descError && "border-red-500"}`} placeholder={bodyInputPlaceholder} onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
            {descError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          </div>

          {/* Send Button */}
          <div className="w-full">
            <button onClick={validateHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6 disabled:opacity-70" disabled={loading}>{sendButton}</button>
          </div>

        </section>

        {/* Form Poster */}
        <div className="hidden md:flex justify-center items-center relative m-4 md:m-5 xl:w-[440px] lg:w-[340px] md:w-[290px]">
          <div className="absolute w-full h-full">
              <div className="bg-gray-100 rounded-3xl w-full h-full relative right-2 bottom-2 sm:right-3 sm:bottom-3 md:right-4 md:bottom-4 lg:right-5 lg:bottom-5" />
          </div>
          <div>
              <Image className="relative z-10 left-2 top-2 sm:left-3 sm:top-3 md:left-4 md:top-4 lg:left-5 lg:top-5" src={"/images/contact-us-poster.png"} width={467} height={556} alt="Contact Us. Samina Team" />
          </div>
        </div>
    </section>
  );
};

export default ContactForm;
