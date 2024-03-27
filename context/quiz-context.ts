import { IQuiz, IQuestion } from '@/interfaces/IQuiz'
import { create } from 'zustand'

type Store = {
    quiz: IQuiz,
    setQuiz: (state: IQuiz) => void,
    question: IQuestion,
    setQuestion: (state: IQuestion) => void,
    indexQuestion: number,
    setIndexQuestion: (state: number) => void,
}

export const useQuizContext = create<Store>()((set) => ({
    quiz: {
        title: '',
        icon: '',
        questions: [
            {
                answer: '',
                options: [''],
                question: ''
            }
        ]
    },
    setQuiz: (state) => set({ quiz: state }),
    question: {
        question: '',
        options: [''],
        answer: ''
    },
    setQuestion: (state) => set({ question: state }),
    indexQuestion: 0,
    setIndexQuestion: (state) => set({ indexQuestion: state })
}))