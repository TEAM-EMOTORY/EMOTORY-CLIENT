import { http } from './http'

export interface StoryResultResponse {
  summary: string
  emotionTitle: string
  tags: string[]
}

export const createStoryResult = async (playSessionId: number): Promise<StoryResultResponse> => {
  return await http.post<StoryResultResponse>(`/play-sessions/${playSessionId}/results`)
}

export const fetchStoryResult = async (playSessionId: number): Promise<StoryResultResponse> => {
  return await http.get<StoryResultResponse>(`/play-sessions/${playSessionId}/results`)
}
