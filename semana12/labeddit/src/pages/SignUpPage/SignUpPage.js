import { ContainerLoginPage, ContainerRight, ContainerLeft, Logo } from "../LoginPage/styledLogin"
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SignUpPage = () => {

    useUnprotectedPage()
    
    return (
        <ContainerLoginPage>
            <ContainerRight>
                <Logo>
                    <p>LabEddit</p>
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