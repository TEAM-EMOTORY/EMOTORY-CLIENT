import { http } from './http'

export interface AIImageRequest {
  prompt: string
}

export interface AIImageResponse {
  imageUrl: string
}

export const generateAIImage = async (body: AIImageRequest): Promise<AIImageResponse> => {
  return await http.post<AIImageResponse>('/images/generate', body)
}
