import { useMutation } from '@tanstack/react-query'
import { fetchPresignedUrl } from '../apis/presigned-url'
import { uploadToS3 } from '../apis/s3'

export const useUploadPhoto = () =>
  useMutation({
    mutationFn: async (file: File) => {
      const { uploadUrl, fileKey } = await fetchPresignedUrl(file.type)
      await uploadToS3(uploadUrl, file)
      const s3Url = new URL(uploadUrl.split('?')[0])
      s3Url.hostname = import.meta.env.VITE_CLOUDFRONT_DOMAIN
      return { fileKey, faceImageUrl: s3Url.toString() }
    },
  })
