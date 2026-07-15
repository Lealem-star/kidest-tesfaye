import { useCallback } from 'react'
import confetti from 'canvas-confetti'

export function useConfetti() {
  const burst = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E91E63', '#FFB6C1', '#FFD700', '#FFF8F5'],
    })
  }, [])

  const explosion = useCallback(() => {
    const duration = 4000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#E91E63', '#FFB6C1', '#FFD700'],
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#E91E63', '#FFB6C1', '#FFD700'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()

    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.4 },
      colors: ['#E91E63', '#FFB6C1', '#FFD700'],
    })
  }, [])

  const fireworks = useCallback(() => {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval = setInterval(() => {
      confetti({
        ...defaults,
        particleCount: 40,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors: ['#E91E63', '#FFB6C1', '#FFD700'],
      })
    }, 400)

    setTimeout(() => clearInterval(interval), 5000)
  }, [])

  return { burst, explosion, fireworks }
}
