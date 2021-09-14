import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header'
import TarotCard from './components/TarotCard/TarotCard'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <TarotCard />
    </div>
  )
}

export default App
