import { useState } from 'react'
import type { ReactNode } from 'react'
import { useDelayedFlag } from '@shared/hooks/use-delayed-flag'
import { cn } from '@shared/utils/cn'

/** 이 시간 안에 그림이 뜨면 로딩 표시 없이 바로 보여준다 (서버에 이미 있는 그림은 금방 온다) */
const LOADING_DELAY_MS = 600

interface FadeInImageProps {
  /** 아직 주소가 없으면 비워 둔다 */
  src?: string
  /** 감싸는 영역 (크기·모양) */
  className?: string
  /** 그림 자체에 더할 스타일 */
  imgClassName?: string
  /** 그림이 늦게 올 때만 보여줄 로딩 표시 */
  placeholder?: ReactNode
}

/**
 * 그림 파일까지 다 받은 뒤 부드럽게 나타나는 이미지.
 * 금방 뜨는 그림은 로딩 표시를 건너뛰어, 로딩이 반짝 보였다 사라지지 않게 한다.
 */
const FadeInImage = ({ src, className, imgClassName, placeholder }: FadeInImageProps) => {
  const [loadedSrc, setLoadedSrc] = useState<string>()
  const isReady = !!src && loadedSrc === src
  const showPlaceholder = useDelayedFlag(!isReady, LOADING_DELAY_MS)

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {src && (
        <img
          src={src}
          alt=''
          onLoad={() => setLoadedSrc(src)}
          className={cn(
            'size-full object-cover transition-opacity duration-300',
            isReady ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
      {showPlaceholder && placeholder && <div className='absolute inset-0'>{placeholder}</div>}
    </div>
  )
}

export default FadeInImage
