import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type RecordingsType = {
  className?: string;
  download: string;
  salesCallRecordingsEmailSms?: string;

  /** Style props */
  recordingsWidth?: CSSProperties["width"];
  downloadIconOverflow?: CSSProperties["overflow"];
};

const Recordings: NextPage<RecordingsType> = ({
  className = "",
  recordingsWidth,
  download,
  downloadIconOverflow,
  salesCallRecordingsEmailSms,
}) => {
  const recordingsStyle: CSSProperties = useMemo(() => {
    return {
      width: recordingsWidth,
    };
  }, [recordingsWidth]);

  const downloadIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: downloadIconOverflow,
    };
  }, [downloadIconOverflow]);

  return (
    <div
      className={`w-[102.1px] flex flex-col items-start justify-start pt-[28.3px] pb-0 pl-0 pr-4 box-border text-center text-5xs text-gray-700 font-montserrat ${className}`}
      style={recordingsStyle}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[6.6px]">
        <div className="flex flex-row items-start justify-end py-0 pl-[30px] pr-[27px]">
          <Image
            className="h-[31.6px] w-[27.6px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={28}
            height={32}
            alt=""
            src={download}
            style={downloadIconStyle}
          />
        </div>
        <div className="relative font-medium">
          {salesCallRecordingsEmailSms}
        </div>
      </div>
    </div>
  );
};

export default Recordings;
