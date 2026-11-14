import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

interface EndSessionRequest {
  /** 완료한 이야기를 다른 사람에게 공개할지 (종료 후에는 바꿀 수 없음) */
  shared: boolean
}

export interface EndSessionParams extends EndSessionRequest {
  playSessionId: number
}

export const endSession = ({ playSessionId, shared }: EndSessionParams) =>
  http.patch<void, EndSessionRequest>(END_POINT.STORY.END_SESSION(playSessionId), { shared })
