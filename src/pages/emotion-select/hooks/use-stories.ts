import { useQuery } from '@tanstack/react-query'
import { fetchStories } from '../apis/stories'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const useStories = () =>
  useQuery({
    queryKey: QUERY_KEYS.stories,
    queryFn: fetchStories,
  })
