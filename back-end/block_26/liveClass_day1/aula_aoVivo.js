// importa para o arquivo a biblioteca readline que instalei com - npm i readline-sync 
// o readline recebe/le inputs do usuario 
const readLine = require("readline-sync");

// rodando o "npm start" no terminal aparecerá cada uma dessas perguntas
// e atribuirá as constantes o valor dado a elas ao terminal.
function executaCalculo() {
	const a = readLine.questionInt("Digite o valor de a:");
	const b = readLine.questionInt("Digite o valor de b:");
	const c = readLine.questionInt("Digite o valor de c:");
// console.log(a, b, c);

	const delta = calculaDelta(a, b, c);

	if(delta < 0){
		console.log("Impossível fazer calculo de delta negativo");
		return;
	}

	const result = calculaX(a, b, delta);
	console.log(`Resultado: x1 = ${result.x1}; x2 = ${result.x2}`)
}

function calculaDelta(a, b, c) {
	return Math.pow(b, 2) - 4 * a * c;
};

function calculaX(a, b, delta) {
	const x1 = ((-b + Math.sqrt(delta)) / (2 * a));
	const x2 = ((-b + Math.sqrt(delta)) / (2 * a));

	return { x1, x2 }
};

executaCalculo();

// não estou certa de que o calculo está correto.
// o objetivo desse exercicio foi o Node.js