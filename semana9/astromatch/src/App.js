import SwipeCard from "./components/SwipeCard/SwipeCard"
import MatchesPage from './pages/MatchesPage/MatchesPage'
import { createGlobalStyle } from 'styled-components'
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }

   body {
       display: flex;
       justify-content: center;
       margin: 100px;
       background-color: grey;
       background-image: linear-gradient(to top, #FD5068, transparent);
       @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
       font-family: 'Roboto', sans-serif;
   }
`

const App = () => {
    
    const [renderPage, setRenderPage] = useState("swipeCard")

    const goToSwipeCard = () => {
        setRenderPage("swipeCard")
    }

    const goToMatchesPage = () => {
        setRenderPage("matchesPage")
        console.log("Entrei na goToMatchesPage")
    }
    
    const choosePage = () => {
        switch(renderPage) {
          case "swipeCard":
              return <SwipeCard  goToMatchesPage={goToMatchesPage}/>
          case "matchesPage":
              return <MatchesPage goToSwipeCard={goToSwipeCard}/>
          default:
              return <SwipeCard  goToSwipeCard={goToSwipeCard}/>
        }
    }


    return (
        <div>
            <GlobalStyle />
            {choosePage()}
        </div>
    )
}

export default App