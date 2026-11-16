import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

export interface PlayHistory {
  playHistoryId: number
  stepNumber: number
  nodeId: number
  choiceId: number
  choiceContent: string
  createdAt: string
}

interface PlayHistoryListResponse {
  histories: PlayHistory[]
}

export const fetchPlayHistories = (playSessionId: number) =>
  http.get<PlayHistoryListResponse>(END_POINT.STORY.HISTORIES(playSessionId))
