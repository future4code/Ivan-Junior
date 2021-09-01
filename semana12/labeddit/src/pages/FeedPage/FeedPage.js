import FeedCard from "../../components/FeedCard/FeedCard"
import Header from "../../components/Header/Header"
import useProtectedPage from "../../hooks/useProtectedPage"

const FeedPage = () => {
    useProtectedPage()

    return (
        <div>
           <Header />
           <FeedCard />
        </div>
    )
}

export default FeedPage