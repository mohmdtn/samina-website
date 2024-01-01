import Image from "next/image";
import React from "react";

interface AlertProps {
  success?: boolean;
  error?: boolean;
  successNotif: string;
  errorNotif: string
}

const Alert: React.FC<AlertProps> = ({ success, error, successNotif, errorNotif }) => {

  if (success) {
    return (
      <div className="w-full bg-success-600 text-white text-sm leading-6 flex py-3 gap-3 px-3 md:px-5 lg:px-24">
        <Image src={"/icons/checkCircle.svg"} width={24} height={24} alt="Success Icon" />
        {successNotif}
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full bg-accent-600 text-white text-sm leading-6 flex py-3 gap-3 px-3 md:px-5 lg:px-24">
        <Image src={"/icons/infoCircle.svg"} width={24} height={24} alt="Error Icon" />
        {errorNotif}
      </div>
    )
  }

};

export default Alert;
