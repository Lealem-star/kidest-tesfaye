import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

      <div
        ref={containerRef}
        className="relative max-w-3xl mx-auto py-4 px-6 sm:px-10 md:px-14"
      >
        <div className="absolute left-8 sm:left-10 md:left-12 top-0 bottom-0 w-0.5 bg-primary/10" />

        <motion.div
          className="absolute left-8 sm:left-10 md:left-12 top-0 w-0.5 bg-linear-to-b from-primary via-secondary to-accent origin-top"
          style={{ height: lineHeight }}
        />

        {timelineData.map((item, index) => {
          const isPoem = item.id === 'whatsnext'

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
              className="relative pl-10 sm:pl-12 md:pl-14 mb-10 last:mb-0"
            >
              <motion.div
                className="absolute left-6 sm:left-8 md:left-10 top-[4.25rem] w-2.5 h-2.5 rounded-full bg-primary shadow-md shadow-primary/30 ring-4 ring-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              />

              <GlassCard
                delay={index * 0.04}
                className="hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500 px-4 sm:px-8 md:px-10"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                    {item.date}
                  </span>
                  <span className="text-primary/30 text-xs">•</span>
                  <span className="text-primary/40 text-xs font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4 text-center">
                  {item.title}
                </h3>

                <p
                  className={`text-dark/70 text-sm md:text-base leading-relaxed whitespace-pre-line ${
                    isPoem
                      ? 'text-center mx-auto max-w-xl'
                      : 'text-left sm:text-center mx-auto max-w-2xl px-2 sm:px-4'
                  }`}
                >
                  {item.description.trim()}
                </p>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>

      <PageNav currentPath="/story" />
    </div>
  )
}
