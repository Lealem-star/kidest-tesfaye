import { useState, useRef, useCallback } from 'react'
import { APP_CONFIG } from '../data/config'

export function useMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(APP_CONFIG.musicUrl)
      audioRef.current.loop = true
      audioRef.current.volume = 0.4
    }
    return audioRef.current
  }, [])

  const toggle = useCallback(async () => {
    const audio = initAudio()
    setHasInteracted(true)
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }
  }, [initAudio, isPlaying])

  const start = useCallback(async () => {
    const audio = initAudio()
    setHasInteracted(true)
    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      /* autoplay blocked until user gesture */
    }
  }, [initAudio])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
  }, [])

  return { isPlaying, hasInteracted, toggle, start, stop }
}
