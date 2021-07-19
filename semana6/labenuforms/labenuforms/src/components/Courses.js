import React from 'react'

class Courses extends React.Component {
    render() {
        return (
            <div>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>
            <input type="text" />

            <p>6. Qual a unidade de ensino?</p>
            <input type="text" />

            <button>Próxima etapa</button>
          </div>
        )
    }
}

export default Courses