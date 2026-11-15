import type { ReactNode } from 'react'

interface FrameProps {
  header: ReactNode
  scene: ReactNode
  content: ReactNode
  choices: ReactNode
  nav: ReactNode
}

const Frame = ({ header, scene, content, choices, nav }: FrameProps) => {
  return (
    <div className='flex h-dvh flex-col px-20 py-[clamp(1.5rem,2.5dvh,3rem)]'>
      {header}
      <div className='flex min-h-0 flex-1 flex-col'>
        <div className='flex min-h-0 flex-1 items-stretch justify-center gap-[clamp(1.4rem,2dvh,2.4rem)]'>
          {scene}
          {content}
        </div>
        {choices}
      </div>
      {nav}
    </div>
  )
}

export default Frame
