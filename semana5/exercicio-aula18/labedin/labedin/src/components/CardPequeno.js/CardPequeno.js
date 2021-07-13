import React from 'react'

const CardPequeno = (props) => {
    return (
        <div className="smallcard-container">
            <div>
            <img src={props.imagem} />
            <h4>Email:</h4>
            </div>
            
            <div>
            <h4>Endereço:</h4>
            <img src={props.endereco} />
            </div>
        
            <p>{props.nome}</p>
            <p>{props.descricao}</p>
        
      </div>
    
    
    )
}

export default CardPequeno;