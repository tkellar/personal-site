import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeContextProvider, theme } from 'context/theme.context'
import Home from 'Home'
import Projects from 'Projects/Projects'
import AboutMe from 'AboutMe/AboutMe'

function App() {
  return (
    <ThemeContextProvider value={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/aboutme'>
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </ThemeContextProvider>
  )
}

export default App
