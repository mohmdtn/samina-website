import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import type{Value} from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


interface FinancialPeriodFormProps {
  section4InputTitle: string;
  section4InputStart: string;
  section4InputEnd: string;
  section4Button: string;
  back: string;
}

const FinancialPeriodForm: React.FC<FinancialPeriodFormProps> = ({
  section4InputTitle,
  section4InputStart,
  section4InputEnd,
  section4Button,
  back
}) => {
  const [startDate, setStartDate] = useState<Value>(new Date());
  const [endDate, setEndDate] = useState<Value>(new Date());

  return (
    <section className="w-full md:max-w-[360px] mx-auto">

      <div className='flex flex-col gap-3 md:gap-6 mb-6'>
        {/* Ttile */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputTitle}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" />
        </div>

        {/* Start Date */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputStart}</h5>
          <div className="flex items-center relative">
            <DatePicker inputClass="border rounded-lg p-3 pl-8 text-sm text-gray2-500 w-full focus:outline-none" containerClassName="w-full" value={startDate} calendar={persian} locale={persian_fa} onChange={setStartDate} />
            <Image className="absolute left-3" src={"/icons/calendar-days.svg"} width={18} height={18} alt="Calendar Icon" />
          </div>
          
        </div>

        {/* End Date */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputEnd}</h5>
          <div className="flex items-center relative">
          <DatePicker inputClass="border rounded-lg p-3 pl-8 text-sm text-gray2-500 w-full focus:outline-none" containerClassName="w-full" value={endDate} calendar={persian} locale={persian_fa} onChange={setEndDate} />
            <Image className="absolute left-3" src={"/icons/calendar-days.svg"} width={18} height={18} alt="Calendar Icon" />
          </div>
        </div>
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section4Button}</button>
      </div>

      {/* Back Button */}
      <button className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>

    </section>
  );
};

export default FinancialPeriodForm;
