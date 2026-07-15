import { motion } from 'framer-motion'
import { FaMusic, FaPause } from 'react-icons/fa'

interface MusicButtonProps {
  isPlaying: boolean
  onToggle: () => void
}

export default function MusicButton({ isPlaying, onToggle }: MusicButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center text-primary shadow-lg cursor-pointer"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
      >
        {isPlaying ? <FaPause size={20} /> : <FaMusic size={20} />}
      </motion.div>
    </motion.button>
  )
}
