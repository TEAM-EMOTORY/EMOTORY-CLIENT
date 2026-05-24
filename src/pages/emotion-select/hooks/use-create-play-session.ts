import { useMutation } from '@tanstack/react-query'
import { createPlaySession } from '../apis/play-sessions'

export const useCreatePlaySession = () =>
  useMutation({
    mutationFn: createPlaySession,
  })
