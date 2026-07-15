import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

interface CursorHeart {
  id: number
  x: number
  y: number
}

export default function CursorHearts() {
  const [hearts, setHearts] = useState<CursorHeart[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) {
        const heart: CursorHeart = {
          id: idRef.current++,
          x: e.clientX,
          y: e.clientY,
        }
        setHearts((prev) => [...prev.slice(-10), heart])
        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== heart.id))
        }, 1000)
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-9998">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-primary/50 text-sm -translate-x-1/2 -translate-y-1/2"
            style={{ left: heart.x, top: heart.y }}
            initial={{ opacity: 0.7, scale: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
