import Header from "../../components/Header/Header"
import useProtectedPage from "../../hooks/useProtectedPage"
import { ContainerCreate, ContainerPost, FormPost, ImgContainer, Input, ContainerTextArea, ContainerButton } from "./styledCreate"
import lablogo from "../../assets/lablogo.png"
import Button from '@material-ui/core/Button'
import useForm from "../../hooks/useForm"
import { createPost } from "../../services/user"
import { goToFeedPage } from "../../routes/coordinator"
import { useHistory } from "react-router"

const CreatePostPage = () => {
    useProtectedPage()

    const history = useHistory()

    const [form, onChange] = useForm({ title: "", body: "" })

    const onCreatePost = () => {
        goToFeedPage(history)
        createPost(form)
    }

    return (
        <div>
            <Header />
            <ContainerPost>
                <ContainerCreate>
                    <FormPost onSubmit={onCreatePost}>
                        <ImgContainer>
                            <img src={lablogo} alt={"Ícone de coruja"} />
                        </ImgContainer>

                        <Input>
                            <input type={"text"} name={"title"} onChange={onChange} value={form.title} placeholder={"Escreva o título do seu post"} />
                        </Input>

                        <ContainerTextArea>
                            <textarea name={"body"} onChange={onChange} value={form.body} />
                        </ContainerTextArea>

                        <ContainerButton>
                            <Button variant="contained" color="primary" type={"submit"}>
                                Postar
                            </Button>
                        </ContainerButton>
                    </FormPost>
                </ContainerCreate>
            </ContainerPost>
        </div>
    )
}

export default CreatePostPage