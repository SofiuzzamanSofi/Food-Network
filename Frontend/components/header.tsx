import type { NextPage } from "next";
import Image from "next/image";
import foodnetworkIcon from "../public/foodnetwork-1.svg"
import frame2Icon from "../public/frame2.svg"
import frame7671Icon from "../public/frame-7671.svg"
import frame769Icon from "../public/frame-769.svg"
import frame765Icon from "../public/frame-765.svg"
import frame768Icon from "../public/frame-768.svg"
import name13Icon from "../public/name13.svg"
import bookmark01Icon from "../public/bookmark01.svg"


const Header: NextPage = () => {
  return (
    <header className=" bg-white flex flex-row items-center justify-between py-2.5 pr-[15px] pl-[26px] box-border text-left text-sm text-white font-inter min-w-[360px] max-w-[1920px]">
      <div className="flex-1 flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-start">
          <Image
            className="relative w-[71.6px] h-9 overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src={foodnetworkIcon}
          />
        </div>
      </div>

      <div className="relative hidden lg:block">
        <input
          className="border-2 border-gray-500 rounded-md font-inter text-xs bg-[transparent] w-[390px] h-10 px-2 flex flex-col items-center justify-between"
          placeholder="Search Best Food"
          type="text"
        />
        <div className="absolute top-2 right-2 rounded-8xs bg-tomato-400 flex flex-col items-center justify-start py-1 px-1.5">
          <Image
            className="relative w-[23.2px] h-[18px] overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src={frame2Icon}
          />
        </div>
      </div>


      <div className="flex-1 flex flex-row items-center justify-end gap-[24px]">
        <Image
          className="relative rounded-md w-8 h-8 bg-tomato-400 lg:hidden cursor-pointer"
          alt=""
          src={frame2Icon}
        />
        <Image
          className="relative rounded-md w-[34px] h-[34px] hidden lg:block cursor-pointer"
          alt=""
          src={frame7671Icon}
        />
        <Image
          className="relative rounded-md w-[34px] h-[34px] hidden lg:block cursor-pointer"
          alt=""
          src={frame769Icon}
        />
        <div className="rounded-md bg-tomato-100 hidden flex-row items-center justify-start py-2 px-2.5 relative gap-[5px] border-[2px] border-solid border-tomato-400">
          <Image
            className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10.65px)] w-5 h-5 overflow-hidden shrink-0 hidden z-[0] cursor-pointer"
            alt=""
            src={bookmark01Icon}
          />
          <div className="relative font-semibold z-[1]">Support Us</div>
          <div className="flex flex-col items-start justify-start z-[2]">
            <Image
              className="relative w-[27.3px] h-5 cursor-pointer" alt=""
              src={name13Icon}
            />
          </div>
        </div>
        <Image
          className="relative rounded-md w-8 h-8 cursor-pointer"
          alt=""
          src={frame765Icon}
        />
      </div>
    </header>
  );
};

export default Header;
