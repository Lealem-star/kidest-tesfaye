import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { APP_CONFIG } from '../data/config'

const sparkles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${10 + Math.random() * 80}%`,
  top: `${10 + Math.random() * 80}%`,
  delay: Math.random() * 2,
  size: 3 + Math.random() * 4,
}))

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center animated-gradient overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-accent"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2 + Math.random(), delay: s.delay, repeat: Infinity }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <FaHeart className="relative text-primary text-6xl md:text-7xl drop-shadow-lg" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-script text-3xl md:text-5xl text-primary mt-8"
        >
          {APP_CONFIG.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-dark/50 text-sm mt-3 tracking-widest uppercase"
        >
          Preparing something special
        </motion.p>

        <motion.div
          className="mt-10 w-56 h-1 bg-primary/15 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="h-full bg-linear-to-r from-primary via-secondary to-primary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
