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
                  <img src={"https://images5.alphacoders.com/689/thumb-1920-689055.jpg"} alt={"Imagem"} />
            </ContainerLeft>
        </ContainerLoginPage>
    )
}


export default SignUpPage