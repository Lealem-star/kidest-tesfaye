import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="font-script text-4xl md:text-6xl text-primary mb-3">{title}</h2>
      {subtitle && (
        <p className="text-dark/70 text-sm md:text-base max-w-md mx-auto">{subtitle}</p>
      )}
      <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
    </motion.div>
  )
}
