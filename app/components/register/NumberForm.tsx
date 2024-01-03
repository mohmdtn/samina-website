
import React from "react";
import { Checkbox } from 'antd';

interface NumberFormProps {
  section1InputTitle: string;
  section1InputHolder: string;
  button: string;
  checkbox1: string;
  checkbox2: string;
  checkbox3: string;
}

const NumberForm: React.FC<NumberFormProps> = ({
  section1InputTitle,
  section1InputHolder,
  button,
  checkbox1,
  checkbox2,
  checkbox3,
}) => {
  return (
    <section className="w-full max-w-72 md:max-w-[360px] mx-auto">

      {/* Phone */}
      <div className="w-full mb-6">
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section1InputTitle}</h5>
        <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" placeholder={section1InputHolder} />
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{button}</button>
      </div>

      {/* CheckBox */}
      <div className="mt-8">
        <Checkbox><p className="text-sm text-gray-600"><span>{checkbox1}</span><span className="text-brand-600">{checkbox2}</span><span>{checkbox3}</span></p></Checkbox>
      </div>

    </section>
  );
};

export default NumberForm;
