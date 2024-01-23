import { SiteContext } from '@/app/context/siteContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import InputErrorMessage from "../shared/InputErrorMessage";

interface NameFormProps {
  section3CompanyTitle: string;
  section3FirstName: string;
  section3LastName: string;
  section3Button: string;
  back: string;
  errorEmpty: string;
  errorName: string;
  errorMin: string;
  errorMax: string;
}

interface IFormInput {
  companyName: string;
  firstName: string;
  lastName: string;
}

const NameForm: React.FC<NameFormProps> = ({ section3CompanyTitle, section3FirstName, section3LastName, section3Button, back, errorEmpty, errorName, errorMin, errorMax, }) => {
  const { setSectionLevel, setFormsData, formsData } = useContext(SiteContext);

  const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>({
    defaultValues: {
      companyName: formsData.company,
      firstName: formsData.fName,
      lastName: formsData.lName,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => handleData(data);

  const handleData = (data: IFormInput) => {
    setFormsData({...formsData, company: data.companyName, fName: data.firstName, lName: data.lastName});
    setSectionLevel("financial");
  }

  return (
    <section className="w-full md:max-w-[360px] mx-auto">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3 md:gap-6 mb-6'>
          {/* Company */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3CompanyTitle}</h5>
            <input 
              type="text" 
              {...register("companyName", {required: errorEmpty, minLength: {value: 3, message: errorMin}, maxLength: {value: 30, message: errorMax}})} 
              className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.companyName && "border-red-500"}`}
            />
            {errors?.companyName?.message && <InputErrorMessage message={errors?.companyName?.message}/>}
          </div>

          {/* First Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3FirstName}</h5>
            <input
              type="text" 
              {...register("firstName", {required: errorEmpty, pattern: {value: /^[\u0600-\u06FF\s]+$/ , message: errorName}, minLength: {value: 3, message: errorMin}, maxLength: {value: 18, message: errorMax}})} 
              className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.firstName && "border-red-500"}`}
            />
            {errors?.firstName?.message && <InputErrorMessage message={errors?.firstName?.message}/>}
          </div>

          {/* Last Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3LastName}</h5>
            <input
              type="text" 
              {...register("lastName", {required: errorEmpty, pattern: {value: /^[\u0600-\u06FF\s]+$/ , message: errorName}, minLength: {value: 3, message: errorMin}, maxLength: {value: 20, message: errorMax}})} 
              className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.lastName && "border-red-500"}`}
            />
            {errors?.lastName?.message && <InputErrorMessage message={errors?.lastName?.message}/>}
          </div>
        </div>

        {/* Send Button */}
        <div className="w-full">
          <button type='submit' className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section3Button}</button>
        </div>

        {/* Back Button */}
        <button onClick={() => setSectionLevel("number")} className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
          <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
        </button>
      </form>

    </section>
  )
}

export default NameForm