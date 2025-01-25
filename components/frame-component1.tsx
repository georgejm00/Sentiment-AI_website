import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  greatCustomer?: string;
  experiences?: string;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivWidth?: CSSProperties["width"];
  greatCustomerExperiencesContainerWidth?: CSSProperties["width"];
  greatCustomerExperiencesContainerDisplay?: CSSProperties["display"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameDivFlex,
  frameDivWidth,
  greatCustomerExperiencesContainerWidth,
  greatCustomerExperiencesContainerDisplay,
  greatCustomer,
  experiences,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      width: frameDivWidth,
    };
  }, [frameDivFlex, frameDivWidth]);

  const greatCustomerExperiencesContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: greatCustomerExperiencesContainerWidth,
      display: greatCustomerExperiencesContainerDisplay,
    };
  }, [
    greatCustomerExperiencesContainerWidth,
    greatCustomerExperiencesContainerDisplay,
  ]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-0 text-left text-base text-gray-800 font-montserrat ${className}`}
    >
      <div
        className="flex-1 rounded-lg bg-gray-200 flex flex-row items-start justify-start p-[21px] shrink-0"
        style={frameDivStyle}
      >
        <div className="h-[82px] w-[180px] relative rounded-lg bg-gray-200 hidden" />
        <div
          className="w-[131px] relative font-medium inline-block shrink-0 z-[1]"
          style={greatCustomerExperiencesContainerStyle}
        >
          <p className="m-0">{greatCustomer}</p>
          <p className="m-0">{experiences}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
