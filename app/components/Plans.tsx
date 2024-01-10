"use client";

import axios from "axios";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "../context/siteContext";

type DataObject = {
    Id: number;
    Title: string;
    Price: number;
    DiscountedPrice: number;
    LimitPersons: number
    LimitUsers: number;
    LimitProducts: number;
    LimitVouchers: number;
    HasMobileApp: boolean;
    HasStore: boolean;
    HasApisystem: boolean;
    HasSmspanel: boolean;
    HasLogSystem: boolean
    Period: number;
}

interface PlansProps {
  landing?: boolean;
  title: string;
  desc: string;
  periodTitle1: string;
  periodTitle2: string;
  periodTitle3: string;
  periodTitle4: string;

  numberOfAccounts: string;
  numberOfUsers: string;
  numberOfStuff: string;
  numberOfDocuments: string;
  mobileVersion: string;
  store: string;
  api: string;
  smsPanel: string;
  log: string;
  toman: string;
  buttonPlan: string;
}

const Plans: React.FC<PlansProps> = ({
    landing = false,
    title,
    desc,
    periodTitle1,
    periodTitle2,
    periodTitle3,
    periodTitle4,
  
    numberOfAccounts,
    numberOfUsers,
    numberOfStuff,
    numberOfDocuments,
    mobileVersion,
    store,
    api,
    smsPanel,
    log,
    toman,
    buttonPlan
}) => {
  const [period, setPeriod] = useState(6);
  const [result, setResult] = useState<DataObject[]>([]);
  const [filteredData, setFilteredData] = useState<DataObject[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<any>([]);
  const { setFormsData, formsData } = useContext(SiteContext);

  useEffect(() => {
    setFormsData({...formsData, planId: selectedPlan.Id, planName: selectedPlan.Title, planPrice: selectedPlan.Price})
  }, [selectedPlan])

  // Request API For Plans
  useEffect(() => {
    try {
      axios
        .get("http://siteapi.saminasoft.ir/GetSitePlans", {
          params: { branchId: 10 },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept-Language": "fa-IR",
          },
        })
        .then((res) => setResult(res.data.Data))
        .catch((error) => alert("خطا در برقراری ارتباط!!"))
        // .finally(() => console.log("finished"));
    } catch (error) {
      alert("خطا در برقراری ارتباط!!");
    }
  }, []);

  useEffect(() => {
    setFilteredData(result?.filter((a) => a.Period === period))
  }, [period, result]);

  return (
    <section className="lg:max-w-6xl mx-auto px-4 md:px-0">

      <div className={`text-center mb-8 md:hidden ${landing ? "block" : "hidden"}`}>
        <h1 className="text-[32px] text-black font-yekanBakhNumbExtraBold tracking-tighter mb-1">{title}</h1>
        <h5 className="text-sm text-gray2-500 leading-6">{desc}</h5>
      </div>

      {/* Select Period Section */}
      <section className="flex flex-col md:flex-row gap-2 bg-gray2-100 rounded-lg p-2 w-full md:w-max text-sm mx-auto text-center border border-gray2-100">
        <div className={`plans-period-title ${period == 3 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(3)}>{periodTitle1}</div>
        <div className={`plans-period-title ${period == 6 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(6)}>{periodTitle2}</div>
        <div className={`plans-period-title ${period == 9 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(9)}>{periodTitle3}</div>
        <div className={`plans-period-title ${period == 12 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(12)}>{periodTitle4}</div>
      </section>

      <section className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:items-end mt-8">

        <section className="hidden md:flex justify-between flex-col pb-4">
          <div className={`md:ps-3 lg:ps-6 mb-6 ${!landing && "hidden"}`}>
            <h1 className="text-[40px] text-black font-yekanBakhNumbExtraBold tracking-tighter mb-1">{title}</h1>
            <h5 className="text-sm text-gray2-500 leading-6">{desc}</h5>
          </div>
          <div className="flex flex-col">
            <div className="plans-title bg-gray2-25">{numberOfAccounts}</div>
            <div className="plans-title">{numberOfUsers}</div>
            <div className="plans-title bg-gray2-25">{numberOfStuff}</div>
            <div className="plans-title">{numberOfDocuments}</div>
            <div className="plans-title bg-gray2-25">{numberOfDocuments}</div>
            <div className="plans-title">{store}</div>
            <div className="plans-title bg-gray2-25">{api}</div>
            <div className="plans-title">{smsPanel}</div>
            <div className="plans-title bg-gray2-25">{log}</div>
          </div>
        </section>

        {filteredData.map((item) => {
            return (
              <div key={item.Id} className={`w-full overflow-hidden pb-4 rounded-2xl duration-200 border ${selectedPlan.Id === item.Id ? "border-brand-400" : "border-[#0000]"}`}>
                <div className="mb-4 text-center mx-2 lg:mx-3 md:text-start mt-2">
                  <h5 className="text-lg tracking-tighter">{item.Title}</h5>
                  <div className="py-3">
                    <h3 className="text-xl font-semibold tracking-tighter text-gray2-900">{item.DiscountedPrice} {toman}</h3>
                    <h6 className="text-base text-gray2-900 tracking-tighter"><span className="line-through">{item.Price}</span> <span className="line-through">{toman}</span></h6>
                  </div>
                  <button onClick={() => setSelectedPlan(item)} className={`rounded-lg text-sm font-semibold py-2 leading-6 w-full text-center duration-200 ${selectedPlan.Id === item.Id ? "text-white bg-brand-600" : "text-brand-600 bg-brand-50"}`}>{buttonPlan}</button>
                </div>
      
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden font-semibold">{numberOfAccounts}</h6>
                  {item.LimitPersons}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden font-semibold">{numberOfUsers}</h6>
                  {item.LimitUsers}
                </div>
      
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden font-semibold">{numberOfStuff}</h6>
                  {item.LimitProducts}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden font-semibold">{numberOfDocuments}</h6>
                  {item.LimitVouchers}
                </div>
                
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden font-semibold">{mobileVersion}</h6>
                  {item.HasMobileApp && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden font-semibold">{store}</h6>
                  {item.HasStore && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
                
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden font-semibold">{api}</h6>
                  {item.HasApisystem&& <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden font-semibold">{smsPanel}</h6>
                  {item.HasSmspanel && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
                
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden font-semibold">{log}</h6>
                  {item.HasLogSystem && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
      
              </div>
            )
        })}
      </section>

    </section>
  );
};

export default Plans;
