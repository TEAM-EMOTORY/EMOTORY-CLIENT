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
    <div className='flex h-dvh flex-col px-20 py-30'>
      {header}
      <div className='flex min-h-0 flex-1 flex-col'>
        <div className='flex min-h-0 flex-1 items-stretch justify-center gap-24'>
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
