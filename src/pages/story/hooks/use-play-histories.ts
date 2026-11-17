import { useQuery } from '@tanstack/react-query'
import { fetchPlayHistories } from '../apis/histories'
import { fetchPlaySession } from '../apis/play-session'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

/** 이 세션에서 이미 고른 선택지 기록 (선택 순서대로) */
export const usePlayHistories = (playSessionId: number | undefined) =>
  useQuery({
    queryKey: QUERY_KEYS.playHistories(playSessionId ?? 0),
    queryFn: () => fetchPlayHistories(playSessionId!),
    enabled: !!playSessionId,
    select: ({ histories }) => [...histories].sort((a, b) => a.stepNumber - b.stepNumber),
  })

/** 세션이 지금 머물러 있는 장면 — 지나온 장면 중 가장 마지막 장면 */
export const usePlaySession = (playSessionId: number | undefined) =>
  useQuery({
    queryKey: QUERY_KEYS.playSession(playSessionId ?? 0),
    queryFn: () => fetchPlaySession(playSessionId!),
    enabled: !!playSessionId,
  })
