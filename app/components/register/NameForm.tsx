import { SiteContext } from '@/app/context/siteContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react'

interface NameFormProps {
  section3CompanyTitle: string;
  section3FirstName: string;
  section3LastName: string;
  section3Button: string;
  back: string;
  errorEmpty: string;
}

const NameForm: React.FC<NameFormProps> = ({ section3CompanyTitle, section3FirstName, section3LastName, section3Button, back, errorEmpty }) => {
  const { setSectionLevel, setFormsData, formsData } = useContext(SiteContext);

  // Error States
  const [companyError, setCompanyError] = useState(false);
  const [fNameError, setFNameError] = useState(false);
  const [lNameError, setlNameError] = useState(false);

  // Form Validation
  const submitHandle = () => {
    if (formsData.company == false) {
      setCompanyError(true);
    }
    else {
      setCompanyError(false);
    }

    if (formsData.fName == false) {
      setFNameError(true);
    }
    else {
      setFNameError(false);
    }

    if (formsData.lName == false) {
      setlNameError(true);
    }
    else {
      setlNameError(false);
    }
      
    if (formsData.company != false && formsData.fName != false && formsData.lName != false) {
      setSectionLevel("financial");
    }
  };

  return (
    <section className="w-full md:max-w-[360px] mx-auto">

      <div className='flex flex-col gap-3 md:gap-6 mb-6'>
        {/* Company */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3CompanyTitle}</h5>
          <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${companyError && "border-red-500"}`} value={formsData.company} onChange={(e) => setFormsData({...formsData, company: e.target.value})} />
          {companyError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
        </div>

        {/* First Name */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3FirstName}</h5>
          <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${fNameError && "border-red-500"}`} value={formsData.fName} onChange={(e) => setFormsData({...formsData, fName: e.target.value})} />
          {fNameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
        </div>

        {/* Last Name */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3LastName}</h5>
          <input type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${lNameError && "border-red-500"}`} value={formsData.lName} onChange={(e) => setFormsData({...formsData, lName: e.target.value})} />
          {lNameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
        </div>
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button onClick={submitHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section3Button}</button>
      </div>

      {/* Back Button */}
      <button onClick={() => setSectionLevel("number")} className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>

    </section>
  )
}

export default NameForm