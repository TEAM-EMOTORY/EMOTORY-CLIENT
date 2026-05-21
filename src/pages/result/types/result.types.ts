export interface StoryResult {
  imageUrl?: string
  summary: string
}

export interface EmotionResult {
  title: string
  description: string
  tags: string[]
  characterImageUrl?: string
  bubbleIcon?: string
}

export interface TipItem {
  icon: string
  title: string
  description: string
}

export interface ResultData {
  story: StoryResult
  emotion: EmotionResult
  tips: TipItem[]
}