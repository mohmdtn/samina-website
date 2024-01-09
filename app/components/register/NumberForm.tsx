
import React, { useContext, useMemo, useState } from "react";
import { Checkbox } from 'antd';
import Link from "next/link";
import { useLocale } from "next-intl";
import { SiteContext } from "@/app/context/siteContext";
import axios from "axios";

interface NumberFormProps {
  section1InputTitle: string;
  section1InputHolder: string;
  button: string;
  checkbox1: string;
  checkbox2: string;
  checkbox3: string;
  errorPolicy: string;
  errorEmpty: string;
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
}) => {
  const languge = useLocale();
  const [checkBox, setCheckBox] = useState(false);
  const { formsData, setFormsData, setSectionLevel, loading, setLoading } = useContext(SiteContext);
  const [error, setError] = useState({state: false, msg: ""});

  // Form Validation
  const submitHandle = () => {
    if (checkBox === false)
      return setError({state: true, msg: errorPolicy})
    if(formsData.number == false)
      return setError({state: true, msg: errorEmpty})

    // Send Number To Get Verify Code
    try {
      setLoading(true);
      setError({state: false, msg: ""});
      axios
        .post("http://siteapi.saminasoft.ir/SiteSendVerifyCode", { userName: formsData.number })
        .then(() => setSectionLevel("code"))
        .catch(() => alert("خطا در برقراری ارتباط!"))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      alert("2خطا در برقراری ارتباط!");
    }
  };

  return (
    <section className="w-full max-w-72 md:max-w-[360px] mx-auto">

      {/* Phone */}
      <div className="w-full mb-6">
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section1InputTitle}</h5>
        <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${error.state && "border-red-500"}`} value={formsData.number} onChange={(e) => setFormsData({...formsData, number: e.target.value})} placeholder={section1InputHolder} />
        {error.state && <h6 className="text-sm mt-[6px] text-red-600">{error.msg}</h6>}
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button onClick={submitHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6 disabled:opacity-70" disabled={loading}>{button}</button>
      </div>

      {/* CheckBox */}
      <div className="mt-8">
        <Checkbox onClick={() => setCheckBox(prev => !prev)}><p className="text-sm text-gray-600"><span>{checkbox1}</span><Link href={`/${languge}/terms`} className="text-brand-600">{checkbox2}</Link><span>{checkbox3}</span></p></Checkbox>
      </div>

    </section>
  );
};

export default NumberForm;
