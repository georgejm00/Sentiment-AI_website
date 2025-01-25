import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/mac-book-pro161");
  }, [router]);

  return (
    <div
      className={`bg-gray-400 overflow-hidden flex flex-row items-start justify-start pt-2.5 pb-20 pl-2.5 pr-[9px] gap-2.5 cursor-pointer text-left text-base text-gray-800 font-montserrat ${className}`}
      onClick={onFrameContainerClick}
    >
      <div className="relative cursor-pointer" onClick={onFrameContainerClick}>
        <span>{`Sentiment AI | `}</span>
        <span className="font-medium text-white">Short intro</span>
      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <Image
          className="w-[7px] h-4 object-contain cursor-pointer"
          loading="lazy"
          width={7}
          height={16}
          alt=""
          src="/frame-22371@2x.png"
          onClick={onFrameContainerClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
