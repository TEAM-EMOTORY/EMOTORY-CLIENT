import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createStoryResult, fetchStoryResult } from '@shared/apis/result'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const useStoryResult = (playSessionId: number | undefined) => {
  return useQuery({
    queryKey: QUERY_KEYS.storyResult(playSessionId ?? 0),
    queryFn: () => fetchStoryResult(playSessionId!),
    enabled: !!playSessionId,
  })
}

export const useCreateStoryResult = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ playSessionId, emotion, summary, advice }: { playSessionId: number; emotion: string; summary: string; advice: string }) =>
      createStoryResult(playSessionId, emotion, summary, advice),
    onSuccess: (_, { playSessionId }) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.storyResult(playSessionId),
      })
    },
  })
}
