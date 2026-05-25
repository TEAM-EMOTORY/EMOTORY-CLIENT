import { http } from './http'
import { END_POINT } from './config/end-point'

export interface GenerateImageRequest {
  faceImageKey: string
  nodeId: number
  playSessionId: number
}

export interface GenerateImageResponse {
  imageUrl: string
}

export const generateImage = (data: GenerateImageRequest) =>
  http.post<GenerateImageResponse>(END_POINT.STORY.GENERATE_IMAGE, data, { timeout: 60000 })
