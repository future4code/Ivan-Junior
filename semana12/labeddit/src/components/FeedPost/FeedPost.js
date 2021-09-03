import { PostContainer } from "./styledFeedPost"
import lablogo from "../../assets/lablogo.png"
import { goToCreatePostPage } from "../../routes/coordinator"
import TextField from '@material-ui/core/TextField'
import { useHistory } from "react-router"

const FeedPost = () => {
    const history = useHistory()

    return (
        <PostContainer onClick={() => goToCreatePostPage(history)}>
            <img src={lablogo} alt={"Ícone de coruja"} />

            <TextField label="Crie um Post" variant="filled" />
        </PostContainer>
    )
}

export default FeedPost