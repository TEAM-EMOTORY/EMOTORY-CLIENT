import { useEffect, useCallback } from 'react'

// home.webp 자연 크기 (iPad Air 4 해상도)
const IMAGE_W = 2360
const IMAGE_H = 1640

// 홈 이미지 위 버튼 영역 — 이미지 좌표 (0~1), 중심점 + 크기
// home.tsx 의 버튼은 --home-{key}-left / -top / -width / -height CSS 변수를 읽는다
const BUTTONS = {
  story: { x: 0.166, y: 0.887, w: 0.22, h: 0.13 }, // 이야기 시작하기
  dictionary: { x: 0.733, y: 0.89, w: 0.066, h: 0.117 }, // 감정 사전
} as const

// 화면이 iPad보다 가로로 넓으면 위아래가 잘린다 — 위쪽 하늘 여백이 넓어서 위를 더 많이 자른다
// (0 = 위만 보존, 1 = 아래만 보존). home.tsx 의 object-position 세로 값과 같아야 한다
export const HOME_BG_FOCUS_Y = 0.83

export const useImageButtonPos = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const calculate = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const containerW = window.innerWidth
    const containerH = window.innerHeight

    // object-fit: cover + object-position(50% HOME_BG_FOCUS_Y) 와 동일한 스케일/오프셋
    const scale = Math.max(containerW / IMAGE_W, containerH / IMAGE_H)
    const offsetX = (containerW - IMAGE_W * scale) / 2
    const offsetY = (containerH - IMAGE_H * scale) * HOME_BG_FOCUS_Y

    for (const [key, { x, y, w, h }] of Object.entries(BUTTONS)) {
      el.style.setProperty(`--home-${key}-left`, `${offsetX + x * IMAGE_W * scale}px`)
      el.style.setProperty(`--home-${key}-top`, `${offsetY + y * IMAGE_H * scale}px`)
      el.style.setProperty(`--home-${key}-width`, `${w * IMAGE_W * scale}px`)
      el.style.setProperty(`--home-${key}-height`, `${h * IMAGE_H * scale}px`)
    }
  }, [containerRef])

  useEffect(() => {
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [calculate])
}
