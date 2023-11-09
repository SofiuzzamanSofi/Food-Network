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
import MobileBottomMenu from "../components/MobileBottomMenu";
import HomePage from "../components/HomePage";
import LeftMenuDextop from "../components/LeftMenuDextop";


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
        <div className="relative mx-auto max-w-[1850.3px] min-h-screen border-4 border-black">

            {/* upper-header  */}
            <Header />

            {/* left || last-left button menu  */}
            <LeftMenuDextop />

            {/* left side list menu  */}
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

            {/* main home page image text  */}
            {/* <HomePage /> */}

            {/* right side menu/setting  */}
            {/* <Component11Frame418
                    component11Frame418Height="262px"
                    component11Frame418Position="absolute"
                    component11Frame418Top="72px"
                    component11Frame418Right="-55px"
                /> */}

            {/* mobile menu button only show on mobile in bottom  */}
            <MobileBottomMenu />
        </div>
    );
};

export default Screen1;
