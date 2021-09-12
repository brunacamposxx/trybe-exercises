// para importar o pacote readline-sync rodar o comando:
// npm i readline-sync 
// o readline recebe/le inputs do usuario 
const readLine = require("readline-sync");

// rodando o "npm start" no terminal aparecerá cada uma dessas perguntas
// e atribuirá as constantes o valor dado a elas ao terminal.
let distancia = readLine.questionInt("Qual a distância percorrida em metros? ");
let tempo = readLine.questionInt("Qual o tempo gasto em segundos? ");

console.log(`A distancia é ${distancia}m e o tempo é de ${tempo}s`);

const velocidadeMedia = (distancia / tempo).toFixed(2);
console.log(`A velocidade média é: ${velocidadeMedia} m/s`)