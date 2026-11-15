import angryCharacterImg from '@shared/assets/emotion-img/angry_character.webp'
import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'
import sadCharacterImg from '@shared/assets/emotion-img/sad_character.webp'
import type { DiaryEmotion } from '../graph-card/constants'

const NOTE_CHARACTER_IMAGES: Record<DiaryEmotion, string> = {
  joy: happyCharacterImg,
  sad: sadCharacterImg,
  angry: angryCharacterImg,
}

interface NoteCardProps {
  title: string
  description: string
  emotion: DiaryEmotion
}

const NoteCard = ({ title, description, emotion }: NoteCardProps) => (
  <aside className='flex min-h-0 flex-col rounded-lg border-[1.5px] border-leaf/28 bg-surface-card/82 p-[clamp(1.2rem,2vh,2rem)]'>
    <div className='mb-[clamp(1rem,1.5dvh,2rem)] flex items-center justify-center gap-10 text-subtitle text-leaf'>
      <span>🌱</span>
      <span>오늘의 한마디</span>
    </div>
    <div className='flex flex-1 flex-col items-center justify-center gap-[clamp(1rem,1.5dvh,2rem)] overflow-hidden rounded-md border-[1.5px] border-border bg-white/76 px-[clamp(1.2rem,2vw,2.4rem)] pt-[clamp(1.6rem,2.5dvh,3.2rem)] text-center text-body text-ink-2'>
      <strong className='text-subtitle text-leaf'>{title}</strong>
      <p>{description}</p>
      <img src={NOTE_CHARACTER_IMAGES[emotion]} alt='' className='mt-auto w-[clamp(8rem,12vh,14rem)]' />
    </div>
  </aside>
)

export default NoteCard
