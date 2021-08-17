import { ContainerButton, Title } from "../LoginPage/styledLoginPage"
import { ContainerApplicationForm, ContainerForm, ContainerLeft, ContainerRight, Input, Select } from "./styledFormPage"


const ApplicationFormPage = () => {
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
                            <button>Voltar</button>
                            <button>Entrar</button>
                        </ContainerButton>
                    </ContainerForm>
                </ContainerRight>
                <ContainerLeft/>

        </ContainerApplicationForm>
    )
}

export default ApplicationFormPage