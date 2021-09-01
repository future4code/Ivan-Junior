import { ContainerLoginPage, ContainerRight, ContainerLeft, Logo } from "./styledLogin"
import React from "react"
import LoginForm from "./LoginForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = () => {
    useUnprotectedPage()

    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Logo>
                    <p>LabEddit</p>
                </Logo>

                <LoginForm />
            </ContainerRight>

            <ContainerLeft>
                <img src={"https://affixtheme.com/html/xmee/demo/img/figure/bg2-l.jpg"} alt={"Imagem"} />
            </ContainerLeft>
        </ContainerLoginPage>
    )
}

export default LoginPage