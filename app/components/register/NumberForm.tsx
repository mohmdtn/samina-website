import React, { useContext, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { SiteContext } from "@/app/context/siteContext";
import axios, { AxiosResponse } from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import InputErrorMessage from "../shared/InputErrorMessage";
import { convertPersianToEnglish } from "@/app/utils/convertPersianToEnglish";

interface NumberFormProps {
  section1InputTitle: string;
  section1InputHolder: string;
  button: string;
  checkbox1: string;
  checkbox2: string;
  checkbox3: string;
  errorPolicy: string;
  errorEmpty: string;
  errorFiled: string;
  errorsingedInBefore: string
}

interface IFormInput {
  number: string;
  policy: boolean;
}

const NumberForm: React.FC<NumberFormProps> = ({
  section1InputTitle,
  section1InputHolder,
  button,
  checkbox1,
  checkbox2,
  checkbox3,
  errorPolicy,
  errorEmpty,
  errorFiled,
  errorsingedInBefore,
}) => {
  const languge = useLocale();
  const { formsData, setFormsData, setSectionLevel, loading, setLoading } = useContext(SiteContext);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => apiCall(data);

  watch((data)=> {
    setError("");
  });

  const apiCall = (data: any) => {
    setFormsData({...formsData, number: convertPersianToEnglish(data.number)});
    try {
      setLoading(true);
      setError("");
      axios
        .get("http://siteapi.saminasoft.ir/IsUserExists", {params: {
          username: convertPersianToEnglish(data.number)
        }})
        .then((res: AxiosResponse) => {
          if (res.data.Data) {
            setError(errorsingedInBefore);
          }
          else {
            setSectionLevel("code");
          }
        })
        .catch((error) => setError(error.response.data.message))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("خطا در برقراری ارتباط!");
    }
  }

  return (
    <section className="w-full max-w-72 md:max-w-[360px] mx-auto">

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Phone */}
        <div className="w-full mb-6">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section1InputTitle}</h5>
          <input 
            type="text" 
            className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.number && "border-red-500"} ${error && "border-red-500"}`}
            {...register("number", {required: errorEmpty, pattern: {value: /^(۰|0)?(۹|9)[۰-۹0-9]{9}$|[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/g, message: errorFiled}})}
          />
          {errors?.number?.message && <InputErrorMessage message={errors?.number?.message}/>}
          {error && <InputErrorMessage message={error}/>}
        </div>

        {/* Send Button */}
        <div className="w-full">
          <button type="submit" className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6 disabled:opacity-70" disabled={loading}>{button}</button>
        </div>

        {/* CheckBox */}
        <div>
          <div className="mt-8 flex items-center font-medium">
            <input type="checkbox" id="policy" {...register("policy", {required: errorPolicy})} /><label htmlFor="policy" className="text-sm text-gray-600 cursor-pointer ms-2"><span>{checkbox1}</span><Link href={`/${languge}/terms`} className="text-brand-600">{checkbox2}</Link><span className="text-black">{checkbox3}</span></label>
          </div>
          {errors?.policy?.message && <InputErrorMessage message={errors?.policy?.message}/>}
        </div>
      </form>

    </section>
  );
};

export default NumberForm;
