import Wrapper from "@/app/components/register/Wrapper";
import { useTranslations } from "next-intl";

export default function Terms() {
  const t = useTranslations("registerPage");
  const t2 = useTranslations("plans");

  return (
    <main className="px-3 md:px-5 lg:px-24 py-6 overflow-y-hidden">
      <Wrapper
        level1={t("level1")}
        level1Desc={t("level1Desc")}
        level2={t("level2")}
        level2Desc={t("level2Desc")}
        level3={t("level3")}
        level3Desc={t("level3Desc")}
        level4={t("level4")}
        level4Desc={t("level4Desc")}
        level5={t("level5")}
        level5Desc={t("level5Desc")}
        level={3}

        section1Title={t("section1Title")}
        section1InputTitle={t("section1InputTitle")}
        section1InputHolder={t("section1InputHolder")}
        button={t("button")}
        checkbox1={t("checkbox1")}
        checkbox2={t("checkbox2")}
        checkbox3={t("checkbox3")}

        section2Resend={t("section2Resend")}
        section2Button={t("section2Button")}
        back={t("back")}

        section3CompanyTitle={t("section3CompanyTitle")}
        section3FirstName={t("section3FirstName")}
        section3LastName={t("section3LastName")}
        section3Button={t("section3Button")}

        section4InputTitle={t("section4InputTitle")}
        section4InputStart={t("section4InputStart")}
        section4InputEnd={t("section4InputEnd")}
        section4Button={t("section4Button")}

        periodTitle1={t2("periodTitle1")}
        periodTitle2={t2("periodTitle2")}
        periodTitle3={t2("periodTitle3")}
        periodTitle4={t2("periodTitle4")}
        bronze={t2("bronze")}
        silver={t2("silver")}
        golden={t2("golden")}
        offline={t2("offline")}
        numberOfAccounts={t2("numberOfAccounts")}
        numberOfUsers={t2("numberOfUsers")}
        numberOfStuff={t2("numberOfStuff")}
        numberOfDocuments={t2("numberOfDocuments")}
        mobileVersion={t2("mobileVersion")}
        store={t2("store")}
        api={t2("api")}
        smsPanel={t2("smsPanel")}
        log={t2("log")}
        toman={t2("toman")}
        unlimite={t2("unlimite")}
        buttonPlan={t2("button")}

        section6GeneralInfoTtile={t("section6GeneralInfoTtile")}
        section6SubscribeInfoTitle={t("section6SubscribeInfoTitle")}
        section6SubscribeTitle={t("section6SubscribeTitle")}
        section6StartDate={t("section6StartDate")}
        section6EndDate={t("section6EndDate")}
        section6PayInfoTitle={t("section6PayInfoTitle")}
        section6SubscripPrice={t("section6SubscripPrice")}
        section6AddDiscount={t("section6AddDiscount")}
        section6TotalPrice={t("section6TotalPrice")}
        section6PayButton={t("section6PayButton")}
        section6Tax={t("section6Tax")}
        discountAddButton={t("discountAddButton")}
        discountRemoveButton={t("discountRemoveButton")}
        discountSuccess={t("discountSuccess")}
        discountError={t("discountError")}

        payCallbackWelcome={t("payCallbackWelcome")}
        payCallbackUsername={t("payCallbackUsername")}
        payCallbackPassword={t("payCallbackPassword")}
        payCallbackTicket={t("payCallbackTicket")}
        payCallbackTeam={t("payCallbackTeam")}
        payCallbackSummaryTitle={t("payCallbackSummaryTitle")}
        payCallbackPlan={t("payCallbackPlan")}
      />
    </main>
  );
}
