import { axiosInstance } from '@shared/apis/axios'
import { END_POINT } from '@shared/apis/config/end-point'

interface CreateMemberRequest {
  name: string
  faceImageUrl: string
  isPrivacyAgreed: boolean
}

export const createMember = async (data: CreateMemberRequest) => {
  const response = await axiosInstance.post<void>(END_POINT.CHILD_INFO.CREATE_MEMBER, data)
  const memberId = Number(response.headers.location?.split('/').pop())
  if (!Number.isSafeInteger(memberId) || memberId <= 0) {
    throw new Error('Member creation response is missing a valid Location header.')
  }
  return memberId
}
