const fs = require('fs').promises;
// Importar o módulo fs e criar a função com o Array de strings

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

	// Utilizar a função map para criar um Array de Promises, cada um criando um arquivo

	const createFilePromises = strings.map((string, index) =>
	fs.writeFile(`./file${index + 1}.txt`, string)
);


// Utilizar Promise.all para aguardar a escrita de todos os arquivos
await Promise.all(createFilePromises);

// Realizar a leitura dos arquivos criados

const fileNames = [
	'file1.txt',
	'file2.txt',
	'file3.txt',
	'file4.txt',
	'file5.txt',
];

const fileContents = await Promise.all(
	fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
);


// Concatenar o conteúdo dos arquivos e criar o arquivo novo


const newFileContent = fileContents.join(' ');

await fs.writeFile('./fileAll.txt', newFileContent);
}


