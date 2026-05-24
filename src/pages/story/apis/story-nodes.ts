import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

export interface Choice {
  choiceId: number
  content: string
}

export interface StoryNodeResponse {
  nodeId: number
  content: string
  nodeOrder: number
  choices: Choice[]
}

export const fetchStoryNode = (storyNodeId: number) =>
  http.get<StoryNodeResponse>(END_POINT.STORY.STORY_NODE(storyNodeId))
