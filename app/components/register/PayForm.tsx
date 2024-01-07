import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import type{Value} from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { SiteContext } from "@/app/context/siteContext";
import axios from "axios";

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
}

const payProvider = [
  {id: "pay1", img: "/images/bank-saman.svg",    name: "Bank Saman"},
  {id: "pay2", img: "/images/asan-pardakht.svg", name: "Asan Pardakht"},
  {id: "pay3", img: "/images/bank-pasargad.svg", name: "Bank Pasargad"},
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

  // Errors State
  const [companyError, setCompanyError] = useState(false);
  const [fNameError, setFNameError] = useState(false);
  const [lNameError, setlNameError] = useState(false);
  const [periodError, setPeriodError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [bankError, setBankError] = useState(false);
  const [allError, setAllError] = useState(false);

  const validateHandle = () => {
    if (formsData.company == "") {
      setCompanyError(true);
    }
    else {
      setCompanyError(false);
    }

    if (formsData.fName == "") {
      setFNameError(true);
    }
    else {
      setFNameError(false);
    }

    if (formsData.lName == "") {
      setlNameError(true);
    }
    else {
      setlNameError(false);
    }

    if (formsData.periodName == "") {
      setPeriodError(true);
    }
    else {
      setPeriodError(false);
    }

    if (formsData.startDate == "") {
      setStartDateError(true);
    }
    else {
      setStartDateError(false);
    }

    if (formsData.endDate == "") {
      setEndDateError(true);
    }
    else {
      setEndDateError(false);
    }

    if (formsData.bankId == "") {
      setBankError(true);
    }
    else {
      setBankError(false);
    }
    setAllError(true);

    if (
      formsData.company !== "" &&
      formsData.fName !== "" &&
      formsData.lName !== "" &&
      formsData.periodName !== "" &&
      formsData.startDate !== "" &&
      formsData.endDate !== ""
    ) {
      setAllError(false);
    }

    if (
      formsData.company !== "" &&
      formsData.fName !== "" &&
      formsData.lName !== "" &&
      formsData.periodName !== "" &&
      formsData.startDate !== "" &&
      formsData.endDate !== "" &&
      formsData.bankId !== ""
    ) {
      submitHandle();
    }
  }

  const submitHandle = () => {
    const data = {
      userName            : formsData.number,
      branchTitle         : "string",
      name                : formsData.fName,
      family              : formsData.lName,
      financialPeriodTitle: formsData.period,
      startDate           : formsData.ISOStartDate,
      endDate             : formsData.ISOEndDate,
      planId              : formsData.planId,
      buyPrice            : formsData.planPrice,
      discountedPrice     : formsData.planPrice,
      payBankId           : formsData.bankId,
      payCode             : ""
    }

    try {
      setLoading(true);
      axios
        .post("http://siteapi.saminasoft.ir/SiteRegister", {data})
        .then(() => setSectionLevel("code"))
        .catch(() => alert("خطا در برقراری ارتباط!"))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("2خطا در برقراری ارتباط!");
    }
  }

  useEffect(() => {
    setFormsData({...formsData, startDate: startDate?.toLocaleString(), endDate: endDate?.toString()});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate])

  return (
    <section className="flex flex-col md:flex-row gap-12 max-w-[770px] mx-auto">

      {/* Information Input Section */}
      <section className="md:w-1/2">
        <h3 className="text-lg text-black font-semibold tracking-tight mb-6">{section6GeneralInfoTtile}</h3>
        <div className="flex flex-col gap-3 md:gap-6">
          
          {/* Phone */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section1InputTitle}</h5>
            <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" disabled value={formsData.number} />
          </div>

          {/* Company */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3CompanyTitle}</h5>
            <div className="relative flex items-center">
              <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 ${companyError && "border-red-500"}`} disabled={!companyEdit}  value={formsData.company} onChange={(e) => setFormsData({...formsData, company: e.target.value})} />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setCompanyEdit(true)} />
            </div>
          </div>

          {/* First Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3FirstName}</h5>
            <div className="relative flex items-center">
              <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 ${fNameError && "border-red-500"}`} disabled={!fNameEdit} value={formsData.fName} onChange={(e) => setFormsData({...formsData, fName: e.target.value})} />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setfNameEdit(true)} />
            </div>
          </div>

          {/* Last Name */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3LastName}</h5>
            <div className="relative flex items-center">
              <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 ${lNameError && "border-red-500"}`} disabled={!lNameEdit} value={formsData.lName} onChange={(e) => setFormsData({...formsData, lName: e.target.value})} />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setlNameEdit(true)} />
            </div>
          </div>

          {/* Finantional Period Ttile */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputTitle}</h5>
            <div className="relative flex items-center">
              <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md pl-8 ${periodError && "border-red-500"}`} disabled={!periodEdit} value={formsData.periodName} onChange={(e) => setFormsData({...formsData, periodName: e.target.value})} />
              <Image src={"/icons/edit.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" onClick={() => setPeriodEdit(true)} />
            </div>
          </div>

          {/* Start Date */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputStart}</h5>
            <div className="flex items-center relative">
              <DatePicker inputClass={`border rounded-lg p-3 pl-8 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${startDateError && "border-red-500"}`} disabled={!startDateEdit} containerClassName="w-full" value={formsData.startDate} calendar={persian} locale={persian_fa} onChange={setStartDate} />
              <Image className="absolute left-3 cursor-pointer" src={"/icons/edit.svg"} width={18} height={18} alt="Calendar Icon" onClick={() => setstartDateEdit(true)} />
            </div>
          </div>

          {/* End Date */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputEnd}</h5>
            <div className="flex items-center relative">
              <DatePicker inputClass={`border rounded-lg p-3 pl-8 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${endDateError && "border-red-500"}`} disabled={!endDateEdit} containerClassName="w-full" value={formsData.endDate} calendar={persian} locale={persian_fa} onChange={setEndDate} />
              <Image className="absolute left-3 cursor-pointer" src={"/icons/edit.svg"} width={18} height={18} alt="Calendar Icon" onClick={() => setEndDateEdit(true)} />
            </div>
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
        <div className="flex justify-between mt-6">
          {payProvider.map((item) => {
            return (
              <label htmlFor={item.id} key={item.id} className={`md:size-[108px] size-24 bg-gray2-50 rounded-[10px] flex flex-col justify-center items-center cursor-pointer border ${formsData.bankId === item.id ? "border-brand-500" : "border-[#0000]"}`} onClick={() => setFormsData({...formsData, bankId: item.id})}>
                <Image src={item.img} width={52} height={44} alt={item.name} className="mb-3" />
                <input type="radio" name="pay" id={item.id} />
              </label>
            )
          })}
        </div>

        {/* Send Button */}
        <div className="w-full mt-5">
          <button onClick={validateHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6" disabled={loading}>{section6PayButton}</button>
        </div>

        {allError && <h6 className="text-sm text-center text-red-600 mt-5">{section6Error}</h6>}
        {!allError && bankError && <h6 className="text-sm text-center text-red-600 mt-5">{section6BankError}</h6>}

        {/* Back Button */}
        <button onClick={() => setSectionLevel("plans")} className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
          <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
        </button>
      </section>

    </section>
  );
};

export default PayForm;
