"use client"
import { useQuizContext } from "@/context/quiz-context";
import { OptionDefault } from "@/components/OptionDefault";
import { useRouter } from 'next/navigation'
import quizJson from "@/config/quiz.json"
import { IQuiz } from "@/interfaces/IQuiz";
import { useResponseContext } from "@/context/response-context";

export default function Home() {
  const { setQuiz, setQuestion, setIndexQuestion } = useQuizContext()
  const { setTotalHits, setUserAnswer, setVerifyAnswer } = useResponseContext()

  const router = useRouter();

  const selectQuiz = (quiz: IQuiz) => {
    setQuiz(quiz)
    setQuestion({
      question: '',
      options: [''],
      answer: ''
    })
    setIndexQuestion(0)
    setTotalHits(0)
    setUserAnswer("")
    setVerifyAnswer(false)
    router.push("/quiz");
  }

  return (
    <>
      <div className="mt-10">
        <h1 className="font-rubik font-light text-4xl text-darkNavy md:text-6xl 2xl:text-7xl">Welcome to the</h1>
        <h1 className="font-rubik font-medium text-4xl pb-3 text-darkNavy md:text-6xl 2xl:text-7xl">Frontend Quiz!</h1>

        <i className="font-rubik text-greyNavy lg:text-xl">Pick a subject to get started.</i>
      </div>
      <div className="w-full mt-5">
        {quizJson.quizzes.map((item, index) => (
          <OptionDefault icon={item.icon} key={index} alt={item.title + "icon"} text={item.title} onClick={() => selectQuiz(item)} />
        ))}
      </div>
    </>
  );
}
