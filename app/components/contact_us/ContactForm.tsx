"use client";

import { SiteContext } from "@/app/context/siteContext";
import axios from "axios";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputErrorMessage from "../shared/InputErrorMessage";

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
  errorMin: string;
  errorMax: string;
}

interface IFormInput {
  name: string;
  phone: string;
  title: string;
  desc: string;
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
  errorMin,
  errorMax,
}) => {
  const { loading, setLoading, setTicketStatus } = useContext(SiteContext);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => submitHandle(data);

  const submitHandle = (formData: IFormInput) => {
    const data = {
      "id": 0,
      "name": formData.name,
      "mobile": formData.phone,
      "title": formData.title,
      "description": formData.desc,
    };

    try {
      setLoading(true);
      axios
        .post("http://siteapi.saminasoft.ir/AddSiteTicket", data, {
          headers: { "Accept-Language": "fa-IR", }
        })
        .then(() => {
          setTicketStatus("SUCCESS");
          reset({
            name: "",
            phone: "",
            title: "",
            desc: "",
          });
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
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3 md:gap-5">
            {/* Name */}
            <div className="w-full">
              <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{nameInputTitle}</h5>
              <input 
                {...register("name", {required: errorEmpty, pattern: {value: /^[\u0600-\u06FF\s]+$/ , message: errorName}, minLength: {value: 3, message: errorMin}, maxLength: {value: 18, message: errorMax}})} 
                type="text" 
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${errors?.name && "border-red-500"}`} 
                placeholder={nameInputPlaceholder} 
              />
              {errors?.name?.message && <InputErrorMessage message={errors?.name?.message}/>}
            </div>

            {/* Phone */}
            <div className="w-full">
              <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{phoneInputTitle}</h5>
              <input
                type="text"
                {...register("phone", {required: errorEmpty, pattern: {value: /^0?9[0-9]{9}$/, message: errorPhone}})}
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${errors?.phone && "border-red-500"}`}
                placeholder={phoneInputPlaceholder}
              />
              {errors?.phone?.message && <InputErrorMessage message={errors?.phone?.message}/>}
            </div>

            {/* Subject */}
            <div className="w-full">
              <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{subjectInputTitle}</h5>
              <input
                type="text"
                {...register("title", {required: errorEmpty, minLength: {value: 6, message: errorMin}, maxLength: {value: 40, message: errorMax}})} 
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${errors?.title && "border-red-500"}`}
                placeholder={subjectInputPlaceholder}
              />
              {errors?.title?.message && <InputErrorMessage message={errors?.title?.message}/>}
            </div>

            {/* Body */}
            <div>
              <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{bodyInputTitle}</h5>
              <textarea
                {...register("desc", {required: errorEmpty, minLength: {value: 10, message: errorMin}, maxLength: {value: 300, message: errorMax}})} 
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none min-h-[155px] focus:shadow-md resize-none ${errors?.desc && "border-red-500"}`}
                placeholder={bodyInputPlaceholder}
              ></textarea>
              {errors?.desc?.message && <InputErrorMessage message={errors?.desc?.message}/>}
            </div>

            {/* Send Button */}
            <div className="w-full">
              <button type="submit" className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6 disabled:opacity-70" disabled={loading}>{sendButton}</button>
            </div>
          </form>
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
