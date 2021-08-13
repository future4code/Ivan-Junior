import axios from "axios"
import { HeaderContainer } from "./styled"



const Header = (props) => {

    const clearProfile = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear", {
            headers: "application/json"
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <HeaderContainer>
            <p><strong>Astromatch</strong></p>
            <button onClick={props.goToMatchesPage}>Ir para matches</button>
            <button onClick={clearProfile}>Clear</button>
        </HeaderContainer>
    )
}

export default Header