import { HeaderContainer } from "./styledHeader"


const Header = (props) => {

    return (
        <HeaderContainer>
            <h1>Tarot Club</h1>

            <button onClick={props.handleBackCard}>{props.backCard ? <p>Iniciar Jogo</p> : <p>Mostrar Cartas</p>} </button>
        </HeaderContainer>
    )
}

export default Header