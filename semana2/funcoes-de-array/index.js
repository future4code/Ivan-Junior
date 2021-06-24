/*------------------Exercícios de interpretação de código-----------------

1) a - Será impresso os elementos do array, o index de cada elemento e o próprio array.

2) a - Será impresso o nome de cada item do array: nome: ["Amanda Rangel", apelido: "Mandi"]

3) a - Será impresso os valores do apelido (item), o index de cada apelido e o array em si. Todos eles sendo diferentes de "Chijo":  
[{ nome: "Amanda Rangel", apelido: "Mandi" },0
    { nome: "Laís Petra", apelido: "Laura" },] 1
*/

// Exercício 1

//a
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const petNames = pets.map((item) => {
     return item.nome
 })

 console.log(petNames)

 //b
 const petRace = pets.filter((item) => {
     return item.raca === "Salsicha"
 })

 console.log(petRace)

 //c
const message = pets.filter((item) => {
    if(item.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
})

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a 

 const productsName = produtos.map((item) => {
     return item.nome
 })

console.log(productsName)

//b
  const productsDiscount = produtos.map((item) => {
      return {
        nome: item.nome,
        preco: item.preco * 0.05
      }
})

console.log(productsDiscount)

//c 
const drinks = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

console.log(drinks)

// d 
const word = produtos.filter((objeto) => {
    return objeto.nome.includes("Ypê")
})

console.log(word)

//e

const purchase = produtos.filter((anuncio) => {
    return anuncio.nome.includes("Ypê")
}).map((anuncio) => {
    return `Compre ${anuncio.nome} por ${anuncio.preco}`
})

console.log(purchase)