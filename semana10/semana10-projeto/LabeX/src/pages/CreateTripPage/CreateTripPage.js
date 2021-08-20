import { ContainerButton, Title } from "../LoginPage/styledLoginPage"
import { ContainerForm, ContainerLeft, ContainerRight, ContainerTripPage, Input, Select } from "./styledTripPage"
import { useHistory } from "react-router"
import { goToAdminHomePage } from "../../routes/condinator"
import { useProtectedPage } from "../../hooks/useProtectedPage"

const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory() 
     
    

    return (
        <ContainerTripPage>
            <ContainerRight>
                <Title>
                    <p>LabeX</p>
                </Title>
                <ContainerForm>
                    <form>
                        <Input placeholder={"Nome"}
                            value={""}
                            type={"text"}
                        />

                        <Select placeholder={"Planeta"}>
                            <option value={""}>Marte</option>
                        </Select>

                        <Input placeholder={"Data"}
                               value={""}
                               type={"date"}
                               name={"date"}
                        />
                        
                        <Input placeholder={"Descrição"}
                               value={""}
                               type={"text"}
                               name={"date"}
                        />

                       <Input placeholder={"Duração em dias"}
                               value={""}
                               type={"number"}
                               name={"durationInDays"}
                        />

                    </form>

                    <ContainerButton>
                          <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                          <button>Criar</button>
                    </ContainerButton>
                </ContainerForm>
            </ContainerRight>
            
            <ContainerLeft />
        </ContainerTripPage>
    )
}

export default CreateTripPage