import { create } from 'zustand'

type Store = {
    totalHits: number,
    setTotalHits: (state: number) => void,
    userAnswer: string,
    setUserAnswer: (state: string) => void
    verifyAnswer:boolean
    setVerifyAnswer: (state: boolean) => void
}

export const useResponseContext = create<Store>()((set) => ({
    totalHits: 0,
    setTotalHits: (state) => set({ totalHits: state }),
    userAnswer: '',
    setUserAnswer: (state) => set({ userAnswer: state }),
    verifyAnswer:false,
    setVerifyAnswer: (state) => set({ verifyAnswer: state }),
}))