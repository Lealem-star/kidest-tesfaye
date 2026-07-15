import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

interface FloatingHeartsProps {
  count?: number
}

export default function FloatingHearts({ count = 15 }: FloatingHeartsProps) {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    size: 12 + Math.random() * 16,
    opacity: 0.15 + Math.random() * 0.35,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{ left: heart.left, fontSize: heart.size, opacity: heart.opacity }}
          initial={{ y: '110vh', rotate: 0 }}
          animate={{ y: '-10vh', rotate: 360 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <FaHeart />
        </motion.div>
      ))}
    </div>
  )
}
