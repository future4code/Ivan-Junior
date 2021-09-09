export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToFeedPage = (history) => {
    history.push("/feed")
}

export const goToCreatePostPage = (history) => {
    history.push("/create-post")
}

export const goToPostPage = (history, id) => {
    history.push(`/posts/${id}`)
}