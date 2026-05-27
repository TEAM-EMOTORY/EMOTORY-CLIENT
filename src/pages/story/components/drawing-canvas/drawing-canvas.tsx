import { useRef, useEffect, useState, useCallback } from 'react'
import * as styles from './drawing-canvas.css'

const COLORS = ['#F5622E', '#FCC944', '#4CAF50', '#2196F3', '#9C27B0', '#FF69B4', '#68462B']
const BRUSH_SIZE = 6
const ERASER_SIZE = BRUSH_SIZE * 4

const getPos = (point: { clientX: number; clientY: number }, canvas: HTMLCanvasElement) => {
  const rect = canvas.getBoundingClientRect()
  return {
    x: (point.clientX - rect.left) * (canvas.width / rect.width),
    y: (point.clientY - rect.top) * (canvas.height / rect.height),
  }
}

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDrawing = useRef(false)
  const [activeColor, setActiveColor] = useState(COLORS[0])
  const [isEraser, setIsEraser] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const initCanvas = (width: number, height: number) => {
      canvas.width = Math.floor(width)
      canvas.height = Math.floor(height)
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      if (width > 0 && height > 0) initCanvas(width, height)
    })
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  const startDraw = useCallback((x: number, y: number) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    isDrawing.current = true
    ctx.beginPath()
    ctx.moveTo(x, y)
  }, [])

  const draw = useCallback(
    (x: number, y: number) => {
      if (!isDrawing.current) return
      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx) return
      ctx.lineWidth = isEraser ? ERASER_SIZE : BRUSH_SIZE
      ctx.lineCap = 'round'
      ctx.strokeStyle = isEraser ? '#ffffff' : activeColor
      ctx.lineTo(x, y)
      ctx.stroke()
    },
    [activeColor, isEraser],
  )

  const stopDraw = useCallback(() => {
    isDrawing.current = false
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onMouseDown = (e: MouseEvent) => { const { x, y } = getPos(e, canvas); startDraw(x, y) }
    const onMouseMove = (e: MouseEvent) => { const { x, y } = getPos(e, canvas); draw(x, y) }
    const onTouchStart = (e: TouchEvent) => { e.preventDefault(); const { x, y } = getPos(e.touches[0], canvas); startDraw(x, y) }
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); const { x, y } = getPos(e.touches[0], canvas); draw(x, y) }

    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseup', stopDraw)
    canvas.addEventListener('mouseleave', stopDraw)
    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    canvas.addEventListener('touchmove', onTouchMove, { passive: false })
    canvas.addEventListener('touchend', stopDraw)

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseup', stopDraw)
      canvas.removeEventListener('mouseleave', stopDraw)
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', stopDraw)
    }
  }, [startDraw, draw, stopDraw])

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>🎨 그림을 만들어지는 동안 나도 그려볼까요?</p>
      <div ref={containerRef} className={styles.canvasContainer}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
      <div className={styles.toolbar}>
        {COLORS.map((color) => (
          <button
            key={color}
            type='button'
            className={`${styles.colorButton} ${!isEraser && activeColor === color ? styles.colorButtonActive : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => { setActiveColor(color); setIsEraser(false) }}
          />
        ))}
        <button
          type='button'
          className={`${styles.eraserButton} ${isEraser ? styles.eraserButtonActive : ''}`}
          onClick={() => setIsEraser((v) => !v)}
        >
          지우개
        </button>
      </div>
    </div>
  )
}

export default DrawingCanvas
