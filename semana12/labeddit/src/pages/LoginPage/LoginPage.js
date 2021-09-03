import { ContainerLoginPage, ContainerRight, ContainerLeft, Logo, LoginText } from "./styledLogin"
import React from "react"
import LoginForm from "./LoginForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import lablogo from "../../assets/lablogo.png"

const LoginPage = () => {
    useUnprotectedPage()

    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Logo>
                    <img src={lablogo} alt={"Logo"} />
                    <LoginText>LabEddit</LoginText>
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