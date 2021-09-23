// Importar o módulo fs/promises e realizar a leitura do arquivo
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
		// Converter o conteúdo do arquivo de JSON para um Array utilizando JSON.parse
		return JSON.parse(fileContent);
	})
	// Mapear cada objeto do Array para uma string no formato correto
	.then((simpsons) => {
		return simpsons.map(({ id, name }) => `${id} - ${name}`);
	})
	// Exibir as strings na tela
	.then((strings) => {
		strings.forEach((string) => console.log(string));
	});
