import { Bio, ContainerImage, Title } from './styled'
import { SwipeCardContainer } from './styled'
import { ContainerBio } from './styled'
import Header from '../Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'


const SwipeCard = (props) => {

    const [profile, setProfile] = useState({})

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")

        .then((res) => {
            console.log(res.data)
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <div>
            <SwipeCardContainer>
                <Header goToMatchesPage={props.goToMatchesPage}/>

                <ContainerImage>
                    <img src={profile.photo} alt={"Imagem"} />
                </ContainerImage>

                <ContainerBio>
                    <Title>{profile.name}, {profile.age}</Title>
                    <Bio>{profile.bio}</Bio>
                </ContainerBio>

                <Footer />
            </SwipeCardContainer>
        </div>
    )
}

export default SwipeCard