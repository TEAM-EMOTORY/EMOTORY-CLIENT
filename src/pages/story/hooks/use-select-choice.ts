import { useMutation } from '@tanstack/react-query'
import { selectChoice } from '../apis/choices'

export const useSelectChoice = () =>
  useMutation({
    mutationFn: ({ playSessionId, choiceId }: { playSessionId: number; choiceId: number }) =>
      selectChoice(playSessionId, choiceId),
  })
