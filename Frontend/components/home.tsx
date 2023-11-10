import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Component11Frame418 from "./SettingComponent";
import { useRouter } from "next/router";
import Property1Default from "./property1-default";
import Header from "./header";

const Home: NextPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const router = useRouter();
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target;
                        targetElement.classList.add("animate");
                        observer.unobserve(targetElement);
                    }
                }
            },
            {
                threshold: 0.15,
            }
        );

        for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.observe(scrollAnimElements[i]);
        }

        return () => {
            for (let i = 0; i < scrollAnimElements.length; i++) {
                observer.unobserve(scrollAnimElements[i]);
            }
        };
    }, []);

    const onIcons1Click = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <a
            className="[text-decoration:none] bg-white w-[1920px] h-[1339px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
        >
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
                        <img className="relative w-7 h-7" alt="" src="/facebook.svg" />
                        <img className="relative w-7 h-7" alt="" src="/linkedin.svg" />
                        <img className="relative w-7 h-7" alt="" src="/twitter.svg" />
                        <a className="[text-decoration:none] w-7 h-7 flex flex-col items-center justify-end">
                            <img
                                className="relative rounded-31xl w-7 h-7"
                                alt=""
                                src="/name.svg"
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
                                <img
                                    className="relative rounded-11xl w-[520px] h-80 object-cover"
                                    alt=""
                                    src="/name1@2x.png"
                                />
                            </div>
                            <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[15px]">
                                <div className="self-stretch flex flex-row items-start justify-start">
                                    <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                                </div>
                                <div className="self-stretch relative text-mini leading-[160%]">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. `}</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[44px]">
                                <img
                                    className="relative rounded-11xl w-[520px] h-80 object-cover"
                                    alt=""
                                    src="/name2@2x.png"
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
                                    <img
                                        className="relative w-7 h-7 overflow-hidden shrink-0"
                                        alt=""
                                        src="/star.svg"
                                    />
                                    <img
                                        className="relative w-7 h-7 overflow-hidden shrink-0"
                                        alt=""
                                        src="/star.svg"
                                    />
                                    <img
                                        className="relative w-7 h-7 overflow-hidden shrink-0"
                                        alt=""
                                        src="/star.svg"
                                    />
                                    <img
                                        className="relative w-7 h-7 overflow-hidden shrink-0"
                                        alt=""
                                        src="/star.svg"
                                    />
                                    <img
                                        className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.5]"
                                        alt=""
                                        src="/star1.svg"
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
                        <input
                            className="relative rounded-md bg-tomato-400 box-border w-[38px] h-[38px] overflow-hidden shrink-0 border-[2px] border-solid border-tomato-400"
                            type="checkbox"
                        />
                        <img
                            className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                            alt=""
                            src="/icons1.svg"
                            onClick={onIcons1Click}
                        />
                        <img
                            className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/icons2.svg"
                        />
                        <img
                            className="relative rounded-md w-9 h-9 hidden"
                            alt=""
                            src="/icons3.svg"
                        />
                        <img
                            className="relative rounded-md w-9 h-9 hidden"
                            alt=""
                            src="/icons4.svg"
                        />
                        <img
                            className="relative rounded-md w-9 h-9 hidden"
                            alt=""
                            src="/icons5.svg"
                        />
                        <img
                            className="relative rounded-md w-[34px] h-[34px]"
                            alt=""
                            src="/icons6.svg"
                        />
                        <img
                            className="relative rounded-md w-9 h-9"
                            alt=""
                            src="/icons7.svg"
                        />
                        <img
                            className="relative rounded-md w-9 h-9"
                            alt=""
                            src="/icons8.svg"
                        />
                    </div>
                </div>
                <img
                    className="absolute my-0 mx-[!important] bottom-[20px] left-[17px] rounded-md w-9 h-9 hidden z-[1]"
                    alt=""
                    src="/frame-767.svg"
                />
            </div>
            <Property1Default
                name1="/name3@2x.png"
                name2="/name4@2x.png"
                name3="/name5@2x.png"
                name4="/name6@2x.png"
                name5="/name7@2x.png"
                name6="/name8@2x.png"
                name7="/name9@2x.png"
                name8="/name10@2x.png"
                name9="/name11@2x.png"
                name10="/name12@2x.png"
                property1DefaultPosition="absolute"
                property1DefaultTop="72px"
                property1DefaultLeft="84.8px"
            />
            <Header />
            <TextField
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
            />
        </a>
    );
};

export default Home;
