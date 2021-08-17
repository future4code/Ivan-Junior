import { Bio, ButtonContainer, ContainerImage, Title } from './styled'
import { SwipeCardContainer } from './styled'
import { ContainerBio } from './styled'
import Header from '../Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'



const SwipeCard = (props) => {

    const [profile, setProfile] = useState({})

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan-lovelace/person")

            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch(() => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const choosePerson = (choice) => {

        const body = {
            id: profile.id,
            choice: choice
        }

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan-lovelace/choose-person", body)

            .then(() => {
                getProfileToChoose()
            })
            .catch(() => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }

    const chooseProfileYes = () => {
        choosePerson(true)
    }

    const chooseProfileNo = () => {
        choosePerson(false)
    }

    return (
        <div>
            <SwipeCardContainer>
                <Header goToMatchesPage={props.goToMatchesPage} />

                <ContainerImage>
                    <img src={profile.photo} alt={"Imagem"} />
                </ContainerImage>

                <ContainerBio>
                    <Title>{profile.name}, {profile.age}</Title>
                    <Bio>{profile.bio}</Bio>
                </ContainerBio>

                <ButtonContainer>
                    <button onClick={chooseProfileYes}>❤️</button>
                    <button onClick={chooseProfileNo}>❌</button>
                </ButtonContainer>

            </SwipeCardContainer>
        </div>
    )
}

export default SwipeCard