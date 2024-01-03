import Image from 'next/image';
import React from 'react'

interface NameFormProps {
  section3CompanyTitle: string;
  section3FirstName: string;
  section3LastName: string;
  section3Button: string;
  back: string;
}

const NameForm: React.FC<NameFormProps> = ({ section3CompanyTitle, section3FirstName, section3LastName, section3Button, back }) => {
  return (
    <section className="w-full md:max-w-[360px] mx-auto">

      <div className='flex flex-col gap-3 md:gap-6 mb-6'>
        {/* Company */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3CompanyTitle}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" />
        </div>

        {/* First Name */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3FirstName}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" />
        </div>

        {/* Last Name */}
        <div className="w-full">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3LastName}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none" />
        </div>
      </div>

      {/* Send Button */}
      <div className="w-full">
        <button className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section3Button}</button>
      </div>

      {/* Back Button */}
      <button className='flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6'>
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>

    </section>
  )
}

export default NameForm