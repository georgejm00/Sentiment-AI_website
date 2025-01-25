import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "./frame-component1";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/mac-book-pro162");
  }, [router]);

  return (
    <div
      className={`overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-10 max-w-full text-left text-base text-gray-800 font-montserrat mq675:gap-5 ${className}`}
    >
      <div
        className="flex flex-row items-start justify-start py-0 px-0 cursor-pointer"
        onClick={onFrameContainerClick}
      >
        <button className="cursor-pointer [border:none] py-[31px] px-[35px] bg-gray-200 flex-1 rounded-lg flex flex-row items-start justify-start shrink-0 hover:bg-dimgray">
          <div className="h-[82px] w-[180px] relative rounded-lg bg-gray-200 hidden" />
          <div className="relative text-base font-medium font-montserrat text-gray-800 text-left inline-block min-w-[105px] z-[1]">
            Driving sales
          </div>
        </button>
      </div>
      <FrameComponent1
        greatCustomer="Great customer "
        experiences="experiences"
      />
      <FrameComponent1
        frameDivFlex="unset"
        frameDivWidth="180px"
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

export default FrameComponent2;
