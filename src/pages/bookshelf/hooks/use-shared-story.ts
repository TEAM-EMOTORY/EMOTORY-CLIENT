import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'
import { fetchSharedStory } from '../apis/shared-stories'

/** 공개된 이야기 하나 — 장면(그림·본문)을 한 번에 받는다 */
export const useSharedStory = (playSessionId: number | undefined) =>
  useQuery({
    queryKey: QUERY_KEYS.sharedStory(playSessionId ?? 0),
    queryFn: () => fetchSharedStory(playSessionId!),
    enabled: !!playSessionId,
    staleTime: Infinity,
  })
