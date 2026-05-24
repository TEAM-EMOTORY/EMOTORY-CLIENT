import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

interface CreatePlaySessionRequest {
  memberId: number
  storyId: number
}

interface CreatePlaySessionResponse {
  playSessionId: number
  currentNodeId: number
  status: string
}

export const createPlaySession = (data: CreatePlaySessionRequest) =>
  http.post<CreatePlaySessionResponse>(END_POINT.EMOTION_SELECT.PLAY_SESSIONS, data)
