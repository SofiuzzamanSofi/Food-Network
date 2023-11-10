import type { NextPage } from "next";
import { useCallback } from "react";
import HealthBenefitsCard from "../components/health-benefits-card";
import EyeHealthCard from "../components/eye-health-card";
import { useRouter } from "next/router";
import WebsiteCard from "../components/website-card";
import MobileBottomMenu from "../components/MobileBottomMenu";

const Home1: NextPage = () => {
  const router = useRouter();

  const onIcons1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[865px] overflow-hidden text-left text-sm text-white-mode-main-text-color font-inter">
      <div className="absolute top-[152px] left-[calc(50%_-_180px)] bg-whitesmoke-300 w-[360px] h-[1682.1px]" />
      <div className="absolute top-[210px] left-[calc(50%_-_165px)] w-[330px] flex flex-col items-start justify-start">
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
      {/* <MobileBottomMenu /> */}
      <div className="absolute top-[161px] left-[13px] rounded-lg bg-white w-[330px] flex flex-row items-center justify-between py-2.5 px-[15px] box-border text-xs">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <div className="relative w-5 h-5 overflow-hidden shrink-0">
            <div className="absolute h-[71%] w-[70%] top-[14.5%] right-[15%] bottom-[14.5%] left-[15%]">
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
      <WebsiteCard />
      <div className="absolute top-[100px] left-[calc(50%_-_180px)] bg-white w-[360px] flex flex-row items-center justify-between py-2.5 pr-[15px] pl-[26px] box-border text-white">
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
      <div className="absolute top-[calc(50%_-_332.5px)] left-[0px] bg-gray-300 w-[360px] h-[800px]" />
      <div className="absolute top-[100px] left-[0px] rounded-tl-none rounded-tr-mini rounded-br-mini rounded-bl-none bg-white w-[300px] h-[765px] flex flex-col items-center justify-start p-[15px] box-border gap-[15px] text-xs text-tomato-100">
        <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-1 gap-[10px] z-[0] text-sm border-[2px] border-solid border-tomato-200">
          <div className="flex-1 rounded-6xs bg-tomato-400 flex flex-row items-center justify-center py-1.5 px-1">
            <div className="relative font-semibold">Fruits</div>
          </div>
          <div className="flex-1 rounded-6xs bg-white flex flex-row items-center justify-center py-1.5 px-1 text-gray-200">
            <div className="relative">Vegetables</div>
          </div>
        </div>
        <div className="self-stretch rounded-6xs bg-white overflow-hidden flex flex-row items-center justify-between py-1 pr-1 pl-[15px] z-[1] text-gray-600 border-[2px] border-solid border-whitesmoke-200">
          <div className="relative">Search by Fruits Name</div>
          <div className="rounded-8xs bg-tomato-400 flex flex-col items-center justify-start py-1 px-1.5">
            <img
              className="relative w-[23.2px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/frame2.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] z-[2] text-gray-200">
          <div className="self-stretch relative font-medium">Fruits List</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px] border-[1.5px] border-solid border-tomato-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-orange-200 w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name26@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Oranges
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-tomato-300 w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name27@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Apples
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Avocado
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin B6
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Strawberries
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Mangoes
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin A, C
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Blueberries
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C, K
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Grapes
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C, K
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Pineapples
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C, K
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Papayas
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    Vitamin C, K
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
            <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-[19.31px] flex flex-row items-center justify-center relative gap-[7.72px]">
                  <div className="relative rounded-4xs-5 bg-olivedrab w-[31.1px] h-[31.1px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                  <img
                    className="relative w-[23.2px] h-[23.2px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/fi-8910941.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_16.5px)] left-[calc(50%_-_16.8px)] w-[32.8px] h-[32.8px] object-cover z-[2]"
                    alt=""
                    src="/name28@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Al-Faatiha
                  </div>
                  <div className="self-stretch relative text-xs text-gray-700">
                    The Opener
                  </div>
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/dot-menu1.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute my-0 mx-[!important] top-[262px] right-[5.5px] box-border w-[3px] h-[93px] z-[3] border-r-[3px] border-solid border-whitesmoke-300" />
      </div>
    </div>
  );
};

export default Home1;
