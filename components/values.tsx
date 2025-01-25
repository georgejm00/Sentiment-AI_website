import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ExperienceCultureCell from "./experience-culture-cell";
import FrameComponent1 from "./frame-component1";

export type ValuesType = {
  className?: string;
};

const Values: NextPage<ValuesType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/mac-book-pro162");
  }, [router]);

  return (
    <div
      className={`overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[33.5px] max-w-full mq675:gap-[17px] ${className}`}
    >
      <button
        className="cursor-pointer [border:none] py-[31px] pl-[38px] pr-[37px] bg-gray-200 rounded-lg flex flex-row items-start justify-start hover:bg-dimgray"
        onClick={onFrameButtonClick}
      >
        <div className="h-[82px] w-[180px] relative rounded-lg bg-gray-200 hidden" />
        <div className="relative text-base font-medium font-montserrat text-gray-900 text-left inline-block min-w-[105px] z-[1]">
          Driving sales
        </div>
      </button>
      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
          <button className="cursor-pointer border-indianred-200 border-[1px] border-solid py-[19px] px-[21px] bg-gray-200 h-[82px] flex-1 rounded-lg box-border flex flex-row items-start justify-start shrink-0 whitespace-nowrap hover:bg-dimgray hover:border-indianred-100 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="h-[82px] w-[180px] relative rounded-lg bg-gray-200 border-indianred-200 border-[1px] border-solid box-border hidden" />
            <div className="relative text-base font-medium font-montserrat text-gray-800 text-left z-[1]">
              <p className="m-0">{`Great customer `}</p>
              <p className="m-0">experiences</p>
            </div>
          </button>
        </div>
      </div>
      <ExperienceCultureCell
        nestedCellAlignSelf="unset"
        innerCellFlex="unset"
        innerCellWidth="180px"
        greatCustomerExperiencesContainerWidth="unset"
        greatCustomerExperiencesContainerDisplay="unset"
        greatCustomer="Team culture"
        experiences={`& behaviours`}
      />
      <FrameComponent1
        frameDivFlex="1"
        frameDivWidth="unset"
        greatCustomerExperiencesContainerWidth="131px"
        greatCustomerExperiencesContainerDisplay="inline-block"
        greatCustomer={`Leadership &`}
        experiences="career coaching"
      />
    </div>
  );
};

export default Values;
