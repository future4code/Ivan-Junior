import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends React.Component {
	state = {
      valorInputComentario: ""
	}

	onChangeComentario = (event) => {
        this.setState({
		    valorInputComentario: event.target.value
		})
		console.log(this.state.valorInputComentario)
	}
	
	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			
		</CommentContainer>
	}
}

