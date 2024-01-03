// "use client";

import Plans from "../Plans";

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
}) => {
  return (
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
  );
};

export default PlanForm;
