import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// import { FaHeart } from 'react-icons/fa'
import { timelineData } from '../data/timeline'
import { APP_CONFIG } from '../data/config'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import PageNav from '../components/layout/PageNav'

interface TimelinePageProps {
  onEnter: () => void
}

export default function TimelinePage({ onEnter }: TimelinePageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    onEnter()
  }, [onEnter])

  return (
    <div>
      <SectionTitle
        title="Our Love Story"
        subtitle={`Every chapter of us, ${APP_CONFIG.girlfriendName}`}
      />

      <div ref={containerRef} className="relative max-w-2xl mx-auto py-4">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary/10" />

        <motion.div
          className="absolute left-6 md:left-8 top-0 w-0.5 bg-linear-to-b from-primary via-secondary to-accent origin-top"
          style={{ height: lineHeight }}
        />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
            className="relative pl-16 md:pl-20 mb-10 last:mb-0"
          >
            <motion.div
              className="absolute left-4 md:left-6 top-7 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 ring-4 ring-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
            >
              {/* <FaHeart className="text-white text-[9px]" /> */}
            </motion.div>

            <GlassCard delay={index * 0.04} className="hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                  {item.date}
                </span>
                <span className="text-primary/30 text-xs">•</span>
                <span className="text-primary/40 text-xs font-medium">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-2">
                {item.title}
              </h3>
              <p className="text-dark/70 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <PageNav currentPath="/story" />
    </div>
  )
}
