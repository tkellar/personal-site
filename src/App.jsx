import './App.css'
import { ThemeContextProvider, theme } from './context/theme.context'
import Home from './Home'

function App() {
  return (
    <ThemeContextProvider value={theme}>
      <Home />
    </ThemeContextProvider>
  )
}

export default App
