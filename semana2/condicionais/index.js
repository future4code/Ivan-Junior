/*-----------------------Exercícios de interpretação de código---------------------

1) a - O código pede ao usuário que digite um número e a condição if executa uma condição recebendo o número que o usuário digitou, fazendo o resto da divisão por dois é igual a zero.

b - Se for um número par, o usuário passa no teste.

c - Se for um número ímpar, o usuário não passa no teste.

2) a - O código serve para fazer comparações iguais e executar as intruções.

b - Será executado: preco = 2.25

c - Se o break for retirado, o programa continua a execução para a próxima instrução dentro do switch. Como a instrução parou no defaul, será impresso as instruções dele:
preco = 5

3) a - A primeira linha está perguntando um número ao usuário.

b - Se o usuário digitar o número 10, a mensagem será: "Esse número passou no teste". Se for -10, ocorrerá um erro.

c - Sim, ocorreu um erro porque a variável foi declarada dentro do escopo da condicional, não sendo possível acessá-la por fora. 

*/

/* Exercício 1 

const userAge = Number(prompt("Digite a sua idade"))

if (userAge >= 18) {
    console.log("Você pode dirigir")

} else {
    console.log("Você não pode dirigir")
}

*/

/* Exercício 2

const userShift = prompt("Qual turno do dia você estuda? Se for mautino, digite M, vespertino V e noturno N.")

if(userShift === "M") {
    console.log("Bom dia!")
} else if(userShift === "V") {
    console.log("Boa tarde!") 
} else if(userShift === "N") {
    console.log("Boa noite!")
}

*/

/* Exercício 3

let checkShift = prompt("Qual turno do dia você estuda? Se for mautino, digite M, vespertino V e noturno N.")
switch (checkShift) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
       break
    default:
        console.log('Turno não encontrado.')
}
*/

// Exercício 4

const goToTheCinema = () => {
    const userCheck = prompt('Insira o gênero de filme você vai assistir.')
    const checkPrice = Number(prompt('Qual o preço do ingresso?'))

    if (userCheck === 'fantasia' && checkPrice <= 15) {
        console.log('Bom filme!') 
    } else {
        console.log('Escolha outro filme :(')
    }
}

goToTheCinema()