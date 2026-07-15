import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from './hooks/useAuth'
import { useMusic } from './hooks/useMusic'
import { useEasterEgg } from './hooks/useEasterEgg'
import { APP_CONFIG } from './data/config'
import LoadingScreen from './components/LoadingScreen'
import PasswordScreen from './components/PasswordScreen'
import ExperienceLayout from './components/layout/ExperienceLayout'
import LandingPage from './pages/LandingPage'
import PortraitPage from './pages/PortraitPage'
import TimelinePage from './pages/TimelinePage'
import ReasonsPage from './pages/ReasonsPage'
import GalleryPage from './pages/GalleryPage'
import LoveLetterPage from './pages/LoveLetterPage'
import CountdownPage from './pages/CountdownPage'
import VersePage from './pages/VersePage'
import QuizPage from './pages/QuizPage'
import FinalPage from './pages/FinalPage'

function AppRoutes() {
  const { isAuthenticated, isLoading, login } = useAuth()
  const { isPlaying, toggle, start } = useMusic()
  const { revealed, handleHeartClick, dismiss } = useEasterEgg()

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    )
  }

  if (!isAuthenticated) {
    return <PasswordScreen onLogin={(pw) => login(pw, APP_CONFIG.password)} />
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage onStart={start} />} />

      <Route
        path="/portrait"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <PortraitPage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/story"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <TimelinePage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/reasons"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <ReasonsPage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <GalleryPage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/letter"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <LoveLetterPage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/countdown"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <CountdownPage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/verse"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <VersePage />
          </ExperienceLayout>
        }
      />
      <Route
        path="/quiz"
        element={
          <ExperienceLayout
            isPlaying={isPlaying}
            onMusicToggle={toggle}
            onHeartClick={handleHeartClick}
            onDismissEasterEgg={dismiss}
            easterEggRevealed={revealed}
          >
            <QuizPage />
          </ExperienceLayout>
        }
      />
      <Route path="/finale" element={<FinalPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
