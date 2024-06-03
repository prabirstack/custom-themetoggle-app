import Page from './components/Page'
import ThemeContextProvider from './store/theme-context-provider'

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  )
}

export default App
