import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Component11Frame418 from "../components/component11-frame418";
import { useRouter } from "next/router";
import Property1Default from "../components/property1-default";
import Header from "../components/header";
import facebookIcon from "../public/facebook.svg";
import linkdedinkIcon from "../public/linkedin.svg";
import twitterIcon from "../public/twitter.svg";
import nameIcon from "../public/name.svg";
import name13Icon from "../public/name13.svg";
import name24Icon from "../public/name24@2x.png";
import start2Icon from "../public/star2.svg";
import start3Icon from "../public/star3.svg";
import iconIcon from "../public/icons.svg";
import icon1Icon from "../public/icons1.svg";
import icon2Icon from "../public/icons2.svg";
import icon3Icon from "../public/icons3.svg";
import icon4Icon from "../public/icons4.svg";
import icon5Icon from "../public/icons5.svg";
import icon6Icon from "../public/icons6.svg";
import icon7Icon from "../public/icons7.svg";
import icon8Icon from "../public/icons8.svg";
import frameIcon from "../public/frame-767.svg";
import name1Icon from "../public/name3@2x.png";
import name2Icon from "../public/name4@2x.png";
import name3Icon from "../public/name5@2x.png";
import name4Icon from "../public/name6@2x.png";
import name5Icon from "../public/name7@2x.png";
import name6Icon from "../public/name8@2x.png";
import name7Icon from "../public/name9@2x.png";
import name8Icon from "../public/name10@2x.png";
import name9Icon from "../public/name11@2x.png";
import name10Icon from "../public/name12@2x.png";

import Image from "next/image";


const Screen1: NextPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const router = useRouter();
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };

    const onIcons1Click = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <div className="bg-white w-[1920px] h-[1339px] overflow-hidden">
            <section className="absolute top-[60px] left-[69.8px] rounded-tl-3xl rounded-tr-none rounded-b-none bg-whitesmoke-300 w-[1850.3px] h-[1276.6px]" />
            <Component11Frame418
                component11Frame418Height="262px"
                component11Frame418Position="absolute"
                component11Frame418Top="72px"
                component11Frame418Right="13px"
            />
            <section className="absolute top-[72px] left-[calc(50%_-_559.2px)] w-[1190px] flex flex-col items-start justify-start min-w-[700px] max-w-[1190px] text-left text-lg text-white-mode-main-text-color font-inter">
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-11 gap-[42px]">
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
                                    src={name13Icon}
                                />
                            </div>
                            <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                <div className="self-stretch flex flex-row items-start justify-start">
                                    <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                </div>
                                <div className="self-stretch relative text-mini leading-[160%]">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. `}</div>
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
            <div className="absolute top-[60px] left-[0px] rounded-3xs bg-white w-[70px] h-[830px] flex flex-col items-center justify-center pt-[15px] px-0 pb-0 box-border gap-[10px]">
                <div className="flex flex-col items-center justify-center z-[0]">
                    <div className="flex flex-col items-center justify-start gap-[35px]">
                        {/* <input
                            className="relative rounded-md bg-tomato-400 box-border w-[38px] h-[38px] overflow-hidden shrink-0 border-[2px] border-solid border-tomato-400"
                            type="checkbox"
                        /> */}
                        <Image
                            className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                            alt=""
                            src={iconIcon}
                            onClick={onIcons1Click}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                            alt=""
                            src={icon1Icon}
                            onClick={onIcons1Click}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 hidden"
                            alt=""
                            src={icon2Icon}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9 hidden"
                            alt=""
                            src={icon3Icon}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9 hidden"
                            alt=""
                            src={icon4Icon}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9 hidden"
                            alt=""
                            src={icon5Icon}
                        />
                        <Image
                            className="relative rounded-md w-[34px] h-[34px]"
                            alt=""
                            src={icon6Icon}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9"
                            alt=""
                            src={icon7Icon}
                        />
                        <Image
                            className="relative rounded-md w-9 h-9"
                            alt=""
                            src={icon8Icon}
                        />
                    </div>
                </div>
                <Image
                    className="absolute my-0 mx-[!important] bottom-[20px] left-[17px] rounded-md w-9 h-9 hidden z-[1]"
                    alt=""
                    src={frameIcon}
                />
            </div>
            <Property1Default
                name1={name1Icon}
                name2={name2Icon}
                name3={name3Icon}
                name4={name4Icon}
                name5={name5Icon}
                name6={name6Icon}
                name7={name7Icon}
                name8={name8Icon}
                name9={name9Icon}
                name10={name10Icon}
                property1DefaultPosition="absolute"
                property1DefaultTop="72px"
                property1DefaultLeft="84.8px"
            />
            <Header />
            {/* <TextField
                className="[border:none] bg-[transparent] absolute top-[846px] left-[1583px]"
                color="primary"
                label="Label"
                size="medium"
                error={false}
                sx={{ width: 220 }}
                variant="outlined"
                type={showPassword ? "text" : "text"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleShowPasswordClick}
                                aria-label="toggle password visibility"
                            >
                                <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            /> */}
        </div>
    );
};

export default Screen1;
