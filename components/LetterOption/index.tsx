import { useQuizContext } from "@/context/quiz-context";
import { useResponseContext } from "@/context/response-context";
import React from "react";

type letterProps = {
    index: number
    text: string
}

export const LetterOption = (props: letterProps) => {
    const { userAnswer, verifyAnswer } = useResponseContext()
    const { quiz, indexQuestion } = useQuizContext()

    const letters: string[] = ['A', 'B', 'C', 'D']

    const selected = userAnswer === props.text
    const isCorrectAnswer = userAnswer === quiz.questions[indexQuestion].answer

    return (
        <div className={`
        letter-hover
        w-14 
        h-14 
        rounded-md 
        p-4 
        font-rubik 
        font-medium
        lg:text-2xl
        flex
        items-center
        justify-center
        ${!verifyAnswer && selected && 'bg-purple text-white'}
        ${!verifyAnswer && !selected  && 'bg-lightGrey text-greyNavy'}
        ${verifyAnswer && !selected  && 'bg-lightGrey text-greyNavy'}
        ${verifyAnswer && selected && isCorrectAnswer && 'bg-green text-white'}
        ${verifyAnswer && selected && !isCorrectAnswer && 'bg-red text-white'}

        `}>
            {letters[props.index]}
        </div>
    );
};
