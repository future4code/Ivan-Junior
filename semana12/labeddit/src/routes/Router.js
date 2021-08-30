import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostPage from "../pages/PostPage/PostPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path={"/login"}>
                <LoginPage />
            </Route>

            <Route exact path={"/cadastro"}>
                <SignUpPage />
            </Route>

            <Route exact path={"/posts"}>
                <PostPage />
            </Route>

            <Route exact path={"/"}>
                <FeedPage />
            </Route>

            <Route exact path={"/error"}>
                <ErrorPage />
            </Route>
        </Switch>
    </BrowserRouter>

}

export default Router