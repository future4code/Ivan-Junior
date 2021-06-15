//------------------------QUESTÃO 1-----------------------
/*
   - O b será impresso primeiro como 10, porque o b será lido e executado primeiro. O valor do b mudou na linha 6, então o a será impresso como 10 e o b como 5. 
 */

//------------------------QUESTÃO 2-----------------------

/*
   - Por causa da mudança de nomes das variáveis, o a será impresso como 10, o do b 10 porque o c mudou o nome da variável para "a" que é igual a 10 e o "b " mudou o nome para "c" que por ter recebido o valor do a, também será 10. No final, o valor de a, b e c serão impressos como 10.
*/

//------------------------QUESTÃO 3-----------------------

/*
   - O nome da variável p: horasDeTrabalho
   - O nome da variável t: valorPorHoras
*/

//------------------------EXERCÍCIO DE ESCRITA-----------------------

//------------------------QUESTÃO 1-----------------------
/*
const nome = prompt('Qual é o seu nome?')
const idade = prompt('Qual é a sua idade?')

console.log('nome:', typeof nome)
console.log('idade:', typeof idade)
console.log('Olá', nome, 'você tem', idade, 'anos.',)

// - O valor resultou em undefined porque não foi atribuído um valor para a variável. 

// Com a atribuição de valores usando o prompt, as variáveis resultaram do tipo strings.

*/

// ------------------------QUESTÃO 2-----------------------

/*
const primeiraPergunta = "Sim"
const segundaPergunta = "Não"
const terceiraPergunta = "Sim"

console.log('Você dormiu bem hoje?', primeiraPergunta)
console.log('Você faltou a aula da Labenu hoje?', segundaPergunta)
console.log('Hoje é um dia frio?', terceiraPergunta)

*/

//------------------------QUESTÃO 3-----------------------

let a = 10 
let b = 25
let c = 10

a = b 
a = c
b = a

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10