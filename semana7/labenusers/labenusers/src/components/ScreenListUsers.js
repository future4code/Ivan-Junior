import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
   border: 1px solid black;
   padding: 10px;
   margin: 10px;
   width: 30vw;
   display: flex;
   justify-content: space-between;
`


export default class ScreenListUsers extends React.Component {
    state= {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }
    
    getAllUsers = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "ivan-gomes-lovelace"
                }
            })

            this.setState({users: res.data})
        } catch (err) {
            alert("Ocorreu um problema, tente novamente!")
        }
    }

    deleteUser = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        
        try {
          const res = await axios.delete(url, {
              headers: {
                  Authorization: "ivan-gomes-lovelace"
              }
          })
           alert("Usuário deletado com sucesso!", res)
           this.getAllUsers()

        } catch {
             alert("Ocorreu um erro, tente novamente!")
        }
    }
 
    render() {
        const usersList = this.state.users.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deleteUser(user.id)}>X</button>
            </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.goToRegister}>Ir para Cadastro</button>
                <h2>Lista de Uusários</h2>
                {usersList}
            </div>
        )
    }
}