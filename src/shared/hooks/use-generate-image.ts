import { useQuery } from '@tanstack/react-query'
import { generateImage } from '@shared/apis/image'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const useGenerateImage = (
  faceImageKey: string,
  nodeId: number | undefined,
  playSessionId: number | undefined,
) =>
  useQuery({
    queryKey: QUERY_KEYS.generateImage(nodeId ?? 0, playSessionId, faceImageKey),
    queryFn: () => generateImage({ faceImageKey, nodeId: nodeId!, playSessionId: playSessionId! }),
    enabled: !!faceImageKey && !!nodeId && !!playSessionId,
    retry: false,
    staleTime: Infinity,
  })
