import { useMutation } from '@tanstack/react-query'
import { endSession } from '../apis/end-session'

export const useEndSession = () =>
  useMutation({
    mutationFn: endSession,
  })
