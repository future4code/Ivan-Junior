import { ContainerButton, ContainerHeader, ContainerInput, ContainerLogo } from "./styledHeader"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { useHistory } from "react-router-dom"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"
import logo from "../../assets/logo.png"
import IconButton from '@material-ui/core/IconButton'

const Header = () => {
  const history = useHistory()
  const token = localStorage.getItem("token")

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
      <ContainerLogo>
        <IconButton onClick={() => goToFeedPage(history)}>
          <img src={logo} alt={"Logo"} />

          <p>LabEddit</p>
        </IconButton>
      </ContainerLogo>

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