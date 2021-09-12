// para importar o pacote readline-sync rodar o comando:
// npm i readline-sync 
// o readline recebe/le inputs do usuario 
const readLine = require("readline-sync");

// rodando o "npm start" no terminal aparecerá cada uma dessas perguntas
// e atribuirá as constantes o valor dado a elas ao terminal.
let peso = readLine.questionFloat("Qual seu peso? (em kg) ");
let altura = readLine.questionInt("Qual sua altura? (em cm) ");

console.log(`valor de peso:${peso}; valor de altura: ${altura};`);
const IMC = (peso / Math.pow(altura / 100, 2)).toFixed(2);
console.log(`Seu IMC é: ${IMC}`);

if (IMC < 18.5){
	console.log("Abaixo do peso (magreza)");
} else if (IMC < 24.9){
	console.log("Peso normal");
} else if (IMC < 29.9){
	console.log("Acima do peso (sobrepeso)");
} else if (IMC < 34.9){
	console.log("Obesidade grau I");
} else if (IMC < 39.9){
	console.log("Obesidade grau II");
} else if (IMC >= 40.0){
	console.log("Obesidade graus III e IV");
}

