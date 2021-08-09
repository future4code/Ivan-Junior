import React from 'react'
import CreatePlaylist from './components/CreatePlaylist'
import Playlist from './components/Playlist'

export default class App extends React.Component {
  state = {
    currentScreen: "create"
  }
  

  changeScreen = () => {
    switch (this.state.currentScreen) {
      case "create":
        return <CreatePlaylist goToPlaylist={this.goToPlaylist} />
      case "playlist":
        return <Playlist goToCreatePlaylist={this.goToCreatePlaylist} />
      default: 
        return <div>Página não encontrada, tente novamente!</div>
    }
  }

  goToCreatePlaylist = () => {
    this.setState({currentScreen: "create"})
  }

  goToPlaylist = () => {
    this.setState({currentScreen: "playlist"})
  }

  render() {
    return (
      <div>
        {this.changeScreen()}
      </div>
    );
  }
}