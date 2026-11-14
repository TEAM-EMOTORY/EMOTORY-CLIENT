import { createContext } from 'react'

/**
 * 책 넘김 라이브러리는 페이지 개수가 바뀔 때만 페이지를 다시 그린다.
 * 그래서 자주 바뀌는 값(disabled, 콜백 등)은 props 대신 context로 전달한다.
 */
interface StoryBookContextValue {
  childName: string
  playSessionId?: number
  disabled: boolean
  /** 장면별로 고른 선택지 (nodeId → choiceId) */
  chosen: Record<number, string>
  onChoose: (nodeId: number, choiceId: string, choiceText: string) => void
}

export const StoryBookContext = createContext<StoryBookContextValue>({
  childName: '',
  disabled: true,
  chosen: {},
  onChoose: () => {},
})
