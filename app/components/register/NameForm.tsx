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
  errorName: string;
  errorMin: string;
  errorMax: string;
}

const NameForm: React.FC<NameFormProps> = ({ section3CompanyTitle, section3FirstName, section3LastName, section3Button, back, errorEmpty, errorName, errorMin, errorMax, }) => {
  const { setSectionLevel, setFormsData, formsData } = useContext(SiteContext);

  // Error States
  const [companyError, setCompanyError] = useState(false);
  const [fNameError, setFNameError] = useState(false);
  const [fNameError2, setFNameError2] = useState(false);
  const [fNameError3, setFNameError3] = useState(false);
  const [fNameError4, setFNameError4] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const [lNameError2, setLNameError2] = useState(false);
  const [lNameError3, setLNameError3] = useState(false);
  const [lNameError4, setLNameError4] = useState(false);

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
      setFNameError2(false);
      setFNameError3(false);
      setFNameError4(false);
    }
    else if(! /^[\u0600-\u06FF\s]+$/.test(formsData.fName)) {
      setFNameError(false);
      setFNameError2(true);
      setFNameError3(false);
      setFNameError4(false);
    }
    else if(formsData.fName.length > 12) {
      setFNameError(false);
      setFNameError2(false);
      setFNameError3(true);
      setFNameError4(false);
    }
    else if(formsData.fName.length < 3) {
      setFNameError(false);
      setFNameError2(false);
      setFNameError3(false);
      setFNameError4(true);
    }
    else {
      setFNameError(false);
      setFNameError2(false);
      setFNameError3(false);
      setFNameError4(false);
    }

    if (formsData.lName == false) {
      setLNameError(true);
      setLNameError2(false);
      setLNameError3(false);
      setLNameError4(false);
    }
    else if(! /^[\u0600-\u06FF\s]+$/.test(formsData.lName)) {
      setLNameError(false);
      setLNameError2(true);
      setLNameError3(false);
      setLNameError4(false);
    }
    else if(formsData.lName.length > 17) {
      setLNameError(false);
      setLNameError2(false);
      setLNameError3(true);
      setLNameError4(false);
    }
    else if(formsData.lName.length < 3) {
      setLNameError(false);
      setLNameError2(false);
      setLNameError3(false);
      setLNameError4(true);
    }
    else {
      setLNameError(false);
      setLNameError2(false);
      setLNameError3(false);
      setLNameError4(false);
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
          <input maxLength={12} type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${fNameError && "border-red-500"} ${fNameError && "border-red-500"} ${fNameError2 && "border-red-500"} ${fNameError3 && "border-red-500"} ${fNameError4 && "border-red-500"}`} value={formsData.fName} onChange={(e) => setFormsData({...formsData, fName: e.target.value})} />
          {fNameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          {fNameError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorName}</h6>}
          {fNameError3 && <h6 className="text-sm mt-[6px] text-red-600">{errorMax}</h6>}
          {fNameError4 && <h6 className="text-sm mt-[6px] text-red-600">{errorMin}</h6>}
        </div>

        {/* Last Name */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3LastName}</h5>
          <input maxLength={17} type="text" className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none duration-200 focus:shadow-md ${lNameError && "border-red-500"} ${lNameError2 && "border-red-500"} ${lNameError3 && "border-red-500"} ${lNameError4 && "border-red-500"}`} value={formsData.lName} onChange={(e) => setFormsData({...formsData, lName: e.target.value})} />
          {lNameError && <h6 className="text-sm mt-[6px] text-red-600">{errorEmpty}</h6>}
          {lNameError2 && <h6 className="text-sm mt-[6px] text-red-600">{errorName}</h6>}
          {lNameError3 && <h6 className="text-sm mt-[6px] text-red-600">{errorMax}</h6>}
          {lNameError4 && <h6 className="text-sm mt-[6px] text-red-600">{errorMin}</h6>}
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