import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PayCallbackProps {
  payCallbackWelcome: string;
  payCallbackUsername: string;
  payCallbackPassword: string;
  payCallbackTicket: string;
  payCallbackTeam: string;
  payCallbackSummaryTitle: string;
  payCallbackPlan: string;

  section3CompanyTitle: string;
  section4InputTitle: string;
  section4InputStart: string;
  section4InputEnd: string;
}

const PayCallback: React.FC<PayCallbackProps> = ({
  payCallbackWelcome,
  payCallbackUsername,
  payCallbackPassword,
  payCallbackTicket,
  payCallbackTeam,
  payCallbackSummaryTitle,
  payCallbackPlan,
  section3CompanyTitle,
  section4InputTitle,
  section4InputStart,
  section4InputEnd,
}) => {
  return (
    <section>
      <h2 className="text-black text-base md:text-lg font-semibold tracking-tight mb-8">{payCallbackWelcome}</h2>

      {/* Username */}
      <div className="md:max-w-[360px] mb-3 md:mb-6">
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{payCallbackUsername}</h5>
        <div className="relative flex items-center">
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
          <Image src={"/icons/copy.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" />
        </div>
      </div>

      {/* Password */}
      <div className="md:max-w-[360px] mb-12">
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{payCallbackPassword}</h5>
        <div className="relative flex items-center">
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
          <Image src={"/icons/copy.svg"} width={18} height={18} alt="Edit Icon" className="absolute left-3 cursor-pointer" />
        </div>
      </div>

      <h2 className="text-black text-base md:text-lg font-semibold tracking-tight mb-8">{payCallbackTicket}</h2>

      {/* Samina Develope Team */}
      <Link href="" className="w-full md:w-auto md:max-w-[249px] flex justify-center items-center text-brand-600 text-lg font-semibold rounded-lg py-5 px-6 bg-gray2-50 border gap-3">
        <Image src={"/icons/headphoneYellow.svg"} width={40} height={40} alt="Headphone Icon" />
        {payCallbackTeam}
      </Link>

      {/* Purchase Info */}
      <h2 className="text-black text-lg font-semibold tracking-tight mb-8 mt-14">{payCallbackSummaryTitle}</h2>

      <div className="flex flex-col gap-3 md:gap-6">
        {/* Company Name */}
        <div className="md:max-w-[360px]">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section3CompanyTitle}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
        </div>
        
        {/* Financial Period Name */}
        <div className="md:max-w-[360px]">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputTitle}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
        </div>

        {/* Start Financial Period Date */}
        <div className="md:max-w-[360px]">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputStart}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
        </div>

        {/* End of Financial Period Date */}
        <div className="md:max-w-[360px]">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{section4InputEnd}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
        </div>

        {/* Selected Plan */}
        <div className="md:max-w-[360px]">
          <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">{payCallbackPlan}</h5>
          <input type="text" className="border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none pl-8" disabled />
        </div>
      </div>

    </section>
  );
};

export default PayCallback;
