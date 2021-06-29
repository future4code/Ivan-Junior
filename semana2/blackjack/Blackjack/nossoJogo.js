
   if (confirm("Quer iniciar uma nova rodada?")) {
      console.log("Boas vindas ao jogo de Blackjack") 
    } else {
      console.log("O jogo acabou.")
   }


   let userFirstLetter = comprarCarta()
   let secondUserLetter = comprarCarta()
   let firstComputerLetter = comprarCarta()
   let secondComputerLetter = comprarCarta()


   const carta = comprarCarta()
   
   console.log(carta.texto)
   console.log(carta.valor)

   const calculateScore = () => {
      let userScore = userFirstLetter.valor + secondUserLetter.valor
      let computerScore = firstComputerLetter.valor + secondComputerLetter.valor
      
      if(console.log( `Usuário - cartas: ${userFirstLetter.texto} ${secondUserLetter.texto} -  ${userScore}`) !== userScore) {
        console.log( `Computador - cartas: ${firstComputerLetter.texto} ${secondComputerLetter.texto} -  ${computerScore}`) 
      }

      if(userScore > computerScore) {
         console.log('O usuário ganhou!')
      } else if(computerScore > userScore) {
         console.log('O computador ganhou!')
      } else if(userScore === computerScore) {
         console.log('Empate!')
      }
   }
      calculateScore()