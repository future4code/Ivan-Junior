import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"


export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/login`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
    })

    .catch((err) => {
        alert(err.response.data)
    })
}