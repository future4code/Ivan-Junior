import { useHistory } from "react-router"
import { goToApplicationFormPage, goToHomePage } from "../../routes/condinator"

const ListTripPage = () => {
    
    const history = useHistory()

    return (
        <div>
            ListTripPage
           <button onClick={() => goToHomePage(history)}>Voltar</button>
           <button onClick={() => goToApplicationFormPage(history)}>Increver-se</button>
        </div>
    )
}

export default ListTripPage 