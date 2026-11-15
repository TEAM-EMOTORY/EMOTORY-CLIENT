import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'

const TODAY_MESSAGES = [
  '오늘의 마음을 잘 들려줬어요!',
  '내 마음을 잘 말했어요!',
  '오늘의 기분을 잘 골랐어요!',
  '오늘도 마음을 잘 살펴봤어요!',
  '기분을 말해줘서 정말 고마워요!',
]

const randomMessage = TODAY_MESSAGES[Math.floor(Math.random() * TODAY_MESSAGES.length)]

interface ProfileCardProps {
  childName: string
}

// 카드 하단 꽃밭 장식 (anger-100 계열 분홍 · yellow-500 · leaf)
const FLOWER_BED = {
  background:
    'radial-gradient(circle at 22% 56%, #FBB7C3 0 0.8rem, transparent 0.9rem), radial-gradient(circle at 35% 70%, #FCC230 0 0.7rem, transparent 0.8rem), radial-gradient(circle at 72% 60%, #FBB7C3 0 0.8rem, transparent 0.9rem), linear-gradient(180deg, transparent 0%, rgb(74 117 53 / 0.28) 100%)',
}

const ProfileCard = ({ childName }: ProfileCardProps) => {
  const childProfileImage = localStorage.getItem('childProfileImage') ?? happyCharacterImg

  return (
    <aside className='relative flex min-h-0 flex-col items-center overflow-hidden rounded-lg border-[1.5px] border-border bg-white/82 px-[clamp(1.2rem,1.8vw,2.4rem)] pt-[clamp(1.6rem,2.5vh,3.6rem)] pb-20 shadow-card'>
      <img src={childProfileImage} alt='' className='mb-[clamp(1rem,1.5vh,2rem)] size-[clamp(8rem,12vh,16rem)] rounded-full border-[1.5px] border-border bg-surface-page object-cover object-center' />
      <strong className='mb-[clamp(1.2rem,2dvh,2.8rem)] text-title text-ink'>{childName}</strong>
      <div className='flex w-full items-center gap-12 rounded-md border-[1.5px] border-border bg-surface-page/90 p-[clamp(1rem,1.5dvh,1.8rem)] text-body text-ink-2'>
        <span>♥</span>
        <p>{randomMessage}</p>
      </div>
      <div className='absolute inset-x-0 bottom-0 h-80' style={FLOWER_BED} />
    </aside>
  )
}

export default ProfileCard
