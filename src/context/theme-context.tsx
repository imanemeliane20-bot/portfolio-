"use client";
import { createContext, useContext, useEffect } from "react"
import useLocalStorage from "use-local-storage"

 export type Theme =  "light" |"dark"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme : Theme) => void
}

const ThemeContext = createContext <ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme",theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }
  return context
}
