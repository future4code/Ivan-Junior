// 1) a - Podemos acessar utilizando o process.argv

/* - b
const name = process.argv[2]
const age = process.argv[3]
const newAge = Number(process.argv[3]) + 7

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge} anos.`) */

// 2) - 
const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

switch (operation) {
    case "add":
        firstNumber + secondNumber
        break;
    case "sub":
         firstNumber - secondNumber
        break;
    case "mult":
         firstNumber * secondNumber
        break;
    case "div":
         firstNumber / secondNumber
        break;
    default:
        console.log("Ocorreu um erro!")
}