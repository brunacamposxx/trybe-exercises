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

-------------------------------------------------------------------------------



## Testes com NodeJS ##
### Testes de Unidade - Unit Tests ###

TDD - Programação orientada a testes;
Teste falha < refatora teste <

Ferramentas: mocha, chai, Sinon.JS;

Jest (Aprendemos no Modulo de fundamentos) - Completo: test runner, asserts, moch.

Mocha - roda os testes; test runner;
Chai - biblioteca de acertos; asserts;
Sinon.JS - mochar - dublês;


----------------------------------------

### Organização ###

npm init -y
npm install mocha chai sinon -D (cria no package-json um campo para informar que sao dependencias de desenvolvimento. em produção não é preciso instalar, apenas em desenvolvimento)




ReadFile é uma função assincrona, então nos testes transformar em assincrono as respostas. "await"

ou, se trabalhar com promises, usar THEN. e retornar a resposta, se não a resposta será NULL;

npx mocha --reporter=nyan tests/readFileTests.js




# REVISÃO SOBRE REQUISIÇÃO #

					REQUEST (pedir)
CLIENTE ------------> SERVER 
CLIENTE <----------- SERVER
					RESPONSE (devolver)


O QUE É UMA API?
Aplicação que está no servidor que se comunica com o cliente

SERVER
/PORTA 3000 -------> LER ARQUIVO
/PORTA 3000 -------> LER BANCO DE DADOS


EXPRESS JS 
Nos auxilia na criação da API.


### Inicio da aula ###

npm init -y
npm i express

const app = express();
app.listen(portaX, (callback) => console.log('ouvindo a porta X')); //é uma promessa de que vai ouvir essa porta.


node index.js


----- endpoints -----
ponto de partida informando o verbo que o cliente vai usar para entrar nesse ponto e caminho que vai percorrer para entrar nesse ponto de partida.

Para ver os endpoints de um site:
inspecionar < Network < All/Fetch
Fetch estão as apis

### VERBOS ###

GET -
POST - 
PUT -
EDIT - 
DELETE -

### ENDEREÇO ###
/home
/search/:id



<Request Headers>
method: get
path: /home/user/
accept: 

<Response Headers>



----------------------------------------------

app.get('/', (req, res) => res.send('Fala turma 11'));
req - vieram da requisição. corpo de requisição.
res - resposta para o cliente que fez a requisição


----------------------------------------------

Nodemon - escuta os arquivos e quando ouver modificação recarrega a página.

npm install nodemon -D // dependencia de desenvolvimento

dentro de scripts:
`
    "dev": "nodemon index.js"
`
para chamar no terminal: 
npm run dev


-----------------------------------------------

postman - substitui o navegador

no terminal: 
curl get http://localhost:3000/
também retona, assim como o post e o navegador
