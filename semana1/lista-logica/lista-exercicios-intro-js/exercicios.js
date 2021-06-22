// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Insira a altura do seu retângulo.'))
  const largura = Number(prompt('Insira a largura do seu retângulo.'))
  console.log(altura * largura)
  return calculaAreaRetangulo
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Qual é o ano atual?'))
  const anoDeNascimento = Number(prompt('Qual o seu ano de nascimento?'))
  console.log(anoAtual - anoDeNascimento )
  return imprimeIdade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const calcular = peso / (altura * altura)
  console.log(calcular)
  return calcular
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  return imprimeInformacoesUsuario

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite sua primeira cor favorita')
  const cor2 = prompt('Digite sua segunda cor favorita')
  const cor3 = prompt('Digite sua terceira cor favorita')
  
  const cores = [cor1, cor2, cor3]
  console.log(cores)
  return imprimeTresCoresFavoritas
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const texto = string.toUpperCase()
  console.log(texto)
  return texto
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const resultadoDoEspetaculo = custo / valorIngresso
  console.log(resultadoDoEspetaculo)
  return resultadoDoEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const checarTamanhos = string1 >= string2
  return checarTamanhos
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const elemento = array[0]
  return elemento 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) { 
 const ultimoElemento = array[array.length -1]
 return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 const primeiroElemento = array[0] 
 const ultimoElemento = array[array.length -1]
 array [0] = ultimoElemento
 array[array.length -1] = primeiroElemento
 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 return string1.toLowerCase().includes(string2.toLowerCase())
}

// EXERCICIO 13
// EXERCÍCIO 14


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}