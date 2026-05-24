import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

interface CreateMemberRequest {
  name: string
  faceImageUrl: string
  isPrivacyAgreed: boolean
}

export const createMember = (data: CreateMemberRequest) =>
  http.post(END_POINT.CHILD_INFO.CREATE_MEMBER, data)
