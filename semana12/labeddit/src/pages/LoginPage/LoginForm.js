import { ContainerLoginPage, Form, ContainerInput, Input, ContainerButton} from "./styledLogin"
import TextField from '@material-ui/core/TextField'
import React from "react"
import Button from '@material-ui/core/Button'
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { goToSignUpPage } from "../../routes/coordinator"
import { login } from "../../services/user"


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return (
        <ContainerLoginPage>
            <Form onSubmit={onSubmitForm}>
                <ContainerInput>
                    <Input>
                        <TextField
                            label={"Email"}
                            type={"email"}
                            variant="outlined"
                            name={"email"}
                            onChange={onChange}
                            value={form.email}
                            required
                        />
                    </Input>

                    <Input>
                        <TextField
                            label={"Senha"}
                            type={"password"}
                            variant={"outlined"}
                            name={"password"}
                            onChange={onChange}
                            value={form.password}
                            required
                        />
                    </Input>

                </ContainerInput>

                <ContainerButton>
                    <Button variant={"contained"} color={"primary"} type={"submit"}>
                        Entrar
                    </Button>

                    <Button variant={"text"} color={"primary"} onClick={() => goToSignUpPage(history)}>
                        NÃO POSSUI LOGIN? CADASTRE-SE
                    </Button>
                </ContainerButton>
            </Form>
        </ContainerLoginPage>
    )
}

export default LoginForm