import { useState, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { APP_CONFIG } from '../data/config'

export function useEasterEgg() {
  const [clicks, setClicks] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const handleHeartClick = useCallback(() => {
    if (revealed) return
    setClicks((prev) => {
      const next = prev + 1
      if (next >= APP_CONFIG.easterEggClicks) {
        setRevealed(true)
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#E91E63', '#FFB6C1', '#FFD700'],
        })
      }
      return next
    })
  }, [revealed])

  const reset = useCallback(() => {
    setClicks(0)
    setRevealed(false)
  }, [])

  const dismiss = useCallback(() => setRevealed(false), [])

  return { clicks, revealed, handleHeartClick, dismiss, reset }
}
