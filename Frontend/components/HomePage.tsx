import { FC } from "react";
import facebookIcon from "../assets/facebook.svg";
import linkdedinkIcon from "../assets/linkedin.svg";
import twitterIcon from "../assets/twitter.svg";
import nameIcon from "../assets/name.svg";
import start2Icon from "../assets/star2.svg";
import start3Icon from "../assets/star3.svg";
import applePic from "../assets/name2@2x.png";
import papayaPic from "../assets/name1@2x.png";
import Image from "next/image";

interface HomePageProps {

};

const HomePage: FC<HomePageProps> = ({ }) => {
    return (
        <section className="flex flex-col items-start justify-start text-left text-lg text-white-mode-main-text-color font-inter rounded-lg min-w-[330px] p-3 xl:max-w-[1190px] xl:p-11 bg-white z-0">
            <div className="lg:flex rounded-3xs flex-row items-start justify-start gap-[42px]">

                {/* share icons desktop show */}
                <div className="hidden 2xl:flex flex-col items-start justify-start py-[60px] px-0 gap-[22px]">
                    <Image className="relative w-7 h-7 cursor-pointer" alt="" src={facebookIcon} />
                    <Image className="relative w-7 h-7 cursor-pointer" alt="" src={linkdedinkIcon} />
                    <Image className="relative w-7 h-7 cursor-pointer" alt="" src={twitterIcon} />
                    <a className="[text-decoration:none] w-7 h-7 flex flex-col items-center justify-end cursor-pointer">
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

                <div className="flex-1 flex flex-col items-start justify-center gap-[24px] lg:gap-[62px]">

                    {/* image and text of homepage */}
                    <div className="flex flex-col items-start justify-center gap-[42px]">
                        <div className="flex flex-col xl:flex-row items-start justify-start gap-[30px]">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">

                                <div className="flex flex-row items-start justify-start text-[38px]">
                                    <h1 className="m-0 flex-1 relative text-inherit leading-[130%] capitalize font-black font-inherit">
                                        Health benefits of an avocado
                                    </h1>
                                </div>
                                <div className="rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                    <div className="flex flex-row items-start justify-start">
                                        <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                    </div>
                                    <div className="relative text-mini leading-[160%]">
                                        Spinach contains high levels of vitamin A and other
                                        antioxidants that help maintain healthy vision and protect
                                        against age-related macular degeneration.
                                    </div>
                                </div>
                                <div className="rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                    <div className="flex flex-row items-start justify-start">
                                        <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                    </div>
                                    <div className="relative text-mini leading-[160%]">
                                        Spinach contains high levels of vitamin A and other
                                        antioxidants that help maintain healthy vision and protect
                                        against age-related macular degeneration.
                                    </div>
                                </div>
                            </div>
                            <Image
                                className="w-full max-w-[520px] h-full max-h-80"
                                alt=""
                                src={papayaPic}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[15px]">
                            <div className="flex flex-row items-start justify-start">
                                <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                            </div>
                            <div className="relative text-mini leading-[160%]">
                                Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration..
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row items-start justify-start gap-[30px]">
                            <Image
                                className="w-full max-w-[520px] h-full max-h-80"
                                alt=""
                                src={applePic}
                            />
                            <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                                <div className="flex flex-row items-start justify-start">
                                    <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                </div>
                                <div className="relative text-mini leading-[160%]">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy `}</div>
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

                    {/* share icons mobile show */}
                    <div className="2xl:hidden flex flex-row items-center justify-center px-0 gap-[22px]">
                        <Image className="relative w-7 h-7 cursor-pointer" alt="" src={facebookIcon} />
                        <Image className="relative w-7 h-7 cursor-pointer" alt="" src={linkdedinkIcon} />
                        <Image className="relative w-7 h-7 cursor-pointer" alt="" src={twitterIcon} />
                        <a className="[text-decoration:none] mt-[-25px] w-7 h-7 flex flex-col items-center justify-end cursor-pointer ">
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
                </div>
            </div>
        </section>
    );
};

export default HomePage;