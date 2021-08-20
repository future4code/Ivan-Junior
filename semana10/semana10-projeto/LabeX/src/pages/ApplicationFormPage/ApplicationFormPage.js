import { ContainerButton, Form, Title } from "../LoginPage/styledLoginPage"
import { ContainerApplicationForm, ContainerForm, ContainerLeft, ContainerRight, Input, Select } from "./styledFormPage"
import { useHistory } from "react-router"
import { goToListTripsPage } from "../../routes/condinator"
import  useForm  from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"

const ApplicationFormPage = () => {

    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })
    
    const applyToTrip = (event) => {
       event.preventDefault()
       cleanFields()

       console.log("Formulário enviado!", form)
       
       axios.post(`${BASE_URL}/id/apply`, {
           headers: {
               "Content-Type": "application/json"
           }
       })

    }

    return (
        <ContainerApplicationForm>
            <ContainerRight>
                <Title>
                    <p>LabeX</p>
                </Title>

                <Form onSubmit={applyToTrip}>
                    <ContainerForm>
                        <Select>
                            <option value="">Escolha uma viagem</option>
                        </Select>

                        <Input placeholder={"Nome"}
                            name={"name"}
                            onChange={onChange}
                            value={form.name}
                            pattern={"^.{3,}"}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            required
                        />

                        <Input placeholder={"Idade"}
                            name={"age"}
                            value={form.age}
                            type={"number"}
                            onChange={onChange}
                            min={18}
                            required
                        />

                        <Input placeholder={"Texto de Candidatura"}
                            name={"applicationText"}
                            value={form.applicationText}
                            onChange={onChange}
                            required
                        />

                        <Input placeholder={"Profissão"}
                            name={"profession"}
                            value={form.profession}
                            onChange={onChange}
                            pattern={"^.{10,}"}
                            title={"A profissão deve ter no mínimo 10 caracteres"}
                            required
                        />

                        <Select placeholder={"País"} name={"country"}>
                            <option value={""}>Escolha um país</option>
                        </Select>

                        <ContainerButton>
                            <button onClick={() => goToListTripsPage(history)}>Voltar</button>
                            <button>Enviar</button>
                        </ContainerButton>
                    </ContainerForm>
                </Form>

            </ContainerRight>
            <ContainerLeft />

        </ContainerApplicationForm>
    )
}

export default ApplicationFormPage