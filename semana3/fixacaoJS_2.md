## Entrega Exercício de Fixação

function calculaPrecoTotal(quantidade) {
 let preco1 = 1.30
 let preco2 = 1
 
 let total = quantidade 
 
 if(quantidade < 12) {
   total * preco1
 } else if(quantidade > 12) {
   total * preco2
 }
 return total
} 