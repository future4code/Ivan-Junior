/* ------------------------Exercícios de interpretação de código-------------------

  1) O retorno será de: a. undefined.

    - O retorno será de: b. null.
    - O retorno será de: c. 11
    - O retorno será um erro, porque o array não foi declarado na variável.
    - O retorno será um erro, porque o Javascript não suporta arrays com índices nomeados e o array não foi declarado.
    - O retorno será um erro, porque o array foi definido incorretamente. 
*/

/*

   2) O valor será impresso como: "SUBI NUM ÔNIBUS EM MIRROCOS 27"



   const frase = prompt("Digite uma frase")

   console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

*/

// ------------------------Exercícios de interpretação de código-------------------

   /*  Questão 1

   const userName = prompt("Digite seu nome de usuário.")
   const userEmail = prompt("Digite seu e-mail.")

   console.log(`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o) ${userName}.`)

*/

/*
   Questão 2

   const userFood = prompt("Qual é a sua comida preferidas?")
   const favoriteFoods = ["pizza", "macarrão", "pastel", "tortaDeFrango", "boloDeChocolate"]

   favoriteFoods.splice(2, 1, userFood)

   console.log(favoriteFoods)
   console.log("Essas são as minhas comidas preferidas:", favoriteFoods)

*/

const toDoList = []

const firstUserTask = prompt("Digite a primeira tarefa do dia.")
const secondUserTask = prompt("Digite a segunda tarefa do dia.")
const thirdUserTask = prompt("Digite a terceira tarefa do dia.")

toDoList.push(firstUserTask, secondUserTask, thirdUserTask)

console.log(toDoList)

const userPerformedTask = Number(prompt("Digite o número de uma das 3 tarefas que você realizou no dia.", ))

toDoList.splice(-1)

console.log("Tarefa concluída:", toDoList[userPerformedTask -1])
