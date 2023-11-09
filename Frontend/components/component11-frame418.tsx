import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component11Frame418Type = {
  /** Style props */
  component11Frame418Height?: CSSProperties["height"];
  component11Frame418Position?: CSSProperties["position"];
  component11Frame418Top?: CSSProperties["top"];
  component11Frame418Right?: CSSProperties["right"];
};

const Component11Frame418: NextPage<Component11Frame418Type> = ({
  component11Frame418Height,
  component11Frame418Position,
  component11Frame418Top,
  component11Frame418Right,
}) => {
  const component11Frame418Style: CSSProperties = useMemo(() => {
    return {
      height: component11Frame418Height,
      position: component11Frame418Position,
      top: component11Frame418Top,
      right: component11Frame418Right,
    };
  }, [
    component11Frame418Height,
    component11Frame418Position,
    component11Frame418Top,
    component11Frame418Right,
  ]);

  return (
    <div
      className="rounded-3xs bg-white w-[300px] h-[615px] overflow-hidden flex flex-col items-start justify-start p-[15px] box-border text-left text-base text-gray-200 font-inter"
      style={component11Frame418Style}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <div className="relative w-0 h-0 hidden">
          <div className="absolute font-extrabold hidden">Settings</div>
        </div>
        <div className="self-stretch rounded-4xs flex flex-col items-center justify-start p-2.5 gap-[24px] text-sm text-tomato-100 border-[1.5px] border-solid border-gray-500">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[15px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/textsquare.svg"
              />
              <div className="relative font-semibold">Settings</div>
            </div>
            <img
              className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[5px] gap-[20px] text-gray-200">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex-1 relative font-medium">
                  Paragraph font size
                </div>
                <div className="relative text-xs font-medium text-tomato-100 text-right">
                  19
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start relative">
                <div className="self-stretch relative rounded-3xs bg-gray-500 h-[3px] z-[0]" />
                <div className="absolute my-0 mx-[!important] w-[50.57%] top-[calc(50%_-_1.5px)] right-[49.43%] left-[0%] rounded-3xs bg-tomato-100 h-[3px] z-[1]" />
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_5px)] right-[121.7px] rounded-3xs bg-tomato-100 w-2.5 h-2.5 z-[2]" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-medium">
                Choose Vitamin Type
              </div>
              <div className="self-stretch rounded-8xs bg-gray-500 overflow-hidden flex flex-row items-end justify-between py-2.5 px-[15px] text-xs">
                <div className="relative">All Vitamin</div>
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-[5px] px-0">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <div className="flex-1 relative font-medium">
                  Turn Off Subtitle
                </div>
                <div className="rounded-3xs bg-gainsboro-400 box-border w-[34px] flex flex-col items-start justify-start p-0.5 border-[1px] border-solid border-gray-400">
                  <div className="relative rounded-3xs bg-gainsboro-300 w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component11Frame418;
