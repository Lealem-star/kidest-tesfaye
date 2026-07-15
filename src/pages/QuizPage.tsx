import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { quizData } from '../data/quiz'
import { useConfetti } from '../hooks/useConfetti'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import PageNav from '../components/layout/PageNav'

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [shake, setShake] = useState(false)
  const [finished, setFinished] = useState(false)
  const { burst } = useConfetti()

  const question = quizData[currentQ]

  const handleAnswer = (index: number) => {
    if (selected !== null) return
    setSelected(index)

    if (index === question.correctIndex) {
      setScore((s) => s + 1)
      burst()
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }

    setTimeout(() => {
      if (currentQ < quizData.length - 1) {
        setCurrentQ((q) => q + 1)
        setSelected(null)
      } else {
        setFinished(true)
        if (score + (index === question.correctIndex ? 1 : 0) === quizData.length) {
          burst()
        }
      }
    }, 1500)
  }

  if (finished) {
    return (
      <div>
        <SectionTitle title="Quiz Complete!" />
        <GlassCard className="text-center max-w-md mx-auto">
          <p className="text-4xl font-bold text-primary mb-2">
            {score}/{quizData.length}
          </p>
          <p className="text-dark/70 mb-6">
            {score === quizData.length
              ? 'Perfect! You know our love perfectly 💕'
              : 'Every answer leads back to you, my love ❤️'}
          </p>
          <Link to="/finale">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 bg-primary text-white rounded-full cursor-pointer"
            >
              See Your Surprise ❤️
            </motion.span>
          </Link>
        </GlassCard>
      </div>
    )
  }

  return (
    <div>
      <SectionTitle
        title="How Well Do You Know Us?"
        subtitle={`Question ${currentQ + 1} of ${quizData.length}`}
      />

      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className={`max-w-lg mx-auto ${shake ? 'animate-shake' : ''}`}
      >
        <GlassCard>
          <h3 className="text-lg md:text-xl font-medium text-dark mb-6 text-center">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              let bg = 'hover:bg-primary/5'
              if (selected !== null) {
                if (index === question.correctIndex) bg = 'bg-green-100 border-green-300'
                else if (index === selected) bg = 'bg-red-100 border-red-300'
              }

              return (
                <motion.button
                  key={index}
                  whileHover={selected === null ? { scale: 1.02 } : {}}
                  whileTap={selected === null ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(index)}
                  disabled={selected !== null}
                  className={`w-full p-4 rounded-2xl border border-primary/10 text-left text-sm md:text-base transition-colors cursor-pointer ${bg}`}
                >
                  {option}
                </motion.button>
              )
            })}
          </div>
        </GlassCard>
      </motion.div>

      <PageNav currentPath="/quiz" />
    </div>
  )
}
