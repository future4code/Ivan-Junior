import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',

      },
      {
        nomeUsuario:"narutinho",
        fotoUsuario: 'https://image.flaticon.com/icons/png/512/1120/1120972.png',
        fotoPost:'https://cdn.pixabay.com/photo/2020/08/19/15/31/huangpu-river-5501210_960_720.jpg',
      },
      {
        nomeUsuario:"ninja",
        fotoUsuario: 'https://image.flaticon.com/icons/png/512/1149/1149378.png',
        fotoPost:'https://cdn.pixabay.com/photo/2017/12/16/16/37/great-wall-3022907_960_720.jpg'
      }
    ]
  }


  render() {
    const postagemComponente = this.state.post.map((post) => {
      return (
        <Post 
          {...post}
        />
      )
    })
  
    return (
      <MainContainer>
        {postagemComponente}
      </MainContainer>
    );
  }
}

export default App;
