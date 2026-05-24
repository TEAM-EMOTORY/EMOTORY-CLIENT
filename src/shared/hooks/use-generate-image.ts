import { useMutation } from '@tanstack/react-query'
import { generateAIImage, type AIImageRequest } from '@shared/apis/image'

export const useGenerateImage = () => {
  return useMutation({
    mutationFn: (body: AIImageRequest) => generateAIImage(body),
  })
}
