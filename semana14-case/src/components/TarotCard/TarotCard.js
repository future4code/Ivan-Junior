import { imagesUrl } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { Card, Container, Footer } from "./styledTarotCard"

const TarotCard = () => {
    const getTarot = useRequestData([], "tarot.json")

    const renderCard = getTarot?.cards?.map((card) => {
        return (
            <Card key={card.name}>
                <img src={`${imagesUrl}${card.image}`} alt={"Imagem da Carta"} />
                <Footer>
                    <p>{card.name}</p>
                </Footer>
            </Card>
        )
    })

    return (
        <Container>
            {renderCard}
        </Container>
    )
}

export default TarotCard