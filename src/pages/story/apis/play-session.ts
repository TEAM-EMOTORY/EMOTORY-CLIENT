import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

export interface PlaySessionResponse {
  playSessionId: number
  currentNodeId: number
  status: 'PLAYING' | 'ENDED'
}

export const fetchPlaySession = (playSessionId: number) =>
  http.get<PlaySessionResponse>(END_POINT.STORY.PLAY_SESSION(playSessionId))
