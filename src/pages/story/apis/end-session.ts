import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

export const endSession = (playSessionId: number) =>
  http.patch(END_POINT.STORY.END_SESSION(playSessionId))
