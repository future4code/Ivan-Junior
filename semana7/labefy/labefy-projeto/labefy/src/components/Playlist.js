import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

   button {
       width: 4vw;
       height: 5vh;
   }
   
`

// const Container = styled.div`
//    display: grid;
//    width: 30vw;
//    height: 40vh;
//    grid-template-rows: 1fr 1fr 1fr;
//    grid-template-rows: 1fr 1fr 1fr;
//    margin: 20px;
//    justify-content: center;
//    align-items: center;
//    padding: 5vh;
//    gap: 20px;
// `

const CardPlaylist = styled.div`
   border: 1px solid black;
   width: 20vw;
   height: 20vh;
`


export default class Playlist extends React.Component {
    state = {
        playlist: []
    }
     
    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try {
            const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
                headers: {
                    Authorization: "ivan-gomes-lovelace"
                }
            })
            this.setstate({ playlists: res.data.result.list })
        } catch(err) {
            console.log(err.response.data)
        }
    }

    deletePlaylist = async (id) => {
        try {
            const res = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/${id}`, {
                headers: {
                    Authorization: "ivan-gomes-lovelace"
                }
            })
             alert("Playlist deletada com sucesso!", res)
             this.etAllPlaylists()

        } catch {
            alert("Ocorreu um problema, tente novamente!")
        }
    }

    render() {
        const userPlaylist = this.state.playlist.map((play) => {
            return (
                <CardPlaylist key={play.id}>
                    {play.name}
                    <button onClick={() => this.deletePlaylist(play.id)}>X</button>
                </CardPlaylist>
            )
        })

        return(
            <div>
               <Header />
               <Section>
                   <button onClick={this.props.goToCreatePlaylist}>Criar Playlist</button>
               </Section>
               {userPlaylist}
            </div>
        )
    }
}