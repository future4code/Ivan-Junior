import { ContainerLoginPage, ContainerRight, ContainerLeft, Form, ContainerInput, Input, ContainerButton, Logo, } from "./styledLogin"
import TextField from '@material-ui/core/TextField'
import React from "react"
import Button from '@material-ui/core/Button'

const LoginPage = () => {


    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Logo>
                    <p>LabEddit</p>
                </Logo>

                <Form>
                    <ContainerInput>
                        <Input>
                            <TextField label="Digite seu e-mail" type="email" variant="outlined" />
                        </Input>

                        <Input>
                            <TextField label="Digite sua senha" type="password" variant="outlined" />
                        </Input>

                    </ContainerInput>

                    <ContainerButton>
                        <Button variant="contained" color="primary">
                            Entrar
                        </Button>

                        <Button variant="contained" color="primary">
                            Cadastrar
                        </Button>
                    </ContainerButton>
                </Form>
            </ContainerRight>

            <ContainerLeft>
                  <img src={"https://affixtheme.com/html/xmee/demo/img/figure/bg2-l.jpg"} alt={"Imagem"} />
            </ContainerLeft>
        </ContainerLoginPage>
    )
}

export default LoginPage