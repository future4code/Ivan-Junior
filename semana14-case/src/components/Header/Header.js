import { useState } from "react"
import { HeaderContainer } from "./styledHeader"


const Header = (props) => {

    // // const buttonText = () => {
    // //     if(props.backCard === true) {
    // //         return setLeftButtonText("Iniciar Jogo")
    // //     } else {
    // //         return setLeftButtonText("Mostrar Cartas")
    // //     }
    // // }

    // const [leftButtonText, setLeftButtonText] = useState()

    return (
        <HeaderContainer>
            <h2>Tarot Club</h2>

            <button onClick={props.handleBackCard}>{ props.backCard ? <p>Iniciar Jogo</p> : <p>Mostrar Cartas</p>}</button>
        </HeaderContainer>
    )
}

export default Header