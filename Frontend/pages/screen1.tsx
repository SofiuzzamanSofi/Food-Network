import { useState } from "react";
import LeftDesktopMenu from "../components/LeftDesktopMenu";
import name1Icon from "../assets/name3@2x.png";
import name2Icon from "../assets/name4@2x.png";
import name3Icon from "../assets/name5@2x.png";
import name4Icon from "../assets/name6@2x.png";
import name5Icon from "../assets/name7@2x.png";
import name6Icon from "../assets/name8@2x.png";
import name7Icon from "../assets/name9@2x.png";
import name8Icon from "../assets/name10@2x.png";
import name9Icon from "../assets/name11@2x.png";
import name10Icon from "../assets/name12@2x.png";
import MobileBottomMenu from "../components/MobileBottomMenu";
import HomePage from "../components/HomePage";
import LeftMenuDextop from "../components/LeftMenuDextop";
import SettingComponent from "../components/SettingComponent";
import MobileArrow from "../components/MobileArrow";
import LeftListMobileMenu from "../components/LeftListMobileMenu";
import Header from "../components/Header";


const Screen1 = () => {
    const [settingMenu, setSettingMenu] = useState<boolean>(false);
    const [mobileListMenu, setMobileListMenu] = useState<boolean>(false);

    return (
        <div className="relative mx-auto max-w-[120rem] min-h-screen bg-white overflow-scroll ">

            {/* upper-header  */}
            <Header setSettingMenu={setSettingMenu} />

            {/* mobile menu arrow button only:MOBILE */}
            <MobileArrow setMobileListMenu={setMobileListMenu} />

            {/* mobile menu-list position:ABSOLUTE  */}
            {
                mobileListMenu &&
                <LeftListMobileMenu
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
                    setMobileListMenu={setMobileListMenu}
                />
            }

            <section className="flex">
                {/* left || last-left button menu  */}
                <LeftMenuDextop />

                <section
                    className="grow bg-whitesmoke-300 min-h-[calc(100vh-60px)] rounded-l-xl lg:flex gap-4 p-3.5 pb-[3.75rem] overflow-x-scroll"
                >
                    {/* left side list menu DESKTOP */}
                    <LeftDesktopMenu
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
                    />

                    {/* main home page image text  */}
                    <HomePage />

                    {/* right side menu/setting  */}
                    {
                        settingMenu &&
                        <SettingComponent
                            settingComponentHeight="262px"
                            settingComponentWidth="300px"
                            settingComponentPosition="absolute"
                            settingComponentRight="0px"
                        />
                    }
                </section>
            </section>

            {/* mobile menu button only show on mobile in bottom  */}
            <MobileBottomMenu />
        </div>
    );
};

export default Screen1;