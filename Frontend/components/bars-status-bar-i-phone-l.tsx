import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type BarsStatusBarIPhoneLType = {
  /** Style props */
  barsStatusBarIPhoneLWidth?: CSSProperties["width"];
  barsStatusBarIPhoneLPosition?: CSSProperties["position"];
  barsStatusBarIPhoneLTop?: CSSProperties["top"];
  barsStatusBarIPhoneLRight?: CSSProperties["right"];
  barsStatusBarIPhoneLLeft?: CSSProperties["left"];
};

const BarsStatusBarIPhoneL: NextPage<BarsStatusBarIPhoneLType> = ({
  barsStatusBarIPhoneLWidth,
  barsStatusBarIPhoneLPosition,
  barsStatusBarIPhoneLTop,
  barsStatusBarIPhoneLRight,
  barsStatusBarIPhoneLLeft,
}) => {
  const barsStatusBarIPhoneLStyle: CSSProperties = useMemo(() => {
    return {
      width: barsStatusBarIPhoneLWidth,
      position: barsStatusBarIPhoneLPosition,
      top: barsStatusBarIPhoneLTop,
      right: barsStatusBarIPhoneLRight,
      left: barsStatusBarIPhoneLLeft,
    };
  }, [
    barsStatusBarIPhoneLWidth,
    barsStatusBarIPhoneLPosition,
    barsStatusBarIPhoneLTop,
    barsStatusBarIPhoneLRight,
    barsStatusBarIPhoneLLeft,
  ]);

  return (
    <div
      className="w-[375px] h-11 text-center text-mini text-label-light-primary font-sf-subheadline-semibold"
      style={barsStatusBarIPhoneLStyle}
    >
      <div className="absolute top-[17.3px] right-[14.4px] w-[24.3px] h-[11.3px]">
        <div className="absolute top-[0px] right-[2.3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-label-light-primary" />
        <img
          className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 opacity-[0.4] mix-blend-normal"
          alt=""
          src="/cap.svg"
        />
        <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-label-light-primary w-[18px] h-[7.3px]" />
      </div>
      <img className="relative w-[15.3px] h-[11px]" alt="" src="/wifi.svg" />
      <img
        className="relative w-[17px] h-[10.7px]"
        alt=""
        src="/cellular-connection.svg"
      />
      <div className="absolute h-[47.73%] w-[14.4%] top-[15.91%] right-[80%] bottom-[36.36%] left-[5.6%]">
        <div className="absolute top-[6px] left-[0px] tracking-[-0.24px] leading-[20px] font-semibold inline-block w-[54px]">
          3:30
        </div>
      </div>
    </div>
  );
};

export default BarsStatusBarIPhoneL;
