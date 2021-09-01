import { Form, Input, ContainerButton } from "../LoginPage/styledLogin"
import TextField from '@material-ui/core/TextField'
import React from "react"
import Button from '@material-ui/core/Button'
import { ContainerInputSign } from "./styledSignUp"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { goToLoginPage } from "../../routes/coordinator"
import { signUp } from "../../services/user"


const SignUpForm = () => {

    const [form, onChange, clear] = useForm({ username: "", email: "", passdword: "" })

    const history = useHistory()

    const inputProps = {
        step: 300,
        pattern: "^.{10,}",
        title: "O nome deve ter no mínimo 10 caracteres"
    }

    const testeProps = {
        step: 300,
        pattern: "^.{4,}",
        title: "O nome deve ter no mínimo 4 caracteres"
    }

    const onSubmitForm = (event) => {
       event.preventDefault()
       signUp(form, clear, history)
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <ContainerInputSign>
                <Input>
                    <TextField 
                    label={"Nome de usuário"} 
                    type={"text"} 
                    name={"username"}
                    variant={"outlined"}
                    onChange={onChange} 
                    value={form.username}
                    testeProps={testeProps}
                    required
                    />
                </Input>

                <Input>
                    <TextField 
                     label={"Email"}
                     type={"email"}
                     variant={"outlined"}
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
                    inputProps={inputProps}
                    required 
                    />
                </Input>
            </ContainerInputSign>

            <ContainerButton>
                <Button variant="contained" color="primary" type={"submit"} >
                    Cadastrar
                </Button>

                <Button variant="text" color="primary" onClick={() => goToLoginPage(history)}>
                    Voltar para Login :)
                </Button>
            </ContainerButton>
        </Form>
    )
}

export default SignUpForm