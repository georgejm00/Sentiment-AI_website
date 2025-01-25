import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ExperienceCultureCellType = {
  className?: string;
  greatCustomer?: string;
  experiences?: string;

  /** Style props */
  nestedCellAlignSelf?: CSSProperties["alignSelf"];
  innerCellFlex?: CSSProperties["flex"];
  innerCellWidth?: CSSProperties["width"];
  greatCustomerExperiencesContainerWidth?: CSSProperties["width"];
  greatCustomerExperiencesContainerDisplay?: CSSProperties["display"];
};

const ExperienceCultureCell: NextPage<ExperienceCultureCellType> = ({
  className = "",
  nestedCellAlignSelf,
  innerCellFlex,
  innerCellWidth,
  greatCustomerExperiencesContainerWidth,
  greatCustomerExperiencesContainerDisplay,
  greatCustomer,
  experiences,
}) => {
  const nestedCellStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: nestedCellAlignSelf,
    };
  }, [nestedCellAlignSelf]);

  const innerCellStyle: CSSProperties = useMemo(() => {
    return {
      flex: innerCellFlex,
      width: innerCellWidth,
    };
  }, [innerCellFlex, innerCellWidth]);

  const greatCustomerExperiencesContainer1Style: CSSProperties = useMemo(() => {
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
      className={`flex flex-col items-start justify-start py-0 pl-0 pr-1.5 text-left text-base text-gray-800 font-montserrat ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 px-0"
        style={nestedCellStyle}
      >
        <div
          className="flex-1 rounded-lg bg-gray-200 flex flex-row items-start justify-start p-[21px] shrink-0"
          style={innerCellStyle}
        >
          <div className="h-[82px] w-[180px] relative rounded-lg bg-gray-200 hidden" />
          <div
            className="w-[131px] relative font-medium inline-block shrink-0 z-[1]"
            style={greatCustomerExperiencesContainer1Style}
          >
            <p className="m-0">{greatCustomer}</p>
            <p className="m-0">{experiences}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCultureCell;
