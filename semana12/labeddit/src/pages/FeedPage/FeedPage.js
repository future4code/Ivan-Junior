import FeedCard from "../../components/FeedCard/FeedCard"
import Header from "../../components/Header/Header"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { ContainerScreen } from "../../components/FeedCard/styledFeedCard"
import FeedPost from "../../components/FeedPost/FeedPost"

const FeedPage = () => {
    useProtectedPage()

    const posts = useRequestData([], `${BASE_URL}/posts`)


    const feedCard = posts.map((post) => {
        return (
            <FeedCard
                key={post.id}
                id={post.id}
                title={post.title}
                username={post.username}
                commentCount={post.commentCount}
                voteSum={post.voteSum}
                userVote={post.userVote}
                body={post.body}
            />
        )

    })

    return (
        <div>
            <Header />
            <FeedPost />
            <ContainerScreen>
                {feedCard}
            </ContainerScreen>
        </div>
    )
}

export default FeedPage