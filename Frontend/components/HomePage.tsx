import { FC } from "react";
import facebookIcon from "../public/facebook.svg";
import linkdedinkIcon from "../public/linkedin.svg";
import twitterIcon from "../public/twitter.svg";
import nameIcon from "../public/name.svg";
import name24Icon from "../public/name24@2x.png";
import start2Icon from "../public/star2.svg";
import start3Icon from "../public/star3.svg";


import Image from "next/image";
import MobileBottomMenu from "../components/MobileBottomMenu";

interface HomePageProps {

};

const HomePage: FC<HomePageProps> = ({ }) => {
    return (
        <section className="absolute top-[72px] left-[calc(50%_-_543.2px)] flex flex-col items-start justify-start min-w-[700px] max-w-[1190px] px-4 text-left text-lg text-white-mode-main-text-color font-inter bg-white shadow-2xl">
            <div className="self-stretch rounded-3xs bg- flex flex-row items-start justify-start p-11 gap-[42px]">
                <div className="flex flex-col items-start justify-start py-[60px] px-0 gap-[22px]">
                    <Image className="relative w-7 h-7" alt="" src={facebookIcon} />
                    <Image className="relative w-7 h-7" alt="" src={linkdedinkIcon} />
                    <Image className="relative w-7 h-7" alt="" src={twitterIcon} />
                    <a className="[text-decoration:none] w-7 h-7 flex flex-col items-center justify-end">
                        <Image
                            className="relative rounded-31xl w-7 h-7"
                            alt=""
                            src={nameIcon}
                        />
                        <div className="flex flex-row items-start justify-start gap-[2px] mt-[-15px]">
                            <div className="relative rounded-[50%] bg-white w-[3.4px] h-[3.4px]" />
                            <div className="relative rounded-[50%] bg-white w-[3.4px] h-[3.4px]" />
                            <div className="relative rounded-[50%] bg-white w-[3.4px] h-[3.4px]" />
                        </div>
                    </a>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[62px]">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[42px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
                                <div className="self-stretch flex flex-row items-start justify-start text-[38px]">
                                    <h1 className="m-0 flex-1 relative text-inherit leading-[130%] capitalize font-black font-inherit">
                                        Health benefits of an avocado
                                    </h1>
                                </div>
                                <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                    <div className="self-stretch flex flex-row items-start justify-start">
                                        <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                    </div>
                                    <div className="self-stretch relative text-mini leading-[160%]">
                                        Spinach contains high levels of vitamin A and other
                                        antioxidants that help maintain healthy vision and protect
                                        against age-related macular degeneration.
                                    </div>
                                </div>
                                <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                    <div className="self-stretch flex flex-row items-start justify-start">
                                        <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                    </div>
                                    <div className="self-stretch relative text-mini leading-[160%]">
                                        Spinach contains high levels of vitamin A and other
                                        antioxidants that help maintain healthy vision and protect
                                        against age-related macular degeneration.
                                    </div>
                                </div>
                            </div>
                            <Image
                                className="relative rounded-11xl w-[520px] h-80 object-cover"
                                alt=""
                                src={name24Icon}
                            />
                        </div>
                        <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                            <div className="self-stretch flex flex-row items-start justify-start">
                                <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                            </div>
                            <div className="self-stretch relative text-mini leading-[160%]">
                                Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration..
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[44px]">
                            <Image
                                className="relative rounded-11xl w-[520px] h-80 object-cover"
                                alt=""
                                src={name24Icon}
                            />
                            <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                <div className="self-stretch flex flex-row items-start justify-start">
                                    <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                </div>
                                <div className="self-stretch relative text-mini leading-[160%]">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy `}</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl flex flex-row items-center justify-start font-satoshi">
                        <div className="flex flex-col items-start justify-center gap-[10px]">
                            <div className="relative tracking-[0.01em] leading-[190%] capitalize font-black">
                                Was this helpful?
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[10px]">
                                <Image
                                    className="relative w-7 h-7 overflow-hidden shrink-0"
                                    alt=""
                                    src={start2Icon}
                                />
                                <Image
                                    className="relative w-7 h-7 overflow-hidden shrink-0"
                                    alt=""
                                    src={start2Icon}
                                />
                                <Image
                                    className="relative w-7 h-7 overflow-hidden shrink-0"
                                    alt=""
                                    src={start2Icon}
                                />
                                <Image
                                    className="relative w-7 h-7 overflow-hidden shrink-0"
                                    alt=""
                                    src={start2Icon}
                                />
                                <Image
                                    className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.5]"
                                    alt=""
                                    src={start3Icon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;