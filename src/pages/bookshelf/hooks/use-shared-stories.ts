import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'
import { fetchSharedStories } from '../apis/shared-stories'

/** 공개된 이야기 목록 — 최신순, 책장을 내리면 다음 페이지를 이어서 불러온다 */
export const useSharedStories = () =>
  useInfiniteQuery({
    queryKey: QUERY_KEYS.sharedStories,
    queryFn: ({ pageParam }) => fetchSharedStories(pageParam),
    initialPageParam: 0,
    getNextPageParam: (last) => (last.hasNext ? last.page + 1 : undefined),
    select: (data) => data.pages.flatMap((page) => page.stories),
  })
