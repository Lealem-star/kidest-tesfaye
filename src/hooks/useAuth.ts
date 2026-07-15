import { useState, useEffect } from 'react'

const AUTH_KEY = 'kidest-auth'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY)
    if (stored === 'true') setIsAuthenticated(true)
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const login = (password: string, correctPassword: string): boolean => {
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      sessionStorage.setItem(AUTH_KEY, 'true')
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  return { isAuthenticated, isLoading, login }
}
