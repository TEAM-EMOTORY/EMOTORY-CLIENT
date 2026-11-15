import { useMutation } from '@tanstack/react-query'
import { endSession } from '@shared/apis/end-session'

export const useEndSession = () =>
  useMutation({
    mutationFn: endSession,
  })
