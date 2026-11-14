import { useEffect, useCallback } from 'react'

// home.tsx 의 '이야기 시작하기' 버튼이 읽는 CSS 변수
const STORY_LEFT_VAR = '--home-story-left'
const STORY_TOP_VAR = '--home-story-top'
const STORY_WIDTH_VAR = '--home-story-width'
const STORY_HEIGHT_VAR = '--home-story-height'

// home.webp 자연 크기 (iPad Air 4 해상도)
const IMAGE_W = 2360
const IMAGE_H = 1640

// '이야기 시작하기' 버튼 영역 — 이미지 좌표 (0~1), 중심점 + 크기
const STORY_X = 0.166
const STORY_Y = 0.887
const STORY_W = 0.22
const STORY_H = 0.13

export const useImageButtonPos = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const calculate = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const containerW = window.innerWidth
    const containerH = window.innerHeight

    // object-fit: cover 와 동일한 스케일/오프셋
    const scale = Math.max(containerW / IMAGE_W, containerH / IMAGE_H)
    const offsetX = (containerW - IMAGE_W * scale) / 2
    const offsetY = (containerH - IMAGE_H * scale) / 2

    el.style.setProperty(STORY_LEFT_VAR, `${offsetX + STORY_X * IMAGE_W * scale}px`)
    el.style.setProperty(STORY_TOP_VAR, `${offsetY + STORY_Y * IMAGE_H * scale}px`)
    el.style.setProperty(STORY_WIDTH_VAR, `${STORY_W * IMAGE_W * scale}px`)
    el.style.setProperty(STORY_HEIGHT_VAR, `${STORY_H * IMAGE_H * scale}px`)
  }, [containerRef])

  useEffect(() => {
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [calculate])
}
