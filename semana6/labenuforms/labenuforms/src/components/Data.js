import React from 'react'

class Data extends React.Component {
    render() {
        return (
            <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <p>1. Qual o seu nome?</p>
            <input type="text" />
            <p>2. Qual sua idade?</p>
            <input type="text" />

            <p>3. Qual seu email?</p>
            <input type="text" />

            <p>4. Qual sua escolaridade?</p>

            <select>
               <option>Ensino médio incompleto</option>
               <option>Ensino médio completo</option>
               <option>Ensino superior incompleto</option>
               <option>Ensino superior completo</option>
            </select>

      <button>Próxima etapa</button>
      </div>
        )
    }
}

export default Data