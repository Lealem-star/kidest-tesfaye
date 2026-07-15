import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaBook } from 'react-icons/fa'
import { versesData } from '../data/verses'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import PageNav from '../components/layout/PageNav'

export default function VersePage() {
  const verse = useMemo(
    () => versesData[Math.floor(Math.random() * versesData.length)],
    [],
  )

  return (
    <div>
      <SectionTitle title="Daily Verse" subtitle="A blessing for you today" />

      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <GlassCard className="text-center relative overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <FaBook className="text-primary/30 text-4xl mx-auto mb-6" />

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-dark/80 text-base md:text-lg leading-relaxed italic mb-6"
          >
            "{verse.text}"
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-primary font-semibold"
          >
            — {verse.reference}
          </motion.p>
        </GlassCard>
      </motion.div>

      <PageNav currentPath="/verse" />
    </div>
  )
}
