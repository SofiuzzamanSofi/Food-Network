import { FC, useCallback } from 'react';
import router, { useRouter } from "next/router";
import Image from 'next/image';
import iconIcon from "../public/icons.svg";
import icon1Icon from "../public/icons1.svg";
import icon6Icon from "../public/icons6.svg";
import icon7Icon from "../public/icons7.svg";
import icon8Icon from "../public/icons8.svg";

interface MobileBottomMenuProps {

};

const MobileBottomMenu: FC<MobileBottomMenuProps> = ({ }) => {

    const onIcons1Click = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <div className="flex lg:hidden absolute bottom-[0px] left-[0px] right-0 rounded-t-3xs rounded-b-none bg-white min-w-[360px]  flex-row items-center justify-center py-2.5 px-0 box-border gap-[10px]">
            <div className="flex flex-row items-center justify-center z-[0]">
                <div className="flex flex-row items-start justify-center gap-[35px]">
                    <Image
                        className="relative rounded-md w-9 h-9 shrink-0 cursor-pointer"
                        alt=""
                        src={iconIcon}
                        onClick={onIcons1Click}
                    />
                    <Image
                        className="relative rounded-md w-9 h-9 shrink-0 cursor-pointer"
                        alt=""
                        src={icon1Icon}
                        onClick={onIcons1Click}
                    />
                    <Image
                        className="relative rounded-md w-[34px] h-[34px] cursor-pointer"
                        alt=""
                        src={icon6Icon}
                    />
                    <Image
                        className="relative rounded-md w-9 h-9 cursor-pointer"
                        alt=""
                        src={icon7Icon}
                    />
                    <Image
                        className="relative rounded-md w-9 h-9 cursor-pointer"
                        alt=""
                        src={icon8Icon}
                    />
                </div>
            </div>
            <img
                className="absolute my-0 mx-[!important] bottom-[20px] left-[17px] rounded-md w-9 h-9 hidden z-[1]"
                alt=""
                src="../public/frame-767.svg"
            />
        </div>
    );
};

export default MobileBottomMenu;