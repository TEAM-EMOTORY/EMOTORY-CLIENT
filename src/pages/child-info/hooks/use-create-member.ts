import { useMutation } from '@tanstack/react-query'
import { createMember } from '../apis/member'

export const useCreateMember = () =>
  useMutation({
    mutationFn: createMember,
  })
