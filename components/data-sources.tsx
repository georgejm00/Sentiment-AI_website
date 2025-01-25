import type { NextPage } from "next";
import Image from "next/image";
import Recordings from "./recordings";

export type DataSourcesType = {
  className?: string;
};

const DataSources: NextPage<DataSourcesType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between flex-wrap content-start pt-0 px-0 pb-[79.1px] shrink-0 gap-5 text-center text-5xs text-gray-700 font-montserrat ${className}`}
    >
      <Recordings
        download="/download.svg"
        salesCallRecordingsEmailSms={`Sales call recordings, email & sms`}
      />
      <div className="w-[123.1px] flex flex-col items-end justify-start gap-[4.3px]">
        <div className="flex flex-row items-start justify-end py-0 pl-12 pr-[47px]">
          <Image
            className="h-[31.6px] w-[27.6px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={28}
            height={32}
            alt=""
            src="/download-1.svg"
          />
        </div>
        <div className="relative font-medium">
          Customer support calls and chat conversations
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[3px] text-xs">
          <div className="flex-1 flex flex-col items-end justify-start gap-[9.9px]">
            <div className="w-[57.7px] flex flex-row items-start justify-start relative">
              <Image
                className="h-[43.4px] w-[101.4px] absolute !m-[0] right-[-70.7px] bottom-[-19.7px] object-contain"
                loading="lazy"
                width={101}
                height={43}
                alt=""
                src="/arrow-20.svg"
              />
              <div className="flex-1 flex flex-row items-start justify-start">
                <Image
                  className="h-[50px] w-[14.7px] relative object-contain"
                  loading="lazy"
                  width={15}
                  height={50}
                  alt=""
                  src="/arrow-19.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start relative gap-[5.9px]">
              <div className="flex flex-row items-start justify-end py-0 pl-[41px] pr-[39px]">
                <Image
                  className="h-[35.5px] w-[35.5px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={36}
                  height={36}
                  alt=""
                  src="/download-11.svg"
                />
              </div>
              <h3 className="m-0 self-stretch relative text-inherit font-medium font-[inherit]">
                multi_agent_batch
              </h3>
              <Image
                className="w-[117.2px] h-[43.4px] absolute !m-[0] top-[-33.6px] left-[-83.8px] object-contain"
                loading="lazy"
                width={117}
                height={43}
                alt=""
                src="/arrow-18.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Recordings
        recordingsWidth="116.5px"
        download="/group-1268.svg"
        downloadIconOverflow="unset"
        salesCallRecordingsEmailSms="Account and relationship management calls"
      />
    </div>
  );
};

export default DataSources;
