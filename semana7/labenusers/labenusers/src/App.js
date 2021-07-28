import React from 'react'
import SignupScreen  from './components/SignupScreen'
import ScreenListUsers  from './components/ScreenListUsers'
// import axios from 'axios'

export default class App extends React.Component {
  state = {
    currentScreen: "cadastro"
  }

  choosesScreen = () => {
    switch (this.state.currentScreen) {
      case "cadastro":
        return <SignupScreen goForList={this.goForList}/>
      case "lista":
        return <ScreenListUsers goToRegister={this.goToRegister}/>
      default:
        return <div>Erro: Página não encontrada :(</div>
    }
  }

  goToRegister = () => {
    this.setState({currentScreen: "cadastro"})
  }

  goForList = () => {
    this.setState({currentScreen: "lista"})
  }

  render() {
    return (
      <div>
        {this.choosesScreen()}
      </div>
    );
  }
}
