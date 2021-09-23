import { createGlobalStyle } from 'styled-components'
import TarotCard from './components/TarotCard/TarotCard'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <TarotCard />
    </div>
  )
}

export default App
