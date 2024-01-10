// "use client";

import Image from "next/image";
import Plans from "../Plans";
import { useContext, useState } from "react";
import { SiteContext } from "@/app/context/siteContext";

interface PlanFormProps {
  planTitle: string;
  planDesc: string;
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
  back: string;
  buttonPlan: string;
  section4Button: string;
  planError: string;
}

const PlanForm: React.FC<PlanFormProps> = ({
  planTitle,
  planDesc,
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
  back,
  buttonPlan,
  section4Button,
  planError,
}) => {
  const { setSectionLevel, setFormsData, formsData } = useContext(SiteContext);

  // Error States
  const [isPlanError, setIsPlanError] = useState(false);

  // Form Validation
  const submitHandle = () => {
    if (!formsData.planId) {
      setIsPlanError(true);
    }
    else {
      setIsPlanError(false);
    }

    if (formsData.planId) {
      setSectionLevel("pay");
    }
  };

  return (
    <section>
      <Plans
        title={planTitle}
        desc={planDesc}
        periodTitle1={periodTitle1}
        periodTitle2={periodTitle2}
        periodTitle3={periodTitle3}
        periodTitle4={periodTitle4}
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
        buttonPlan={buttonPlan}
      />

      {/* Send Button */}
      <div className="w-full md:w-24 mx-auto mt-12">
        <button onClick={submitHandle} className="text-center text-white text-sm font-semibold rounded-lg bg-brand-600 w-full p-2 leading-6">{section4Button}</button>
      </div>

      {/* Error */}
      {isPlanError && <h6 className="text-sm mt-[6px] text-center text-red-600">{planError}</h6>}

      {/* Back Button */}
      <button onClick={() => setSectionLevel("financial")} className="flex items-center font-semibold gap-1 hover:gap-2 duration-200 text-gray2-700 py-3 mx-auto mt-6">
        <Image src={"/icons/arrowRight.svg"} width={16} height={16} alt='Arrow Icon' />{back}
      </button>
    </section>
  );
};

export default PlanForm;
