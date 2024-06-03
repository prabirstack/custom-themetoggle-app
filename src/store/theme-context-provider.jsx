import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevThem) => {
      return prevThem === 'light' ? 'dark' : 'light'
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
