import { FC } from 'react';
import Image from "next/image";
import emptyPage from "../assets/image-1@2x.png"
interface EmptyPageProps {

};

const EmptyPage: FC<EmptyPageProps> = ({ }) => {
    return (
        <section
            className="flex flex-col items-center justify-center text-left text-lg text-white-mode-main-text-color font-inter rounded-lg min-w-[330px] p-3 xl:p-11 bg-white z-0 w-full"
        >
            <div className="rounded-3xs bg-white flex flex-col items-center justify-center p-11 box-border gap-[42px]">
                <Image
                    className="relative w-[526.6px] h-[298.3px] object-cover"
                    alt=""
                    src={emptyPage}
                />
                <b className="relative leading-[130%] capitalize">
                    This page is empty
                </b>
            </div>
        </section>
    );
};

export default EmptyPage;