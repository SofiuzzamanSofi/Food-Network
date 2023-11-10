import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { useMemo, type CSSProperties } from "react";

import frame2Icon from "../public/frame2.svg"
import fi891094Icon from "../public/fi-891094.svg"
import dotMenuIcon from "../public/dot-menu.svg"

type LeftDesktopMenuType = {
    name1: StaticImageData;
    name2: StaticImageData;
    name3: StaticImageData;
    name4: StaticImageData;
    name5: StaticImageData;
    name6: StaticImageData;
    name7: StaticImageData;
    name8: StaticImageData;
    name9: StaticImageData;
    name10: StaticImageData;

    /** Style props */
    leftDesktopMenuPosition?: CSSProperties["position"];
    leftDesktopMenuTop?: CSSProperties["top"];
    leftDesktopMenuLeft?: CSSProperties["left"];
};

const LeftDesktopMenu: NextPage<LeftDesktopMenuType> = ({
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
    name9,
    name10,
    leftDesktopMenuPosition,
    leftDesktopMenuTop,
    leftDesktopMenuLeft,
}) => {
    const leftDesktopMenuStyle: CSSProperties = useMemo(() => {
        return {
            position: leftDesktopMenuPosition,
            top: leftDesktopMenuTop,
            left: leftDesktopMenuLeft,
        };
    }, [leftDesktopMenuPosition, leftDesktopMenuTop, leftDesktopMenuLeft]);

    return (
        <div
            className="hidden shrink-0 lg:flex rounded-mini bg-white w-[300px] h-[830px] flex-col items-center justify-start p-[15px] box-border gap-[15px] text-left text-xs text-tomato-100 font-inter z-50 shadow-lg"
            style={leftDesktopMenuStyle}
        >
            <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-1 gap-[10px] z-[0] text-sm border-[2px] border-solid border-tomato-200 cursor-pointer">
                <div className="flex-1 rounded-6xs bg-tomato-400 flex flex-row items-center justify-center py-2.5 px-1">
                    <div className="relative font-semibold">Fruits</div>
                </div>
                <div className="flex-1 rounded-6xs bg-white flex flex-row items-center justify-center py-2.5 px-1 text-gray-200 cursor-pointer">
                    <div className="relative">Vegetables</div>
                </div>
            </div>
            <div className="self-stretch rounded-6xs bg-white overflow-hidden flex flex-row items-center justify-between py-1 pr-1 pl-[15px] z-[1] text-gray-600 border-[2px] border-solid border-whitesmoke-200">
                <div className="relative">Search by Fruits Name</div>
                <div className="rounded-8xs bg-tomato-400 flex flex-col items-center justify-start py-1 px-1.5">
                    <Image
                        className="relative w-[23.2px] h-[18px] overflow-hidden shrink-0"
                        alt=""
                        src={frame2Icon}
                    />
                </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] z-[2] text-gray-200">
                <div className="self-stretch relative font-medium">Fruits List</div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                    <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-2 px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">

                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-orange-200 w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name1}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Oranges
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-tomato-300 w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name2}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Apples
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name3}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Avocado
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin B6
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name4}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Strawberries
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name5}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Mangoes
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin A, C
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name6}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Blueberries
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C, K
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name7}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Grapes
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C, K
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name8}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Pineapples
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C, K
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name9}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Papayas
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    Vitamin C, K
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                    <div className="self-stretch rounded-6xs bg-gray-800 flex flex-row items-center justify-start py-[9px] px-2.5 gap-[10px] border-[1.5px] border-solid border-white hover:border-tomato-100 cursor-pointer">
                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                            <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                                <div className="relative rounded-2xs bg-olivedrab w-[40.3px] h-[40.3px] [transform:_rotate(45deg)] [transform-origin:0_0] z-[0]" />
                                <Image
                                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden z-[1]"
                                    alt=""
                                    src={fi891094Icon}
                                />
                                <Image
                                    className="absolute my-0 mx-[!important] top-[calc(50%_-_21.4px)] left-[calc(50%_-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                                    alt=""
                                    src={name10}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch relative leading-[100%] font-medium">
                                    Al-Faatiha
                                </div>
                                <div className="self-stretch relative text-xs text-gray-700">
                                    The Opener
                                </div>
                            </div>
                        </div>
                        <Image
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                            alt=""
                            src={dotMenuIcon}
                        />
                    </div>
                </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[262px] right-[5.5px] box-border w-[3px] h-[93px] z-[3] border-r-[3px] border-solid border-whitesmoke-300" />
        </div>
    );
};

export default LeftDesktopMenu;