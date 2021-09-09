import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useParams } from "react-router"
import FeedCard from "../../components/FeedCard/FeedCard"



const PostPage = () => {
    useProtectedPage()
    
    const params = useParams()
    const postDetail = useRequestData([], `${BASE_URL}/posts`)



    return (
        <div>
            <Header />
        </div>
    )
}

export default PostPage