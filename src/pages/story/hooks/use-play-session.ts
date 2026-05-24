import { useQuery } from '@tanstack/react-query'
import { fetchPlaySession } from '../apis/play-sessions'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const usePlaySession = (playSessionId: number | undefined) =>
  useQuery({
    queryKey: QUERY_KEYS.playSession(playSessionId ?? 0),
    queryFn: () => fetchPlaySession(playSessionId!),
    enabled: !!playSessionId,
  })
