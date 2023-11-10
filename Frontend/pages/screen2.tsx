import type { NextPage } from "next";
import { useState } from "react";
import MobileBottomMenu from "../components/MobileBottomMenu";
import LeftMenuDextop from "../components/LeftMenuDextop";
import SettingComponent from "../components/SettingComponent";
import EmptyPage from "../components/EmptyPage";
import Header from "../components/Header";


const Screen2: NextPage = () => {
    const [settingMenu, setSettingMenu] = useState<boolean>(false);

    return (
        <div className="relative mx-auto max-w-[120rem] min-h-screen bg-white overflow-scroll ">

            {/* upper-header  */}
            <Header setSettingMenu={setSettingMenu} />
            <section
                className="flex"
            >
                {/* left || last-left button menu  */}
                <LeftMenuDextop />
                <section
                    className="grow bg-whitesmoke-300 min-h-[calc(100vh-60px)] rounded-l-xl lg:flex gap-4 p-3.5 pb-[3.75rem] overflow-x-scroll"
                >
                    {/* main home page image text  */}
                    <EmptyPage />
                </section>

                {
                    settingMenu &&
                    <SettingComponent
                        settingComponentHeight="262px"
                        settingComponentWidth="300px"
                        settingComponentPosition="absolute"
                        // settingComponentTop="72px"
                        settingComponentRight="0px"
                    />
                }
            </section>

            {/* mobile menu button only show on mobile in bottom  */}
            <MobileBottomMenu />
        </div>
    );
};

export default Screen2;