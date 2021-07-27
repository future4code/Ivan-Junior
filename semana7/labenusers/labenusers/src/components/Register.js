import React from 'react'
import styled from 'styled-components'

const Body = styled.body`
  * {
      margin: 0 auto;
      padding: 0;
  }
`


const Box = styled.div`
  display: flex;
  border: 1px solid black;
  width: 30vw;
  height: 40vh;
  justify-content: center;
  flex-direction: column;
`

export class Register extends React.Component {
    render() {
        return (
            <div>
                <button>Ir para o registro</button>
            <Body>
                <Box>
                   <form>
                   <label for="name">Nome:</label>
                   <input type="text" />

                   <label for="email">Email:</label>
                   <input type="email" />
                   </form>

                   <button>Enviar</button>
                </Box>
            </Body>
            </div>
        )
    }
}