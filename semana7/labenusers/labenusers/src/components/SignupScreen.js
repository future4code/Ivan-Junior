import axios from 'axios'
import React from 'react'

export default class SignupScreen extends React.Component {
    state = {
        name: "",
        email: ""
    }
    
    handleName = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    register = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

       const body = {
           name: this.state.name,
           email: this.state.email
       }

       axios.post(url, body, {
         headers: {
           Authorization: "ivan-gomes-lovelace"
         }
       })
       .then((res) => {
          alert("Usuário(a) cadastrado(a) com sucesso!")
          this.setState({name: "", email: ""})
       })
       .catch((err) => {
          alert(err.response.data)
       })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.goForList}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input placeholder={"Nome"}
                       value={this.state.name}
                       onChange={this.handleName}
                />
                <input placeholder={"E-mail"} 
                       value={this.state.email}
                       onChange={this.handleEmail}
                />
                <button onClick={this.register}>Cadastrar</button>
            </div>
        )
    }
}