import Image from "next/image";
import React from "react";
import { useQuizContext } from "@/context/quiz-context";
import { useResponseContext } from "@/context/response-context";

interface OptionProps {
    text: string;
    onClick: () => void;
    component: React.ReactNode;
}

export const OptionQuiz = (props: OptionProps) => {
    const { userAnswer, verifyAnswer } = useResponseContext();
    const { quiz, indexQuestion } = useQuizContext();

    const selected = userAnswer === props.text;
    const isCorrectAnswer = userAnswer === quiz.questions[indexQuestion].answer;

    const getStatusClassName = () => {
        if (!verifyAnswer && !selected) return 'optionQuiz';
        if (verifyAnswer && selected && isCorrectAnswer) return 'border-2 border-green justify-between';
        if (verifyAnswer && selected && !isCorrectAnswer) return 'border-2 border-red justify-between';
        if (!verifyAnswer && selected) return 'border-2 border-purple';
        return '';
    };

    return (
        <button
            className={`
        w-full 
        my-3 
        flex 
        items-center
        bg-white 
        drop-shadow-md 
        rounded-xl 
        p-4 
        cursor-pointer 
        md:text-3xl
        md:my-4
        ${getStatusClassName()}
      `}
            onClick={props.onClick}
            disabled={verifyAnswer}
        >
            <div className="flex items-center gap-4">
                {props.component}
                <p className="font-rubik text-darkNavy font-medium text-lg md:text-xl">
                    {props.text}
                </p>
            </div>

            {verifyAnswer && selected && (
                <Image className="md:w-9" src={isCorrectAnswer ? "./assets/checkmark-circle.svg" : "./assets/dismiss-circle.svg"} alt={isCorrectAnswer ? "checkmark-circle" : "dismiss-circle"} width={25} height={25} />
            )}
        </button>
    );
};
