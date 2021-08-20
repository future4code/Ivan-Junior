import { ContainerButton, ContainerInput, ContainerLeft, ContainerLoginPage, ContainerRight, Form, Input, Title } from "./styledLoginPage"
import { useHistory } from "react-router"
import { goToHomePage } from "../../routes/condinator"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import useForm from "../../hooks/useForm"

const LoginPage = () => {
    const { form, onChange } = useForm({email: "", password: ""})
    
    const history = useHistory()

    const OnSubmitLogin = (event) => {
        event.preventDefault()
        console.log(form)

        axios.post(`${BASE_URL}/login`, form)

            .then((response) => {
                console.log('Deu certo', response)
                localStorage.setItem("token", response.data.token)
                history.push("/admin/trips/list")
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
                <Form onSubmit={OnSubmitLogin}>
                    <ContainerInput>
                        <Input
                            type={"email"}
                            placeholder={"Endereço de e-mail"}
                            onChange={onChange}
                            required
                            value={form.email}
                            name={"email"}
                        />

                        <Input
                            type={"password"}
                            placeholder={"Digite sua senha"}
                            onChange={onChange}
                            required
                            value={form.password}
                            name={"password"}
                        />
                    </ContainerInput>

                    <ContainerButton>
                        <button onClick={() => goToHomePage(history)}>Voltar</button>
                        <button>Entrar</button>
                    </ContainerButton>
                </Form>
            </ContainerRight>


            <ContainerLeft />
        </ContainerLoginPage>
    )
}

export default LoginPage