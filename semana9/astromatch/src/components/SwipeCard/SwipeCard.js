import { ImagemContainer, SwipeCardContainer } from './styled'
import Header from '../Header/Header'
import { ButtonContainer } from './styled'
import axios from 'axios'
import { useEffect } from 'react'



const SwipeCard = () => {


    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")

        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return(
        <div>
        <SwipeCardContainer>
            <Header />

            <ImagemContainer>
            </ImagemContainer>
            <ButtonContainer> 
                  <button>Dar match</button>
                  <button>Remover match</button>
             </ButtonContainer> 

        </SwipeCardContainer>

        </div>
    )
}

export default SwipeCard