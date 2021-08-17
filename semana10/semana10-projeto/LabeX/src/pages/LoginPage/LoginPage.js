import { ContainerButton, ContainerInput, ContainerLeft, ContainerLoginPage, ContainerRight, Input, Title } from "./styledLoginPage"
import { useHistory } from "react-router"
import { goToHomePage } from "../../routes/condinator"


const LoginPage = () => {

    const history = useHistory()

    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Title>
                   <p>LabeX</p>
                </Title>

                <ContainerInput>
                     <Input type="email" placeholder={"Endereço de e-mail"}/>
                     <Input type="password" placeholder={"Digite sua senha"}/>
                </ContainerInput>
                 
                <ContainerButton>
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button>Entrar</button>
                </ContainerButton>
            </ContainerRight>


            <ContainerLeft/>
        </ContainerLoginPage>
    )
}

export default LoginPage