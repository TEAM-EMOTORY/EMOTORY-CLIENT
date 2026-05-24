import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

interface SelectChoiceResponse {
  playSessionId: number
  currentNodeId: number
  status: 'PLAYING' | 'ENDED'
}

export const selectChoice = (playSessionId: number, choiceId: number) =>
  http.post<SelectChoiceResponse>(END_POINT.STORY.SELECT_CHOICE(playSessionId), { choiceId })
