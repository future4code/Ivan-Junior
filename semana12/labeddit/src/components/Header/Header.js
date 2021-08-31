import { ContainerButton, ContainerHeader, ContainerInput, ContainerTitle } from "./styledHeader"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerTitle>
        <p>LabEddit</p>
      </ContainerTitle>

      <ContainerInput>
        <TextField label="Pesquisar LabEddit" variant="filled" />
      </ContainerInput>

      <ContainerButton>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </ContainerButton>
    </ContainerHeader>
  )
}

export default Header