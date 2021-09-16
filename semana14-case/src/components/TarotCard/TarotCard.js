import { imageBackCard, imagesUrl } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { Card, Container, Footer, ImgContainer } from "./styledTarotCard"
import Header from "../Header/Header"
import { useState } from "react"
import ModalScreen from "../PopUpScreen/ModalScreen."


const TarotCard = () => {
    const getTarot = useRequestData([], "tarot.json")

    const [backCard, setBackCard] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const handleBackCard = () => {
        if (backCard === true) {
            return setBackCard(false)
        } else {
            setBackCard(true)
        }
    }

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const renderCard = getTarot?.cards?.map((card) => {
        return (
            <Card key={card.name}>
                <ImgContainer>
                    <img src={`${imagesUrl}${card.image}`} alt={"Imagem da Carta"} />
                </ImgContainer>

                <Footer>
                    <p>{card.name}</p>
                </Footer>
            </Card>
        )
    })

    const renderBackCard = getTarot?.cards?.map((card) => {
        return (
            <Card key={card.name} onClick={openModal}>
                <ImgContainer>
                    <img src={`${imageBackCard}`} alt={"Imagem da Carta"} />
                </ImgContainer>
            </Card>
        )
    })

    return (
        <div>
            <Header handleBackCard={handleBackCard} backCard={backCard} />
            <Container>
                {backCard ? renderCard : renderBackCard}
                <ModalScreen showModal={showModal} setShowModal={setShowModal} />
            </Container>
        </div>
    )
}

export default TarotCard