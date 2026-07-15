import { motion } from 'framer-motion'

export default function RosePetals() {
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 8 + Math.random() * 12,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.4,
            background: `linear-gradient(135deg, #FFB6C1, #E91E63)`,
            opacity: 0.4,
            borderRadius: '50% 0 50% 50%',
          }}
          initial={{ y: '-5vh', x: 0, rotate: 0 }}
          animate={{
            y: '105vh',
            x: [0, 30, -20, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
