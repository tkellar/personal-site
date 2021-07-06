import React from 'react'

export const theme = {
  light: '#fff',
  primary: '#387d7a',
  primary_shade1: '#2c6461',
  secondary: '#d4cfc6',
  secondary_shade1: '#a9a59e',
  accent: ''
}

const ThemeContext = React.createContext(theme)

export const ThemeContextProvider = ThemeContext.Provider
export default ThemeContext
