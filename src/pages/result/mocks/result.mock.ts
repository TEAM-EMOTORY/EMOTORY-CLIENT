import type { ResultData } from '../types/result.types'

export const MOCK_RESULT_DATA: ResultData = {
  story: {
    summary:
      '토리는 가장 친한 친구를 만나기로 했어요. 하지만 친구가 보이지 않았고, 아무리 찾아도 찾을 수 없었어요. 토리는 점점 마음이 조마조마해졌어요. 하지만 용기를 내어 친구에게 연락했고, 친구도 미안한 마음에 토리를 찾아왔어요. 둘은 오해를 풀고 더 소중한 친구가 되었답니다.',
  },
  emotion: {
    title: '불안했어요',
    description: '토리는 친구가 보이지 않아 앞으로 어떤 일이 생길지 몰라 불안한 마음이 들었어요.',
    tags: ['걱정', '두려움'],
    bubbleIcon: '💭',
  },
  tips: [
    {
      icon: '😌',
      title: '천천히 심호흡을 해요',
      description: '숨을 천천히 들이쉬고 내쉬면 마음이 조금 진정돼요.',
    },
    {
      icon: '📞',
      title: '믿을 수 있는 사람에게 이야기해요',
      description: '부모님이나 친구에게 내 마음을 말하면 도움이 돼요.',
    },
    {
      icon: '✏️',
      title: '내 마음을 표현해요',
      description: '그림을 그리거나 글로 마음을 표현하면 마음이 가벼워져요.',
    },
    {
      icon: '💛',
      title: '나를 다독여 주세요',
      description: '"괜찮아, 잘할 수 있어" 스스로에게 따뜻한 말을 건네봐요.',
    },
  ],
}
