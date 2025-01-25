import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import DataSources from "../components/data-sources";
import ExampleContent from "../components/example-content";
import AIVoice from "../components/a-i-voice";

const MacBookPro162: NextPage = () => {
  const router = useRouter();

  const onPerformanceImageClick = useCallback(() => {
    router.push("/mac-book-pro16");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-300 flex flex-col items-start justify-start pt-24 pb-[156px] pl-[629px] pr-[628px] box-border gap-10 leading-[normal] tracking-[normal] text-left text-base text-gray-800 font-montserrat mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[314px] mq1050:pr-[314px] mq1050:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
        <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <Image
            className="h-4 w-[81px] object-contain cursor-pointer"
            loading="lazy"
            width={81}
            height={16}
            alt=""
            src="/frame-2237@2x.png"
            onClick={onPerformanceImageClick}
          />
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-h-[60px]">
            <p className="m-0">Sales and retention</p>
            <p className="m-0">&nbsp;</p>
          </a>
        </div>
      </div>
      <div className="self-stretch h-[755px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[188.2px] box-border gap-[0.9px] max-w-full text-xl text-gray-900 lg:pb-[79px] lg:box-border mq450:h-auto mq450:pb-[33px] mq450:box-border mq1050:pb-[51px] mq1050:box-border">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-base">
            We analyse sales, customer service and account management
            conversations...
          </h1>
        </div>
        <DataSources />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block min-h-[96px] shrink-0 max-w-full font-[inherit] mq450:text-base">
            <p className="m-0">
              <span className="font-medium">{`...to identify the best-performing sales and retention behaviours for `}</span>
              <i className="font-semibold font-montserrat">your</i>
              <span className="font-medium font-montserrat"> customers.</span>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
          </h1>
        </div>
        <div className="self-stretch h-[80.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gray-100 border-t-[1px] border-solid box-border shrink-0 max-w-full" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full mq450:pb-[51px] mq450:box-border">
          <ExampleContent />
        </div>
        <div className="self-stretch h-[80.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gray-100 border-t-[1px] border-solid box-border shrink-0 max-w-full" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[91.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block shrink-0 max-w-full font-[inherit] mq450:text-base">
            <span className="font-semibold">multi_agent_batch</span>
            <span className="font-medium">
              {" "}
              uses a mixture of custom LLM graphs and traditional ML
              approaches...
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[82.9px] box-border max-w-full text-center text-xs text-gray-700">
          <div className="flex-1 flex flex-col items-end justify-start gap-[17.4px] shrink-0 max-w-full">
            <div className="w-[364.5px] flex flex-row items-start justify-end py-0 px-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                <div className="w-[69px] flex flex-col items-start justify-start">
                  <Image
                    className="w-[27.6px] h-[31.6px] relative"
                    width={28}
                    height={32}
                    alt=""
                    src="/group-1490.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <h3 className="m-0 w-[42px] relative text-inherit font-medium font-[inherit] inline-block">
                    Layer 1
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start pt-2 pb-0 pl-0 pr-[26px]">
                  <h3 className="m-0 self-stretch relative text-inherit font-medium font-[inherit] inline-block min-w-[45px]">
                    Layer 2
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <h3 className="m-0 w-[46px] relative text-inherit font-medium font-[inherit] inline-block">
                    Layer n
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10.2px] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[19.2px] px-0 pb-0 box-border min-w-[136px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-2.5">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[8.5px]">
                    <div className="flex flex-row items-start justify-start gap-[10.3px]">
                      <Image
                        className="h-[35.5px] w-[35.5px] relative overflow-hidden shrink-0"
                        width={36}
                        height={36}
                        alt=""
                        src="/download-1-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-[16.8px] px-0 pb-0">
                        <Image
                          className="w-[42px] h-0 relative"
                          width={42}
                          height
                          alt=""
                          src="/arrow-38.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[11px]">
                      <h3 className="m-0 flex-1 relative text-inherit font-medium font-[inherit]">
                        multi_agent_batch
                      </h3>
                    </div>
                  </div>
                  <div className="w-[71px] flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0 box-border">
                    <div className="self-stretch h-7 relative rounded-lg bg-gray-500" />
                  </div>
                </div>
              </div>
              <div className="w-[71px] flex flex-col items-start justify-start gap-3.5">
                <div className="self-stretch h-7 relative rounded-lg bg-gray-500" />
                <div className="self-stretch h-7 relative rounded-lg bg-gray-500" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 text-5xl">
                <h1 className="m-0 w-[18px] relative text-inherit font-medium font-[inherit] inline-block mq450:text-lgi">
                  ...
                </h1>
              </div>
              <div className="w-[71px] flex flex-col items-start justify-start gap-3.5">
                <div className="self-stretch h-7 relative rounded-lg bg-gray-500" />
                <div className="self-stretch h-7 relative rounded-lg bg-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-base">
            to identify behaviours that drive successful outcomes: conversion,
            retention, satisfaction.
          </h1>
        </div>
        <div className="self-stretch h-[80.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gray-100 border-t-[1px] border-solid box-border shrink-0 max-w-full" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[89.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block shrink-0 max-w-full font-[inherit] mq450:text-base">
            <span className="font-medium">{`Once we understands the behaviours that perform best with `}</span>
            <i className="font-semibold">your</i>
            <span className="font-medium"> customers</span>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[33px] pb-[5.6px] box-border max-w-full">
          <AIVoice />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-[78px] pr-[82px] mq750:pl-[39px] mq750:pr-[41px] mq750:box-border">
          <div className="w-[309.6px] flex flex-row items-start justify-start gap-[3.5px] shrink-0">
            <div className="h-[18.9px] flex-1 relative rounded-3xl border-darkgray border-[0px] border-solid box-border" />
            <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
              <div className="w-[14.4px] h-[24.2px] relative">
                <Image
                  className="absolute top-[9.8px] left-[0px] w-[14.4px] h-[14.4px] overflow-hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/download-1-2.svg"
                />
                <Image
                  className="absolute top-[0px] left-[7.2px] w-0 h-[6.4px] object-contain"
                  width
                  height={6}
                  alt=""
                  src="/arrow-36.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
              <div className="self-stretch h-[18px] relative rounded-3xl border-darkgray border-[0px] border-solid box-border [transform:_rotate(180deg)]" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[89.1px] pl-[27px] pr-5 text-center text-7xs">
          <div className="w-[298.8px] flex flex-row items-start justify-between shrink-0 gap-5">
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[5px] gap-[1.4px]">
              <div className="ml-[-7.8px] flex flex-col items-start justify-start pt-[4.4px] px-0 pb-0">
                <Image
                  className="w-[6.4px] h-0 relative object-contain shrink-0"
                  width={6}
                  height
                  alt=""
                  src="/arrow-25.svg"
                />
              </div>
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0.36))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] shrink-0">
                Left tail
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0 text-5xs">
              <div className="self-stretch relative font-medium inline-block min-w-[79px]">
                multi_agent_batch
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.4px]">
              <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.36),_rgba(255,_255,_255,_0.6)_75.3%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] shrink-0">
                Right tail
              </div>
              <div className="flex flex-col items-start justify-start pt-[4.4px] px-0 pb-0">
                <Image
                  className="w-[6.4px] h-0 relative shrink-0"
                  width={6}
                  height
                  alt=""
                  src="/arrow-24.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="h-[183px] flex-1 relative inline-block shrink-0 max-w-full">
            <p className="m-0">
              <span className="font-medium">
                <span>
                  We use this intelligence to deploy out across three
                  applications:
                </span>
              </span>
            </p>
            <p className="m-0 text-xs">
              <span className="font-medium">
                <span>&nbsp;</span>
              </span>
            </p>
            <ul className="m-0 text-base pl-[21px]">
              <li className="mb-[Mixed]">
                <span>
                  <span className="font-semibold font-montserrat">{`front_end_batch: `}</span>
                  <span className="font-medium">Human behavioural nudges</span>
                </span>
              </li>
              <li className="mb-[Mixed]">
                <span>
                  <span className="font-semibold font-montserrat">{`Elara: `}</span>
                  <span className="font-medium font-montserrat">
                    Avatars trained on the best human behaviours
                  </span>
                </span>
              </li>
              <li className="mb-[Mixed]">
                <span>
                  <span className="font-semibold font-montserrat">
                    enrolment_prediction:
                  </span>
                  <span className="font-medium font-montserrat">
                    {" "}
                    Predictive models based on our behavioural intelligence
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="self-stretch h-[80.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gray-100 border-t-[1px] border-solid box-border shrink-0 max-w-full" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[78.6px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block shrink-0 max-w-full font-[inherit] mq450:text-base">
            <span className="font-semibold">front_end_batch</span>
            <span className="font-medium">
              {" "}
              delivers individual level behavioural nudges for specific
              interactions.
            </span>
          </h1>
        </div>
        <div className="self-stretch h-[299.6px] shrink-0 flex flex-row items-start justify-start pt-0 px-[95px] pb-[78.6px] box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border">
          <div className="self-stretch flex-1 border-gray-100 border-[1px] border-solid flex flex-col items-center justify-center shrink-0">
            <Image
              className="w-[259px] h-[205px] relative object-cover"
              width={259}
              height={205}
              alt=""
              src="/screenshot-20250124-at-230214-1@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-base">
            Coaching your whole team to behave like your top-performing sales
            and support reps.
          </h1>
        </div>
        <div className="self-stretch h-[80.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gray-100 border-t-[1px] border-solid box-border shrink-0 max-w-full" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[180.3px] box-border relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block shrink-0 max-w-full font-[inherit] mq450:text-base">
            <span className="font-semibold">Elara</span>
            <span className="font-medium">
              {" "}
              adjusts her tone of voice in real-time to optimise for customer
              satisfaction outcomes.
            </span>
          </h1>
          <Image
            className="h-[89.2px] w-[97px] absolute !m-[0] bottom-[11.1px] left-[185.5px]"
            width={97}
            height={89}
            alt=""
            src="/group-1315-1.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start pt-0 pb-[11.1px] pl-3 pr-[13px] text-white">
          <h1 className="m-0 relative text-inherit italic font-medium font-[inherit] shrink-0 mq450:text-base">
            ‘What is the main thing holding you back...’
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[81.9px] pl-12 pr-[50px] box-border max-w-full text-5xs text-white mq750:pl-6 mq750:pr-[25px] mq750:box-border">
          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-2.5 shrink-0 max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.8px] box-border gap-1 min-w-[88px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <div className="relative font-medium whitespace-pre-wrap inline-block min-w-[62px]">{`contemplation                 `}</div>
                <div className="relative text-gray-800 inline-block min-w-[18px]">
                  0.27
                </div>
              </div>
              <div className="self-stretch rounded-2xl bg-gainsboro flex flex-row items-start justify-start pt-[0.2px] px-0 pb-0">
                <div className="h-[5px] w-[117px] relative rounded-2xl bg-gainsboro hidden" />
                <div className="h-[5px] w-[37px] relative rounded-2xl bg-darkseagreen z-[1]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.8px] box-border gap-1 min-w-[88px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <div className="relative font-medium inline-block min-w-[33px]">
                  interest
                </div>
                <div className="relative text-gray-800">0.68</div>
              </div>
              <div className="self-stretch rounded-2xl bg-gainsboro flex flex-row items-start justify-start pt-[0.2px] pb-0 pl-0 pr-10">
                <div className="h-[5px] w-[117px] relative rounded-2xl bg-gainsboro hidden" />
                <div className="h-[5px] flex-1 relative rounded-2xl bg-coral-100 z-[1]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.8px] box-border gap-1 min-w-[88px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <div className="relative font-medium">determination</div>
                <div className="relative text-gray-800">0.35</div>
              </div>
              <div className="self-stretch rounded-2xl bg-gainsboro flex flex-row items-start justify-start pt-[0.2px] px-0 pb-0">
                <div className="h-[5px] w-[117px] relative rounded-2xl bg-gainsboro hidden" />
                <div className="h-[5px] w-[37px] relative rounded-2xl bg-firebrick z-[1]" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-base">
            Modelling her behaviours and emotions on your best-performing sales
            and support reps.
          </h1>
        </div>
        <div className="self-stretch h-[80.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gray-100 border-t-[1px] border-solid box-border shrink-0 max-w-full" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block shrink-0 max-w-full font-[inherit] mq450:text-base">
            <span className="font-semibold">enrolment_prediction</span>
            <span className="font-medium">
              {" "}
              uses behavioural and emotional intelligence to predict conversion.
            </span>
          </h1>
        </div>
        <div className="self-stretch h-[298.1px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <div className="self-stretch flex-1 border-gray-100 border-[1px] border-solid box-border flex flex-col items-center justify-center shrink-0 max-w-full">
            <Image
              className="w-[412px] relative max-h-full object-cover max-w-full"
              width={412}
              height={181}
              alt=""
              src="/distribution-1@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[79.1px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-base">
            Prioritising CRMs, suggesting best actions and routing to human |
            digital based on ROI.
          </h1>
        </div>
        <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border shrink-0" />
      </div>
    </div>
  );
};

export default MacBookPro162;
