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
    planId: "",
    planName: "",
    planPrice: "",
  });
  const [sectionLevel, setSectionLevel] = useState<"number" | "code" | "name" | "financial" | "plans" | "pay" | "callback">("number");
  const [progressbarLevel, setProgressbarLevel] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sectionLevel === "number" || sectionLevel === "code") 
      setProgressbarLevel(1)

    else if (sectionLevel === "name")
      setProgressbarLevel(2)

    else if (sectionLevel === "financial")
      setProgressbarLevel(3)

    else if (sectionLevel === "plans")
      setProgressbarLevel(4)
    
    else if (sectionLevel === "pay" || sectionLevel === "callback")
      setProgressbarLevel(5)

  }, [sectionLevel]);

  const value = {
    loading,
    setLoading,
    formsData,
    setFormsData,
    sectionLevel,
    setSectionLevel,
    progressbarLevel,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
