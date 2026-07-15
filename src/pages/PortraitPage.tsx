import { motion } from 'framer-motion'
import { APP_CONFIG } from '../data/config'
import SectionTitle from '../components/ui/SectionTitle'
import PageNav from '../components/layout/PageNav'

export default function PortraitPage() {
  return (
    <div>
      <SectionTitle
        title={`My Beautiful ${APP_CONFIG.girlfriendName}`}
        subtitle="The face that owns my heart"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="glow-border rounded-3xl p-1 max-w-md w-full">
          <motion.img
            src={APP_CONFIG.portraitImage}
            alt={`Portrait of ${APP_CONFIG.girlfriendName}`}
            className="w-full rounded-3xl object-cover aspect-3/4 shadow-2xl shadow-primary/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-lg text-center"
        >
          <p className="font-script text-2xl md:text-3xl text-primary leading-relaxed">
            "Every time you smile,
            <br />
            my whole world smiles with you."
          </p>
        </motion.blockquote>
      </motion.div>

      <PageNav currentPath="/portrait" />
    </div>
  )
}
