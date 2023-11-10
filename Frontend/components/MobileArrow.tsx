import Image from 'next/image';
import frameIcon from "../public/frame-1000003599.svg"
import { FC } from 'react';

interface MobileArrowProps {
    setMobileListMenu: React.Dispatch<React.SetStateAction<boolean>>
};

const MobileArrow: FC<MobileArrowProps> = ({ setMobileListMenu }) => {
    return (
        <div className="flex lg:hidden z-[1000] rounded-lg bg-white min-w-[330px] flex-row items-center justify-between py-2.5 px-[15px] box-border text-xs my-[9px]">
            <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="relative w-5 h-5 overflow-hidden shrink-0">
                    <div className="absolute h-[71%] w-[70%] top-[14.5%] right-[15%] bottom-[14.5%] left-[15%]">
                        <div className="absolute h-[42.25%] w-[42.86%] top-[0%] right-[57.14%] bottom-[57.75%] left-[0%] rounded-sm bg-darkorange" />
                        <div className="absolute h-[42.25%] w-[42.86%] top-[57.75%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-darkorange" />
                        <div className="absolute h-[42.25%] w-[42.86%] top-[0%] right-[0%] bottom-[57.75%] left-[57.14%] rounded-tl-mini rounded-tr-none rounded-b-mini bg-orange-100" />
                        <div className="absolute h-[42.25%] w-[42.86%] top-[57.75%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-darkorange" />
                    </div>
                </div>
                <div className="relative font-semibold">Select Food Item</div>
            </div>
            <Image
                className="relative w-3.5 h-3.5 cursor-pointer"
                alt=""
                src={frameIcon}
                onClick={() => setMobileListMenu((prev) => !prev)}
            />
        </div>
    );
};

export default MobileArrow;