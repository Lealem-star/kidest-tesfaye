import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { APP_CONFIG } from '../../data/config'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block"
      >
        <FaHeart className="text-primary text-xl" />
      </motion.div>
      <p className="font-script text-2xl text-primary mt-2">
        Made with love for {APP_CONFIG.girlfriendName}
      </p>
      <p className="text-dark/40 text-xs mt-2">
        Every line of code whispers your name ❤️
      </p>
    </motion.footer>
  )
}
