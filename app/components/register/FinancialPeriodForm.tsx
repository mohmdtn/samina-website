import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import type{Value} from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { SiteContext } from "@/app/context/siteContext";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputErrorMessage from "../shared/InputErrorMessage";


interface FinancialPeriodFormProps {
  section4InputTitle: string;
  section4InputStart: string;
  section4InputEnd: string;
  section4Button: string;
  back: string;
  errorEmpty: string;
  errorMin: string;
  errorMax: string;
}

interface IFormInput {
  periodName: string;
  startDate: string;
  endDate: string;
}

const FinancialPeriodForm: React.FC<FinancialPeriodFormProps> = ({
  section4InputTitle,
  section4InputStart,
  section4InputEnd,
  section4Button,
  back,
  errorEmpty,
  errorMin,
  errorMax,
}) => {
  const [startDate, setStartDate] = useState<Value>("");
  const [endDate, setEndDate] = useState<Value>("");
  const { setSectionLevel, setFormsData, formsData } = useContext(SiteContext);
  
  const { register, handleSubmit, formState: { errors }, control } = useForm<IFormInput>({
    defaultValues: {
      periodName: formsData.periodName,
      startDate: formsData.startDate,
      endDate: formsData.endDate,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => handleData(data);

  const handleData = (data: IFormInput) => {
    // @ts-ignore
    setFormsData({...formsData, ISOStartDate: startDate?.toDate()?.toISOString(), ISOEndDate: endDate?.toDate()?.toISOString(), periodName: data.periodName});
    setSectionLevel("plans");
  }

  useEffect(() => {
    setFormsData({...formsData, startDate: startDate?.toLocaleString()});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  useEffect(() => {
    setFormsData({...formsData, endDate: endDate?.toString()});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate]);

  return (
    <section className="w-full md:max-w-[360px] mx-auto">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3 md:gap-6 mb-6'>
          {/* Ttile */}
          <div className="w-full">
            <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputTitle}</h5>
            <input 
              type="text" 
              className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.periodName && "border-red-500"}`} 
              {...register("periodName", {required: errorEmpty, minLength: {value: 5, message: errorMin}, maxLength: {value: 50, message: errorMax}})} 
            />
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
                    inputClass={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.startDate && "border-red-500"}`}
                    containerClassName="w-full"
                    value={value || ""}
                    onChange={(date, { isTyping }) => {
                      if (!isTyping) {
                        onChange(date);
                        setStartDate(date);
                      }
                      else {
                        onChange(null);
                      }
                    }} 
                    calendar={persian} 
                    locale={persian_fa} 
                  />
                  <Image className="absolute left-3" src={"/icons/calendar-days.svg"} width={18} height={18} alt="Calendar Icon" />
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
                    inputClass={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${errors?.endDate && "border-red-500"}`}
                    containerClassName="w-full"
                    value={value || ""}
                    onChange={(date, { isTyping }) => {
                      if (!isTyping) {
                        onChange(date);
                        setEndDate(date);
                      }
                      else {
                        onChange(null);
                      }
                    }} 
                    calendar={persian} 
                    locale={persian_fa} 
                  />
                  <Image className="absolute left-3" src={"/icons/calendar-days.svg"} width={18} height={18} alt="Calendar Icon" />
                </div>
              )
            }
            />
            {errors?.endDate?.message && <InputErrorMessage message={errors?.endDate?.message}/>}
          </div>
        </div>

        {/* Send Button */}
        <div className="w-full">
          <button type="submit" className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section4Button}</button>
        </div>

        {/* Back Button */}
        <button onClick={() => setSectionLevel("name")} className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
          <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
        </button>
      </form>

    </section>
  );
};

export default FinancialPeriodForm;
