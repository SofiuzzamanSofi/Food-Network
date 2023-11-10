import { FC } from 'react';
import iconIcon from "../public/icons.svg";
import icon1Icon from "../public/icons1.svg";
import icon6Icon from "../public/icons6.svg";
import icon7Icon from "../public/icons7.svg";
import icon8Icon from "../public/icons8.svg";
import Image from "next/image";

interface LeftMenuDextopProps {

};

const LeftMenuDextop: FC<LeftMenuDextopProps> = ({ }) => {
    return (
        <section className="hidden lg:flex bg-white w-[70px] flex-col items- justify-evenly pt-[15px] px-0 pb-0 box-border lg:min-h-[calc(100vh-66px)] ">
            <div className="flex flex-col items-center justify-center z-[0]">
                <div className="flex flex-col items-center justify-start gap-[35px]">
                    <Image
                        className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                        alt=""
                        src={iconIcon}
                    />
                    <Image
                        className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                        alt=""
                        src={icon1Icon}
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

            {/* empty div for flex evenly  */}
            <div>
            </div>
            <div>
            </div>
        </section>
    );
};

export default LeftMenuDextop;