import { ContainerButton, Title } from "../LoginPage/styledLoginPage"
import { ContainerForm, ContainerLeft, ContainerRight, ContainerTripPage, Input, Select } from "./styledTripPage"


const CreateTripPage = () => {
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
                          <button>Voltar</button>
                          <button>Entrar</button>
                    </ContainerButton>
                </ContainerForm>
            </ContainerRight>
            
            <ContainerLeft />
        </ContainerTripPage>
    )
}

export default CreateTripPage