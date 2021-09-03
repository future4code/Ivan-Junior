import { FormPost} from "./styledFeedPost"
import profile from "../../assets/profile.png"
import Button from '@material-ui/core/Button'
import useForm from "../../hooks/useForm"
import { createPost } from "../../services/user"


const FeedPost = () => {

    const [form, onChange] = useForm({title: "", body: ""})
    const [textarea] = useForm("")

    const onCreatePost = (event) => {
        event.preventDefault()
        createPost(form)
    }

    return (
        <FormPost onSubmit={onCreatePost}>
            <img src={profile} alt={"Ícone de coruja"} />

            <textarea name={"body"} textarea={textarea} value={form.title}/>

            <Button variant="contained" color="primary" type={"submit"}>
                Postar
            </Button>
        </FormPost>
    )
}

export default FeedPost