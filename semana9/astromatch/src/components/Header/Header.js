// import axios from "axios"
import { HeaderContainer } from "./styled"
import perfil from '../../assets/img/perfil.png'


const Header = (props) => {

    return (
        <HeaderContainer>
            <p><strong>Astromatch</strong></p>
            <button onClick={props.goToMatchesPage}><img src={perfil} alt={"ícone de perfil"}/></button>
        </HeaderContainer>
    )
}

export default Header