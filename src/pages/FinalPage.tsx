import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import Lottie from 'lottie-react'
import { useConfetti } from '../hooks/useConfetti'
import FloatingHearts from '../components/effects/FloatingHearts'
import Button from '../components/ui/Button'

const heartAnimation = {
  v: '5.5.7',
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Heart',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Heart',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [80, 80, 100] },
            { t: 30, s: [120, 120, 100] },
            { t: 60, s: [80, 80, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  c: true,
                  v: [
                    [0, -20],
                    [-20, -40],
                    [-40, -20],
                    [-20, 10],
                    [0, 40],
                    [20, 10],
                    [40, -20],
                    [20, -40],
                  ],
                },
              },
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.914, 0.118, 0.388, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
}

export default function FinalPage() {
  const navigate = useNavigate()
  const { explosion, fireworks } = useConfetti()

  useEffect(() => {
    explosion()
    const timer = setTimeout(() => fireworks(), 1000)
    return () => clearTimeout(timer)
  }, [explosion, fireworks])

  const handleReplay = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animated-gradient overflow-hidden">
      <FloatingHearts count={30} />

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="w-32 h-32 mx-auto"
        >
          <Lottie animationData={heartAnimation} loop />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-script text-5xl md:text-7xl text-primary mt-4"
        >
          Happy Birthday My Love ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-dark/70 text-base md:text-lg mt-6 leading-relaxed italic max-w-md mx-auto"
        >
          "I may not always be beside you,
          <br />
          but every heartbeat belongs to you."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <Button size="lg" onClick={handleReplay}>
            <FaHeart className="inline mr-2" /> Replay
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
