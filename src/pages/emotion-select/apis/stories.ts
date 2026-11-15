import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

export interface Story {
  storyId: number
  title: string
  description: string
}

interface StoriesResponse {
  stories: Story[]
}

export const fetchStories = () => http.get<StoriesResponse>(END_POINT.EMOTION_SELECT.STORIES)
