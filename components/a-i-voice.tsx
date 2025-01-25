import type { NextPage } from "next";
import Image from "next/image";

export type AIVoiceType = {
  className?: string;
};

const AIVoice: NextPage<AIVoiceType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-between flex-wrap content-start shrink-0 max-w-full gap-5 text-center text-5xs text-white font-montserrat ${className}`}
    >
      <div className="w-[97.3px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 flex flex-col items-start justify-start pt-[9.3px] pb-[8.5px] pl-2.5 pr-[7px] box-border gap-[4.4px]">
        <div className="w-[97.3px] h-[69.2px] relative shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 hidden" />
        <div className="flex flex-row items-start justify-start py-0 pl-[29px] pr-9">
          <Image
            className="h-[13.2px] w-[14.4px] relative z-[1]"
            width={14}
            height={13}
            alt=""
            src="/group-1315.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[26px] pr-8">
          <div className="flex-1 relative font-semibold z-[1]">Elara</div>
        </div>
        <div className="self-stretch relative text-7xs leading-[19.4px] font-medium whitespace-nowrap z-[1]">
          Our empathic AI voice avatar: optimised on the best of human
          behaviour.
        </div>
      </div>
      <div className="shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 flex flex-col items-end justify-start py-[8.3px] pl-[9px] pr-2 gap-[4.3px]">
        <div className="w-[109px] h-[69px] relative shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 hidden" />
        <div className="flex flex-row items-start justify-end py-0 px-[38px]">
          <Image
            className="h-[14.4px] w-[14.4px] relative overflow-hidden shrink-0 object-contain z-[1]"
            width={14}
            height={14}
            alt=""
            src="/dataflow-1@2x.png"
          />
        </div>
        <div className="self-stretch relative font-semibold z-[1]">
          enrolment_prediction
        </div>
        <div className="flex flex-row items-start justify-end py-0 pl-1.5 pr-[5px] text-7xs">
          <div className="w-[79.8px] relative leading-[19.4px] font-medium inline-block shrink-0 whitespace-nowrap z-[1]">
            Custom predictive models built on our behavioural intelligence.
          </div>
        </div>
      </div>
      <div className="w-[97.3px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 flex flex-col items-end justify-start pt-[8.3px] px-2 pb-[8.5px] box-border gap-[5.3px]">
        <div className="w-[97.3px] h-[69.2px] relative shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 hidden" />
        <div className="flex flex-row items-start justify-end py-0 pl-[34px] pr-8">
          <Image
            className="h-[14.4px] w-[14.4px] relative overflow-hidden shrink-0 z-[1]"
            width={14}
            height={14}
            alt=""
            src="/layout-1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.9px]">
          <div className="self-stretch relative font-semibold shrink-0 z-[1]">
            front_end_batch
          </div>
          <div className="self-stretch relative text-7xs leading-[19.4px] font-medium shrink-0 whitespace-nowrap z-[1]">
            Real-time delivery platform for human behavioural coaching.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVoice;
