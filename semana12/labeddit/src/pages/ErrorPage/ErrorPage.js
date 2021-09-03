import Header from "../../components/Header/Header"
import { Container, ContainerText, ImageContainer, ItemsContainer } from "./styledError"
import error from "../../assets/error.png"

const ErrorPage = () => {
    return (
        <div>
            <Header />
            <Container>
                <ImageContainer>
                    <img src={error} alt={"Imagem de Erro"} />

                    <ContainerText>
                        <h2>Erro 404 - Página Não Encontrada :(</h2>
                    </ContainerText>
                </ImageContainer>
            </Container>
        </div>
    )
}

export default ErrorPage