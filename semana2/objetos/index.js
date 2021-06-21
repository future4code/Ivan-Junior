/*-----------------------Exercícios de interpretação de código-------------------

1) a - console.log(filme.elenco[0]) -> "Matheus Nachtergaele"
       console.log(filme.elenco[filme.elenco.length - 1]) -> "Virginia Cavendish"
       console.log(filme.transmissoesHoje[2]) -> canal: "Globo", horario: "14h"

2) a - console.log(cachorro) -> nome: "Juca", 
	idade: 3, 
	raca: "SRD"
    ----------------------------------------
    console.log(gato) 
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
    ------------------------------------------
    console.log(tartaruga)
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"


3) a - false e undefined.
   b - O console retornou undefined porque não tinha a propriedade "altura" no objeto.

*/

// -------------------Exercícios de escrita de código----------------

// Exercício 1

const people = {
    name: "Amanda",
    nicknames: ["Amandinha", "Mandinha", "Mandi"],
    talking: () => {
        console.log(`Eu sou ${people.name}, mas pode me chamar de: ${people.nicknames[0]}, ${people.nicknames[1]} ou ${people.nicknames[2]}`)
    }
}
people.talking()

//b
const newPerson = {
    ...people,
    nicknames: ["Ama", "Mandy", "Dinha"],
    talking: () => {
        console.log(`Eu sou ${newPerson.name}, mas pode me chamar de: ${newPerson.nicknames[0]}, ${newPerson.nicknames[1]} ou ${newPerson.nicknames[2]}`)
    }
}

newPerson.talking()

// Exercício 2 - a

const userInformation = {
    name: "Jackson",
    age: 21,
    profession: "Engenheiro",
}

//b
function list() {
    console.log([userInformation.name, userInformation.name.length,userInformation.age, userInformation.profession,userInformation.profession.length])
}

list()

// Exercício 3

var cart = []

const firstFruit = {
    name: "Pêra",
    availability: true
}

const secondFruit = {
    name: "Melancia",
    availability: true
}

const thirdFruit = {
    name: "Maçã",
    availability: true
}

function putInCart() {
   cart.push(firstFruit, secondFruit, thirdFruit)
   console.log(cart)
}

putInCart()

// DESAFIO (Exercício 3)

function auxiliaryStock() {
    return secondFruit.availability = !true
}

auxiliaryStock()

/// DESAFIO 1----------------------------------------------------

function userData() {
    const firstQuestion = prompt('Qual é o seu nome?')
    const secondQuestion = Number(prompt('Insira sua idade'))
    const thirdQuestion = prompt('QUal é a sua profissão?')
    
    console.log({firstQuestion, secondQuestion, thirdQuestion})
}

userData()

// 2
function films() {
    const firstFilm = {
        name: 'Interestelar',
        launch: 2014
    }
    const secondFilm = {
        name: 'A Origem',
        launch: 2010
    }
    console.log('O primeiro filme foi lançado antes do segundo?', firstFilm.launch >= secondFilm.launch)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo?', firstFilm.launch === secondFilm.launch)
}

films()

//3 


