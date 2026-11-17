import { useEffect, useState } from 'react'

/**
 * flag가 delayMs 넘게 켜져 있을 때만 true.
 * 금방 끝나는 로딩에서는 로딩 표시가 반짝 보였다 사라지지 않도록 한다.
 */
export const useDelayedFlag = (flag: boolean, delayMs: number) => {
  const [isElapsed, setIsElapsed] = useState(false)

  useEffect(() => {
    if (!flag) return
    const timer = window.setTimeout(() => setIsElapsed(true), delayMs)
    return () => {
      window.clearTimeout(timer)
      setIsElapsed(false)
    }
  }, [flag, delayMs])

  return flag && isElapsed
}
