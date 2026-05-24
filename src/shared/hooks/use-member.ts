import { useQuery } from '@tanstack/react-query'
import { fetchMemberName } from '../apis/member'
import { QUERY_KEYS } from '../apis/config/query-keys'

export const useMember = (memberId: string | null) => {
  return useQuery({
    queryKey: QUERY_KEYS.member(memberId ?? ''),

    queryFn: () => fetchMemberName(memberId!),

    enabled: !!memberId,
  })
}
