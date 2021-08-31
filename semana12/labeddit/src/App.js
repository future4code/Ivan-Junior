import theme from "./constants/theme"
import Router from "./routes/Router"
import { ThemeProvider } from "@material-ui/styles"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #dae0e6;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App