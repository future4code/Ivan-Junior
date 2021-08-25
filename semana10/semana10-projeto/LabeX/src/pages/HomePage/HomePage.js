import { Container, ButtonContainer, Button } from "./styledHomePage"
import { useHistory } from "react-router"
import { goToListTripsPage, goToLoginPage,  } from "../../routes/condinator"

const HomePage = () => {

    const history = useHistory()

    return (
        <Container>            
            <ButtonContainer>
                <Button onClick={() => goToListTripsPage(history)}>Ver Viagens</Button>
                <Button onClick={() => goToLoginPage(history)}>Área de Admin</Button>
            </ButtonContainer>
        </Container>
    )
}

export default HomePage