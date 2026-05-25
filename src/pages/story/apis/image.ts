import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

interface GenerateImageRequest {
  faceImageKey: string
  nodeId: number
  playSessionId: number
}

interface GenerateImageResponse {
  imageUrl: string
}

export const generateImage = (data: GenerateImageRequest) =>
  http.post<GenerateImageResponse>(END_POINT.STORY.GENERATE_IMAGE, data, { timeout: 60000 })
