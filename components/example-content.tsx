import type { NextPage } from "next";
import Image from "next/image";

export type ExampleContentType = {
  className?: string;
};

const ExampleContent: NextPage<ExampleContentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded bg-gray-200 flex flex-col items-start justify-start pt-6 pb-0 pl-10 pr-5 box-border gap-10 shrink-0 max-w-full text-left text-base text-gray-900 font-montserrat mq450:gap-5 ${className}`}
    >
      <h3 className="m-0 w-[390px] relative text-xs font-medium font-[inherit] inline-block max-w-full text-gray-800">
        <span>Example</span>
        <span className="text-gray-900"> | Online Education Sales</span>
      </h3>
      <h1 className="m-0 w-[389px] relative text-inherit font-medium font-[inherit] inline-block max-w-full">
        For example, we find ‘collaborative planning’ in response to critical
        decision-making factors
      </h1>
      <div className="w-[324px] flex flex-row items-end justify-between relative max-w-full gap-5 text-5xl text-coral-200 font-quicksand mq450:flex-wrap">
        <h1 className="!m-[0] absolute top-[8px] left-[0px] text-inherit font-semibold font-[inherit] mq450:text-lgi">
          Collaborative planning
        </h1>
        <div className="w-[201px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border text-base">
          <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <Image
                className="w-[23px] h-4 relative"
                loading="lazy"
                width={23}
                height={16}
                alt=""
                src="/vector1.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-1.5">
              <div className="relative font-medium">+2%</div>
            </div>
            <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] text-gray-600">
              Since last week
            </h1>
          </div>
        </div>
        <div className="h-[66px] w-[66px] relative text-center text-xs text-gray-700">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-coral-200 w-full h-full z-[1]" />
          <div className="absolute top-[16px] left-[16px] rounded-999981xl bg-coral-200 w-[34.7px] h-[34.7px] overflow-hidden flex flex-row items-start justify-start pt-[9.9px] px-[5px] pb-[9.8px] box-border z-[2]">
            <div className="relative font-semibold">32%</div>
          </div>
        </div>
      </div>
      <div className="w-[389px] h-[84px] relative font-medium inline-block max-w-full">
        <p className="m-0">
          correlates with ~1.8x increase in conversion across top performing
          sales reps.
        </p>
        <p className="m-0 text-xl">&nbsp;</p>
      </div>
    </div>
  );
};

export default ExampleContent;
