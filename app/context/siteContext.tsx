"use client";

import React, { ReactNode, useEffect, useState } from "react";

export const SiteContext = React.createContext<any>(null);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [formsData, setFormsData] = useState({
    number: "",
    company: "",
    fName: "",
    lName: "",
    periodName: "",
    endDate: "",
    startDate: "",
    ISOEndDate: "",
    ISOStartDate: "",
    planId: "",
    planName: "",
    planPrice: "",
    bankId: "",
  });
  const [sectionLevel, setSectionLevel] = useState<"number" | "code" | "name" | "financial" | "plans" | "pay" | "callback">("number");
  const [progressbarLevel, setProgressbarLevel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ticketStatus, setTicketStatus] = useState<"ERROR" | "SUCCESS" | "">("")
  const [isFaqOpen, setIsFaqOpen] = useState("faq1")

  useEffect(() => {
    if (sectionLevel === "number" || sectionLevel === "code") 
      setProgressbarLevel(1)

    else if (sectionLevel === "name")
      setProgressbarLevel(2)

    else if (sectionLevel === "financial")
      setProgressbarLevel(3)

    else if (sectionLevel === "plans")
      setProgressbarLevel(4)
    
    else if (sectionLevel === "pay")
      setProgressbarLevel(5)

    else if (sectionLevel === "callback")
      setProgressbarLevel(6)

  }, [sectionLevel]);

  const value = {
    loading,
    setLoading,
    formsData,
    setFormsData,
    sectionLevel,
    setSectionLevel,
    progressbarLevel,
    ticketStatus,
    setTicketStatus,
    isFaqOpen,
    setIsFaqOpen
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
