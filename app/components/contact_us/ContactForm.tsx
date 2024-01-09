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
}) => {
  const { loading, setLoading, setTicketStatus } = useContext(SiteContext);

  // Input Value States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Error States
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);

  const validateHandle = () => {
    if (name.trim() == "") {
      setNameError(true);
    }
    else {
      setNameError(false);
    }

    if (phone.trim() == "") {
      setPhoneError(true);
    }
    else {
      setPhoneError(false);
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

    if (name.trim() !== "" && phone.trim() !== "" && title.trim() !== "" && desc.trim() !== "") {
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
            <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${nameError && "border-red-500"}`} placeholder={nameInputPlaceholder} value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          </div>

          {/* Phone */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{phoneInputTitle}</h5>
            <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${phoneError && "border-red-500"}`} placeholder={phoneInputPlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} />
            {phoneError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          </div>

          {/* Subject */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{subjectInputTitle}</h5>
            <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${titleError && "border-red-500"}`} placeholder={subjectInputPlaceholder} value={title} onChange={(e) => setTitle(e.target.value)} />
            {titleError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          </div>

          {/* Body */}
          <div>
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{bodyInputTitle}</h5>
            <textarea className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none min-h-[155px] focus:shadow-md ${descError && "border-red-500"}`} placeholder={bodyInputPlaceholder} onChange={(e) => setDesc(e.target.value)} defaultValue={desc}></textarea>
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
