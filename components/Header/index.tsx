"use client"
import { useQuizContext } from "@/context/quiz-context";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
    const { quiz } = useQuizContext()
    const pathName = usePathname()
    return (
        <div className="w-full grid grid-cols-2 md:mb-10">
            <div className="w-full flex items-center gap-4">
                {quiz.icon && (
                    <Image className={`${pathName === "/" && 'hidden'}`} src={quiz.icon} alt={quiz.title + "image"} width={50} height={50} />
                )}
                <h2 className={`${pathName === "/" && 'hidden'} text-lg md:text-2xl font-rubik text-darkNavy font-medium lg:text-2xl`}>{quiz.title}</h2>
            </div>

            <div className="w-full flex gap-2 justify-end">
                <Image src="./assets/light-mode-icon.svg" alt="sun icon" width={25} height={25} />
                <button className="cursor-not-allowed">
                    <Image src="./assets/togleLight.svg" alt="togle button light mode" width={40} height={40} />
                </button>
                <Image src="./assets/dark-mode-icon.svg" alt="mon icon" width={25} height={25} />
            </div>
        </div>
    );
};
