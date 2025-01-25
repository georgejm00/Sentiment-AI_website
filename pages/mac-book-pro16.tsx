import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-col items-start justify-start pt-10 px-[629px] pb-[638px] box-border gap-10 leading-[normal] tracking-[normal] text-left text-13xl text-white font-montserrat mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[314px] mq900:pr-[314px] mq900:box-border">
      <FrameComponent />
      <Image
        className="w-[51.5px] h-12 relative"
        loading="lazy"
        width={52}
        height={48}
        alt=""
        src="/group-12611.svg"
      />
      <h1 className="m-0 self-stretch relative text-inherit italic font-medium font-[inherit] mq450:text-lgi mq900:text-7xl">
        What do you care about?
      </h1>
      <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full mq675:gap-5">
        <FrameComponent2 />
      </div>
      <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border" />
    </div>
  );
};

export default MacBookPro16;
