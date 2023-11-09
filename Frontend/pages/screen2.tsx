import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";

const Screen2: NextPage = () => {
    const router = useRouter();

    const onIconsClick = useCallback(() => {
        router.push("/home");
    }, [router]);

    return (
        <div className="relative bg-white w-full h-[937px] overflow-hidden text-left text-[28px] text-white-mode-main-text-color font-inter">
            <div className="absolute top-[60px] left-[69.8px] rounded-tl-3xl rounded-tr-none rounded-b-none bg-whitesmoke-300 w-[1850.3px] h-[1155.3px]" />
            <div className="absolute top-[72px] left-[calc(50%_-_873px)] w-[1819px] flex flex-col items-start justify-start">
                <div className="self-stretch rounded-3xs bg-white h-[830px] flex flex-col items-center justify-center p-11 box-border gap-[42px]">
                    <img
                        className="relative w-[526.6px] h-[298.3px] object-cover"
                        alt=""
                        src="/image-1@2x.png"
                    />
                    <b className="relative leading-[130%] capitalize">
                        This page is empty
                    </b>
                </div>
            </div>
            <div className="absolute top-[60px] left-[0px] rounded-3xs bg-white w-[70px] h-[830px] flex flex-col items-center justify-center pt-[15px] px-0 pb-0 box-border gap-[10px]">
                <div className="flex flex-col items-center justify-center z-[0]">
                    <div className="flex flex-col items-center justify-start gap-[35px]">
                        <img
                            className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
                            alt=""
                            src="/icons9.svg"
                            onClick={onIconsClick}
                        />
                        <img
                            className="relative rounded-md w-[38px] h-[38px] overflow-hidden shrink-0"
                            alt=""
                            src="/icons10.svg"
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
            <Header />
        </div>
    );
};

export default Screen2;
