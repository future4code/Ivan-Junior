import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
   display: flex;
   border: 1px solid black;
   height: 9vh;
`
const Section = styled.section`
   display: flex;
   border: 1px solid black; 
   width: 20vw;
   height: 100vh;
   margin-right: 0 auto;
   
`

const Main = styled.main`
   display: flex;
   justify-content: center;
   align-items: center;
`

const ContainerBox = styled.div`
   display: flex;
   width: 70vh;
   height: 50vh;
   border: 1px solid black;
   justify-content: center;
   align-items: center;
`

const Box = styled.div`
   display: flex;
   border: 1px solid black;
   width: 17vw;
   height: 20vh;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   button {
       margin: 20px;
   }
`

const Footer = styled.footer`
   display: flex;
   height: 10vh;
   border: 1px solid black;
`


export default class CreatePlaylist extends React.Component {
    state= {
       name: ""
    }

    inputName = (event) => {
       this.setState({name: event.target.value})
    }

    createPlaylist = () => {
       const body = {
          name: this.state.name
       }

       axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
          headers: {
            Authorization: "ivan-gomes-lovelace"
          }
       })
       .then((res) => {
          alert('Playlist criada com sucesso, curta suas músicas! :)')
          this.setState({name: ""})
       })
       .catch((err) => {
          alert(err.response.data)
       })
    }
    

    render() {
        return(
      <div>
              <Header />
              <Section>
                 <button onClick={this.props.goToPlaylist}>Playlists</button>
              </Section>
              <Main>
              <ContainerBox>
                 {/* <h3>Pesquise sua Playlist</h3> */}
                 <Box>
                 <input placeholder={"Nome da playlist"}
                        value={this.state.name}
                        onChange={this.inputName}
                 />
                 <button onClick={this.createPlaylist}>Criar</button>
                 </Box>
              </ContainerBox>
              </Main>
              <Footer />
       </div>
        )
    }
}