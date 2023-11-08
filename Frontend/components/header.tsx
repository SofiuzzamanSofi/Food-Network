import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-white w-[1920px] flex flex-row items-center justify-between py-2.5 pr-[15px] pl-[26px] box-border text-left text-xs text-gray-200 font-inter">
      <div className="flex-1 flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[71.6px] h-9 overflow-hidden shrink-0"
            alt=""
            src="/foodnetwork-1.svg"
          />
        </div>
      </div>
      <div className="w-[390px] h-10 flex flex-col items-center justify-between">
        <div className="self-stretch rounded-4xs bg-white overflow-hidden flex flex-row items-center justify-between py-1 pr-1 pl-[15px] border-[2px] border-solid border-whitesmoke-200">
          <div className="relative">Search Best Food</div>
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/frame3.svg"
            />
            <div className="rounded-md bg-tomato-400 flex flex-row items-start justify-start p-1 border-[2px] border-solid border-tomato-400">
              <img
                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end gap-[24px] text-sm text-white">
        <img
          className="relative rounded-md w-8 h-8 hidden"
          alt=""
          src="/frame-768.svg"
        />
        <img
          className="relative rounded-md w-[34px] h-[34px]"
          alt=""
          src="/frame-7671.svg"
        />
        <img
          className="relative rounded-md w-[34px] h-[34px]"
          alt=""
          src="/frame-769.svg"
        />
        <div className="rounded-md bg-tomato-100 hidden flex-row items-center justify-start py-2 px-2.5 relative gap-[5px] border-[2px] border-solid border-tomato-400">
          <img
            className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10.65px)] w-5 h-5 overflow-hidden shrink-0 hidden z-[0]"
            alt=""
            src="/bookmark01.svg"
          />
          <div className="relative font-semibold z-[1]">Support Us</div>
          <div className="flex flex-col items-start justify-start z-[2]">
            <img className="relative w-[27.3px] h-5" alt="" src="/name13.svg" />
          </div>
        </div>
        <img
          className="relative rounded-md w-8 h-8"
          alt=""
          src="/frame-765.svg"
        />
      </div>
    </div>
  );
};

export default Header;
