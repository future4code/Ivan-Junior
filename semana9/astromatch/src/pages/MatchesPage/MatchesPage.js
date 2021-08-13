
import { SwipeCardPage } from "./styled"
import { HeaderContainer } from "../../components/Header/styled"

const MatchesPage = (props) => {
    return(
        <SwipeCardPage>
            <HeaderContainer>
            <p><strong>Astromatch</strong></p>
            <button onClick={props.goToSwipeCard}>Voltar</button>
            </HeaderContainer>
        
        </SwipeCardPage>
    )
}

export default MatchesPage