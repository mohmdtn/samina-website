// "use client";

import Image from "next/image";
import Plans from "../Plans";
import { useContext } from "react";
import { SiteContext } from "@/app/context/siteContext";

interface PlanFormProps {
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
  back: string;
  buttonPlan: string;
  section4Button: string;
}

const PlanForm: React.FC<PlanFormProps> = ({
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
  back,
  buttonPlan,
  section4Button
}) => {
  const { setSectionLevel, setFormsData, formsData } = useContext(SiteContext);

  // Form Validation
  const submitHandle = () => {
    if (!formsData.planId)
      return alert("empty");

    setSectionLevel("pay");
  };

  return (
    <section>
      <Plans
        periodTitle1={periodTitle1}
        periodTitle2={periodTitle2}
        periodTitle3={periodTitle3}
        periodTitle4={periodTitle4}
        bronze={bronze}
        silver={silver}
        golden={golden}
        offline={offline}
        numberOfAccounts={numberOfAccounts}
        numberOfUsers={numberOfUsers}
        numberOfStuff={numberOfStuff}
        numberOfDocuments={numberOfDocuments}
        mobileVersion={mobileVersion}
        store={store}
        api={api}
        smsPanel={smsPanel}
        log={log}
        toman={toman}
        unlimite={unlimite}
        buttonPlan={buttonPlan}
      />

      {/* Send Button */}
      <div className="w-full md:w-24 mx-auto mt-12">
        <button onClick={submitHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section4Button}</button>
      </div>

      {/* Back Button */}
      <button onClick={() => setSectionLevel("financial")} className="flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6">
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>
    </section>
  );
};

export default PlanForm;
