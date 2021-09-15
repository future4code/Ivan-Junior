import { HeaderContainer } from "./styledHeader"


const Header = (props) => {


    return (
        <HeaderContainer>
            <h2>Tarot Club</h2>

            <button onClick={props.handleBackCard}>Iniciar Jogo</button>
        </HeaderContainer>
    )
}

export default Header