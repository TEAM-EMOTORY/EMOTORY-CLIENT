import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import homeBg from '@shared/assets/background-img/home.webp'
import { useImageButtonPos } from './hooks/use-image-button-pos'

const HomePage = () => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  useImageButtonPos(containerRef)

  return (
    <div ref={containerRef} className='relative h-dvh w-screen overflow-hidden'>
      <img src={homeBg} alt='' className='absolute inset-0 size-full object-cover object-center' />
      <button
        className='absolute top-(--home-story-top) left-(--home-story-left) h-(--home-story-height) w-(--home-story-width) -translate-x-1/2 -translate-y-1/2 rounded-pill'
        aria-label='이야기 시작하기'
        onClick={() => navigate('/agreement?next=story')}
      />
      <button
        className='absolute top-(--home-dictionary-top) left-(--home-dictionary-left) h-(--home-dictionary-height) w-(--home-dictionary-width) -translate-x-1/2 -translate-y-1/2 rounded-t-[4.2rem] rounded-b-[1.8rem]'
        aria-label='감정 사전'
        onClick={() => navigate('/emotion-dictionary')}
      />
    </div>
  )
}

export default HomePage
