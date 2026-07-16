import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { useConfetti } from '../hooks/useConfetti'
import FloatingHearts from '../components/effects/FloatingHearts'
import Button from '../components/ui/Button'

export default function FinalPage() {
  const navigate = useNavigate()
  const { explosion, fireworks } = useConfetti()

  useEffect(() => {
    explosion()
    const timer = setTimeout(() => fireworks(), 1000)
    return () => clearTimeout(timer)
  }, [explosion, fireworks])

  const handleReplay = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animated-gradient overflow-hidden">
      <FloatingHearts count={30} />

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="relative w-32 h-32 mx-auto flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaHeart className="relative text-primary text-7xl drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-script text-5xl md:text-7xl text-primary mt-4"
        >
          Happy Birthday My Love ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-dark/70 text-base md:text-lg mt-6 leading-relaxed italic max-w-md mx-auto"
        >
          "I may not always be beside you,
          <br />
          but every heartbeat belongs to you."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <Button size="lg" onClick={handleReplay}>
            <FaHeart className="inline mr-2" /> Replay
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
