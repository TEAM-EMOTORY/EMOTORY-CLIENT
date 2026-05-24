import { http } from '@shared/apis/http'
import { END_POINT } from '@shared/apis/config/end-point'

interface PresignedUploadResponse {
  uploadUrl: string
  fileKey: string
}

export const fetchPresignedUrl = (contentType: string) =>
  http.post<PresignedUploadResponse>(END_POINT.CHILD_INFO.PRESIGNED_UPLOAD, {
    type: 'face',
    contentType,
  })
