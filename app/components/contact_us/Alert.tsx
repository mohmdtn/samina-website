"use client";

import { SiteContext } from "@/app/context/siteContext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

interface AlertProps {
  successNotif: string;
  errorNotif: string
}

const Alert: React.FC<AlertProps> = ({ successNotif, errorNotif }) => {
  const { ticketStatus, setTicketStatus } = useContext(SiteContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTicketStatus("");
    }, 5000)

    return () => clearTimeout(timeout)
  }, [ticketStatus])

  if (ticketStatus === "SUCCESS") {
    return (
      <div className="w-full bg-success-600 text-white text-sm leading-6 flex items-center justify-between px-3 md:px-5 lg:px-24">
        <div className="flex py-3 gap-3">
          <Image src={"/icons/checkCircle.svg"} width={24} height={24} alt="Success Icon" />
          {successNotif}
        </div>
        <Image className="cursor-pointer" priority onClick={() => setTicketStatus("")} src={"/icons/crossCircleWhite.svg"} width={24} height={24} alt="Cross Icon" />
      </div>
    )
  }

  if (ticketStatus === "ERROR") {
    return (
      <div className="w-full bg-accent-600 text-white text-sm leading-6 flex items-center justify-between px-3 md:px-5 lg:px-24">
        <div className="flex py-3 gap-3">
          <Image src={"/icons/infoCircle.svg"} width={24} height={24} alt="Error Icon" />
          {errorNotif}
        </div>
        <Image className="cursor-pointer" priority onClick={() => setTicketStatus("")} src={"/icons/crossCircleWhite.svg"} width={24} height={24} alt="Cross Icon" />
      </div>
    )
  }

};

export default Alert;
