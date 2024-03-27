"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

import { useQuizContext } from "@/context/quiz-context";
import { OptionQuiz } from "@/components/OptionQuiz";
import { useResponseContext } from "@/context/response-context";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/Button";
import { LetterOption } from "@/components/LetterOption";
import { saveScore } from "./quizApi";

export default function Quiz() {
    const router = useRouter();

    const { quiz, indexQuestion, setIndexQuestion } = useQuizContext();
    const { totalHits, userAnswer, verifyAnswer, setVerifyAnswer, setTotalHits, setUserAnswer } = useResponseContext();

    const [alert, setAlert] = useState<boolean>(false);

    useEffect(() => {
        if (!quiz.title) {
            window.location.href = "/"
        }
    }, [])

    const submitAnswer = () => {
        if (!userAnswer) {
            setAlert(true);
            return;
        }

        setVerifyAnswer(true);

        if (userAnswer === quiz.questions[indexQuestion].answer) {
            setTotalHits(totalHits + 1);
        }
        setAlert(false);
    }

    const next = () => {
        if (indexQuestion + 1 < quiz.questions.length) {
            setIndexQuestion(indexQuestion + 1);
            setUserAnswer("");
            setVerifyAnswer(false);
            setAlert(false);
        }
    }

    const submitResult = async () => {
        const result = await saveScore({
            quizTitle: quiz.title,
            score: String(totalHits)
        })

        if (result.success) {
            router.push("/score")
        }
    }

    return (
        <>
            {quiz.title && (
                <>
                    <div className="mt-10">
                        <i className="font-rubik text-greyNavy">{`Question ${indexQuestion + 1} of ${quiz.questions.length}`}</i>

                        <div className="text-darkNavy font-medium text-xl md:text-4xl mt-5">
                            {quiz.questions[indexQuestion].question}
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        {quiz.questions[indexQuestion].options.map((item, index) => (
                            <OptionQuiz
                                component={
                                    <LetterOption
                                        key={index}
                                        index={index}
                                        text={item}
                                    />
                                }
                                key={index}
                                text={item}
                                onClick={() => setUserAnswer(item)}
                            />
                        ))}

                        {!verifyAnswer && (
                            <Button onClick={() => submitAnswer()}>Submit Answer</Button>
                        )}

                        {verifyAnswer && (indexQuestion + 1 < quiz.questions.length) && (
                            <Button onClick={() => next()}>Next Question</Button>
                        )}

                        {verifyAnswer && !(indexQuestion + 1 < quiz.questions.length) && (
                            <Button onClick={() => submitResult()}>Result</Button>
                        )}

                        {alert && (
                            <div className="flex items-center justify-center w-full mt-5">
                                <Image src="./assets/dismiss-circle.svg" alt="dismiss-circle" width={25} height={25} />
                                <p className="text-red font-rubik text-center">Please select an answer</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}