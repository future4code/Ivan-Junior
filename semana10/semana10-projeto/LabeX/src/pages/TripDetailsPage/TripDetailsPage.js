import { useHistory } from "react-router"
import { goToAdminHomePage } from "../../routes/condinator"

const TripDetailsPage = () => {

    const history = useHistory()

    return (
        <div>
            TripDetailsPage

            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage