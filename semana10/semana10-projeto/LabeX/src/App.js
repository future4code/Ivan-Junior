import { createGlobalStyle } from 'styled-components'
import Router from "./routes/Router"

const GlobalStyle = createGlobalStyle`
   * {
     margin: 0;
     padding: 0
     
   }
`

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  )
}

export default App