
## npm init;
criar pasta e dentro dela rodar o comando NPM INIT;

package name: (nome-da-pasta) ou digitar o nome do package;
version: 0.1.0; ler sobre versionamento semantico;
 description: Scripts de exercicio;
 entry point: index.js // onde será iniciado;
 test command: // ainda nao vimos tests;
 git repository: // ver como fazer automatico;
 keywords: Node, exercicios, intro // palavras chaves para ficar facil de encontrar;
 author: Bruna Campos 92brunacampos@gmail.com;
 license: (ISC) // licenças de software. ler depois;

 preview; dar YES;

 criar index.js  -  arquivo de entrada;



## para executar:
 NODE INDEX.JS (dentro da pasta);



 package.json;
 resumo das informações dadas quando iniciou o node;
 pode ser alterado;



 assim, para rodar o programa poderá ser usado o comando "node index.js" OU "npm start" pois esta instrução pede para startar com o node index.js;
 ou seja, quando rodar o npm start, o node procura no package.json quem é o "start" e executa o que está escrito nele. 

 para executar um comando que não é uma palavra reservada, no terminal, escrever: NPM RUN MEU-SCRIPT; para palavras reservadas o RUN não é necessário, como no caso acima "NPM START"; 

 "scripts": {
	"start": "node index.js",   // npm start;
	"meu-script": "node index.js", // npm run meu-script;
 }


// para importar o pacote readline-sync rodar o comando:
// npm i readline-sync 
// o readline recebe/le inputs do usuario 
const readLine = require("readline-sync");

// rodando o "npm start" no terminal aparecerá cada uma dessas perguntas
// e atribuirá as constantes o valor dado a elas ao terminal.

Exemplo:
let distancia = readLine.questionInt("Qual a distância percorrida em metros? ");
let tempo = readLine.questionInt("Qual o tempo gasto em segundos? ");

console.log(`A distancia é ${distancia}m e o tempo é de ${tempo}s`);
