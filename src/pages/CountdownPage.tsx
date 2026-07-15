import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import { APP_CONFIG } from '../data/config'
import SectionTitle from '../components/ui/SectionTitle'
import PageNav from '../components/layout/PageNav'

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-2xl p-4 md:p-6 text-center min-w-[80px] md:min-w-[100px]"
    >
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="block text-3xl md:text-5xl font-bold text-primary tabular-nums"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-dark/50 text-xs md:text-sm mt-1 block uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownPage() {
  const time = useCountdown(APP_CONFIG.countdownDate)

  return (
    <div>
      <SectionTitle title="Counting Every Second" subtitle="Until we're together again" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <TimeBlock value={time.days} label="Days" />
          <TimeBlock value={time.hours} label="Hours" />
          <TimeBlock value={time.minutes} label="Minutes" />
          <TimeBlock value={time.seconds} label="Seconds" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-script text-2xl md:text-3xl text-primary mt-10 text-center"
        >
          {time.isComplete
            ? 'We made it, my love ❤️'
            : 'Until I can finally hold you again ❤️'}
        </motion.p>
      </motion.div>

      <PageNav currentPath="/countdown" />
    </div>
  )
}
