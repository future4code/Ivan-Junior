import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostPage from "../pages/PostPage/PostPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/cadastro"}>
                    <SignUpPage />
                </Route>

                <Route exact path={"/feed"}>
                    <FeedPage />
                </Route>

                <Route exact path={"/create-post"}>
                    <CreatePostPage />
                </Route>

                <Route exact path={"/posts/:id"}>
                    <PostPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router