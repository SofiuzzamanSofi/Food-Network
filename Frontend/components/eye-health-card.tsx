import type { NextPage } from "next";

const EyeHealthCard: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-left text-sm text-white-mode-main-text-color font-inter">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[130px] shrink-0 object-cover"
        alt=""
        src="/name25@2x.png"
      />
      <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <b className="relative leading-[160%]">{`Supports eye health: `}</b>
        </div>
        <div className="self-stretch relative text-xs leading-[160%]">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy `}</div>
      </div>
    </div>
  );
};

export default EyeHealthCard;
