import Image from "next/image";
import React from "react";

type OptionProps = {
    icon: string;
    alt: string;
    text: string;
    onClick: () => void;
};

export const OptionDefault: React.FC<OptionProps> = (props) => {
    return (
        <button
            className={`w-full my-3 flex items-center gap-4 bg-white drop-shadow-md rounded-xl p-4 cursor-pointer `}
            onClick={props.onClick}
        >
            <Image className="lg:w-14" src={props.icon} alt={props.alt} width={25} height={25} />
            <p className="font-rubik text-darkNavy font-medium text-lg md:text-3xl">
                {props.text}
            </p>
        </button>
    );
};
