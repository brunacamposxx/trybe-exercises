## Anotações pessoais do Bloco 26 ##

### Introdução do NodeJS ###

Para entrar na instancia do Node pelo terminal, no bash digite: node.
Para sair: ctrl + d.

Para ler o arquivo node, no terminal: node index.js (ou nome-do-arquivo.js)
Ou seja, para ler um console.log("Hello World") é necessário rodar no terminal: node index.js



*NPM INIT*
"main": "index.js", // entry point
"scripts": {
	"start": "node index.js", // npm start roda o que estiver dentro de start
	"imc": "node imc.js",
	"velocidade": "node velocidade.js"
},
"repository": {
	"type": "git",
	"url": "git+url"
}

_Para iniciar o npm com valores padrão: npm init -y_

*npm install*
npm i readline-sync
cria package-lock.json e ao package.json é adicionado a dependencies

"dependencies": {
	"readline-sync": "^1.4.10" 
	// aceita correções minor da biblioteca,
	
	"readline-sync": "~1.4.10" 
	// [aceita novas atualizações para correções de bugs] 
}



### Exportando arquivos ###
modules.exports = { nomeDaFunção };


### Importando arquivo ###
const { nomeDaFunção } = require('./funcoes.js');





## READLINE-SYNC ###
- Adiciona INPUTS
const readLine = require('readline-sync');

const n1 = readLine.questionInt("Pergunta: ")
salva a resposta na variavel n1;

Outras formas de usar o readLine:
let tempo = readLine.questionInt("Qual o tempo gasto em segundos? ");
let peso = readLine.questionFloat("Qual seu peso? (em kg) ");
const novamente = readline.question(
  'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
);


## fs ##
const fs = require('fs');
fs.readFileSync('./arquivo', 'utf8') - arquivo a ser lido + conversão;
fs.writeFileSync('arquivo.txt', função);


const log = `Olá ${nome}, o resultado de sua conta foi: ${resultado}`
fs.writeFileSync('log.txt', log);
console.log(log);

Pesquisar: Path