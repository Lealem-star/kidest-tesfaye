import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { APP_CONFIG } from '../data/config'

interface EasterEggProps {
  revealed: boolean
  onHeartClick: () => void
  onDismiss: () => void
}

export default function EasterEgg({ revealed, onHeartClick, onDismiss }: EasterEggProps) {
  return (
    <>
      <motion.button
        onClick={onHeartClick}
        className="fixed top-6 right-6 z-50 text-primary/40 hover:text-primary transition-colors cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Hidden heart"
      >
        <FaHeart size={16} />
      </motion.button>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
            onClick={onDismiss}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-lg mx-4 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaHeart className="text-primary text-5xl mx-auto mb-4" />
              </motion.div>
              <h2 className="font-script text-4xl md:text-5xl text-primary">
                I Love You Forever ❤️
              </h2>
              <p className="text-dark/60 mt-3 text-sm">
                {APP_CONFIG.girlfriendName}, you are my everything
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
