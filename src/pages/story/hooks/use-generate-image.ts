import { useQuery } from '@tanstack/react-query'
import { generateImage } from '../apis/image'

export const useGenerateImage = (
  faceImageKey: string,
  nodeId: number | undefined,
  playSessionId: number | undefined,
) =>
  useQuery({
    queryKey: ['generate-image', nodeId],
    queryFn: () => generateImage({ faceImageKey, nodeId: nodeId!, playSessionId: playSessionId! }),
    enabled: !!faceImageKey && !!nodeId && !!playSessionId,
    retry: false,
    staleTime: Infinity,
  })
