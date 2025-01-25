import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const MacBookPro161: NextPage = () => {
  const router = useRouter();

  const onSeeWhatWeClick = useCallback(() => {
    router.push("/mac-book-pro16");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-row items-start justify-center py-0 px-[549px] box-border leading-[normal] tracking-[normal] text-left text-xl text-gray-900 font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[274px] mq900:pr-[274px] mq900:box-border">
      <div className="flex-1 bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[276px] pb-[363px] pl-20 pr-5 box-border gap-[36.5px] max-w-full mq450:pt-[116px] mq450:pb-[153px] mq450:box-border mq700:gap-[18px] mq700:pl-10 mq700:box-border mq900:pt-[179px] mq900:pb-[236px] mq900:box-border">
        <Image
          className="w-[51.5px] h-12 relative"
          loading="lazy"
          width={52}
          height={48}
          alt=""
          src="/group-1261.svg"
        />
        <div className="w-[469px] relative inline-block max-w-full mq450:text-base">
          <p className="m-0 text-13xl text-white">
            <i className="font-medium">
              <span>AI systems to measure behaviours and emotions</span>
            </i>
          </p>
          <p className="m-0 text-[28px]">
            <i className="font-medium">
              <span>&nbsp;</span>
            </i>
          </p>
          <p className="m-0">
            Historically, we’ve had great tools for crunching numbers.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Now, we’re building systems that understand how we feel and behave.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We use these systems to deliver great customer experiences. And
            build great teams.
          </p>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-[12.5px] pl-0 pr-14 gap-2.5 text-white">
          <div
            className="relative font-medium cursor-pointer mq450:text-base"
            onClick={onSeeWhatWeClick}
          >
            See what we do
          </div>
          <Image
            className="h-[13px] w-1.5 relative object-contain cursor-pointer"
            loading="lazy"
            width={6}
            height={13}
            alt=""
            src="/vector.svg"
            onClick={onSeeWhatWeClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro161;
