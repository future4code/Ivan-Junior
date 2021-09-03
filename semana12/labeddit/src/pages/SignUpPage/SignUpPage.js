import { ContainerLoginPage, ContainerRight, ContainerLeft, Logo, LoginText } from "../LoginPage/styledLogin"
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import lablogo from "../../assets/lablogo.png"


const SignUpPage = () => {

    useUnprotectedPage()
    
    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Logo>
                <img src={lablogo} alt={"Logo"} />
                    <LoginText>LabEddit</LoginText>
                </Logo>

                <SignUpForm />
            </ContainerRight>

            <ContainerLeft>
                  <img src={"https://affixtheme.com/html/xmee/demo/img/figure/bg2-l.jpg"} alt={"Imagem"} />
            </ContainerLeft>
        </ContainerLoginPage>
    )
}


export default SignUpPage