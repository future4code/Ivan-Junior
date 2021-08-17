import { ContainerLogo, ContainerMenu, ContainerScreen, Menu, SideBar } from "./styledHome"



const AdminHomePage = () => {
    return (
        <ContainerScreen>
            <SideBar>
                <ContainerLogo>
                    <p>LabeX</p>
                </ContainerLogo>

                <ContainerMenu>
                    <Menu>
                        Criar Viagem
                    </Menu>

                    <Menu>
                        Voltar
                    </Menu>

                    <Menu>
                        Logout
                    </Menu>
                </ContainerMenu>
            </SideBar>
        </ContainerScreen>
    )
       
}
export default AdminHomePage