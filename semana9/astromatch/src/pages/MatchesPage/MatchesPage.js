import { ContainerList, Img, MatchesHeader, Profile, SwipeCardPage } from "./styled"
import axios from "axios"
import { useEffect, useState } from "react"
import seta from "../../assets/img/seta.png"
import lixeira from "../../assets/img/lixeira.png"

const MatchesPage = (props) => {

    const [match, setMatch] = useState([])

    const getMatches = () => {

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan-lovelace/matches")

        .then((res) => {
            setMatch(res.data.matches)
        })
        .catch(() => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }

    const clearProfile = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan-lovelace/clear", {
            headers: "application/json"
        })
        .then(() => {
            alert("Os perfis foram exclúidos, retorne para escolher mais! :)")
        })
        .catch(() => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }

    useEffect(() => {
        getMatches()
     }, [getMatches])


    return(
        <SwipeCardPage>
            <MatchesHeader>
            <p><strong>Astromatch</strong></p>
            <button onClick={props.goToSwipeCard}><img src={seta} alt={"Ícone de voltar"}/></button>
            <button onClick={clearProfile}><img src={lixeira} alt={"ícone de lixeira"}/></button>
            </MatchesHeader>
        
            <ContainerList>
                {match.map((matches) => (
                    <Profile key={matches.name}>
                    <Img src={matches.photo} alt={"Foto de Perfil"} />
                    <p>{matches.name}</p>
                    </Profile>
                ))}
            </ContainerList>
            
        </SwipeCardPage>
    )
}

export default MatchesPage