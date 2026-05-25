import { http } from './http'
import { END_POINT } from './config/end-point'

export interface StoryResultResponse {
  summary: string
  emotion: string
  advice: string
  generatedImageUrl: string
}

export const createStoryResult = (playSessionId: number, emotion: string, summary: string, advice: string) =>
  http.post<StoryResultResponse>(END_POINT.RESULT.CREATE(playSessionId), { emotion, summary, advice })

export const fetchStoryResult = (playSessionId: number) =>
  http.get<StoryResultResponse>(END_POINT.RESULT.GET(playSessionId))
