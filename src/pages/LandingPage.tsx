import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import FloatingHearts from '../components/effects/FloatingHearts'
import Sparkles from '../components/effects/Sparkles'
import RosePetals from '../components/effects/RosePetals'
import Button from '../components/ui/Button'
import MusicButton from '../components/MusicButton'
import { APP_CONFIG } from '../data/config'

interface LandingPageProps {
  isPlaying: boolean
  onMusicToggle: () => void
}

export default function LandingPage({ isPlaying, onMusicToggle }: LandingPageProps) {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-svh animated-gradient flex items-center justify-center overflow-hidden">
      <FloatingHearts count={20} />
      <RosePetals />
      <Sparkles />
      <MusicButton isPlaying={isPlaying} onToggle={onMusicToggle} />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaHeart className="text-primary text-7xl md:text-8xl mx-auto drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-primary/80 text-sm md:text-base tracking-[0.3em] uppercase mt-8 mb-2"
        >
          Happy Birthday
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-script text-5xl md:text-7xl lg:text-8xl text-primary leading-tight"
        >
          My Beautiful {APP_CONFIG.girlfriendName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-dark/60 text-base md:text-lg mt-6 italic"
        >
          "Every heartbeat of mine whispers your name."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-10"
        >
          <Button size="lg" onClick={() => navigate('/portrait')}>
            Open My Gift ❤️
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
