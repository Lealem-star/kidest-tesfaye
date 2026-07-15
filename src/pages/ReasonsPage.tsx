import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { reasonsData } from '../data/reasons'
import SectionTitle from '../components/ui/SectionTitle'
import PageNav from '../components/layout/PageNav'

function FlipCard({ reason, index }: { reason: string; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.05 }}
      className="flip-card h-40 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`flip-card-inner relative w-full h-full ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="flip-card-front absolute inset-0 glass-card rounded-2xl flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaHeart className="text-primary text-3xl" />
          </motion.div>
          <span className="absolute bottom-3 text-primary/40 text-xs">#{index + 1}</span>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 glass-card rounded-2xl flex items-center justify-center p-4">
          <p className="text-dark text-sm text-center leading-relaxed font-medium">
            {reason}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ReasonsPage() {
  return (
    <div>
      <SectionTitle
        title="30 Reasons Why I Love You"
        subtitle="Click or hover each card to reveal a reason"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {reasonsData.map((reason, index) => (
          <FlipCard key={index} reason={reason} index={index} />
        ))}
      </div>

      <PageNav currentPath="/reasons" />
    </div>
  )
}
