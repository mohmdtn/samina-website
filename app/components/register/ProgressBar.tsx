import Image from "next/image";
import React from "react";

interface ProgressBarProps {
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
}

const ProgressBar: React.FC<ProgressBarProps> = ({
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
}) => {

  function stateControl (number: number) {
    if (number > level)
      return "NEXT"
    if (number < level)
      return "PASS"

    return "ACTIVE";
  }

  function lineControl (number: number) {
    if (number > level)
      return false;

    return true;
  }
  

  return (
    <section className="hidden lg:flex justify-between items-center lg:w-[896px] mx-auto pb-20">
      {/* Level 1 */}
      <State title={level1} desc={level1Desc} state={stateControl(1)} />
      <Line active={lineControl(1)} />

      {/* Level 2 */}
      <State title={level2} desc={level2Desc} state={stateControl(2)} />
      <Line active={lineControl(2)} />

      {/* Level 3 */}
      <State title={level3} desc={level3Desc} state={stateControl(3)} />
      <Line active={lineControl(3)} />

      {/* Level 4 */}
      <State title={level4} desc={level4Desc} state={stateControl(4)} />
      <Line active={lineControl(4)} />

      {/* Level 5 */}
      <State title={level5} desc={level5Desc} state={stateControl(5)} />
    </section>
  );
};

const State = ({ title, desc, state }: { title: string; desc: string, state: "PASS" | "ACTIVE" | "NEXT" }) => {
  return (
    <div className="flex justify-center relative">
      <div className="size-8 rounded-full flex justify-center items-center overflow-hidden">
        { state === "ACTIVE" && <div className="h-full w-full bg-gray-200 p-[3px]"><div className="h-full w-full flex justify-center items-center rounded-full bg-brand-600"><div className="size-2 rounded-full bg-white" /></div></div> }
        { state === "NEXT" && <div className="h-full w-full flex justify-center items-center bg-gray-200"><div className="size-3 rounded-full bg-white" /></div> }
        { state === "PASS" && <div className="h-full w-full flex justify-center items-center bg-brand-600"><Image src={"/images/register/check.svg"} width={32} height={32} alt="Check Icon" /></div> }
      </div>

      <div className="mt-5 absolute whitespace-nowrap text-start md:text-center top-7 right-0 md:right-auto">
        <h4 className={`text-base tracking-tight font-semibold leading-[26px] ${state === "ACTIVE" ? "text-brand-600" : "text-gray-600"}`}>{title}</h4>
        <h6 className={`text-sm leading-[26px] ${state === "ACTIVE" ? "text-brand-600" : "text-gray-600"}`}>{desc}</h6>
      </div>
    </div>
  );
};

const Line = ({ active } : { active?: boolean }) => {
  return (
    <div className={`w-full h-[2px] ${active ? "bg-brand-600" : "bg-gray2-200"}`}></div>
  )
}

export default ProgressBar;
