import create from 'zustand'
import {persist} from 'zustand/middleware'

interface FillDataProps {
  fillData: object | undefined | null
  setFillData: (FillData: object) => void
  detectFillData: boolean
  setDetectFillData: (detectFillData: boolean) => void
  matchFillUrl: string
  setMatchFillUrl: (matchFillUrl: string) => void
}
const useFillStore = create(
  persist<FillDataProps>((set) => ({
    fillData: [],
    setFillData: (FillData) => set(() => ({fillData: FillData})),
    detectFillData: false,
    setDetectFillData: (detectFillData) =>
      set(() => ({detectFillData: detectFillData})),
    matchFillUrl: '',
    setMatchFillUrl: (matchFillUrl) => set(() => ({matchFillUrl: matchFillUrl}))
  }))
)

export default useFillStore
