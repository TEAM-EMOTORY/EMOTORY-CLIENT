import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { fetchStoryNode } from '../apis/story-nodes'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

export const useStoryNode = (storyNodeId: number | undefined) =>
  useQuery({
    queryKey: QUERY_KEYS.storyNode(storyNodeId ?? 0),
    queryFn: () => fetchStoryNode(storyNodeId!),
    enabled: !!storyNodeId,
    placeholderData: keepPreviousData,
  })
