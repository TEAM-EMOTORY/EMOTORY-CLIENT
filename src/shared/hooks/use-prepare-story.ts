import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'
import { generateImage } from '@shared/apis/image'
import { fetchStoryNode } from '@pages/story/apis/story-nodes'

/**
 * 이야기 첫 장면(본문 + AI 그림)을 미리 받아 캐시에 넣어 둔다.
 * 이야기 화면은 같은 query key를 쓰므로 진입하자마자 바로 그림이 보인다.
 * 실패해도 throw 하지 않는다 — 이야기 화면에서 평소처럼 다시 시도한다.
 */
export const usePrepareStory = () => {
  const queryClient = useQueryClient()

  return (nodeId: number, playSessionId: number) => {
    const faceImageKey = localStorage.getItem('faceImageKey') ?? ''

    return Promise.all([
      queryClient.prefetchQuery({
        queryKey: QUERY_KEYS.storyNode(nodeId),
        queryFn: () => fetchStoryNode(nodeId),
      }),
      faceImageKey
        ? queryClient.prefetchQuery({
            queryKey: QUERY_KEYS.generateImage(nodeId),
            queryFn: () => generateImage({ faceImageKey, nodeId, playSessionId }),
            staleTime: Infinity,
          })
        : Promise.resolve(),
    ])
  }
}
