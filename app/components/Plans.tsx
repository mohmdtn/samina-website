import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  periodTitle1: string;
  periodTitle2: string;
  periodTitle3: string;
  periodTitle4: string;

  bronze: string;
  silver: string;
  golden: string;
  offline: string;

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
  unlimite: string;
  buttonPlan: string;
}

const Plans: React.FC<PlansProps> = ({
    periodTitle1,
    periodTitle2,
    periodTitle3,
    periodTitle4,
  
    bronze,
    silver,
    golden,
    offline,
  
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
    unlimite,
    buttonPlan
}) => {
  const [period, setPeriod] = useState(6);
  const [result, setResult] = useState<DataObject[]>([]);
  const [filteredData, setFilteredData] = useState<DataObject[]>([]);

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
        .catch((error) => console.log(error))
        .finally(() => console.log("finished"));
    } catch (error) {
      alert("خطا در برقراری ارتباط!!");
    }
  }, []);

  useEffect(() => {
    setFilteredData(result?.filter((a) => a.Period === period))
  }, [period, result]);

  console.log(filteredData);

  return (
    <section>
      {/* Select Period Section */}
      <section className="flex flex-col md:flex-row gap-2 bg-gray2-100 rounded-lg p-2 w-max text-sm mx-auto text-center border border-gray2-100">
        <div className={`plans-period-title ${period == 3 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(3)}>{periodTitle1}</div>
        <div className={`plans-period-title ${period == 6 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(6)}>{periodTitle2}</div>
        <div className={`plans-period-title ${period == 9 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(9)}>{periodTitle3}</div>
        <div className={`plans-period-title ${period == 12 ? "bg-white shadow-md text-brand-600" : "text-gray2-600"}`} onClick={() => setPeriod(12)}>{periodTitle4}</div>
      </section>

      <section className="flex items-end mt-8">

        <section className="flex flex-col">
          <div className="plans-title bg-gray2-25">{numberOfAccounts}</div>
          <div className="plans-title">{numberOfUsers}</div>
          <div className="plans-title bg-gray2-25">{numberOfStuff}</div>
          <div className="plans-title">{numberOfDocuments}</div>
          <div className="plans-title bg-gray2-25">{numberOfDocuments}</div>
          <div className="plans-title">{store}</div>
          <div className="plans-title bg-gray2-25">{api}</div>
          <div className="plans-title">{smsPanel}</div>
          <div className="plans-title bg-gray2-25">{log}</div>
        </section>

        {filteredData.map((item) => {
            return (
              <div key={item.Id}>
                <div className="mb-4">
                  <h5 className="text-lg tracking-tighter">{item.Title}</h5>
                  <div className="py-3">
                    <h3 className="text-xl font-semibold tracking-tighter text-gray2-900">{item.DiscountedPrice} {toman}</h3>
                    <h6 className="text-base text-gray2-900 tracking-tighter"><span className="line-through">{item.Price}</span> <span className="line-through">{toman}</span></h6>
                  </div>
                  <button className={`rounded-lg bg-brand-50 text-sm font-semibold py-2 leading-6 text-brand-600 min-w-44 text-center`}>{buttonPlan}</button>
                </div>
      
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden">{numberOfAccounts}</h6>
                  {item.LimitPersons}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden">{numberOfUsers}</h6>
                  {item.LimitUsers}
                </div>
      
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden">{numberOfStuff}</h6>
                  {item.LimitProducts}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden">{numberOfDocuments}</h6>
                  {item.LimitVouchers}
                </div>
                
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden">{mobileVersion}</h6>
                  {item.HasMobileApp && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden">{store}</h6>
                  {item.HasStore && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
                
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden">{api}</h6>
                  {item.HasApisystem&& <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
      
                <div className="plans-item">
                  <h6 className="md:hidden">{smsPanel}</h6>
                  {item.HasSmspanel && <div className="size-5 bg-success-600 rounded-full flex justify-center items-center"><Image src={"/icons/checkWhite.svg"} width={15} height={15} alt="Check Icon" /></div>}
                </div>
                
                <div className="plans-item bg-gray2-25">
                  <h6 className="md:hidden">{log}</h6>
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
