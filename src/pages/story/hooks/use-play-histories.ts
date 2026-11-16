import { useQuery } from '@tanstack/react-query'
import { fetchPlayHistories } from '../apis/histories'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

/** 이 세션에서 이미 고른 선택지 기록 — 지난 장면으로 돌아왔을 때 고른 선택을 보여주고 잠그는 데 쓴다 */
export const usePlayHistories = (playSessionId: number | undefined) =>
  useQuery({
    queryKey: QUERY_KEYS.playHistories(playSessionId ?? 0),
    queryFn: () => fetchPlayHistories(playSessionId!),
    enabled: !!playSessionId,
    select: ({ histories }) =>
      Object.fromEntries(
        histories.map(({ nodeId, choiceId }) => [nodeId, String(choiceId)]),
      ) as Record<number, string>,
  })
