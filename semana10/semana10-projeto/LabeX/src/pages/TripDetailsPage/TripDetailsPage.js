import axios from "axios"
import { useEffect } from "react"
import { useHistory } from "react-router"
import { goToAdminHomePage } from "../../routes/condinator"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"

const TripDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        axios.get(`${BASE_URL}/trip/KBSCpATtS6iDreB4yShe`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log('Deu certo', response.data.trip)
        })
        .catch((error) => {
            console.log('Deu errado', error.response)
        })
    }, [])

    return (
        <div>
            TripDetailsPage

            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage