import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

export type StoryEmotion =
  | 'SAD'
  | 'HAPPY'
  | 'ANGRY'
  | 'ANXIOUS'
  | 'CALM'
  | 'LONELY'
  | 'EXCITED'
  | 'EMBARRASSED'
  | 'FEAR'
  | 'SURPRISED'

export interface SharedStory {
  playSessionId: number
  name: string
  emotion: StoryEmotion
  title: string
  /** 대표 이미지 — 결말 장면 그림 */
  imageUrl: string
}

interface SharedStoryListResponse {
  stories: SharedStory[]
  /** 0부터 시작 */
  page: number
  size: number
  hasNext: boolean
}

export const fetchSharedStories = (page: number, size = 20) =>
  http.get<SharedStoryListResponse>(END_POINT.BOOKSHELF.SHARED_STORIES, { params: { page, size } })
