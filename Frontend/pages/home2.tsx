import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import WebsiteCard from "../components/website-card";
import HealthBenefitsCard from "../components/health-benefits-card";
import EyeHealthCard from "../components/eye-health-card";

const Home2: NextPage = () => {
  const router = useRouter();

  const onIcons1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1756px] overflow-hidden text-left text-sm text-white-mode-main-text-color font-inter">
      <div className="absolute top-[152px] left-[calc(50%_-_180px)] bg-whitesmoke-300 w-[360px] h-[1682.1px] overflow-hidden">
        <div className="absolute bottom-[78.1px] left-[0px] rounded-t-3xs rounded-b-none bg-white w-[360px] flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[10px]">
          <div className="flex flex-row items-center justify-center z-[0]">
            <div className="flex flex-row items-start justify-center gap-[35px]">
              <img
                className="relative rounded-md w-[38px] h-[38px] overflow-hidden shrink-0"
                alt=""
                src="/icons.svg"
              />
              <img
                className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/icons1.svg"
                onClick={onIcons1Click}
              />
              <img
                className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 hidden"
                alt=""
                src="/icons2.svg"
              />
              <img
                className="relative rounded-md w-9 h-9 hidden"
                alt=""
                src="/icons3.svg"
              />
              <img
                className="relative rounded-md w-9 h-9 hidden"
                alt=""
                src="/icons4.svg"
              />
              <img
                className="relative rounded-md w-9 h-9 hidden"
                alt=""
                src="/icons5.svg"
              />
              <img
                className="relative rounded-md w-[34px] h-[34px]"
                alt=""
                src="/icons6.svg"
              />
              <img
                className="relative rounded-md w-9 h-9"
                alt=""
                src="/icons7.svg"
              />
              <img
                className="relative rounded-md w-9 h-9"
                alt=""
                src="/icons8.svg"
              />
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[20px] left-[17px] rounded-md w-9 h-9 hidden z-[1]"
            alt=""
            src="/frame-767.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[361px] h-[1686px] overflow-hidden">
        <WebsiteCard propWidth="100%" />
        <div className="absolute top-[100px] left-[calc(50%_-_180.5px)] bg-white w-[360px] flex flex-row items-center justify-between py-2.5 pr-[15px] pl-[26px] box-border text-white">
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start">
              <img
                className="relative w-[63.6px] h-8 overflow-hidden shrink-0"
                alt=""
                src="/foodnetwork-11.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end gap-[24px]">
            <img
              className="relative rounded-md w-8 h-8 hidden"
              alt=""
              src="/frame-768.svg"
            />
            <img
              className="relative rounded-md w-8 h-8 hidden"
              alt=""
              src="/frame-7671.svg"
            />
            <div className="rounded-md bg-tomato-400 flex flex-row items-start justify-start p-1 border-[2px] border-solid border-tomato-400">
              <img
                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame4.svg"
              />
            </div>
            <div className="rounded-md bg-tomato-100 hidden flex-row items-center justify-start py-2 px-2.5 relative gap-[5px] border-[2px] border-solid border-tomato-400">
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10.65px)] w-5 h-5 overflow-hidden shrink-0 hidden z-[0]"
                alt=""
                src="/bookmark01.svg"
              />
              <div className="relative font-semibold z-[1]">Support Us</div>
              <div className="flex flex-col items-start justify-start z-[2]">
                <img
                  className="relative w-[27.3px] h-5"
                  alt=""
                  src="/name13.svg"
                />
              </div>
            </div>
            <img
              className="relative rounded-md w-8 h-8"
              alt=""
              src="/frame-765.svg"
            />
          </div>
        </div>
        <div className="absolute top-[210px] left-[calc(50%_-_165.5px)] w-[330px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-[15px] px-3 gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[44px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
                <HealthBenefitsCard />
                <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                  </div>
                  <div className="self-stretch relative text-xs leading-[160%]">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. `}</div>
                </div>
                <EyeHealthCard />
              </div>
              <div className="rounded-xl flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-center gap-[10px]">
                  <b className="relative leading-[160%]">Was this helpful?</b>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/star2.svg"
                    />
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/star2.svg"
                    />
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/star2.svg"
                    />
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/star2.svg"
                    />
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 opacity-[0.5]"
                      alt=""
                      src="/star3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-2.5 px-0 gap-[22px]">
              <img className="relative w-7 h-7" alt="" src="/facebook.svg" />
              <img className="relative w-7 h-7" alt="" src="/linkedin.svg" />
              <img className="relative w-7 h-7" alt="" src="/twitter.svg" />
              <div className="relative w-7 h-7">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/name.svg"
                />
                <div className="absolute top-[calc(50%_-_1.7px)] left-[calc(50%_-_7.2px)] flex flex-row items-start justify-start gap-[2px]">
                  <div className="relative rounded-[50%] bg-white w-[3.4px] h-[3.4px]" />
                  <div className="relative rounded-[50%] bg-white w-[3.4px] h-[3.4px]" />
                  <div className="relative rounded-[50%] bg-white w-[3.4px] h-[3.4px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[161px] left-[13px] rounded-lg bg-white w-[330px] flex flex-row items-center justify-between py-2.5 px-[15px] box-border text-xs">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative w-5 h-5 overflow-hidden shrink-0">
              <div className="absolute top-[2.9px] left-[3px] w-3.5 h-[14.2px]">
                <div className="absolute h-[42.25%] w-[42.86%] top-[0%] right-[57.14%] bottom-[57.75%] left-[0%] rounded-sm bg-darkorange" />
                <div className="absolute h-[42.25%] w-[42.86%] top-[57.75%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-darkorange" />
                <div className="absolute h-[42.25%] w-[42.86%] top-[0%] right-[0%] bottom-[57.75%] left-[57.14%] rounded-tl-mini rounded-tr-none rounded-b-mini bg-orange-100" />
                <div className="absolute h-[42.25%] w-[42.86%] top-[57.75%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-darkorange" />
              </div>
            </div>
            <div className="relative font-semibold">Select Food Item</div>
          </div>
          <img
            className="relative w-3.5 h-3.5"
            alt=""
            src="/frame-1000003599.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;
