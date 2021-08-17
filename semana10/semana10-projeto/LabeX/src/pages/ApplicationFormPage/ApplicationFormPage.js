import { ContainerButton, Title } from "../LoginPage/styledLoginPage"
import { ContainerApplicationForm, ContainerForm, ContainerLeft, ContainerRight, Input, Select } from "./styledFormPage"
import { useHistory } from "react-router"
import { goToListTripsPage } from "../../routes/condinator"

const ApplicationFormPage = () => {

    const history = useHistory()

    return (
        <ContainerApplicationForm>
                <ContainerRight>
                       <Title>
                           <p>LabeX</p>
                       </Title>
                    <ContainerForm>
                        <Select>
                            <option value="">Escolha uma viagem</option>
                        </Select>

                        <Input placeholder={"Nome"}
                               name={"name"}
                               value={""}
                        />

                        <Input placeholder={"Idade"}
                               name={"age"}
                               value={""}
                               type={"number"}
                        />

                        <Input placeholder={"Texto de Candidatura"}
                               name={"applicationText"}
                               value={""}
                               type={"text"}
                        />

                        <Input placeholder={"Profissão"}
                               name={"profession"}
                               value={""}
                               type={"text"}
                        />

                        <Select placeholder={"País"} name={"country"}> 
                             <option value={""}>Escolha um país</option>
                        </Select>

                        <ContainerButton>
                            <button onClick={() => goToListTripsPage(history)}>Voltar</button>
                            <button>Enviar</button>
                        </ContainerButton>
                    </ContainerForm>
                </ContainerRight>
                <ContainerLeft/>

        </ContainerApplicationForm>
    )
}

export default ApplicationFormPage