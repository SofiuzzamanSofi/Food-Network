import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import BarsStatusBarIPhoneL from "./bars-status-bar-i-phone-l";

type WebsiteCardType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
};

const WebsiteCard: NextPage<WebsiteCardType> = ({ propWidth }) => {
  const bowserIOSFirefoxLightStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute w-[calc(100%_+_1px)] top-[0px] right-[-1px] left-[0px] bg-whitesmoke-100 h-[100px] overflow-hidden text-left text-base text-white-mode-main-text-color font-sf-subheadline-semibold"
      style={bowserIOSFirefoxLightStyle}
    >
      <div className="absolute w-[calc(100%_+_14px)] right-[-14px] bottom-[0px] left-[0px] bg-gainsboro-200 h-px" />
      <div className="absolute top-[51px] left-[7px] w-[343.4px] h-[42px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gainsboro-100 w-[343.4px] h-[42px]" />
        <img className="relative w-[20.3px] h-1" alt="" src="/more.svg" />
        <img
          className="absolute top-[9px] left-[299.9px] w-px h-6"
          alt=""
          src="/seperator.svg"
        />
        <img className="relative w-[14.2px] h-[18px]" alt="" src="/union.svg" />
        <div className="absolute top-[11px] left-[58.8px] w-[146.9px] h-[19px]">
          <div className="absolute top-[0px] left-[23.3px] tracking-[-0.32px] inline-block w-[123.6px]">
            www.Fruitts.com
          </div>
          <div className="relative bg-gray-100 w-[12.2px] h-4">
            <div className="absolute top-[71px] left-[65.8px] rounded-[1.75px] bg-gray-100 w-[12.2px] h-[9px]" />
            <div className="absolute top-[64px] left-[67.8px] rounded box-border w-[8.1px] h-[11px] border-[2px] border-solid border-gray-100" />
          </div>
        </div>
        <img
          className="absolute top-[9px] left-[44.6px] w-px h-6"
          alt=""
          src="/seperator1.svg"
        />
        <img
          className="relative w-[18.1px] h-[19.5px]"
          alt=""
          src="/protected.svg"
        />
      </div>
      <BarsStatusBarIPhoneL
        barsStatusBarIPhoneLWidth="calc(100% - 2px)"
        barsStatusBarIPhoneLPosition="absolute"
        barsStatusBarIPhoneLTop="0px"
        barsStatusBarIPhoneLRight="1px"
        barsStatusBarIPhoneLLeft="1px"
      />
    </div>
  );
};

export default WebsiteCard;
