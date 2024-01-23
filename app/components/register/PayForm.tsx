import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import type{Value} from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { SiteContext } from "@/app/context/siteContext";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputErrorMessage from "../shared/InputErrorMessage";

interface PayFormProps {
  section6GeneralInfoTtile: string;
  section6SubscribeInfoTitle: string;
  section6SubscribeTitle: string;
  section6StartDate: string;
  section6EndDate: string;
  section6PayInfoTitle: string;
  section6SubscripPrice: string;
  section6AddDiscount: string;
  section6TotalPrice: string;
  section6PayButton: string;
  section6Tax: string;
  discountAddButton: string;
  discountRemoveButton: string;
  discountSuccess: string;
  discountError: string;

  section1InputTitle: string;
  section3CompanyTitle: string;
  section3FirstName: string;
  section3LastName: string;
  section4InputTitle: string;
  section4InputStart: string;
  section4InputEnd: string;
  back: string;
  section6BankError: string;
  section6Error: string;

  errorEmpty: string;
  errorName: string;
  errorMin: string;
  errorMax: string;
}

interface IFormInput {
  companyName: string;
  firstName: string;
  lastName: string;
  periodName: string;
  startDate: string;
  endDate: string;
}

const payProvider = [
  {id: "1", img: "/images/bank-saman.svg",    name: "Bank Saman"},
  {id: "2", img: "/images/asan-pardakht.svg", name: "Asan Pardakht"},
  {id: "3", img: "/images/bank-pasargad.svg", name: "Bank Pasargad"},
]

