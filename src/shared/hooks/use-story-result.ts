import { useQuery } from '@tanstack/react-query'
import { fetchStoryResult } from '@shared/apis/result'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const useStoryResult = (playSessionId: number | undefined) => {
  return useQuery({
    queryKey: QUERY_KEYS.storyResult(playSessionId ?? 0),
    queryFn: () => fetchStoryResult(playSessionId!),
    enabled: !!playSessionId,
    staleTime: Infinity,
  })
}
