import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { loveLetterText } from '../data/loveLetter'
import SectionTitle from '../components/ui/SectionTitle'
import PageNav from '../components/layout/PageNav'

export default function LoveLetterPage() {
  return (
    <div>
      <SectionTitle title="A Letter From My Heart" subtitle="Words I wish I could whisper in your ear" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="paper-card rounded-3xl p-8 md:p-12 relative">
          <div className="absolute top-4 right-4 text-primary/20 font-script text-6xl select-none">
            ❤️
          </div>

          <div className="text-dark/80 text-sm md:text-base leading-relaxed font-light min-h-[300px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(25)
                  .typeString(loveLetterText.replace(/\n/g, '<br/>'))
                  .start()
              }}
              options={{
                cursor: '|',
                autoStart: false,
                loop: false,
                wrapperClassName: 'typewriter-text',
              }}
            />
          </div>
        </div>
      </motion.div>

      <PageNav currentPath="/letter" />
    </div>
  )
}
