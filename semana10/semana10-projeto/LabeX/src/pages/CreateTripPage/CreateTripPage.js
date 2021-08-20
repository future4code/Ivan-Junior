import { ContainerButton, Form, Title } from "../LoginPage/styledLoginPage"
import { ContainerForm, ContainerLeft, ContainerRight, ContainerTripPage, Input, Select } from "./styledTripPage"
import { useHistory } from "react-router"
import { goToAdminHomePage } from "../../routes/condinator"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"
import useForm from "../../hooks/useForm"
import { planets } from "../../constants/planets"

const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })


    const createTrip = (event) => {
        event.preventDefault()
        cleanFields()
        console.log("Formulário enviado!", form)

        axios.post(`${BASE_URL}/trips`, form, {
            headers: {
                "Content-Type": "application/json",
                "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhidVRlSU9MbXdoZkI2NkFrMzVYIiwiZW1haWwiOiJpdmFuQGdtYWlsLmNvbS5iciIsImlhdCI6MTYyOTMzMjY5OH0.32IxI5FWSKaxkKJp7XOP56N2aVq8903D7uu3ucDAaaQ"
            }
        }) 
        .then(() => {
            alert("Viagem criada com sucesso!")
        })
        .catch(() => {
            alert("Ocorreu um problema, tente novamente! :(")
        })
    }

    return (
        <ContainerTripPage>
            <ContainerRight>
                <Title>
                    <p>LabeX</p>
                </Title>

                <ContainerForm>
                    <Form onSubmit={createTrip}>
                        <Input placeholder={"Nome"}
                            value={form.name}
                            name={"name"}
                            onChange={onChange}
                            pattern={"^.{5,}"}
                            title={"O nome deve ter no mínimo 5 caracteres"}
                            required
                        />

                        <Select placeholder={"Planeta"}
                                name={"planet"}
                                defaultValue={""}
                                onChange={onChange}
                                required
                        >
                            <option value={""}>Escolha um planeta</option>
                            {planets.map((planet) => {
                                return <option value={planet} key={planet}>{planet}</option>
                            })}
                        </Select>

                        <Input placeholder={"Data"}
                            value={form.date}
                            type={"date"}
                            name={"date"}
                            onChange={onChange}
                            required
                        />

                        <Input placeholder={"Descrição"}
                            value={form.description}
                            name={"description"}
                            onChange={onChange}
                            pattern={"^.{30,}"}
                            title={"A descrição deve ter no mínimo 30 caracteres"}
                            required
                        />

                        <Input placeholder={"Duração em dias"}
                            value={form.durationInDays}
                            type={"number"}
                            name={"durationInDays"}
                            onChange={onChange}
                            min={50}
                            required
                        />

                        <ContainerButton>
                            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                            <button>Criar</button>
                        </ContainerButton>
                    </Form>
                </ContainerForm>
            </ContainerRight>

            <ContainerLeft />
        </ContainerTripPage>
    )
}

export default CreateTripPage