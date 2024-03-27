export interface QuizRoot {
    quizzes: IQuiz[]
}

export interface IQuiz {
    title: string
    icon: string
    questions: IQuestion[]
}

export interface IQuestion {
    question: string
    options: string[]
    answer: string
}