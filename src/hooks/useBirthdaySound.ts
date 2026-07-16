import { useState, useRef, useCallback } from 'react'
import { APP_CONFIG } from '../data/config'

export function useBirthdaySound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(APP_CONFIG.birthdaySoundUrl)
      audioRef.current.volume = 0.85
      audioRef.current.addEventListener('ended', () => setIsPlaying(false))
      audioRef.current.addEventListener('pause', () => {
        if (audioRef.current?.paused) setIsPlaying(false)
      })
      audioRef.current.addEventListener('play', () => setIsPlaying(true))
    }
    return audioRef.current
  }, [])

  const play = useCallback(async () => {
    const audio = initAudio()
    audio.currentTime = 0
    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }, [initAudio])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
  }, [])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsPlaying(false)
  }, [])

  return { isPlaying, play, stop, pause }
}
