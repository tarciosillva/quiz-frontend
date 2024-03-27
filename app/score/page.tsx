"use client"
import Image from "next/image";
import { useQuizContext } from "@/context/quiz-context";
import { useResponseContext } from "@/context/response-context";
import { Button } from "@/components/Button";

export default function Score() {

    const { quiz, setIndexQuestion } = useQuizContext()
    const { totalHits } = useResponseContext()

    const playAgain = () => {
        setIndexQuestion(0)
        /**to clean all confis to next quiz */
        window.location.href="/"
    }

    return (
        <>
            <div className="mt-10">
                <h1 className="font-rubik font-light text-4xl text-darkNavy lg:text-6xl">Quiz completed</h1>
                <h1 className="font-rubik font-medium text-4xl pb-3 text-darkNavy lg:text-6xl">You scored...</h1>
            </div>
            <div className="w-full mt-5">
                <div className="bg-white shadow-sm p-3 rounded-xl w-full grid gap-4 items-center mb-3">
                    <div className="w-full flex items-center justify-center gap-4">
                        <Image src={quiz.icon} alt={quiz.title + "image"} width={50} height={50} />
                        <h2>{quiz.title}</h2>
                    </div>

                    <h1 className="text-center text-7xl">{totalHits}</h1>

                    <p className="text-center text-lg text-greyNavy">out of {quiz.questions.length}</p>
                </div>
                <Button onClick={() => playAgain()}>Play Again</Button>
            </div>
        </>
    );
}
