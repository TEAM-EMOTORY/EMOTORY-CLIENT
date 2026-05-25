import { useQuery, useMutation } from '@tanstack/react-query'
import { createStoryResult, fetchStoryResult } from '@shared/apis/result'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const useStoryResult = (playSessionId: number | undefined) => {
  return useQuery({
    queryKey: QUERY_KEYS.storyResult(playSessionId ?? 0),
    queryFn: () => fetchStoryResult(playSessionId!),
    enabled: !!playSessionId,
    staleTime: Infinity,
  })
}

export const useCreateStoryResult = () => {
  return useMutation({
    mutationFn: ({ playSessionId, emotion, summary, advice }: { playSessionId: number; emotion: string; summary: string; advice: string }) =>
      createStoryResult(playSessionId, emotion, summary, advice),
  })
}
