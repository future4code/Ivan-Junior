import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno.js/CardPequeno';

import email from './img/email.png'
import endereco from './img/endereco.png'
import styled from 'styled-components'

const PequenoContainer = styled.div`
   display: flex;
   border: 1px solid black;
   padding: 20px;
   width: 40vw;
   height: 8vh;
`;

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/1118/1118921.png" 
          nome="Ivan Gomes" 
          descricao="Oi, eu sou o Ivan. Atualmente sou estudante na Labenu e estou fazendo o curso de Desenvolvimento Web Full Stack!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <PequenoContainer>
      <div className="page-section-small-container">
        <CardPequeno
          imagem={email}
          nome="astro@gmail.com"
          descricao="Rua Astro de Marte"
          endereco={endereco}
          />
      </div>
      </PequenoContainer>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
