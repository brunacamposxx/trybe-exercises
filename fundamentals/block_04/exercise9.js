 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 let contador = [];
 for(let index = 1; index <= 25; index += 1) {
   contador.push(index)
 }
 console.log(contador)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let divisao = 0
for(let index = 0; index < contador.length; index += 1){
	divisao = contador[index] / 2
	console.log(divisao)
}