const PayForm: React.FC<PayFormProps> = ({
  section6GeneralInfoTtile,
  section6SubscribeInfoTitle,
  section6SubscribeTitle,
  section6StartDate,
  section6EndDate,
  section6PayInfoTitle,
  section6SubscripPrice,
  section6Tax,
  section6AddDiscount,
  section6TotalPrice,
  section6PayButton,
  discountAddButton,
  discountRemoveButton,
  discountSuccess,
  discountError,

  section1InputTitle,
  section3CompanyTitle,
  section3FirstName,
  section3LastName,
  section4InputTitle,
  section4InputStart,
  section4InputEnd,
  back,
  section6BankError,
  section6Error,
  errorEmpty,
  errorName,
  errorMin,
  errorMax,
}) => {
  const { setSectionLevel, setFormsData, formsData, loading, setLoading } = useContext(SiteContext);
  const [startDate, setStartDate] = useState<Value>(formsData.startDate);
  const [endDate, setEndDate] = useState<Value>(formsData.endDate);
  const [discountBtn, setDiscountBtn] = useState(discountAddButton);
  const [isDiscountShow, setIsDiscountShow] = useState(false);

  const [companyEdit, setCompanyEdit] = useState(false);
  const [fNameEdit, setfNameEdit] = useState(false);
  const [lNameEdit, setlNameEdit] = useState(false);
  const [periodEdit, setPeriodEdit] = useState(false);
  const [startDateEdit, setstartDateEdit] = useState(false);
  const [endDateEdit, setEndDateEdit] = useState(false);

  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => handleData(data);

  const handleData = (data: IFormInput) => {
    // @ts-ignore
    if (startDate?.toDate) {
      // @ts-ignore
      setFormsData({...formsData, ISOStartDate: startDate?.toDate()?.toISOString()});
    }

    // @ts-ignore
    if (endDate?.toDate) {
      // @ts-ignore
      setFormsData({...formsData, ISOEndDate: endDate?.toDate()?.toISOString()});
    }

    if (formsData.bankId === "") {
      setBankError(true);
    }
    else {
      setBankError(false);
      submitHandle();
    }
  }

  // Errors State
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [bankError, setBankError] = useState(false);
  const [allError, setAllError] = useState(false);

  const submitHandle = () => {
    const data = {
      "userName"            : formsData.number,
      "branchTitle"         : "string",
      "name"                : formsData.fName,
      "family"              : formsData.lName,
      "financialPeriodTitle": formsData.periodName,
      "startDate"           : formsData.ISOStartDate,
      "endDate"             : formsData.ISOEndDate,
      "planId"              : formsData.planId,
      "buyPrice"            : formsData.planPrice,
      "discountedPrice"     : formsData.planPrice,
      "payBankId"           : +formsData.bankId,
      "payCode"             : ""
    }

    try {
      setLoading(true);
      axios
        .post("http://siteapi.saminasoft.ir/SiteRegister", data, {
          headers: {
            "Accept-Language": "fa-IR",
          }
        })
        .then(() => setSectionLevel("callback"))
        .catch(() => alert("خطا در برقراری ارتباط!"))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("2خطا در برقراری ارتباط!");
    }
  }

  useEffect(() => {
    setFormsData({...formsData, startDate: startDate?.toLocaleString()});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate])

  useEffect(() => {
    setFormsData({...formsData, endDate: endDate?.toLocaleString()});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate])

  useEffect(() => {
    reset({
      companyName: formsData.company,
      firstName: formsData.fName,
      lastName: formsData.lName,
      periodName: formsData.periodName,
      startDate: formsData.startDate,
      endDate: formsData.endDate,
    })
  }, [formsData])

  return (
    <section className="flex flex-col md:flex-row gap-12 max-w-[770px] mx-auto">

      {/* Information Input Section */}
      <section className="md:w-1/2">
        <h3 className="text-lg text-black font-semibold tracking-tight mb-6">{section6GeneralInfoTtile}</h3>
        <div className="flex flex-col gap-3 md:gap-6">
          
          {/* Phone */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section1InputTitle}</h5>
            <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none disabled:bg-gray2-50" disabled value={formsData.number} />
          </div>

          {/* Company */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3CompanyTitle}</h5>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("companyName", {required: errorEmpty, minLength: {value: 3, message: errorMin}, maxLength: {value: 30, message: errorMax}})} 
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 disabled:bg-gray2-50 ${errors?.companyName && "border-red-500"}`}
                disabled={!companyEdit}
                value={formsData.company}
                onChange={(e) => setFormsData({...formsData, company: e.target.value})}
              />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setCompanyEdit(true)} />
            </div>
            {errors?.companyName?.message && <InputErrorMessage message={errors?.companyName?.message}/>}
          </div>

          {/* First Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3FirstName}</h5>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("firstName", {required: errorEmpty, pattern: {value: /^[\u0600-\u06FF\s]+$/ , message: errorName}, minLength: {value: 3, message: errorMin}, maxLength: {value: 18, message: errorMax}})}
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 disabled:bg-gray2-50 ${errors?.firstName && "border-red-500"}`}
                disabled={!fNameEdit}
                value={formsData.fName}
                onChange={(e) => setFormsData({...formsData, fName: e.target.value})}
              />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setfNameEdit(true)} />
            </div>
            {errors?.firstName?.message && <InputErrorMessage message={errors?.firstName?.message}/>}
          </div>

          {/* Last Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3LastName}</h5>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("lastName", {required: errorEmpty, pattern: {value: /^[\u0600-\u06FF\s]+$/ , message: errorName}, minLength: {value: 3, message: errorMin}, maxLength: {value: 20, message: errorMax}})} 
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 disabled:bg-gray2-50 ${errors?.lastName && "border-red-500"}`}
                disabled={!lNameEdit}
                value={formsData.lName}
                onChange={(e) => setFormsData({...formsData, lName: e.target.value})}
              />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setlNameEdit(true)} />
            </div>
            {errors?.lastName?.message && <InputErrorMessage message={errors?.lastName?.message}/>}
          </div>

          {/* Finantional Period Ttile */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputTitle}</h5>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("periodName", {required: errorEmpty, minLength: {value: 5, message: errorMin}, maxLength: {value: 30, message: errorMax}})} 
                className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 disabled:bg-gray2-50 ${errors?.periodName && "border-red-500"}`}
                disabled={!periodEdit}
                value={formsData.periodName}
                onChange={(e) => setFormsData({...formsData, periodName: e.target.value})}
              />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setPeriodEdit(true)} />
            </div>
            {errors?.periodName?.message && <InputErrorMessage message={errors?.periodName?.message}/>}
          </div>

          {/* Start Date */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputStart}</h5>
            <Controller
              control={control}
              name="startDate"
              rules={{required: errorEmpty}}
              render={({
                field: { onChange, name, value },
                formState: { errors }, 
              }) => (
                <div className="flex items-center relative">
                  <DatePicker
                    inputClass={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md disabled:bg-gray2-50 ${errors?.startDate && "border-red-500"}`}
                    containerClassName="w-full"
                    value={value || ""}
                    onChange={(date) => {
                      onChange(date);
                      setStartDate(date);
                    }} 
                    calendar={persian} 
                    locale={persian_fa} 
                    disabled={!startDateEdit}
                  />
                  <Image className="absolute left-3 cursor-pointer" src={"/icons/edit.svg"} width={18} height={18} alt="Calendar Icon" onClick={() => setstartDateEdit(true)} />
                </div>
              )
            }
            />
            {errors?.startDate?.message && <InputErrorMessage message={errors?.startDate?.message}/>}
          </div>

          {/* End Date */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputEnd}</h5>
            <Controller
              control={control}
              name="endDate"
              rules={{required: errorEmpty}}
              render={({
                field: { onChange, name, value },
                formState: { errors }, 
              }) => (
                <div className="flex items-center relative">
                  <DatePicker
                    inputClass={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md disabled:bg-gray2-50 ${errors?.endDate && "border-red-500"}`}
                    containerClassName="w-full"
                    value={value || ""}
                    onChange={(date) => {
                      onChange(date);
                      setEndDate(date);
                    }} 
                    calendar={persian} 
                    locale={persian_fa} 
                    disabled={!endDateEdit}
                  />
                  <Image className="absolute left-3 cursor-pointer" src={"/icons/edit.svg"} width={18} height={18} alt="Calendar Icon" onClick={() => setEndDateEdit(true)} />
                </div>
              )
            }
            />
            {errors?.endDate?.message && <InputErrorMessage message={errors?.endDate?.message}/>}
          </div>

        </div>
      </section>


      {/* Subscribtion Information */}
      <section className="md:w-1/2">

        {/* Subscribe Info */}
        <h3 className="text-lg text-black font-semibold tracking-tight mb-6">{section6SubscribeInfoTitle}</h3>
        <div className="flex flex-col gap-6">

          {/* Subscribe Title */}
          <div className="flex justify-between">
            <h4 className="text-gray-700 text-sm font-semibold leading-6">{section6SubscribeTitle}</h4>
            <h5 className="text-gray-700 text-sm font-semibold leading-6">{formsData.planName}</h5>
          </div>

          {/* Subscribe Start Date */}
          <div className="flex justify-between">
            <h4 className="text-gray-700 text-sm font-semibold leading-6">{section6StartDate}</h4>
            <h5 className="text-gray-700 text-sm font-semibold leading-6">{formsData.startDate}</h5>
          </div>

          {/* Subscribe End Date */}
          <div className="flex justify-between">
            <h4 className="text-gray-700 text-sm font-semibold leading-6">{section6EndDate}</h4>
            <h5 className="text-gray-700 text-sm font-semibold leading-6">{formsData.endDate}</h5>
          </div>

        </div>


        {/* Pay Info */}
        <h3 className="text-lg text-black font-semibold tracking-tight mb-6 mt-10">{section6PayInfoTitle}</h3>
        <div className="flex flex-col gap-6">

          {/* Subscribe Price */}
          <div className="flex justify-between">
            <h4 className="text-gray-700 text-sm font-semibold leading-6">{section6SubscripPrice}</h4>
            <h5 className="text-gray-700 text-sm font-semibold leading-6">{formsData.planPrice}</h5>
          </div>

          {/* Subscribe Tax */}
          <div className="flex justify-between">
            <h4 className="text-gray-700 text-sm font-semibold leading-6">{section6Tax}</h4>
            <h5 className="text-gray-700 text-sm font-semibold leading-6">0</h5>
          </div>

          {/* Discount */}
          <div className="w-full">
            <h4 className={`text-sm font-semibold mb-[6px] leading-6 ${isDiscountShow ? "text-gray-700" : "text-brand-600 cursor-pointer"}`} onClick={() => setIsDiscountShow(true)}>{section6AddDiscount}</h4>
            <div className={`relative items-center ${isDiscountShow ? "flex" : "hidden"}`}>
              <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" />
              <h3 className="text-sm font-semibold absolute left-3 cursor-pointer text-brand-600">{discountBtn}</h3>
            </div>
            <p className={`text-sm leading-6 font-semibold mt-[6px] ${discountError ? "text-success-600" : "text-red-600"}`}>{}</p>
          </div>

          {/* Total Price */}
          <div className="flex justify-between">
            <h4 className="text-gray-700 text-sm font-semibold leading-6">{section6TotalPrice}</h4>
            <h5 className="text-gray-700 text-sm font-semibold leading-6">{formsData.planPrice}</h5>
          </div>

        </div>

        {/* Pay Banks */}
        <div>
          <div className="flex justify-between mt-6">
            {payProvider.map((item) => {
              return (
                <label htmlFor={item.id} key={item.id} className={`md:size-[108px] size-24 bg-gray2-50 rounded-[10px] flex flex-col justify-center items-center cursor-pointer border ${formsData.bankId === item.id ? "border-brand-500" : "border-[#0000]"}`} onClick={() => setFormsData({...formsData, bankId: item.id})}>
                  <Image src={item.img} width={52} height={44} alt={item.name} className="mb-3" />
                  <input name="pay" type="radio" id={item.id} value={item.id} />
                </label>
              )
            })}
          </div>
          {bankError && <h6 className="text-sm text-center text-red-600 mt-5">{section6BankError}</h6>}
        </div>

        {/* Send Button */}
        <div className="w-full mt-5">
          <button onClick={handleSubmit(onSubmit)} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6 disabled:opacity-70" disabled={loading}>{section6PayButton}</button>
        </div>

        {/* Back Button */}
        <button onClick={() => setSectionLevel("plans")} className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
          <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
        </button>
      </section>

    </section>
  );
};

export default PayForm;
