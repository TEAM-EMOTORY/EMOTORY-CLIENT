import { useEffect, useRef, useState } from 'react'

/** 요소의 현재 크기(px)를 잰다 — 고정 px만 받는 라이브러리(책 넘김 등)에 넘길 때 사용 */
export const useElementSize = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null)
  const [size, setSize] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width: Math.floor(width), height: Math.floor(height) })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, size] as const
}
