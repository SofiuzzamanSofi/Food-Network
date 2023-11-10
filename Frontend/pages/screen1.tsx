import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Property1Default from "../components/property1-default";
import Header from "../components/header";
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
import MobileBottomMenu from "../components/MobileBottomMenu";
import HomePage from "../components/HomePage";
import LeftMenuDextop from "../components/LeftMenuDextop";
import SettingComponent from "../components/SettingComponent";



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
        <div className="relative mx-auto max-w-[1850.3px] min-h-screen bg-white overflow-scroll ">

            {/* upper-header  */}
            <Header />

            <section
                className="flex"
            >
                {/* left || last-left button menu  */}
                <LeftMenuDextop />

                <section
                    className="grow bg-whitesmoke-300 min-h-[calc(100vh-60px)] rounded-l-xl lg:flex gap-4 p-3.5 pb-[3.75rem] overflow-x-scroll"
                >
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
                    // property1DefaultPosition="relative"
                    // property1DefaultTop="72px"
                    // property1DefaultLeft="84.8px"
                    />

                    {/* main home page image text  */}
                    <HomePage />

                    {/* right side menu/setting  */}
                    <SettingComponent
                        settingComponentHeight="262px"
                        settingComponentWidth="300px"
                        settingComponentPosition="static"
                        settingComponentTop="72px"
                        settingComponentRight="0px"
                    />
                </section>
            </section>

            {/* mobile menu button only show on mobile in bottom  */}
            <MobileBottomMenu />
        </div>
    );
};

export default Screen1;
