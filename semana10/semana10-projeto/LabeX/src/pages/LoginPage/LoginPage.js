import { ContainerButton, ContainerInput, ContainerLeft, ContainerLoginPage, ContainerRight, Input, Title } from "./styledLoginPage"
import { useHistory } from "react-router"
import { goToHomePage } from "../../routes/condinator"
import { useState } from "react"
import axios from "axios"

const LoginPage = () => {

    const [email, SetEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const onChangeEmail = (event) => {
       SetEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const OnSubmitLogin = () => {
       console.log(email, password)

       const body = {
           email: email,
           password: password
       }

       axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ivan/login", body)

       .then((response) => {
          console.log('Deu certo', response)
          localStorage.setItem("token", response.data.token)
          history.push("/")
       })
       .catch((error) => {
          console.log('Deu errado', error.response)
       })
    } 


    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Title>
                    <p>LabeX</p>
                </Title>

                <ContainerInput>
                    <Input
                        type="email"
                        placeholder={"Endereço de e-mail"}
                        onChange={onChangeEmail}
                    />

                    <Input
                        type="password"
                        placeholder={"Digite sua senha"}
                        onChange={onChangePassword}
                    />
                </ContainerInput>

                <ContainerButton>
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button onClick={OnSubmitLogin}>Entrar</button>
                </ContainerButton>
            </ContainerRight>


            <ContainerLeft />
        </ContainerLoginPage>
    )
}

export default LoginPage