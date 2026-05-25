import { useEffect, useCallback } from 'react'
import { BUTTON_LEFT_VAR, BUTTON_TOP_VAR, AGREEMENT_LEFT_VAR, AGREEMENT_TOP_VAR } from '../home.css'

// home.webp 자연 크기
const IMAGE_W = 1011
const IMAGE_H = 758

// 이미지 좌표 (0~1) — 버튼 중심점 기준
const DIARY_X = 0.15
const DIARY_Y = 0.88
const AGREEMENT_X = 0.85
const AGREEMENT_Y = 0.88

export const useImageButtonPos = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const calculate = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const containerW = window.innerWidth
    const containerH = window.innerHeight

    const scale = Math.max(containerW / IMAGE_W, containerH / IMAGE_H)
    const offsetX = (containerW - IMAGE_W * scale) / 2
    const offsetY = (containerH - IMAGE_H * scale) / 2

    el.style.setProperty(BUTTON_LEFT_VAR, `${offsetX + DIARY_X * IMAGE_W * scale}px`)
    el.style.setProperty(BUTTON_TOP_VAR, `${offsetY + DIARY_Y * IMAGE_H * scale}px`)
    el.style.setProperty(AGREEMENT_LEFT_VAR, `${offsetX + AGREEMENT_X * IMAGE_W * scale}px`)
    el.style.setProperty(AGREEMENT_TOP_VAR, `${offsetY + AGREEMENT_Y * IMAGE_H * scale}px`)
  }, [containerRef])

  useEffect(() => {
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [calculate])
}
