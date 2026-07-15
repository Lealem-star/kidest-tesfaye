import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaLock } from 'react-icons/fa'
import Button from './ui/Button'

interface PasswordScreenProps {
  onLogin: (password: string) => boolean
}

export default function PasswordScreen({ onLogin }: PasswordScreenProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = onLogin(password)
    if (!success) {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="min-h-svh flex items-center justify-center animated-gradient px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`glass-card rounded-3xl p-8 md:p-12 max-w-md w-full text-center ${shake ? 'animate-shake' : ''}`}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaLock className="text-primary text-4xl mx-auto mb-4" />
        </motion.div>
        <h2 className="font-script text-3xl text-primary mb-2">A Secret For You</h2>
        <p className="text-dark/60 text-sm mb-6">Enter the password to unlock your gift</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder="Enter password..."
            className="w-full px-5 py-3 rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm text-dark text-center outline-none focus:border-primary/50 transition-colors"
          />
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm"
            >
              That's not quite right, my love 💕
            </motion.p>
          )}
          <Button type="submit" size="lg" className="w-full">
            <FaHeart className="inline mr-2" /> Unlock My Heart
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
