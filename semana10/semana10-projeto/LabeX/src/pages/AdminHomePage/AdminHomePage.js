import { ContainerLogo, ContainerMenu, ContainerScreen, Menu, SideBar } from "./styledHome"
import { useHistory } from "react-router"
import { goToCreateTripPage, goToHomePage, goToLoginPage } from "../../routes/condinator"
import { useProtectedPage } from "../../hooks/useProtectedPage"

const AdminHomePage = () => {
    useProtectedPage()
    const history = useHistory()

    return (
        <ContainerScreen>
            <SideBar>
                <ContainerLogo>
                    <p>LabeX</p>
                </ContainerLogo>

                <ContainerMenu>
                    <Menu onClick={() => goToCreateTripPage(history)}>
                        Criar Viagem
                    </Menu>

                    <Menu onClick={() => goToHomePage(history)}>
                        Voltar
                    </Menu>

                    <Menu onClick={() => goToLoginPage(history)}>
                        Logout
                    </Menu>
                </ContainerMenu>
            </SideBar>
        </ContainerScreen>
    )
       
}
export default AdminHomePage