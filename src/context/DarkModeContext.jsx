import { createContext, useContext, useEffect } from "react"
import useLocalStorageState from "../hooks/useLocalStoragesTate"

const DarkModeContext = createContext()

//provider
export function DarkModeProvier({ Children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches // true, false
  )

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark-mode") &&
        document.documentElement.classList.remove("light-mode")
      : //else
        document.documentElement.classList.add("light-mode") &&
        document.documentElement.classList.remove("dark-mode")
  }, [isDarkMode])

  return (
    <DarkModeContext.provider value={(isDarkMode, toggleDarkMode)}>
      {Children}
    </DarkModeContext.provider>
  )
}

// custom hook for useDarkMode
export function useDarkMode() {
  const context = useContext(DarkModeContext)

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvier")

  return context
}

//// Use Context ////
// 1_createContext()
// 2_definition provider
// 3_passed_Value to provider
// 4_customHook for access
