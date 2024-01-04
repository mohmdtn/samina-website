"use client";

import React, { useState } from "react";
import NumberForm from "./NumberForm";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import CodeForm from "./CodeForm";
import NameForm from "./NameForm";
import FinancialPeriodForm from "./FinancialPeriodForm";
import PlanForm from "./PlanForm";

interface FormLevelsProps {
  level1: string;
  level1Desc: string;
  level2: string;
  level2Desc: string;
  level3: string;
  level3Desc: string;
  level4: string;
  level4Desc: string;
  level5: string;
  level5Desc: string;
  level: number;

  section1Title: string;
  section1InputTitle: string;
  section1InputHolder: string;
  button: string;
  checkbox1: string;
  checkbox2: string;
  checkbox3: string;

  section2Resend: string;
  section2Button: string;
  back: string;

  section3CompanyTitle: string;
  section3FirstName: string;
  section3LastName: string;
  section3Button: string;

  section4InputTitle: string;
  section4InputStart: string;
  section4InputEnd: string;
  section4Button: string;

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

const FormLevels: React.FC<FormLevelsProps> = ({
  level1,
  level1Desc,
  level2,
  level2Desc,
  level3,
  level3Desc,
  level4,
  level4Desc,
  level5,
  level5Desc,
  level,

  section1Title,
  section1InputTitle,
  section1InputHolder,
  button,
  checkbox1,
  checkbox2,
  checkbox3,

  section2Resend,
  section2Button,
  back,

  section3CompanyTitle,
  section3FirstName,
  section3LastName,
  section3Button,

  section4InputTitle,
  section4InputStart,
  section4InputEnd,
  section4Button,

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
  buttonPlan,
}) => {
  const [sectionLevel, setSectionLevel] = useState("plans");
  const [progressbarLevel, setProgressbarLevel] = useState(4);

  return (
    <section>
      <ProgressBar
        level1={level1}
        level1Desc={level1Desc}
        level2={level2}
        level2Desc={level2Desc}
        level3={level3}
        level3Desc={level3Desc}
        level4={level4}
        level4Desc={level4Desc}
        level5={level5}
        level5Desc={level5Desc}
        level={progressbarLevel}
      />

      <div className="flex flex-col justify-center items-center text-center gap-6 mt-20 mb-14">
        <Image src={"/images/logo.svg"} width={64} height={64} alt="Samina Logo" />
        <h2 className="font-semibold text-xl tracking-tight">{section1Title}</h2>
      </div>

      <section className={`${sectionLevel === "number" ? "block" : "hidden"}`}>
        <NumberForm
          section1InputTitle={section1InputTitle}
          section1InputHolder={section1InputHolder}
          button={button}
          checkbox1={checkbox1}
          checkbox2={checkbox2}
          checkbox3={checkbox3}
        />
      </section>

      <section className={`${sectionLevel === "code" ? "block" : "hidden"}`}>
        <CodeForm
          section2Resend={section2Resend}
          section2Button={section2Button}
          back={back}
        />
      </section>


      <section className={`${sectionLevel === "name" ? "block" : "hidden"}`}>
        <NameForm
          section3CompanyTitle={section3CompanyTitle}
          section3FirstName={section3FirstName}
          section3LastName={section3LastName}
          section3Button={section3Button}
          back={back}
        />
      </section>


      <section className={`${sectionLevel === "finantial" ? "block" : "hidden"}`}>
        <FinancialPeriodForm
          section4InputTitle={section4InputTitle}
          section4InputStart={section4InputStart}
          section4InputEnd={section4InputEnd}
          section4Button={section4Button}
          back={back}
        />
      </section>
      

      <section className={`${sectionLevel === "plans" ? "block" : "hidden"}`}>
        <PlanForm
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
          back={back}
          buttonPlan={buttonPlan}
          section4Button={section4Button}
        />
      </section>

    </section>
  );
};

export default FormLevels;
