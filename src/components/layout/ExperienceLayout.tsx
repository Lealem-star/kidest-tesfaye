import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { EXPERIENCE_PAGES } from '../../data/config'
import FloatingHearts from '../effects/FloatingHearts'
import RosePetals from '../effects/RosePetals'
import Sparkles from '../effects/Sparkles'
import CursorHearts from '../effects/CursorHearts'
import MusicButton from '../MusicButton'
import Footer from './Footer'
import PageTransition from './PageTransition'
import EasterEgg from '../EasterEgg'
import type { ReactNode } from 'react'

interface ExperienceLayoutProps {
  children: ReactNode
  isPlaying: boolean
  onMusicToggle: () => void
  onHeartClick: () => void
  onDismissEasterEgg: () => void
  easterEggRevealed: boolean
}

export default function ExperienceLayout({
  children,
  isPlaying,
  onMusicToggle,
  onHeartClick,
  onDismissEasterEgg,
  easterEggRevealed,
}: ExperienceLayoutProps) {
  const location = useLocation()
  const currentIndex = EXPERIENCE_PAGES.findIndex((p) => p.path === location.pathname)

  return (
    <div className="relative min-h-svh animated-gradient">
      <FloatingHearts count={10} />
      <RosePetals />
      <Sparkles />
      <CursorHearts />
      <MusicButton isPlaying={isPlaying} onToggle={onMusicToggle} />
      <EasterEgg revealed={easterEggRevealed} onHeartClick={onHeartClick} onDismiss={onDismissEasterEgg} />

      {/* Progress dots */}
      {currentIndex >= 0 && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {EXPERIENCE_PAGES.map((page, i) => (
            <Link key={page.path} to={page.path}>
              <motion.div
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
                whileHover={{ scale: 1.3 }}
              />
            </Link>
          ))}
        </div>
      )}

      <main className="relative z-10 px-4 py-20 md:py-24 max-w-6xl mx-auto">
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer />
    </div>
  )
}
