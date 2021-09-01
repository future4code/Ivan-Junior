import { ContainerButton, ContainerHeader, ContainerInput, ContainerTitle } from "./styledHeader"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"


const Header = () => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  // const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Logout" )

  const logout = () => {
    localStorage.removeItem("token")
  }


  const rightButtonAction = () => {
    if (token) {
      logout()
      goToLoginPage(history)
    } else {
        goToFeedPage(history)
    }
  }

  return (
    <ContainerHeader>
      <ContainerTitle>
        <p>LabEddit</p>
      </ContainerTitle>

      <ContainerInput>
        <TextField label="Pesquisar LabEddit" variant="filled" />
      </ContainerInput>

      <ContainerButton>
        <Button variant="outlined" color="primary" onClick={rightButtonAction}>
          <MeetingRoomIcon />
          <p>Logout</p>
        </Button>
      </ContainerButton>
    </ContainerHeader>
  )
}

export default Header