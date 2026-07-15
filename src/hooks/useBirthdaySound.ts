import { useRef, useCallback } from 'react'
import { APP_CONFIG } from '../data/config'

export function useBirthdaySound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(APP_CONFIG.birthdaySoundUrl)
      audioRef.current.volume = 0.85
    }
    return audioRef.current
  }, [])

  const play = useCallback(async () => {
    const audio = initAudio()
    audio.currentTime = 0
    try {
      await audio.play()
    } catch {
      /* blocked until user gesture */
    }
  }, [initAudio])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [])

  return { play, stop }
}
