import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { EXPERIENCE_PAGES } from '../../data/config'
import Button from '../ui/Button'

interface PageNavProps {
  currentPath: string
}

export default function PageNav({ currentPath }: PageNavProps) {
  const currentIndex = EXPERIENCE_PAGES.findIndex((p) => p.path === currentPath)
  const prev = currentIndex > 0 ? EXPERIENCE_PAGES[currentIndex - 1] : null
  const next = currentIndex < EXPERIENCE_PAGES.length - 1 ? EXPERIENCE_PAGES[currentIndex + 1] : null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex justify-between items-center mt-12 md:mt-16"
    >
      {prev ? (
        <Link to={prev.path}>
          <Button variant="secondary" size="sm">
            <FaArrowLeft className="inline mr-2" /> {prev.label}
          </Button>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.path}>
          <Button size="sm">
            {next.label} <FaArrowRight className="inline ml-2" />
          </Button>
        </Link>
      ) : (
        <FaHeart className="text-primary/30" />
      )}
    </motion.div>
  )
}
